import {
    ADD_TIMECODE, CLEAR_EFFECTS,
    CLEAR_FORM_NEW_PODCAST, CLEAR_TIMECODE,
    EDIT_TIMECODE,
    FORM_NEW_PODCAST_SET_ADULT_CONTENT,
    FORM_NEW_PODCAST_SET_AVAILABILITY,
    FORM_NEW_PODCAST_SET_COVER,
    FORM_NEW_PODCAST_SET_DESCRIPTION,
    FORM_NEW_PODCAST_SET_EXCLUDE_EPISODE,
    FORM_NEW_PODCAST_SET_FILE,
    FORM_NEW_PODCAST_SET_TITLE,
    FORM_NEW_PODCAST_SET_TRAILER,
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

export const setFormNewPodcastCover = (cover) => ({
    type: FORM_NEW_PODCAST_SET_COVER,
    cover,
});

export const setFormNewPodcastTitle = (title) => ({
    type: FORM_NEW_PODCAST_SET_TITLE,
    title,
});

export const setFormNewPodcastDescription = (description) => ({
    type: FORM_NEW_PODCAST_SET_DESCRIPTION,
    description,
});

export const setFormNewPodcastFile = (sound_file) => ({
    type: FORM_NEW_PODCAST_SET_FILE,
    sound_file,
});

export const setFormNewPodcastAdultContent = (adult_content) => ({
    type: FORM_NEW_PODCAST_SET_ADULT_CONTENT,
    adult_content,
});

export const setFormNewPodcastExcludeEpisode = (exclude_episode) => ({
    type: FORM_NEW_PODCAST_SET_EXCLUDE_EPISODE,
    exclude_episode,
});

export const setFormNewPodcastTrailer = (trailer) => ({
    type: FORM_NEW_PODCAST_SET_TRAILER,
    trailer,
});

export const setFormNewPodcastAvailability = (availability) => ({
    type: FORM_NEW_PODCAST_SET_AVAILABILITY,
    availability,
});

export const clearFormNewPodcast = () => ({
    type: CLEAR_FORM_NEW_PODCAST,
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

export const clearTimecodes = () => ({
    type: CLEAR_TIMECODE,
});

export const clearEffects = () => ({
    type: CLEAR_EFFECTS,
});