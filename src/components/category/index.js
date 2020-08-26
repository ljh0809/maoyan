import React, {useState} from 'react';
import item1 from './images/1.png';
import item2 from './images/2.png';
import item3 from './images/3.png';
import item4 from './images/4.png';
import item5 from './images/5.png';
import {CategoryWrapper} from "./styled";


function Category(props) {
    const [list] = useState([
        {img:item1,val:'演唱会'},
        {img:item2,val:'话剧歌剧'},
        {img:item3,val:'休闲展览'},
        {img:item4,val:'戏曲相声'},
        {img:item5,val:'亲子/艺术'}
        ])
    return (
        <CategoryWrapper>
            {
                list.map(item=>(
                    <div key={item.val} className='item'>
                        <img src={item.img} alt=""/>
                        <span>{item.val}</span>
                    </div>
                ))
            }
        </CategoryWrapper>
    );
}

export default Category;