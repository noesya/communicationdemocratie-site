/* eslint-disable no-undef */
var devPlugins = {},
    productionPlugins = {
        autoprefixer: {},
        cssnano: {
            preset: 'default'
        },
        '@fullhuman/postcss-purgecss': {
            content: ['./hugo_stats.json'],
            defaultExtractor: (content) => {
                let els = JSON.parse(content).htmlElements;
                return els.tags.concat(els.classes, els.ids);
            },
            safelist: {
                standard: [
                    'show',
                    'active',
                    'collapsed',
                    /^dropdown/,
                    /^nav-level-/,
                    /^splide_/,
                    /^is-/,
                    /^has-/,
                    /^js-/,

                    // Glightbox
                    'wait-autoplay',
                    'gfadeIn',
                    'gfadeOut',
                    'gslideOutLeft',
                    'gslideInLeft',
                    'gslideOutRight',
                    'gslideInRight',
                    'gzoomIn',
                    'gzoomOut'
                ],
                deep: [
                    // Glightbox
                    /^glightbox/,
                    /^gslide/,
                    /^desc-top/,
                    /^desc-left/,
                    /^ginlined/,
                    /^zoomed/,
                    /^gdesc-/,
                    /^gabsolute/,
                    /^grelative/,
                    /^gloader/,
                    /^goverlay/,
                    /^gprev/,
                    /^gnext/,
                    /^gclose/,
                    /^gbtn/,
                    /^gcontainer/
                ],
                greedy: []
            }
        }
    };

module.exports = {
    plugins: process.env.HUGO_ENVIRONMENT === 'production' ? productionPlugins : devPlugins
};
