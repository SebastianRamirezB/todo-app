import React from 'react';

const TodoFilter = ({valueFilter, handleCompleted, handleActive, handleAll}) => {

    const buttonActive = valueFilter;
    
   

    return (
        <div className="todo__filter">
            <button 
                onClick={handleAll}
                className={`todo__button-filter ${buttonActive === 'all' ? 'active': '' } `}>
                
                Todos
            </button>
            <button
                onClick={handleActive} 
                className={`todo__button-filter ${buttonActive === 'active' ? 'active': '' }  `}> 
                Activos
            </button>
            <button
                onClick={handleCompleted}
                className={`todo__button-filter ${buttonActive === 'completed' ? 'active': '' } `}
            >
                Completados
            </button>
        </div>
    )
}

export default TodoFilter;
