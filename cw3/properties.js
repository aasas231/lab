/**
 * Name as used as title for the main page
 * @type {string}
 */
var title = 'CW3 Literature Review: Morphology-Aware Augmentation for Abstract Visual Reasoning';

/**
 * Relative path to the data directory
 * @type {string}
 */
var dataDir = 'data/';

/**
 * Relative path to the js directory
 * @type {string}
 */
var jsDir = 'https://cdn.jsdelivr.net/gh/fabian-beck/survis@master/src/js/';

/**
 * Relative path to the styles directory
 * @type {string}
 */
var stylesDir = 'https://cdn.jsdelivr.net/gh/fabian-beck/survis@master/src/styles/';

/**
 * Options for displaying tag clouds.
 */
var tagCloudOptions = [{
    field: 'keywords',
    title: 'Keywords',
    minTagFrequency: 1
}, {
    field: 'author',
    title: 'Authors',
    minTagFrequency: 1
}, {
    field: 'series',
    title: 'Series',
    minTagFrequency: 1
}];

/**
 * If BibTeX entries should be editable
 */
var editable = false;

/**
 * Subtitle describing the paper the data is referring to
 */
var paper = {
    html: 'COMP4126 CW3 literature collection by Tianshu Zhu (20806817)',
    id: 'malkinski2025'
};

/**
 * Extra pages listed in the footer
 */
var extraPages = {
    'about': 'about.html'
};

/**
 * Custom style as path to an extra css file
 */
var customStyle = '';

/**
 * Options for showing citation information
 */
var citations = null;
