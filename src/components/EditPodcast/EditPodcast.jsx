import React from 'react';
import {Button, Card, CardGrid, CellButton, Group, Header, List, PanelHeader, PanelHeaderBack,} from "@vkontakte/vkui";

import '../../index.css'
import {connect} from "react-redux";
import {setActivePanel} from "../../actions/actionCreator";
import {Icon24AddOutline, Icon24ArrowUturnLeftOutline, Icon28Play, Icon36MusicOutline,} from "@vkontakte/icons";
import './EditPodcast.css';
import Icon28Scissors from "./icons/Scissors";
import Icon28BarChartUp from "./icons/BarChartUp";
import Icon28BarChartDown from "./icons/BarChartDown";

class EditPodcast extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            episodes: 0,
        }
    }

    render = () => {
        const {setActivePanel,} = this.props;
        return (
            <React.Fragment>
                <PanelHeader left={<PanelHeaderBack onClick={() => setActivePanel("")}/>}>
                    Редактирование
                </PanelHeader>
                <CardGrid style={{marginTop: "20px"}}>
                    <Card size="l" mode="outline">
                        <div style={{height: 26}}/>
                        <div style={{height: 96}}/>
                        <div className={"edit-podcast__controls"}>
                            <div className={"edit-podcast__controls__block"}>
                                <Button before={<Icon28Play/>}
                                        className={"edit-podcast__controls__block__button"}/>
                            </div>
                            <div className={"edit-podcast__controls__block"}>
                                <Button mode={"secondary"}
                                        before={<Icon28Scissors/>}
                                        className={"edit-podcast__controls__block__button"}/>
                                <Button before={<Icon24ArrowUturnLeftOutline width={28} height={28}/>}
                                        className={"edit-podcast__controls__block__button"} mode={"secondary"}/>
                            </div>
                            <div className={"edit-podcast__controls__block"}>
                                <Button before={<Icon36MusicOutline width={28} height={28}/>} mode={"secondary"}
                                        className={"edit-podcast__controls__block__button"}/>
                                <Button before={<Icon28BarChartUp/>} mode={"secondary"}
                                        className={"edit-podcast__controls__block__button"}/>
                                <Button before={<Icon28BarChartDown/>} mode={"secondary"}
                                        className={"edit-podcast__controls__block__button"}/>
                            </div>
                        </div>
                    </Card>
                </CardGrid>

                <Group header={<Header mode="secondary">Таймкоды</Header>}
                       description="Отметки времени с названием темы. Позволяют слушателям легче путешествовать по подкасту.">
                    <List>
                    </List>
                    <CellButton
                        before={<Button className={"edit-podcast__timecode__remove"} before={<Icon24AddOutline/>}/>}
                    >Добавить таймкод</CellButton>
                </Group>
            </React.Fragment>
        );
    };
}

export default connect(() => ({}), {setActivePanel})(EditPodcast);