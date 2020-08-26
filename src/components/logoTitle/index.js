import React from 'react';
import {TitleWrapper} from './styled'
import {withRouter} from 'react-router-dom'
function LogoTitle(props) {
    const goBack = () => {
        console.log(props)
        props.history.goBack()
    }
    return (
       <>
           <TitleWrapper>
               <i onClick={goBack}>
               </i>
               <span>喵眼电影</span>
           </TitleWrapper>

       </>
    );
}

export default withRouter(LogoTitle);