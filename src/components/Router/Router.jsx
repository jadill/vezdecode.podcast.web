import React from 'react';
import {connect} from 'react-redux';

import registerServiceWorker from './../../registerServiceWorker';

import {Panel, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import CreateFee from "./../CreateFee/CreateFee";
import TypeOfFee from "./../TypeOfFee/TypeOfFee";
import TargetFee from "./../TargetFee/TargetFee";
import RegularFee from "./../RegularFee/RegularFee";
import {CREATE_FEE, REGISTRATION_FEE, REGULAR_FEE, TARGET_FEE, TYPE_OF_FEE} from "./../../constants/common";
import RegistrationFee from "../RegistrationFee/RegistrationFee";
import {CREATE_PODCAST, NEW_PODCAST, POSTING_FEE, SHARE_PODCAST, VIEW_FEE} from "../../constants/common";
import PostingFee from "../PostingFee/PostingFee";
import ViewFee from "../ViewFee/ViewFee";
import CreatePodcast from "../CreatePodcast/CreatePodcast";
import SharePodcast from "../SharePodcast/SharePodcast";
import NewPodcast from "../NewPodcast/NewPodcast";

const CharityRouter = ({activePanel}) => {
    return (
        <View id="main" activePanel={activePanel}>
            <Panel id={CREATE_FEE}>
                <CreatePodcast/>
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
            <Panel id={TYPE_OF_FEE}>
                <TypeOfFee/>
            </Panel>
            <Panel id={TARGET_FEE}>
                <TargetFee/>
            </Panel>
            <Panel id={REGULAR_FEE}>
                <RegularFee/>
            </Panel>
            <Panel id={REGISTRATION_FEE}>
                <RegistrationFee/>
            </Panel>
            <Panel id={POSTING_FEE}>
                <PostingFee/>
            </Panel>
            <Panel id={VIEW_FEE}>
                <ViewFee/>
            </Panel>
        </View>
    )
}

export default connect(state => ({
    activePanel: state.panel.active_panel,
}))(CharityRouter);

registerServiceWorker();