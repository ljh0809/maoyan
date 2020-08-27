import React, { useEffect, useMemo, useState} from 'react';
import TabBottom from "../../layout/tabBottom";
import {ContentWrapper,ListWrapper,Total} from './styled'
import logo from '../../assets/images/logo_new.png'
import addimg from './images/add.png'
import subimg from './images/sub.png'

function Order(props) {

    let newData = JSON.parse(localStorage.getItem('data'))
    const [orderData,setOrderData] = useState([])

    const jumpAround = () => {
        props.history.push('/home')
    }
    useEffect(()=>{
        setOrderData(JSON.parse(localStorage.getItem('data')))
    },[])

    //计算总价
    const tot = useMemo(()=>{
        let total = 0
        localStorage.getItem('data') && orderData.forEach(item=>{
            total+=Number(item.price)*item.number
        })
        return total
    },[orderData])

   const goBack = () => {
        props.history.push('/home')
    }
    //同步本地存储
    const synchronize = (index,num) => {
        let temporary = newData.find(item=>{
            return item.id === orderData[index].id
        })
        temporary.number = orderData[index].number+num
        localStorage.setItem('data',JSON.stringify(newData))
    }
    //增加
    const add = (index) => () => {
        setOrderData(orderData.map((item,i)=> {
            return   index === i ? {...item,number:item.number+1} : item
        }))

        synchronize(index,1)
    }
    //减
    const sub = (index) => () =>{
        orderData.map((item,i)=>{
            if(item.number>1 && index === i){
                setOrderData(orderData.map((item,i)=> {
                    return   index === i ? {...item,number:item.number-1} : item
                }))

                synchronize(index,-1)
            }
            return item
        })
    }
    //删除
    const del = (index) => () => {
        setOrderData(orderData.filter((item,i) => i !== index))

        let temporary = newData.findIndex(item=>{
            return item.id === orderData[index].id
        })
        newData.splice(temporary,1)
        localStorage.setItem('data',JSON.stringify(newData))
    }

    const userOut = () => {
        localStorage.removeItem('token')
        props.history.push('/home')
    }

    return (
            !Boolean(newData) || !newData.length
                ?
                <ContentWrapper>
                    <div className='title'>
                        <i onClick={goBack}>
                        </i>
                        <span>订单</span>
                        <div className='out' onClick={userOut}>退出登录</div>
                    </div>
                    <div className='content'>
                        <img  src={logo} alt=""/>
                        <p>还没订单，去首页逛逛吧</p>
                        <div className='btn' onClick={jumpAround}>去首页逛逛</div>
                    </div>
                    <TabBottom />
                </ContentWrapper>
                :
                <ListWrapper>
                    <div className='title'>
                        <i onClick={goBack}>
                        </i>
                        <span>订单</span>
                        <div className='out' onClick={userOut}>退出登录</div>
                    </div>
                    <ul>
                        {
                            orderData.map((item,index)=> {
                                return     <li className='goodsitem' key={item.id}>
                                    <div className='left'>
                                        <img src={item.img} alt=""/>
                                    </div>
                                    <div className='right'>
                                        <p className='goodsTile'>{item.title}</p>
                                        <div className='rightBot'>
                                            <span className='price'>{item.price*item.number}元</span>
                                            <div className='num'>
                                                <img className='add' src={addimg} alt="" onClick={add(index)}/>
                                                <span>{item.number}</span>
                                                <img className='sub' src={subimg} alt="" onClick={sub(index)}/>
                                            </div>
                                            <div className='del' onClick={del(index)}>
                                                删除
                                            </div>
                                        </div>
                                    </div>
                                </li>

                            })
                        }
                    </ul>
                    <Total>
                        <p>待支付: ￥{tot}</p>
                        <div>结算</div>
                    </Total>
                    {/*<TabBottom />*/}
                </ListWrapper>
        );

}

export default Order;