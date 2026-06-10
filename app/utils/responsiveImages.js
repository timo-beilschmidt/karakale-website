function imageSet(name, widths) {
    return {
        src: `/img/generated/${name}-${widths[widths.length - 1]}.webp`,
        srcset: widths.map((width) => `/img/generated/${name}-${width}.webp ${width}w`).join(', '),
    };
}

const IMAGES = {
    '/img/generated/pruefer-unter-auto-1440.webp': imageSet('pruefer-unter-auto', [480, 960, 1440]),
    '/img/generated/leistung-2-1440.webp': imageSet('leistung-2', [480, 960, 1440]),
    '/img/generated/unfallgutachten-810-810.webp': imageSet('unfallgutachten-810', [480, 810]),
    '/img/generated/gallery-image-01-960.webp': imageSet('gallery-image-01', [480, 960]),
    '/img/generated/gallery-dsc08203-960.webp': imageSet('gallery-dsc08203', [480, 960]),
    '/img/generated/gallery-image-03-960.webp': imageSet('gallery-image-03', [480, 960]),
    '/img/generated/gallery-image-04-960.webp': imageSet('gallery-image-04', [480, 960]),
    '/img/generated/gallery-image-05-960.webp': imageSet('gallery-image-05', [480, 960]),
    '/img/generated/gallery-bild-sl-960.webp': imageSet('gallery-bild-sl', [480, 960]),
    '/img/generated/gallery-image-07-960.webp': imageSet('gallery-image-07', [480, 960]),
    '/img/generated/gallery-image-08-960.webp': imageSet('gallery-image-08', [480, 960]),
    '/img/generated/gallery-image-09-960.webp': imageSet('gallery-image-09', [480, 960]),
    '/img/generated/gallery-image-10-960.webp': imageSet('gallery-image-10', [480, 960]),
    '/img/generated/gallery-image-11-960.webp': imageSet('gallery-image-11', [480, 960]),
    '/img/generated/gallery-img-9415-960.webp': imageSet('gallery-img-9415', [480, 960]),
};

export function getResponsiveImage(src) {
    return IMAGES[src] || {
        src,
        srcset: '',
    };
}
