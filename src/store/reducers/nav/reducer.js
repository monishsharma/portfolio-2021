import * as actionTypes from "./types";

const initialState = {
    navDrawer: false
}

const UI = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.TOGGLE_NAV_DRAWER: {
            return {
                ...state,
                navDrawer: action.flag
            }
        }

        default: {
            return state;
        }
    }
}

export default UI;