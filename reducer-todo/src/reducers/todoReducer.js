export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: Date.now()
      }
]

export const reducer =  (state, action) => {
    switch(action.type){
        case 'TOGGLE_ADD':
            const newTodo = {
                item: action.payload, 
                completed: false,
                id: Date.now()
            }
        return [...state, newTodo]
        default: 
        return state; 
    }
}

