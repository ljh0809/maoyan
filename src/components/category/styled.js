import styled from "styled-components";

export const CategoryWrapper = styled.div`
    width: 100%;
    height: 76px;
    padding: 0 10px;
    display: flex;
    margin-top: 3px;
    box-sizing: border-box;
    .item{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      img{
        width: 60px;
        height: 60px;
      }
      span{
        font-size: 12px;
      }
    }
`