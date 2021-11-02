import React,{useState} from 'react';
import validator from 'validator';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { useForm } from '../hooks/useForm';
import { startLogin } from '../actions/authActions';
 
const Login = () => {

    const dispatch = useDispatch();
    const [msgErrorForm, setMsgErrorForm] = useState('');
    const [formValues, handleInputChange ] = useForm({
        email: '',
        password: ''
    });

    const {email, password} = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        if(isFormValid()){
            setMsgErrorForm('');
            dispatch(startLogin(email, password));
        }
    }

    const isFormValid = () => {

        if(!validator.isEmail(email)){
            setMsgErrorForm('El correo electrónico no es valido');
            return false;
        } else if (validator.isEmpty(password)) {
            setMsgErrorForm('Por favor ingresa una contraseña');
            return false;
        }

        return true;
    }
    
    return (
        <div className="todo__auth">
             <form className="todo__auth-form" onSubmit={handleLogin}  >
            <h2>Todo App</h2>
            {
                msgErrorForm &&
                (
                    <div className="todo__message-error" >
                        {msgErrorForm}
                    </div>
                )
            }

            <input
                 type="text"
                 placeholder="Correo Electrónico"
                 name="email"
                 autoComplete="off"
                 value={email}
                 onChange={handleInputChange}
                 
            />
            <input 
                type="password"
                placeholder="Contraseña"
                name="password"
                autoComplete="off"
                value={password}
                onChange={handleInputChange}
              
            />
            <button type="submit">Iniciar Sesión</button>
            <Link className="todo__auth-link" to='/register'>¿No tienes una cuenta? Regístrate</Link>
            
        </form>
    </div>
    )
}

export default Login;
