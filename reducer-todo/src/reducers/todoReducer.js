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
        case 'TOGGLE_COMPLETED':
            return state.map(item => {
                if(item.id === action.payload){
                    return {...item, completed: !item.completed}
                } else {
                    return item
                }
            })
        case 'CLEAR_COMPLETED':
            return state.filter( item => !item.completed)

        default: 
        return state; 
    }
}

