import React from 'react';
import {RiCloseFill} from 'react-icons/ri'
import { FaCheck } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import {noteStartCompleted, noteStartDelete } from '../actions/noteActions';

const TodoItem = ({text, id, completed}) => {

    const dispatch = useDispatch();

    const handleDeleted = () => {
        dispatch(noteStartDelete(id));
    }
    const handleCompleted = () => {
        dispatch(noteStartCompleted(id, completed));
    }

    return (
        <div className={`todo__item ${completed && 'completed'}`}>
            <button 
                onClick={handleCompleted}
                className="todo__button"
            >
                <div className="todo__gradient">
                    <FaCheck className="todo__icon-completed" />
                </div>
                

            </button>
            <p className="todo__text"> {text}</p>
            <RiCloseFill 
                className="todo__icon" 
                onClick={handleDeleted}

            />
        </div>
    )
}

export default TodoItem;
