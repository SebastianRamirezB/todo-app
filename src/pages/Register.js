import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import validator from 'validator';
import { Link } from 'react-router-dom';


import { startRegister } from '../actions/authActions';
import { useForm } from '../hooks/useForm';

const Register = () => {

    const dispatch = useDispatch();
    const [msgErrorForm, setMsgErrorForm] = useState('');

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        passwordConfirmed: ''
    });

    const {name, email, password, passwordConfirmed} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if(isFormValid()) {
            setMsgErrorForm('');
            dispatch(startRegister(name, email, password));
            
        }
        
    }

    const isFormValid = () => {

        if (name.trim().length === 0){
            setMsgErrorForm('Por favor ingresa un nombre');
            return false;
        } else if ( !validator.isEmail(email)) {
            setMsgErrorForm('El correo electronico no es valido');
            return false;
        } else if (password !== passwordConfirmed || password.length < 6) {
            setMsgErrorForm('Verifica si las contraseñas coinciden o tienen 6 o mas de 6 caracteres');
            return false;
        }

        return true;
    }

    return (
        <div className="todo__auth">
            <form className="todo__auth-form" onSubmit={handleRegister} >
            <h2>Regístrate</h2>
            {
                msgErrorForm &&
                (
                    <div className='todo__message-error'>
                        {msgErrorForm}
                    </div>
                )
            }
         
            <input 
                type="text" 
                placeholder="Nombre"
                name="name"
                value={name}
                onChange={handleInputChange}
               
            />
            <input
                 type="text"
                 placeholder="Correo Electrónico"
                 name="email"
                 value={email}
                 onChange={handleInputChange}
               

            />
            <input 
                type="password"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={handleInputChange}
               
            />
            <input 
                type="password"
                placeholder="Confirmar Contraseña"
                name="passwordConfirmed"
                value={passwordConfirmed}
                onChange={handleInputChange} 
            />
            <button>Registrate</button>
            <Link className="todo__auth-link" to='/login'>¿Tienes una cuenta? Inicia sesión</Link>
            
        </form>
        </div>
    )
}

export default Register;
