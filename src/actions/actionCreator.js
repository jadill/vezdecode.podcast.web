import {
    ADD_TIMECODE,
    EDIT_TIMECODE,
    REMOVE_MUSIC,
    REMOVE_TIMECODE,
    SET_ACCRETION,
    SET_ACTIVE_PANEL,
    SET_ACTIVE_POPOUT,
    SET_FADING,
    SET_MUSIC,
} from '../constants/common';

export const setActivePanel = (active_panel) => ({
    type: SET_ACTIVE_PANEL,
    active_panel,
});

export const setActivePopout = (active_popout) => ({
    type: SET_ACTIVE_POPOUT,
    active_popout,
});


export const addTimecode = (id) => ({
    type: ADD_TIMECODE,
    id,
});

export const editTimecode = (id, title, time) => ({
    type: EDIT_TIMECODE,
    id, title, time
});

export const removeTimecode = (id) => ({
    type: REMOVE_TIMECODE,
    id,
});

export const setFading = (value) => ({
    type: SET_FADING,
    value,
});

export const setAccretion = (value) => ({
    type: SET_ACCRETION,
    value,
});

export const setMusic = (value) => ({
    type: SET_MUSIC,
    value,
});

export const removeMusic = () => ({
    type: REMOVE_MUSIC,
});