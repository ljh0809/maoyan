import React from 'react';
import AwesomeSwiper from 'react-awesome-swiper';
import PropsTypes from 'prop-types'

function Banner(props) {
    const config = {
        watchOverflow:true,  //只有一张图片就轮播失效
        direction:props.direction,  //水平方向轮播
        autoplay:props.delay?{   //自动轮播
            delay:3000,
            disableOnInteraction:false
        }:false,
        slidesPerView:props.slideNum,  //设置容器显示多少张图
        loop:props.loop,  //无缝轮播
        pagination:{  //圆点类名
            el:props.pagination?".swiper-pagination":""
        }
    }
    return (
        <AwesomeSwiper config={config}>
            <div className="swiper-wrapper">
                {props.children}
            </div>
            {
                props.pagination && <div className="swiper-pagination" />
            }

        </AwesomeSwiper>
    );
}
Banner.prototype = {
    pagination:PropsTypes.bool,
    loop:PropsTypes.number,
    slideNum:PropsTypes.number,
    delay:PropsTypes.number,
    direction:PropsTypes.string
}
Banner.defaultProps  = {
    pagination:false,
    loop:1,
    slideNum:1,
    direction:"horizontal"
}
export default Banner;
