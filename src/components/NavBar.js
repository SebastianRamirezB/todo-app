import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RiMoonFill, RiSunFill, RiLogoutBoxLine} from 'react-icons/ri';
import { startLogout } from '../actions/authActions';
import { changeDarkMode } from '../actions/uiActions';

const NavBar = () => {
    const {name} = useSelector(state => state.auth)
    const {darkModeActive} = useSelector(state => state.ui);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(startLogout());
    }
    const handleDarkMode = () => {
        dispatch(changeDarkMode(!darkModeActive));
    }


    return (
        <nav className="nav">
            <div>
                <h1 className="nav__title">TODO</h1>
                <h5 className="nav__name-user"> {name} </h5>

            </div>
            <div className="nav__icons">
                
                <div > 
                    <RiLogoutBoxLine onClick={handleLogout}  className="nav__icon" />
                {
                    darkModeActive 
                                ? <RiSunFill onClick={handleDarkMode} className="nav__icons" />
                                : <RiMoonFill onClick={handleDarkMode} className="nav__icons" />
                }
                </div>
                
            </div>
        </nav>
    )
}
export default NavBar;
