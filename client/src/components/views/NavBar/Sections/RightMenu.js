import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Menu } from 'antd';
import { USER_SERVER } from '../../../Config';
import { useSelector } from "react-redux";



function RightMenu(props) {
    
    
    const user = useSelector(state => state.user)
    const navigate = useNavigate();

    const logoutHandler = () => {
    
        axios.get(`${USER_SERVER}/logout`).then(response=>{
        if(response.status==200){
            navigate("/login");
        } else {
            alert('Log Out Failed');
        }
    })
}

    if(user.userData && !user.userData.isAuth){
        return(
            <Menu mode={props.mode}>
                <Menu.Item key="mail">
                    <a href="/login">Sign in</a>
                </Menu.Item>
                <Menu.Item key="app">
                    <a href="/register">Sign up</a>
                </Menu.Item>
            </Menu>
        )
    }else{
        return(
            <Menu mode={props.mode}>
                <Menu.Item key="logout">
                    <a onClick={logoutHandler}>Logout</a>
                </Menu.Item>
            </Menu>
        )
    }

}

//RightMenu.propTypes = {}

export default RightMenu
