import {CREATE_PODCAST, SET_ACTIVE_PANEL, SET_ACTIVE_POPOUT,} from '../constants/common';

const defaultState = {
    active_panel: CREATE_PODCAST,
    active_popout: null,
};

const panel = (state = defaultState, {type, active_panel, active_popout}) => {
    switch (type) {
        case SET_ACTIVE_PANEL:
            return {
                ...state,
                active_panel,
            };
        case SET_ACTIVE_POPOUT:
            return {
                ...state,
                active_popout,
            };
        default:
            return state;
    }
};

export default panel;