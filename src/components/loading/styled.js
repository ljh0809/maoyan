import styled from "styled-components";
import loading from '../../assets/images/loading.gif'
export const LoadingWrapper = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: url(${loading}) no-repeat;
    background-size: 100% 100%;
`