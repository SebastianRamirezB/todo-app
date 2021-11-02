import Swal from 'sweetalert2';
import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';
import {types} from '../types/types';
import { noteLogout } from './noteActions';


export const startLogin = (email, password) => {
        return async(dispatch) => {
            
            
            try {
                const resp = await fetchWithoutToken('auth/login', {email, password}, 'POST');
                const body = await resp.json();
    
                if(body.ok) {
                    localStorage.setItem('token', body.token);
                    localStorage.setItem('token-init-date', new Date().getTime() );
    
                    dispatch(login({
                        uid: body.uid,
                        name: body.name
                    }));
                } else {
                    Swal.fire('La contraseña o correo son incorrectos');
                    
                }
                
            } catch (error) {
                Swal.fire('Estamos teniendo problemas para conectarnos con el servidor');
            }

            

        }
}

export const startRegister = (name, email, password) => {
    return async (dispatch) => {

        try {
            
            const resp = await fetchWithoutToken('auth/register', {name, email, password}, 'POST');
    
            const body = await resp.json();
    
            if(body.ok) {
                localStorage.setItem('token', body.token);
                localStorage.setItem('token-init-date', new Date().getTime() );
    
                dispatch(login({
                    uid: body.uid,
                    name: body.name
                }));
            } else {
                Swal.fire(body.msg);
            }
        } catch (error) {
            Swal.fire('Estamos teniendo problemas para conectarnos con el servidor');
            
        }

    }
}

export const startChecking = () => {
    return async (dispatch) => {

        try {
            const resp = await fetchWithToken('auth/renew');
    
            const body = await resp.json();
    
            if(body.ok) {
                localStorage.setItem('token', body.token);
                localStorage.setItem('token-init-date', new Date().getTime() );
    
                dispatch(login({
                    uid: body.uid,
                    name: body.name
                }));
            } else {
                
                dispatch(checkingFinish());
            }
            
        } catch (error) {
            Swal.fire('Estamos teniendo problemas para conectarnos con el servidor');
        }

    }
}

const checkingFinish = () => ({type: types.authCheckingFinish});

const login = (user) => ({
    type: types.authLogin,
    payload: user
});

export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(logout());
        dispatch(noteLogout());
    }
}

const logout = () => ({type: types.authLogout});