import React from 'react';
import {ArtistWrapper} from "./styled";

function Artist(props) {

    return (
        <ArtistWrapper>
            <div className='title'>大咖新动态</div>
            <div className='artistList'>
                {
                    props.data.map(item=>(
                        <div className='item' key={item.id} >
                            <img src={item.headUrl} alt=""/>
                            <p>{item.celebrityName}</p>
                            <span>{item.recommendTag}</span>
                        </div>
                    ))
                }
            </div>
        </ArtistWrapper>
    );
}

export default Artist;