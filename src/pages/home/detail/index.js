import React, {useEffect, useState} from 'react';
import {TitleWrapper,Send} from './styled'
import {HomeModel} from "../../../servers/home";

const homeModel = new HomeModel()
function Detail(props) {
    const [detaildata,setData] = useState()

    useEffect(()=>{
        homeModel.getDetailData(props.history.location.state.id,props.history.location.state.cityId)
            .then(res=>{
                console.log(res)
                setData(res.data)
            })
    },[props.history.location.state.id,props.history.location.state.cityId])

    //添加本地存储
    const purchase = () => {
        const data = JSON.parse(localStorage.getItem("data"));
        if (data) {
            const index = data.findIndex((item) => {
                return item.id ===props.history.location.state.id;
            });
            if (index >= 0) {
                data[index].number++;
            } else {
                const obj = {
                    id:detaildata.performanceId,
                    img: detaildata.posterUrl,
                    title: detaildata.name,
                    price:detaildata.lowestPrice,
                    number: 1
                };
                data.push(obj);
            }

            localStorage.setItem("data", JSON.stringify(data));
        } else {
            const data = [];
            const obj = {
                id:detaildata.performanceId,
                img: detaildata.posterUrl,
                title: detaildata.name,
                price:detaildata.lowestPrice,
                number: 1
            };
            data.push(obj);
            localStorage.setItem("data", JSON.stringify(data));
        }
        props.history.push('/order')
    }
    return (
        detaildata
            ?
        <>
            <TitleWrapper>
                <div className='detailHeader'>
                    <img src={detaildata.posterUrl} alt=""/>
                    <div className='headerInfo'>
                        <p>{detaildata.name}</p>
                        <span>{detaildata.lowestPrice}元</span>
                    </div>
                </div>
                <div className='detailAddress'>
                    <p>{detaildata.showTimeRange}</p>
                    <p>{detaildata.cityName} {detaildata.shopName}</p>
                </div>
            </TitleWrapper>
            <Send>
                <span onClick={purchase}>立即购票</span>
            </Send>
        </>
            :''
    );
}

export default Detail;