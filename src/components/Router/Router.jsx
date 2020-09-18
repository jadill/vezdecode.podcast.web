import React from 'react';
import {connect} from 'react-redux';

import registerServiceWorker from './../../registerServiceWorker';

import {ActionSheet, ActionSheetItem, Panel, View} from '@vkontakte/vkui';
import {removeMusic, setActivePanel, setActivePopout, setFormNewPodcastAvailability} from "../../actions/actionCreator";
import '@vkontakte/vkui/dist/vkui.css';
import {
    ADD_MUSIC,
    CREATE_PODCAST,
    EDIT_PODCAST,
    MUSIC_ACTION,
    NEW_PODCAST,
    SET_AVAILABILITY,
    SHARE_PODCAST, VIEW_PODCAST
} from "../../constants/common";
import EditPodcast from "../EditPodcast/EditPodcast";
import AddMusic from "../AddMusic/AddMusic";
import CreatePodcast from "../CreatePodcast/CreatePodcast";
import SharePodcast from "../SharePodcast/SharePodcast";
import NewPodcast from "../NewPodcast/NewPodcast";
import ViewPodcast from "../ViewPodcast/ViewPodcast";

class PodcastRouter extends React.Component {

    get popout() {
        const {activePopout, setActivePopout, removeMusic, setActivePanel, setFormNewPodcastAvailability} = this.props;
        if (activePopout === MUSIC_ACTION) {
            return (
                <ActionSheet onClose={() => setActivePopout(null)}>
                    <ActionSheetItem autoclose
                                     onClick={() => {
                                         setActivePopout(null);
                                         setActivePanel(ADD_MUSIC);
                                     }}>
                        Изменить музыку
                    </ActionSheetItem>
                    <ActionSheetItem autoclose mode="destructive"
                                     onClick={() => {
                                         setActivePopout(null);
                                         removeMusic();
                                     }}>
                        Удалить музыку
                    </ActionSheetItem>
                    {/*{osname === IOS && <ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}*/}
                </ActionSheet>
            );
        }
        if (activePopout === SET_AVAILABILITY) {
            return (
                <ActionSheet onClose={() => setActivePopout(null)}>
                    <ActionSheetItem autoclose
                                     onClick={() => {
                                         setFormNewPodcastAvailability("Всем пользователям");
                                     }}
                    >
                        Всем пользователям
                    </ActionSheetItem>
                    <ActionSheetItem autoclose
                                     onClick={() => {
                                         setFormNewPodcastAvailability("Только мне");
                                     }}
                    >
                        Только мне
                    </ActionSheetItem>
                    {/*{osname === IOS && <ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}*/}
                </ActionSheet>
            );
        }
        return null;
    }

    render = () => {
        const {activePanel} = this.props;
        return (
            <View id="main" activePanel={activePanel} popout={this.popout}>
                <Panel id={CREATE_PODCAST}>
                    <CreatePodcast/>
                </Panel>
                <Panel id={NEW_PODCAST}>
                    <NewPodcast/>
                </Panel>
                <Panel id={EDIT_PODCAST}>
                    <EditPodcast/>
                </Panel>
                <Panel id={ADD_MUSIC}>
                    <AddMusic/>
                </Panel>
                <Panel id={VIEW_PODCAST}>
                    <ViewPodcast/>
                </Panel>
                <Panel id={SHARE_PODCAST}>
                    <SharePodcast/>
                </Panel>
            </View>
        );
    }
}

export default connect(state => ({
    activePanel: state.panel.active_panel,
    activePopout: state.panel.active_popout,
}), {setActivePanel, setActivePopout, removeMusic, setFormNewPodcastAvailability})(PodcastRouter);

registerServiceWorker();