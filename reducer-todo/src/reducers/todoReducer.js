export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: Date.now()
      }
]

export const reducer =  (state, action) => {
    switch(action.type){
        default: 
        return state; 
    }
}