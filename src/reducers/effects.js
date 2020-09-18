import {CLEAR_EFFECTS, REMOVE_MUSIC, SET_ACCRETION, SET_FADING, SET_MUSIC} from '../constants/common';

const defaultState = {
    accretion: false,
    fading: false,
    music:null,
}

const effects = (state = defaultState, {type, value}) => {
    switch (type) {
        case SET_FADING:
            return {
                ...state,
                fading: value,
            };
        case SET_ACCRETION:
            return {
                ...state,
                accretion: value,
            };
        case SET_MUSIC:
            return {
                ...state,
                music: value,
            };
        case REMOVE_MUSIC:
            return {
                ...state,
                music: null,
            };
        case CLEAR_EFFECTS:
            return {
                ...defaultState,
            }
        default:
            return state;
    }
};

export default effects;