import styled from "styled-components";

export const TitleWrapper = styled.div`
      width: 100%;
      height: 50px;
      background: #df2d2d;
      display:flex;
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
`