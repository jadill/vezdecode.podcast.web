import {combineReducers} from 'redux';

import panel from "./panel";
import timecode from "./timecode";
import effects from "./effects";
import form_new_podcast from "./form_new_podcast";

const rootReducer = combineReducers({panel, timecode, effects, form_new_podcast});

export default rootReducer;