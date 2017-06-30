import ip from "../config/url.js";
import Vue from "vue";

export  function send(url,param,success,fail){
    Vue.http.get(ip.member+url, {
        params:param
    }).then(function(res){
        success(res.body);
    }, fail);
}