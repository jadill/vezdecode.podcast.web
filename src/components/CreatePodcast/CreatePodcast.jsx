import React from 'react';
import {Button, PanelHeader, Placeholder} from "@vkontakte/vkui";

import '../../index.scss'
import {connect} from "react-redux";
import {setActivePanel} from "../../actions/actionCreator";
import Icon56AddCircleOutline from '@vkontakte/icons/dist/56/add_circle_outline';
import {NEW_PODCAST, SHARE_PODCAST} from "../../constants/common";

const CreatePodcast = ({setActivePanel}) => (
    <React.Fragment>
        <PanelHeader>Подкасты</PanelHeader>
        <Placeholder
            stretched
            icon={<Icon56AddCircleOutline />}
            header={"Добавьте первый подкаст"}
            action={
                <Button
                    align={"center"}
                    mode={"primary"}
                    size={"l"}
                    onClick={() => {
                        // setActivePanel(SHARE_PODCAST);
                        setActivePanel(NEW_PODCAST);
                    }}
                >Добавить подкаст</Button>
            }>
            Добавляйте, редактируйте и делитесь подкастами вашего сообщества.
        </Placeholder>
    </React.Fragment>
);
export default connect(state => ({}), {setActivePanel})(CreatePodcast);