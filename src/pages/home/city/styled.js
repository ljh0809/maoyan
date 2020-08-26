import styled from "styled-components";

export const TitleWrapper = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    height: 30px;
    background: #ebebeb;
    padding: 0 15px;
    color: #666;
    font-size: 14px;
`
export const Box = styled.div`
    width: 100%;
    text-align: left;
    user-select: none;
    background: #f5f5f5;
    position: absolute;
    z-index: 1;
`
export const HotCity = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 8px;
    margin-right: 23px;
      .hotCity{
    position: relative;
    min-width: 26%;
    min-width: calc(33.33333% - 16px);
    margin: 8px;
    background: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    height: 30px;
    border-radius: 3px;
    color: #666;
    font-size: 15px;
    box-sizing: border-box;
    padding: 0 10px;
    }
`
export const ItemBox = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    position: relative;
    height: 43px;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    padding: 0 15px;
    color: #333;
    font-size: 16px;
    overflow: hidden;
`