const initialState={
    page: 1
}

const reducerPagination = (state = initialState, action) => {
    switch (action.type){
        case 'SET_PAGE':{
            return{
                page: action.payload
            }
        }
        default:{
            return state
        }
    }
}

export default reducerPagination;