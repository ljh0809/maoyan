import styled from "styled-components";

export const TitleWrapper = styled.div`
    display: flex;
    padding: 20px 20px 24px;
    background: url(//www.dpfile.com/app/myshow/static/img/bg@2x.png);
    background-size: 100% 100%;
    flex-direction: column;
    .detailHeader{
      display: flex;
      img{
        width: 104px;
        height: 138px;
      }
    }
    .headerInfo{
       flex: 1;
       padding-left: 10px;
       display: flex;
       flex-direction: column;
       justify-content: space-between;
       p{
        text-overflow: ellipsis;
        overflow: hidden;
        color: #fff;
        font-size: 17px;
        text-align: left;
       }
       span{
        width: 100%;
        padding-right: 20px;
        justify-content: space-between;
        align-items: center;
        color: #fff;
       }
    }
    .detailAddress{
        background-image: linear-gradient(90deg,rgba(0,0,0,.22),rgba(19,7,77,0));
        border-radius: 8px;
        margin-top: 16px;
        padding: 13px 8px 13px 12px;
        p{
          color: #fff;
        }
    }
`
export const Send = styled.div`
    width: 335px;
    height: 46px;
    box-shadow: 0 2px 6px 0 #eabebc;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(-137deg,#fa3a3d,#f03d37);
    border-radius: 25px;
    font-family: PingFangSC-Medium;
    font-size: 15px;
    color: #fff;
    box-sizing: border-box;
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%);
`