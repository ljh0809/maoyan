import styled from "styled-components";

export const ContentWrapper = styled.div`
    height: 100%;
    width: 100%;
    background: rgba(240,240,240);
    .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 27px;
        img{
            width: 191px;
            height: 171px;
        }
        p{
        font-size: .9375rem;
        font-family: PingFangSC;
        font-weight: 600;
        color: #ccc;
        line-height: 1.3125rem;
        }
        .btn{
           width: 8.75rem;
            height: 2.5rem;
            background: #f03d37;
            border-radius: 1.25rem;
            margin: 1rem auto;
            font-size: .875rem;
            font-family: PingFangSC;
            font-weight: 600;
            color: #fff;
            line-height: 2.5rem;
            vertical-align: middle;
            text-align: center;
        }
        
    }
`
export const ListWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    ul{
      flex: 1;
      overflow-y: auto;
    }
    .title{
      height: 50px;
      background: #f03d37;
      width: 100%;
      color: #fff;
      display: flex;
      i{
          width: 15%;
        height: 100%;
        vertical-align: middle;
        position: relative;
        &:before{
            content: '';
            display: block;
            position: absolute;
            left: 25%;
            top: 25%;
            width: 1.4rem;
            height: 1.4rem;
            border-bottom: 0.1rem solid #fff;
            border-left: 0.1rem solid #fff;
            -webkit-transform: scaleY(0.7) rotateZ(45deg);
            -moz-transform: scaleY(0.7) rotateZ(45deg);
            -ms-transform: scaleY(0.7) rotateZ(45deg);
        }
        &:after{
            content: '';
            display: block;
            position: absolute;
            top: 49%;
            left: 22%;
            height: 2px;
            border-top: .1rem solid #fff;
            width: 1.45rem;
        }
      }
      span{
        width: 85%;
        height: 100%;
        line-height: 50px;
        text-align: center;
        font-size: 18px;
        color: #fff;
      }
    }
    .goodsitem{
      padding: 10px;
      display: flex;
       //justify-content: space-between;
       align-items: center;
    }
    .left{
        width: 96px;
        height: 96px;
        margin-right: 10px;
        img{
          width: 100%;
          height: 100%;
        }
    }
    .right{
      height: 96px;
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: space-around;
      .goodsTile{
        line-height: 28px;
        font-size: 18px;
        overflow-wrap: break-word;
        text-overflow: ellipsis;
      }
      .rightBot{
        display: flex;
        justify-content: space-between;
        .price{
          color: red;
        }
        .num{
          display: flex;
          width: 80px;
          justify-content: space-around;
        
          .add{
            width: 20px;
            height: 20px;
          }
           .sub{
            width: 20px;
            height: 20px;
          }
        }
      }
    }
`
export const Total = styled.div`
    width: 100%;
    height: 50px;
    //position: absolute;
    //left: 0;
    //bottom: 50px;
    border-top: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    p{
      margin-left: 15px;
      color:#f03d37 ;
    }
    div{
      width: 60px;
      height: 40px;
      background:#f03d37 ;
      color: #fff;
      text-align: center;
      line-height: 40px;
      border-radius: 4px;
      margin-right: 15px;
    } 
`