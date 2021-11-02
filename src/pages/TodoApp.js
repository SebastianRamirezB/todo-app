import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { noteStartLoading } from '../actions/noteActions';
import NavBar from '../components/NavBar';
import Search from '../components/Search';
import TodoList from '../components/TodoList';

const TodoApp = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(noteStartLoading());
        
    }, [dispatch]);

    return (
        <div className="app">
            <div className="app__background">
                <div className="app__background-image"></div>
            </div>
            <section className="app__section">
                <NavBar />
                <Search />
                <TodoList />
            </section>
            
        </div>
    )
}
export default TodoApp;