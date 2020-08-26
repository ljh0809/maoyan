import React, {useState} from 'react';
import {Layout,SearchWrapper,Card,Detail,Noyet} from "./styled";

import {HomeModel} from "../../../servers/home";

const homeModel = new HomeModel()
function Search(props) {
    let [inputVal,setVal] = useState('')
    let [cardData,setData] = useState([])
    let [detailData,setDetail] = useState([])
    const [notData, setNotData] = useState(false);
    const goBack = ()=>{
        props.history.push('/home')
    }
    const keyDown =(val)=>(e)=>{
        if(e.keyCode===13){
            homeModel.getSearch(val).then(res=>{
                // console.log(res)
                const basic = res.data.celebrityBasicDTOList;
                const performance = res.data.performanceVOList;
                if (!(basic && performance.length !== 0)) {
                    setNotData(true);
                }
                if (basic){
                    console.log(notData)
                    setData(res.data.celebrityBasicDTOList);
                } else {
                    setData([]);
                }
                setDetail(res.data.performanceVOList);
            })
            setVal(inputVal='')
        }
    }
    return (
        <>
            <Layout>
                <SearchWrapper>
                    <div className='box'>
                        <input type="text"  placeholder='找明星、演出、场馆' value={inputVal} onChange={(e)=>{
                            setVal(e.target.value)
                        }} onKeyDown={keyDown(inputVal)}/>
                    </div>
                    <div className='cancels' onClick={goBack}>取消</div>
                </SearchWrapper>

                {
                    cardData.length !== 0  ? cardData.map(item=>(
                        <Card key={item.id}>
                            <div className='artistList'>
                                <img src={item.headUrl} alt=""/>
                                <span>{item.celebrityName}</span>
                                <div className='artistBtn'>
                                    去他的主页
                                </div>
                            </div>
                        </Card>
                    )) : ''
                }

                {
                    detailData.length !== 0 ? detailData.map(item=>(
                        <Detail key={item.performanceId}>
                            <img src={item.posterUrl} alt=""/>
                            <div className='showDetail'>
                                <div className='top'>
                                    <span className='title'>{item.name}</span>
                                    <p>{item.showTimeRange}</p>
                                    <p>{item.cityName}</p>
                                </div>
                                <div className='bottom'>
                                    <span>{item.self?'售票中':'暂停营业'}</span>
                                    <span>{item.priceRange}</span>
                                    <span>自营</span>
                                </div>
                            </div>
                        </Detail>
                    )) : ''
                }
                {


                    notData
                    && (
                        <Noyet>
                            暂无数据！！！
                        </Noyet>
                    )
                }
            </Layout>

        </>
    );
}

export default Search;