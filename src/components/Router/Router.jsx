import React from 'react';
import {connect} from 'react-redux';

import registerServiceWorker from './../../registerServiceWorker';

import {Panel, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {CREATE_FEE} from "./../../constants/common";
import EditPodcast from "../EditPodcast/EditPodcast";

const CharityRouter = ({activePanel}) => {
    return (
        <View id="main" activePanel={activePanel}>
            <Panel id={CREATE_FEE}>
                <EditPodcast/>
            </Panel>
        </View>
    )
}

export default connect(state => ({
    activePanel: state.panel.active_panel,
}))(CharityRouter);

registerServiceWorker();