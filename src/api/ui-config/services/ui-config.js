'use strict';

/**
 * ui-config service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ui-config.ui-config');
