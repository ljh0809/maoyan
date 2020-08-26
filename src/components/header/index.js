import React, {Component} from 'react';
import location from './images/location.png'
import arrow from './images/arrow-down.png'
import search from './images/search-icon.png'
import {HeaderWrapper,CityName,SearchWrapper} from "./styled";
import {NavLink} from "react-router-dom";

class Header extends Component {
    state = {
        cities:this.props.city
    }
    render() {
        return (
            <HeaderWrapper>
                <CityName>
                    <NavLink to='/home/city'>
                        <img className='location' src={location} alt=""/>
                        <span>{this.state.cities}</span>
                        <img className='arrow' src={arrow} alt=""/>
                    </NavLink>
                </CityName>
                <SearchWrapper>
                    <NavLink to='/home/search'>
                        <img className='search' src={search} alt=""/>
                        <span>找明星、演出、场馆</span>
                    </NavLink>
                </SearchWrapper>
            </HeaderWrapper>
        );
    }
}
export default Header;