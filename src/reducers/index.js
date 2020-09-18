import {combineReducers} from 'redux';

import panel from "./panel";
import timecode from "./timecode";
import effects from "./effects";

const rootReducer = combineReducers({panel, timecode, effects});

export default rootReducer;