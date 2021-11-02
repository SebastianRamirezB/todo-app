import React from 'react';
import { useDispatch } from 'react-redux';
import { noteStartAddNew } from '../actions/noteActions';
import {useForm} from '../hooks/useForm';
import { MdSend } from "react-icons/md";


const Search = () => {
    
    const dispatch = useDispatch();
    const [formValues, handleInputChange, reset] = useForm({
        text: ''
    });

    const {text} = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.length > 0){
            dispatch(noteStartAddNew(text));
            reset();
        }
    }

    return (
        <form onSubmit={handleSubmit} className="search__form">
            <label htmlFor="" className="search__label"></label>
            <input 
                name="text"
                className="search__input" 
                type="text" 
                placeholder="Crear una nueva tarea..."
                value={text}
                onChange={handleInputChange}
                autoComplete="off"
            />
            <button className="search__button"><MdSend/></button>
        </form>
    )
}

export default Search;
