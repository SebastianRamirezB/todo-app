import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import TodoFilter from './TodoFilter';
import TodoInfo from './TodoInfo';
import TodoItem from './TodoItem';



const TodoList = () => {

const {notes}= useSelector(state => state.todo);
const [valueFilter, setValueFilter] = useState('all');
let showNotes = {};



   
        if(valueFilter === 'all'){

            showNotes = notes;

        } else if (valueFilter === 'completed') {

            const notesCompleted =  notes.filter(n => (n.completed !== false ));
            showNotes = notesCompleted
        } else if (valueFilter === 'active') {

            const notesActive =  notes.filter(n => (n.completed !== true ));
             showNotes = notesActive;
        }
        
    
    
    

    const handleCompleted = () => {
        setValueFilter('completed');
        
        
    }
    const handleActive = () => {
        setValueFilter('active');
        
        
    }

    const handleAll = () => {
        setValueFilter('all');
        
        
    }

    return (
        <>
            <div className="todo__list">
                {
                    showNotes.map(n => <TodoItem key={n.id} {...n} />)
                    
                }
                
            </div>
            <TodoInfo  count={showNotes.length}/>
            
            <TodoFilter
                valueFilter={valueFilter}
                handleCompleted={handleCompleted} 
                handleActive={handleActive} 
                handleAll={handleAll}      
            />

        </>
    )
}

export default TodoList;
