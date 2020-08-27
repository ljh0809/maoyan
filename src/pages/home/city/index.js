import React, {Component,Fragment} from 'react';
import {Box,TitleWrapper,HotCity,ItemBox} from "./styled";

import {HomeModel} from "../../../servers/home";
import Loading from "../../../components/loading";


const homeModel = new HomeModel()

class City extends Component {
    state = {
        data:[],
        isloading : true
    }
    componentDidMount() {
        homeModel.getLocation().then(res=>{
            if (!(res.data)) {
                return;
            }
            const city = JSON.parse(res.data);

            for (let i = 0; i < city.length; i++) {
                for (let j = i+1; j < city.length; j++) {
                    if (city[i].py.charCodeAt(0) > city[j].py.charCodeAt(0) ) {
                        const tmp = city[i];
                        city[i] = city[j];
                        city[j] = tmp;
                    }
                }
            }
            const newCity = [];
            // const location = {
            //     "id": "location",
            //     "title": "定位城市",
            //     "box": [{id:0,nm:"定位失败"}]
            // }
            // newCity.push(location)

            const recent = {
                "id": "recent",
                "title": "最近访问城市",
                "box": [{id:215,nm:"新余"}]
            }
            newCity.push(recent)

            const history= {
                "id": "history",
                "title": "热门城市",
                "box": [{id:1,nm:"北京"}, {id:10,nm:"上海"}, {id:20,nm:"广州"}, {id:30,nm:"深圳"}, {id:42,nm:"西安"}, {id:40,nm:"天津"}]
            }
            newCity.push(history)

            city.forEach(item => {
                let current = 0;
                const prefix = item.py.substr(0, 1).toLocaleUpperCase();
                const exist = newCity.some((v, i) => {
                    if (v.id === prefix) {
                        current = i;
                        return true;
                    } else {
                        return false;
                    }
                })
                if (!exist) {
                    const obj = {
                        id: prefix,
                        title: prefix,
                        list: [item]
                    }
                    newCity.push(obj);
                } else {
                    newCity[current].list.push(item);
                }
            })
            this.setState({
                data: newCity
            })
            this.setState({
                isloading:false
            })
        })

    }

    //列表标题
    cityTitle = (data)=>{
      return   data.map(item=>
           <Fragment key={item.id}>
               <TitleWrapper >
                   <div>{item.title}</div>
               </TitleWrapper>
               {item.box ? this.hotCity(item.box) : this.itemList(item.list)}
           </Fragment>
        )
    }
    //热门城市列表
    hotCity = (data)=>{
        return (
             <HotCity>
                 {
                     data.map((item, index) => {
                         return <div className="hotCity" key={index} onClick={this.selectCity(item.nm,item.id)}>{item.nm}</div>
                     })
                 }
             </HotCity>

        )
    }
    //城市分类
    itemList = (data)=>{
        return(
            data.map(item=> {
              return  <ItemBox key={item.id} onClick={this.selectCity(item.nm,item.id)}>
                            <div>{item.nm}</div>
                      </ItemBox>
            })
        )
    }
    //传值
    selectCity = (name,id)=>()=>{
        // console.log(id)
        this.props.history.push({
            pathname:'/home',
            state:{city:name,id}
        })
    }

    render() {
        const  {data,isloading} = this.state
        return (
            <Box>
                {
                    isloading ? <Loading /> :
                    this.cityTitle(data)
                }
            </Box>
        );
    }
}

export default City;