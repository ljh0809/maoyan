import styled from "styled-components";

export const HeaderWrapper = styled.div`
      width: 100%;
      height: 48px;
      display: flex;
      align-items: center;  
      padding: 8px 15px 8px 18px;
      box-sizing: border-box;
`
export const CityName = styled.div`
      display: flex;
      height: 22px;
      //width: 68px;
      margin-right: 12px;
      align-items: center;
      a{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        color: #000;
        font-size: 16px;
        font-weight: 700;
      }
      span{
        font-size: 1rem;
        font-weight: 700;
        color: #333;
        line-height: 1.375rem;
        padding: 0 .5625rem 0 .3125rem;
        max-width: 5rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .location{
        width: 12px;
        height: 14px;
      }
      .arrow{
        width: 10px;
        height: 6px;
      }
`
export const SearchWrapper = styled.div`
        flex: 1;
        display: flex;
        align-items: center;
        padding-left: .8125rem;
        height: 2rem;
        background: #f5f5f5;
        border-radius: .375rem;
        color: #999;
        a{
          display: flex;
          align-items: center;
        }
      .search{
        width: 13px;
        height: 13px;
        margin-right: 10px;
      }
      span{
        color: #999;
        font-size: 14px;
      }
`