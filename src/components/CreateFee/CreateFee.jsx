import React from 'react';
import {Button, PanelHeader, Placeholder} from "@vkontakte/vkui";

import './CreateFee.css'
import '../../index.scss'
import {connect} from "react-redux";
import {setActivePanel} from "../../actions/actionCreator";
import {TYPE_OF_FEE} from "../../constants/common";

const CreateFee = ({setActivePanel}) => (
    <React.Fragment>
        <PanelHeader>Пожертвования</PanelHeader>
        <Placeholder stretched action={<Button align={"center"} mode={"primary"} size={"l"} onClick={() => {
            setActivePanel(TYPE_OF_FEE);
        }}>Создать сбор</Button>}>
            У вас пока нет сборов.<br/>
            Начните доброе дело.
        </Placeholder>
    </React.Fragment>
);
export default connect(state => ({}), {setActivePanel})(CreateFee);