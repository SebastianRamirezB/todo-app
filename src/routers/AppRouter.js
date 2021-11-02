import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { startChecking } from '../actions/authActions';
import Login from '../pages/Login';
import Register from '../pages/Register';
import TodoApp from '../pages/TodoApp';
import { PublicRoute } from './PublicRoute';
import {PrivateRoute} from './PrivateRoute';
import { changeDarkMode } from '../actions/uiActions';

const AppRouter = () => {
    const dispatch = useDispatch();
    const { checking, uid } = useSelector(state => state.auth );
    const {darkModeActive} = useSelector(state => state.ui);

    const [darkMode, setDarkMode] = useState(false);
    const mainClass = darkModeActive? 'isDark' : 'isLight';
  
    const changeMedia = (mq) => {
      setDarkMode(mq.matches);
     
    }

    useEffect(()=>{
      dispatch(startChecking());
    },[dispatch])
  
    useEffect(() => {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      mq.addListener(changeMedia);
      setDarkMode(mq.matches);
      dispatch(changeDarkMode(darkMode));
      return () => {
        mq.removeListener(changeMedia);
      }
    }, [darkMode, dispatch]);

    if(checking) {
      return (<h5> Espere... </h5>)
    }

    return (
        <Router>
            <div className={`${mainClass}`} >
                <Switch>
                    <PublicRoute 
                      exact 
                      path="/login" 
                      component={Login} 
                      isAuthenticated={!!uid}
                    />
                    <PublicRoute 
                      exact 
                      path="/register" 
                      component={Register} 
                      isAuthenticated={!!uid}
                    />
                    <PrivateRoute 
                      path="/" 
                      component={TodoApp} 
                      isAuthenticated={!!uid}
                    />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;
