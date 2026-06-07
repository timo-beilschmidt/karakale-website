import { mkdir } from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const OUTPUT_DIR = 'static/img/generated';

const jobs = [
    { src: 'static/img/other/Pruefer_unter_Auto_scaled.webp', name: 'pruefer-unter-auto', widths: [480, 960, 1440], quality: 78 },
    { src: 'static/img/other/leistung_2.webp', name: 'leistung-2', widths: [480, 960, 1440], quality: 78 },
    { src: 'static/img/portfolio/bearbeitet/810_810.jpg', name: 'unfallgutachten-810', widths: [480, 810], quality: 78 },
    { src: 'static/img/other/bild_stern.webp', name: 'bild-stern', widths: [480, 960, 1440], quality: 78 },
    { src: 'static/img/other/DSC08203.webp', name: 'dsc08203', widths: [480, 960, 1440], quality: 78 },
    { src: 'static/img/bg/country-road-4599866.jpg', name: 'country-road', widths: [480, 960, 1440], quality: 76 },
    { src: 'static/img/gallery/images/image-01.jpeg', name: 'gallery-image-01', widths: [480, 960], quality: 76 },
    { src: 'static/img/other/DSC08203.webp', name: 'gallery-dsc08203', widths: [480, 960], quality: 76 },
    { src: 'static/img/gallery/images/image-03.JPG', name: 'gallery-image-03', widths: [480, 960], quality: 76 },
    { src: 'static/img/gallery/images/image-04.PNG', name: 'gallery-image-04', widths: [480, 960], quality: 76 },
    { src: 'static/img/gallery/images/image-05.jpeg', name: 'gallery-image-05', widths: [480, 960], quality: 76 },
    { src: 'static/img/other/Bild SL.webp', name: 'gallery-bild-sl', widths: [480, 960], quality: 76 },
    { src: 'static/img/gallery/images/image-07.JPG', name: 'gallery-image-07', widths: [480, 960], quality: 76 },
    { src: 'static/img/gallery/images/image-08.JPG', name: 'gallery-image-08', widths: [480, 960], quality: 76 },
    { src: 'static/img/gallery/images/image-09.JPG', name: 'gallery-image-09', widths: [480, 960], quality: 76 },
    { src: 'static/img/gallery/images/image-10.JPG', name: 'gallery-image-10', widths: [480, 960], quality: 76 },
    { src: 'static/img/gallery/images/image-11.JPG', name: 'gallery-image-11', widths: [480, 960], quality: 76 },
    { src: 'static/img/other/IMG_9415.webp', name: 'gallery-img-9415', widths: [480, 960], quality: 76 },
];

await mkdir(OUTPUT_DIR, { recursive: true });

for (const job of jobs) {
    const image = sharp(job.src);
    const metadata = await image.metadata();
    const sourceWidth = metadata.width || Math.max(...job.widths);

    for (const width of job.widths) {
        const targetWidth = Math.min(width, sourceWidth);
        const output = path.join(OUTPUT_DIR, `${job.name}-${width}.webp`);

        await sharp(job.src)
            .resize({
                width: targetWidth,
                withoutEnlargement: true,
            })
            .webp({
                effort: 5,
                quality: job.quality,
            })
            .toFile(output);

        console.log(`${output} (${targetWidth}px)`);
    }
}
