/* jshint esversion: 6 */
/* globals module, require */
const CraftWebpackConfig = require('../../../../CraftWebpackConfig');

module.exports = new CraftWebpackConfig({
    config: {
        entry: {'PositionSelectInput': './PositionSelectInput.js'},
    }
});