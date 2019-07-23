'use strict';

const Controller = require('egg').Controller;

class CategoryController extends Controller {
  async categoryList() {
    const result = {
      list: [
        {
          name: 'ok'
        },
        {
          name: 'no ol'
        }
      ]
    }
    this.ctx.body = result;
  }
}

module.exports = CategoryController;