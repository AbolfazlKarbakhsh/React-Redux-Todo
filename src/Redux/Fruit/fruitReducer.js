// create Reducer

import { BuyApple, BuyOrange } from "./FruitType"

const fruitState = {
    apple: 10,
    orange: 15
}
const fruitReducer = (state = fruitState, action) => {
    switch (action.type) {
        case BuyApple: {
            return { ...state, apple: state.apple - 1 }
        }
        case BuyOrange: {
            return { ...state, orange: state.orange - 1 }
        }
        default: {
            return state
        }
    }
}

export default fruitReducer