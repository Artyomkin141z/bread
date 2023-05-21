'use strict';

/**
 * official-link service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::official-link.official-link');
