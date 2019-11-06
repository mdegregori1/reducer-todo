import React, { useState, useReducer } from 'react';

import { initialState, reducer} from "../reducers/todoReducer";

const Todo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newTodo, setNewTodo] = useState();
    // console.log(state);

  
    const handleChanges = e => {
      setNewTodo(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'TOGGLE_ADD', payload: newTodo})
    }
  
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
                                <li>{todo.item}</li> 
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
// onClick={()=> dispatch({type: 'TOGGLE_EDIT'})}

// - Build a form to add todos to your list
// - Build a function that will dispatch an action to add a new todo
// - Write the `case` in your reducer for adding a todo (You can create a unique id with `new Date()`)


{/* <input
className="title-input"
type="text"
name="newTitleText"
value={newTitleText}
onChange={handleChanges}

/>
<button onClick={()=> dispatch({type: 'SET_TITLE', payload: newTitleText})}>Update</button>
</div> */}
export default Todo;
