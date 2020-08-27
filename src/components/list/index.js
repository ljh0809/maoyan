import React from 'react';
import {ListWrapper} from './styled'


const List = React.forwardRef((props, ref) => {

    class List extends React.Component {
        state = {
            leftData: [],
            rightData: []
        }
        componentDidMount() {
            const listData = [...this.props.listData]
            this.flowData(listData);
            // console.log(this.props.history)
        }

        //瀑布列表
        flowData = (data) => {
            if (data.length === 0) return
            const leftHeight = this.left.offsetHeight;
            const rightHeight = this.right.offsetHeight;
            const first = data.splice(0,1);
            if (leftHeight <= rightHeight) {
                this.setState({
                    leftData: this.state.leftData.concat(first)
                }, () => {
                    this.flowData(data)
                })
            } else {
                this.setState({
                    rightData: this.state.rightData.concat(first)
                }, () => {
                    this.flowData(data)
                })
            }
        }
        leftHandler = (index) => () => {
            this.props.history.push({
                pathname:'/detail',
                state:{
                    id:this.state.leftData[index].performanceId,
                    cityId:this.props.id
                }
            })
        }
        rightHandler = (index) => () => {
            this.props.history.push({
                pathname:'/detail',
                state:{
                    id:this.state.rightData[index].performanceId,
                    cityId:this.props.id
                }
            })
        }
        //结构
        // mapListData = (data) => {
        //     return data.map((item,index) => (
        //         <div className="item" key={item.performanceId} onClick={this.detailHandler(index)}>
        //             <img src={item.posterUrl} alt=""/>
        //             <div className="item-content">
        //                 <h4>{item.name}</h4>
        //                 <p>{item.showTimeRange}</p>
        //                 <span>￥{item.lowestPrice}<i>起</i></span>
        //             </div>
        //         </div>
        //     ))
        // }

        render() {
            const {leftData, rightData} = this.state
            return (
                <ListWrapper ref={el => ref(el)}>
                    <div className='title'>为你推荐</div>
                    <div className='content'>
                        <div className='left' ref={el => this.left = el}>
                            {
                                leftData.map((item,index) => (
                                    <div className="item" key={item.performanceId} onClick={this.leftHandler(index)}>
                                        <img src={item.posterUrl} alt=""/>
                                        <div className="item-content">
                                            <h4>{item.name}</h4>
                                            <p>{item.showTimeRange}</p>
                                            <span>￥{item.lowestPrice}<i>起</i></span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='right' ref={el => this.right = el}>
                            {
                                rightData.map((item,index) => (
                                    <div className="item" key={item.performanceId} onClick={this.rightHandler(index)} >
                                        <img src={item.posterUrl} alt=""/>
                                        <div className="item-content">
                                            <h4>{item.name}</h4>
                                            <p>{item.showTimeRange}</p>
                                            <span>￥{item.lowestPrice}<i>起</i></span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </ListWrapper>
            );
        }
    }
    return <List listData={props.listData} id={props.id} history={props.history} />

});


export default List;