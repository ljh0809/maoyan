import axios from 'axios'

class HttpGet {
    request({url,method='GET',data={},params={}}){
        return axios({
            url,
            method,
            data,
            params,
            headers:{
                "content-type":"application/x-www-from-urlencoded"
            }
        })
            .then(res=>{
                const status = res.status.toString();
                if(status.startsWith('2')){
                  return   res.data
                }
                console.log('获取数据失败')
            })
    }
}
export {HttpGet}