'use strict';

/**
 * onenews service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::onenews.onenews');
