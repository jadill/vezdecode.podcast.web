import React from 'react';
import {Button, PanelHeader, PanelHeaderClose, Placeholder} from "@vkontakte/vkui";

import '../../index.scss'
import {connect} from "react-redux";
import {setActivePanel} from "../../actions/actionCreator";
import Icon56CheckCircleOutline from '@vkontakte/icons/dist/56/check_circle_outline';
import {CREATE_PODCAST} from "../../constants/common";

const SharePodcast = ({setActivePanel}) => (
    <React.Fragment>
        <PanelHeader left={<PanelHeaderClose onClick={() => setActivePanel(CREATE_PODCAST)}/>}>Подкасты</PanelHeader>
        <Placeholder
            stretched
            icon={<Icon56CheckCircleOutline fill="var(--accent)"/>}
            header={"Подкаст добавлен"}
            action={
                <Button
                    align={"center"}
                    mode={"primary"}
                    size={"l"}
                >Поделиться подкастом</Button>
            }>
            Расскажите своим подписчикам о новом подкасте, чтобы получить больше слушателей.
        </Placeholder>
    </React.Fragment>
);
export default connect(state => ({}), {setActivePanel})(SharePodcast);