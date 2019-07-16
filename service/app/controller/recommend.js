'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async imgList() {
    const result = {
      swiperImg: [
        {
          mapId: 1,
          imgUrl: 'https://yanxuan.nosdn.127.net/2f9c81a130447f34424a16a40d66cbba.jpg?imageView&quality=75&thumbnail=750x0'
        },
        {
          mapId: 2,
          imgUrl: 'https://yanxuan.nosdn.127.net/3cf97a99f8017e3bb0d22fdff2c283b0.jpg?imageView&quality=75&thumbnail=750x0'
        },
        {
          mapId: 3,
          imgUrl: 'https://yanxuan.nosdn.127.net/978d3c4254a79b7be5ba86a15b0a8557.jpg?imageView&quality=75&thumbnail=750x0'
        },
        {
          mapId: 4,
          imgUrl: 'https://yanxuan.nosdn.127.net/e1838f8442e7bfef014070ff902a698f.jpg?imageView&quality=75&thumbnail=750x0'
        },
        {
          mapId: 5,
          imgUrl: 'https://yanxuan.nosdn.127.net/a9827ac1ad9c54b31cda1debf38c3414.jpg?imageView&quality=75&thumbnail=750x0'
        },
        {
          mapId: 6,
          imgUrl: 'https://yanxuan.nosdn.127.net/3c59c24fa20ac5b553b8ec7cb70ecdfc.jpg?imageView&quality=75&thumbnail=750x0'
        },
      ],
      recommendIcon: [
        {
          mapId: 1,
          title: '新品首发',
          iconUrl:'https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png'
        },
        {
          mapId: 2,
          title: '居家生活',
          iconUrl:'https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png'
        },
        {
          mapId: 3,
          title: '服饰鞋包',
          iconUrl:'https://yanxuan.nosdn.127.net/2415a74cea7d3f080c2dcaa791884572.png'
        },
        {
          mapId: 4,
          title: '美食酒水',
          iconUrl:'https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png'
        },
        {
          mapId: 5,
          title: '个护清洁',
          iconUrl:'https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png'
        },
        {
          mapId: 6,
          title: '母婴亲子',
          iconUrl:'https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png'
        },
        {
          mapId: 7,
          title: '运动旅行',
          iconUrl:'https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png'
        },
        {
          mapId: 8,
          title: '数码家电',
          iconUrl:'https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png'
        },
        {
          mapId: 9,
          title: '全球特色',
          iconUrl:'https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png'
        },
        {
          mapId: 10,
          title: '超级会员',
          iconUrl:'https://yanxuan.nosdn.127.net/3954c3cbeb4359dd7007be7a076e0dda.gif'
        }
      ]
    };
    this.ctx.body = result;
    // await this.ctx.render('news/list.tpl', dataList)
    // 模板文件
  }
}

module.exports = NewsController;