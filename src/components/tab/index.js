import React, {useState} from "react";
import {TabBar,TabContent,TabBarItem} from './styled';
import PropTypes from 'prop-types';
function Tab (props) {
    const[current,setCurrent] =useState()
    //切换事件
   const onChange=(i) => () => {
       setCurrent(i)
    }
        return(
            <div style={{overflow:"hidden",height:200}}>
                <TabBar>
                    {
                        props.tabs.map((item,i)=>(
                            <TabBarItem
                                key={item.id}
                                className={current===i?'active':''}
                                onClick={onChange(i)}>
                                {item.title}
                            </TabBarItem>
                        ))
                    }
                    <div style={{left:current*(100/props.tabs.length)+'%',width:(100/props.tabs.length)+'%'}} className="underline" />
                </TabBar>
                   <TabContent style={{transform:`translate3d(-${current*100}%, 0px,1px)`}}>
                        {props.children}
                   </TabContent>
            </div>
        )
}
export default Tab
Tab.propTypes={
    tabs:PropTypes.array,
    initPage:PropTypes.number
};
Tab.defaultProps = {
    tabs:[
        {
            id:1,
            title:"选项一"
        },
        {
            id:2,
            title:"选项二"
        },
        {
            id:3,
            title:"选项三"
        }
    ],
    initPage:0
}