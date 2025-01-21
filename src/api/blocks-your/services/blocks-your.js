'use strict';

/**
 * blocks-your service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blocks-your.blocks-your');
