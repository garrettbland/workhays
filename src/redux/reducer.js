import { UPDATE_USER } from '@/redux/constants'

/**
 * Define initial state
 */
let initialState = {
    user: {},
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER: {
            return state
        }
        default: {
            return state
        }
    }
}

export default rootReducer
