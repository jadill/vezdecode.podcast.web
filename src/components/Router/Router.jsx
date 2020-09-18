import React from 'react';
import {connect} from 'react-redux';

import registerServiceWorker from './../../registerServiceWorker';

import {ActionSheet, ActionSheetItem, IOS, Panel, View} from '@vkontakte/vkui';
import {removeMusic, setActivePanel, setActivePopout} from "../../actions/actionCreator";
import '@vkontakte/vkui/dist/vkui.css';
import {ADD_MUSIC, EDIT_PODCAST, MUSIC_ACTION} from "../../constants/common";
import EditPodcast from "../EditPodcast/EditPodcast";
import AddMusic from "../AddMusic/AddMusic";

class PodcastRouter extends React.Component {

    get popout() {
        const {activePopout, setActivePopout, removeMusic, setActivePanel} = this.props;
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
        return null;
    }

    render = () => {
        const {activePanel} = this.props;
        return (
            <View id="main" activePanel={activePanel} popout={this.popout}>
                <Panel id={EDIT_PODCAST}>
                    <EditPodcast/>
                </Panel>
                <Panel id={ADD_MUSIC}>
                    <AddMusic/>
                </Panel>
                <Panel id={CREATE_PODCAST}>
                    <CreatePodcast/>
                </Panel>
                <Panel id={SHARE_PODCAST}>
                    <SharePodcast/>
                </Panel>
                <Panel id={NEW_PODCAST}>
                    <NewPodcast/>
                </Panel>
            </View>
        );
    }
}

export default connect(state => ({
    activePanel: state.panel.active_panel,
    activePopout: state.panel.active_popout,
}), {setActivePanel, setActivePopout, removeMusic})(PodcastRouter);

registerServiceWorker();