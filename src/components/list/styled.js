import styled from "styled-components";

export const ListWrapper = styled.div`
      .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5625rem .9375rem .5rem;
        color: #333;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.5rem;
        text-align: left;
      }
      .content{
        margin: 0 15px 15px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }
      .left, .right {
            width: 48.7%;
      }
      .item {
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        border: 1px solid rgba(0,0,0,.15);
        border-radius: 6px;
        img {
            width: 100%;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
        }
        .item-content {
            padding: 0 10px 10px;
            box-sizing: border-box;
            h4 {
                max-height: 48px;
                margin-top: 6px;
                font-size: 13px;
                line-height: 19px;
                font-weight: 700;
                color: #333;
                display: -webkit-box;
                text-overflow: ellipsis;
                -webkit-box-orient:vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            }
            p {
                margin-top: 4px;
                font-size: 12px;
                color: #999;
                line-height: 17px;
            }
            span {
                display: flex;
                font-size: 16px;
                font-weight: 700;
                color: #f03d37;
                line-height: 19px;
                margin-top: 7px;
                i {
                    font-size: 12px;
                    font-weight: 400;
                    padding-left: 4px;
                }
            }
        }
      }
`