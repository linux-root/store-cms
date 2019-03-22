'use strict';

/**
 * Wifihotspot.js controller
 *
 * @description: A set of functions called "actions" for managing `Wifihotspot`.
 */

module.exports = {

  /**
   * Retrieve wifihotspot records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.wifihotspot.search(ctx.query);
    } else {
      return strapi.services.wifihotspot.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a wifihotspot record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.wifihotspot.fetch(ctx.params);
  },

  /**
   * Count wifihotspot records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.wifihotspot.count(ctx.query);
  },

  /**
   * Create a/an wifihotspot record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.wifihotspot.add(ctx.request.body);
  },

  /**
   * Update a/an wifihotspot record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.wifihotspot.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an wifihotspot record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.wifihotspot.remove(ctx.params);
  }
};
