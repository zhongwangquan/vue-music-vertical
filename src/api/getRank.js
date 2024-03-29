import jsonp from 'common/js/jsonp';
import {commonParams,options} from 'common/js/config';
import axios from 'axios'
import {getRankList} from "./getRecommend";

export function getRankSongList(topid) {
  let url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg";
  let data = Object.assign({},commonParams,{
    g_tk:5381,
    uin:0,
    format:'jsonp',
    inCharset:'utf-8',
    outCharset:'utf-8',
    notice:0,
    platform:'h5',
    needNewCode:1,
    tpl:3,
    page:'detail',
    type:'top',
    topid:topid
  });
  //jsonp请求 发送
  return jsonp(url,data,options);
}
