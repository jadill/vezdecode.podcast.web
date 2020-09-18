import {
    ADD_TIMECODE, EDIT_TIMECODE, REMOVE_TIMECODE
} from '../constants/common';

const panel = (state = [], {type, id, title, time,}) => {
    switch (type) {
        case ADD_TIMECODE:
            return [
                ...state,
                {
                    id,
                    title: '',
                    time: '',
                },
            ];
        case EDIT_TIMECODE:
            return [...state].map(timecode => {
                if (timecode.id === id) {
                    timecode.title = title;
                    timecode.time = time;
                }
                return timecode;
            });
        case REMOVE_TIMECODE:
            return [...state].filter(timecode => timecode.id !== id);
        default:
            return state;
    }
};

export default panel;