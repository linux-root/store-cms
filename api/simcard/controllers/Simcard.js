'use strict';

/**
 * Simcard.js controller
 *
 * @description: A set of functions called "actions" for managing `Simcard`.
 */

module.exports = {

  /**
   * Retrieve simcard records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.simcard.search(ctx.query);
    } else {
      return strapi.services.simcard.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a simcard record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.simcard.fetch(ctx.params);
  },

  /**
   * Count simcard records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.simcard.count(ctx.query);
  },

  /**
   * Create a/an simcard record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.simcard.add(ctx.request.body);
  },

  /**
   * Update a/an simcard record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.simcard.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an simcard record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.simcard.remove(ctx.params);
  }
};
