'use strict';

/**
 * blocks-your router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::blocks-your.blocks-your');
