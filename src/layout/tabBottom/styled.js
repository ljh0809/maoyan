import styled from "styled-components";
import home from './images/home.png'
import homeAc from './images/home-ac.png'
import order from './images/order.png'
import orderAc from './images/order-ac.png'

export  const TabWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 50px;
  width: 100%;
  background: #fafafa;
  display: flex;
  .item{
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
      i{
        width: 18px;
        height: 18px;
      }
      span{
        font-size: 12px;
        color: #000;
      }
      &.active span{
        color: #f03d37;
      }
      &:nth-child(1){
        i{
          background: url(${home});
          background-size: contain;
        }
        &.active i{
          background: url(${homeAc});
          background-size: contain;
        }
      }
      &:nth-child(2){
        i{
          background: url(${order});
          background-size: contain;
        }
        &.active i{
          background: url(${orderAc});
          background-size: contain;
        }
      }
  }
`