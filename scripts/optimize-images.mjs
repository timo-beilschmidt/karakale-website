import { mkdir } from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const SOURCE_DIR = 'scripts/image-sources';
const OUTPUT_DIR = 'public/img/generated';

const jobs = [
    { src: 'other/Pruefer_unter_Auto_scaled.webp', name: 'pruefer-unter-auto', widths: [480, 960, 1440], quality: 78, formats: ['webp', 'avif'] },
    { src: 'other/leistung_2.webp', name: 'leistung-2', widths: [480, 960, 1440], quality: 78 },
    { src: 'portfolio/bearbeitet/810_810.jpg', name: 'unfallgutachten-810', widths: [480, 810], quality: 78 },
    { src: 'portfolio/bearbeitet/810_405.jpg', name: 'portfolio-810-405', widths: [480, 810], quality: 78 },
    { src: 'portfolio/bearbeitet/480_1.jpg', name: 'portfolio-480-1', widths: [480], quality: 78 },
    { src: 'portfolio/bearbeitet/480_2.jpg', name: 'portfolio-480-2', widths: [480], quality: 78 },
    { src: 'other/bild_stern.webp', name: 'bild-stern', widths: [480, 960, 1440], quality: 78 },
    { src: 'other/DSC08203.webp', name: 'dsc08203', widths: [480, 960, 1440], quality: 78 },
    { src: 'bg/country-road-4599866.jpg', name: 'country-road', widths: [480, 960, 1440], quality: 76 },
    { src: 'gallery/images/image-01.jpeg', name: 'gallery-image-01', widths: [480, 960], quality: 76 },
    { src: 'other/DSC08203.webp', name: 'gallery-dsc08203', widths: [480, 960], quality: 76 },
    { src: 'gallery/images/image-03.JPG', name: 'gallery-image-03', widths: [480, 960], quality: 76 },
    { src: 'gallery/images/image-04.PNG', name: 'gallery-image-04', widths: [480, 960], quality: 76 },
    { src: 'gallery/images/image-05.jpeg', name: 'gallery-image-05', widths: [480, 960], quality: 76 },
    { src: 'other/Bild SL.webp', name: 'gallery-bild-sl', widths: [480, 960], quality: 76 },
    { src: 'gallery/images/image-07.JPG', name: 'gallery-image-07', widths: [480, 960], quality: 76 },
    { src: 'gallery/images/image-08.JPG', name: 'gallery-image-08', widths: [480, 960], quality: 76 },
    { src: 'gallery/images/image-09.JPG', name: 'gallery-image-09', widths: [480, 960], quality: 76 },
    { src: 'gallery/images/image-10.JPG', name: 'gallery-image-10', widths: [480, 960], quality: 76 },
    { src: 'gallery/images/image-11.JPG', name: 'gallery-image-11', widths: [480, 960], quality: 76 },
    { src: 'other/IMG_9415.webp', name: 'gallery-img-9415', widths: [480, 960], quality: 76 },
];

await mkdir(OUTPUT_DIR, { recursive: true });

for (const job of jobs) {
    const source = path.join(SOURCE_DIR, job.src);
    const image = sharp(source);
    const metadata = await image.metadata();
    const sourceWidth = metadata.width || Math.max(...job.widths);

    for (const width of job.widths) {
        const targetWidth = Math.min(width, sourceWidth);
        const formats = job.formats || ['webp'];

        for (const format of formats) {
            const output = path.join(OUTPUT_DIR, `${job.name}-${width}.${format}`);
            const pipeline = sharp(source)
                .resize({
                    width: targetWidth,
                    withoutEnlargement: true,
                });

            if (format === 'avif') {
                await pipeline
                    .avif({
                        effort: 5,
                        quality: Math.max(job.quality - 10, 45),
                    })
                    .toFile(output);
            } else {
                await pipeline
                    .webp({
                        effort: 5,
                        quality: job.quality,
                    })
                    .toFile(output);
            }

            console.log(`${output} (${targetWidth}px)`);
        }
    }
}
