import React, { useState, useReducer } from 'react';

import { initialState, reducer} from "../reducers/todoReducer";

const Todo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newTodo, setNewTodo] = useState();

    const handleChanges = e => {
      setNewTodo(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'TOGGLE_ADD', payload: newTodo})
        setNewTodo('')
    }
   console.log(state)
    return (
        <div>
            <h1>To Do </h1>
            <div onSubmit= {handleSubmit}>
                <form>
                <input
                 type="text"
                 name="newTodo"
                 placeholder="Add a todo item"
                 value={newTodo}
                 onChange={handleChanges}
                />
                <button type="submit">Add</button>
                </form>
            </div>
            <div>
                {state.map(todo => {
                    return (
                        <div>
                            <ul>
                                <li style={todo.completed ? {textDecoration: 'line-through'} :null} onClick={()=>dispatch({ type: 'TOGGLE_COMPLETED', payload: todo.id})}>{todo.item}</li> 
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Todo;
