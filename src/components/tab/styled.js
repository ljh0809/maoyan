import styled from 'styled-components'; //样式

export const TabBar = styled.div`
    width: 100%;
    height: 43px;
    z-index: 1;
    flex-shrink: 0;
    display: flex;
    position: relative;
    
    .underline {
        position: absolute;
        //width: 50%;
        left: 0;
        height: 0;
        bottom: 0;
        border-top: 2px solid #108ee9;
        transition: top .3s cubic-bezier(.35,0,.25,1),left .3s cubic-bezier(.35,0,.25,1),color .3s cubic-bezier(.35,0,.25,1),width .3s cubic-bezier(.35,0,.25,1);
        will-change: top,left,width,color;
        
    }
`;

export const TabBarItem = styled.div`
    //width: 50%; 
    flex: 1;
    font-size: 15px;
    height: 43.5px;
    line-height: 43.5px;
    border-bottom: 1px solid #ddd;
    padding: 8px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    
    &.active {
      color: #108ee9;
    }
`;

export const TabContent = styled.div`
    transition: transform .3s cubic-bezier(.35,0,.25,1),left .3s cubic-bezier(.35,0,.25,1),top .3s        cubic-bezier(.35,0,.25,1),-webkit-transform .3s cubic-bezier(.35,0,.25,1);
    will-change: transform,left,top;
    display: flex;
    flex: 1;
    height: 100%;
    div {
        flex-shrink: 0;
        width: 100%;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        input{
          width: 100%;
          height: 44px;
          margin-bottom: 5px;
          text-indent: 16px;
        }
        button{
          width: 95%;
          height:30px;
          background: #df2d2d;
           margin-top: 10px ;
           border-radius: 4px;
           color: #fff;
        }
    }
`;