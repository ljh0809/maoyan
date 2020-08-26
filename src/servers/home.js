import {HttpGet} from "../util/http";

class HomeModel extends HttpGet{
    //主页数据
    getHomeData(id){
        return this.request({
            url:'/maoyan/maoyansh/myshow/ajax/ad/detail',
            params:{
                uuid:'5kkg7ygzls9q86vslnfkqwmkx4t1c9tc28wsd8ifytnyj80bdfgy181o3fhqumpk',
                clientType:1,
                os:1,
                sellChannel:13,
                cityId:id,
                lng:0,
                lat:0
            }
        })
    }
    //获取地点
    getLocation(){
        return this.request({
            url:'/maoyan/maoyansh/myshow/ajax/config/maoyan-show-m-web.frontEnd.config.cities',
            params:{
                uuid: '5kkg7ygzls9q86vslnfkqwmkx4t1c9tc28wsd8ifytnyj80bdfgy181o3fhqumpk',
                sellChannel: 13,
                cityId: 1,
                lng: 0,
                lat: 0
            }
        })
    }
    //搜索
    getSearch(val){
        return this.request({
            url:`/maoyan/maoyansh/myshow/ajax/search/0;k=${val};st=0;p=1;s=20;tft=0`,
            sellChannel:13,
            cityId:20,
            lng:0,
            lat:0
        })
    }
    //演员列表
    getArtist(){
        return this.request({
            url:'/maoyan/maoyansh/myshow/ajax/celebrityBasicList/query',
            params:{
                uuid: 'nycy8i0gomt0pxrkwem51uyn2o0074b13wr7xmoeqq3bgkwij74dv8l782vild1n',
                clientType: 1,
                os: 1,
                sellChannel: 13,
                cityId: 1,
                lng: 0,
                lat: 0
            }
        })
    };
    //瀑布流数据列表
    getListData(pageNum,id){
        return this.request({
            url: `/maoyan/maoyansh/myshow/ajax/performances/0;st=4;p=${pageNum};s=10;tft=0`,
            params: {
                sellChannel: 13,
                cityId: id,
                lng: 0,
                lat: 0
            }
        })
    }
    //详情
    getDetailData(id,cityID){
        return this.request({
            url:`/maoyan/maoyansh/myshow/ajax/v2/performance/${id}`,
            params:{
                sellChannel:13,
                cityId:cityID,
                lng:0,
                lat:0
            }
        })
    }
}
export {HomeModel}