import styled from "styled-components";

export const Layout = styled.div`
      width: 100%;
      height: 100vh;
      position: absolute;
      z-index: 1;
      background: rgba(240,240,240);
`
export const SearchWrapper = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #f0f0f0;
      padding: 7px 20px;
      border-bottom: 1px solid #e6e6e6;
       .cancels{
            color: #f03d37;
            line-height: 30px;
        }
      .box{
        flex: 1;
        background-color: #fff;
        border-radius: 100px;
        font-size: 13px;
        color: #999;
        height: 30px;
        line-height: 30px;
        margin-right: 10px;
        padding-left: 32px;
        position: relative;
        text-align: left;
        box-sizing: border-box;
        input{
             border: none;
             width: 90%;
             height: 30px;
        }
        
      }
`
export const Card = styled.div`
      padding: 10px 12px 9px;
       .artistList{
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            padding: 14px 15px;
            border-radius: 8px;
            box-shadow: 0 6px 12px 0 rgba(58,58,88,.2);
            background: url(//www.dpfile.com/app/myshow/static/img/bg.png) no-repeat 50%/cover;
             img{
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: no-repeat 50%/cover;
             }
             span{
                color: #fff;
                flex: auto;
                text-align: left;
                padding-left: 16px;
             }
             .artistBtn{
                min-width: 90px;
                height: 32px;
                line-height: 32px;
                background: #f03d37;
                border-radius: 16px;
                color: #fff;
                font-weight: 700;
                font-size: 13px;
                text-align: center;
             }
       }
`
export const Detail = styled.div`
      background: #fff;
      padding: 13px 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
        img{
          width: 100px;
          height: 135px;
        }
        .showDetail{
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 235px;
          height: 135px;
          padding-left: 10px;
          text-align: left;
          font-size: 12px;
          color: #888;
          line-height: 16px;
            .top{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                  .title{
                        max-height: 50px;
                        margin-bottom: 8px;
                        font-size: 16px;
                        line-height: 25px;
                        font-weight: 700;
                        color: #111;
                        box-orient: vertical;
                        -webkit-box-orient: vertical;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        text-overflow: ellipsis;
                        overflow: hidden;
                  }
                  & p:nth-child(3){
                      margin-top: 4px;
                  }
            }
            .bottom{
                span{
                    float: left;
                }
                & span:nth-child(1){
                    color: #ff6a48;
                    margin-right: 3px;
                }
                & span:nth-child(3){
                    float: right;
                }
            }
        }
`
export const Noyet = styled.div`
        background: #f0f0f0;
        text-align: center;
        font-size: 14px;
        padding: 10px 0;
        color: #999;
`