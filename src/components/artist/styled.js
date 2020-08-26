import styled from "styled-components";

export const ArtistWrapper = styled.div`
    .title{
        padding: 25px 15px 8px;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
    }
    .artistList{
        padding-left: 11px;
        //width: 100%;
        height: 95px;
        display: flex;
        overflow-x: auto;
        ::-webkit-scrollbar { width: 0; height: 0; color: transparent; }
        .item{
          margin-right: 12px;
          width: 78px;
          height: 93px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          flex-shrink: 0;
          img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
          p{
            width: 70px;
            text-align: center;
            font-size: 14px;
            font-weight: 700;
            line-height: 17px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis
          }
          span{
              
              font-size: 12px;
              color: #999;
              line-height: 16px;
              margin-top: 2px;
          }
        }
    }
`