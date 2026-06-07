function imageSet(name, widths) {
    return {
        src: `/img/generated/${name}-${widths[widths.length - 1]}.webp`,
        srcset: widths.map((width) => `/img/generated/${name}-${width}.webp ${width}w`).join(', '),
    };
}

const IMAGES = {
    '/img/other/Pruefer_unter_Auto_scaled.webp': imageSet('pruefer-unter-auto', [480, 960, 1440]),
    '/img/other/leistung_2.webp': imageSet('leistung-2', [480, 960, 1440]),
    '/img/portfolio/bearbeitet/810_810.jpg': imageSet('unfallgutachten-810', [480, 810]),
    '/img/gallery/images/image-01.jpeg': imageSet('gallery-image-01', [480, 960]),
    '/img/other/DSC08203.webp': imageSet('gallery-dsc08203', [480, 960]),
    '/img/gallery/images/image-03.JPG': imageSet('gallery-image-03', [480, 960]),
    '/img/gallery/images/image-04.PNG': imageSet('gallery-image-04', [480, 960]),
    '/img/gallery/images/image-05.jpeg': imageSet('gallery-image-05', [480, 960]),
    '/img/other/Bild SL.webp': imageSet('gallery-bild-sl', [480, 960]),
    '/img/gallery/images/image-07.JPG': imageSet('gallery-image-07', [480, 960]),
    '/img/gallery/images/image-08.JPG': imageSet('gallery-image-08', [480, 960]),
    '/img/gallery/images/image-09.JPG': imageSet('gallery-image-09', [480, 960]),
    '/img/gallery/images/image-10.JPG': imageSet('gallery-image-10', [480, 960]),
    '/img/gallery/images/image-11.JPG': imageSet('gallery-image-11', [480, 960]),
    '/img/other/IMG_9415.webp': imageSet('gallery-img-9415', [480, 960]),
};

export function getResponsiveImage(src) {
    return IMAGES[src] || {
        src,
        srcset: '',
    };
}
