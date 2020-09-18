import {
    CLEAR_FORM_NEW_PODCAST,
    FORM_NEW_PODCAST_SET_ADULT_CONTENT,
    FORM_NEW_PODCAST_SET_AVAILABILITY,
    FORM_NEW_PODCAST_SET_COVER,
    FORM_NEW_PODCAST_SET_DESCRIPTION,
    FORM_NEW_PODCAST_SET_EXCLUDE_EPISODE, FORM_NEW_PODCAST_SET_FILE,
    FORM_NEW_PODCAST_SET_TITLE,
    FORM_NEW_PODCAST_SET_TRAILER,
} from '../constants/common';

const defaultState = {
    availability: "Всем пользователям",
};

const form_new_podcast = (state = defaultState, {type, cover, title, description, sound_file, adult_content, exclude_episode, trailer, availability,}) => {
    switch (type) {
        case FORM_NEW_PODCAST_SET_COVER:
            return {
                ...state,
                cover,
            };
        case  FORM_NEW_PODCAST_SET_TITLE:
            return {
                ...state,
                title,
            };
        case  FORM_NEW_PODCAST_SET_DESCRIPTION:
            return {
                ...state,
                description,
            };
        case  FORM_NEW_PODCAST_SET_FILE :
            return {
                ...state,
                sound_file,
            };
        case  FORM_NEW_PODCAST_SET_ADULT_CONTENT:
            return {
                ...state,
                adult_content,
            };
        case  FORM_NEW_PODCAST_SET_EXCLUDE_EPISODE:
            return {
                ...state,
                exclude_episode,
            };
        case  FORM_NEW_PODCAST_SET_TRAILER:
            return {
                ...state,
                trailer,
            };
        case  FORM_NEW_PODCAST_SET_AVAILABILITY:
            return {
                ...state,
                availability,
            };
        case  CLEAR_FORM_NEW_PODCAST:
            return {
                ...defaultState,
            };
        default:
            return state;
    }

};

export default form_new_podcast;