import React, { useEffect, useMemo, useState} from 'react';
import TabBottom from "../../layout/tabBottom";
import {ContentWrapper,ListWrapper,Total} from './styled'
import logo from '../../assets/images/logo_new.png'
import addimg from './images/add.png'
import subimg from './images/sub.png'


// class Order extends Component {
//     state = {
//         orderData :[]
//     }
//     jumpAround = () => {
//         this.props.history.push('/home')
//     }
//     componentDidMount() {
//         this.setState({
//             orderData:JSON.parse(localStorage.getItem('data'))
//         })
//     }
//     static getDerivedStateFromProps(_,state){
//         let total=0
//         localStorage.getItem('data') && state.orderData.forEach(item=>{
//             total+=Number(item.price)
//         })
//         return{
//             total
//         }
//     }
//     goBack = () => {
//         this.props.history.push('/home')
//     }
//     //增加
//     add = (index) => () => {
//         console.log(index)
//        this.setState({
//            orderData:this.state.orderData.map((item,i)=> {
//                console.log(item)
//             return    index === i ? {...item,number:item.number+1} : item
//            })
//        })
//     }
//     render() {
//         const {orderData} = this.state
//         return (
//             !Boolean(localStorage.getItem('data'))?
//             <ContentWrapper>
//                 <div className='content'>
//                     <img  src={logo} alt=""/>
//                     <p>还没订单，去首页逛逛吧</p>
//                     <div className='btn' onClick={this.jumpAround}>去首页逛逛</div>
//                 </div>
//                 <TabBottom />
//             </ContentWrapper> :
//             <ListWrapper>
//                 <div className='title'>
//                     <i onClick={this.goBack}>
//                     </i>
//                     <span>订单</span>
//                 </div>
//                 <ul>
//                     {
//                         orderData.map((item,index)=> {
//                        return     <li className='goodsitem' key={item.id}>
//                                 <div className='left'>
//                                     <img src={item.img} alt=""/>
//                                 </div>
//                                 <div className='right'>
//                                     <p className='goodsTile'>{item.title}</p>
//                                     <div className='rightBot'>
//                                         <span className='price'>{item.price}元</span>
//                                         <div className='num'>
//                                             <img className='add' src={add} alt="" onClick={this.add(index)}/>
//                                             <span>{item.number}</span>
//                                             <img className='sub' src={sub} alt=""/>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </li>
//
//                         })
//                     }
//                 </ul>
//                 <Total>
//                     <p>待支付: ￥{this.state.total}</p>
//                     <div>结算</div>
//                 </Total>
//                 {/*<TabBottom />*/}
//             </ListWrapper>
//         );
//     }
// }

function Order(props) {
    const [orderData,setOrderData] = useState([])

    const jumpAround = () => {
        props.history.push('/home')
    }
    useEffect(()=>{
        setOrderData(JSON.parse(localStorage.getItem('data')))
    },[])

    let newData = JSON.parse(localStorage.getItem('data'))
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
        let brr = newData.find(item=>{
            return item.id === orderData[index].id
        })
        brr.number = orderData[index].number+num
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

        return (
            !Boolean(localStorage.getItem('data'))?
                <ContentWrapper>
                    <div className='content'>
                        <img  src={logo} alt=""/>
                        <p>还没订单，去首页逛逛吧</p>
                        <div className='btn' onClick={jumpAround}>去首页逛逛</div>
                    </div>
                    <TabBottom />
                </ContentWrapper> :
                <ListWrapper>
                    <div className='title'>
                        <i onClick={goBack}>
                        </i>
                        <span>订单</span>
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