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
import {POSTING_FEE, VIEW_FEE} from "../../constants/common";
import PostingFee from "../PostingFee/PostingFee";
import ViewFee from "../ViewFee/ViewFee";

const CharityRouter = ({activePanel}) => {
    return (
        <View id="main" activePanel={activePanel}>
            <Panel id={CREATE_FEE}>
                <CreateFee/>
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