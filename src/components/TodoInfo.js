import React from 'react';

const TodoInfo = ({count}) => {

    return (
        <div className="todo__info">
            <p className="todo__total">{`${count} items`}</p>
        </div>
    )
}

export default TodoInfo;
