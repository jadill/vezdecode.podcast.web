import React from 'react';
import {
    Button,
    Caption,
    Card,
    CardGrid,
    CellButton,
    Group,
    Header,
    List,
    PanelHeader,
    PanelHeaderBack,
} from "@vkontakte/vkui";

import '../../index.css'
import {connect} from "react-redux";
import {addTimecode, setAccretion, setActivePanel, setActivePopout, setFading} from "../../actions/actionCreator";
import {Icon24AddOutline, Icon24ArrowUturnLeftOutline, Icon28Play, Icon36MusicOutline,} from "@vkontakte/icons";
import './EditPodcast.css';
import Icon28Scissors from "./icons/Scissors";
import Icon28BarChartUp from "./icons/BarChartUp";
import Icon28BarChartDown from "./icons/BarChartDown";
import TimecodeItem from "./components/Item";
import {ADD_MUSIC, MUSIC_ACTION} from "../../constants/common";
import {AUDIO_LIBRARY} from "../AddMusic/AddMusic";

class EditPodcast extends React.Component {

    render = () => {
        const {
            setActivePanel, timecodes, addTimecode, setFading, setAccretion, fading_enabled, accretion_enabled,
            music_id, setActivePopout,
        } = this.props;
        return (
            <React.Fragment>
                <PanelHeader left={<PanelHeaderBack onClick={() => setActivePanel("")}/>}>
                    Редактирование
                </PanelHeader>
                <CardGrid style={{marginTop: "20px"}}>
                    <Card size="l" mode="outline">
                        <div style={{height: 26}}/>
                        <div className={"edit-podcast__spades"}>
                            {music_id && AUDIO_LIBRARY.filter(({id}) => id === music_id).map(item => (
                                <Caption weight={"regular"} level={"3"}
                                         className={"edit-podcast__spades__text edit-podcast__spades__text_left_top"}>{item.singer} - {item.name}</Caption>))}
                            {accretion_enabled && <Caption weight={"regular"} level={"3"}
                                                           className={"edit-podcast__spades__text edit-podcast__spades__text_left_bottom"}>Появление:
                                вкл.</Caption>}
                            {fading_enabled && <Caption weight={"regular"} level={"3"}
                                                        className={"edit-podcast__spades__text edit-podcast__spades__text_right_bottom"}>Затухание:
                                вкл.</Caption>}
                        </div>
                        <div className={"edit-podcast__controls"}>
                            <div className={"edit-podcast__controls__block"}>
                                <Button before={<Icon28Play/>}
                                        className={"edit-podcast__controls__block__button"}/>
                            </div>
                            <div className={"edit-podcast__controls__block"}>
                                <Button mode={"secondary"} disabled
                                        before={<Icon28Scissors/>}
                                        className={"edit-podcast__controls__block__button"}/>
                                <Button before={<Icon24ArrowUturnLeftOutline width={28} height={28}/>} disabled
                                        className={"edit-podcast__controls__block__button"} mode={"secondary"}/>
                            </div>
                            <div className={"edit-podcast__controls__block"}>
                                <Button before={<Icon36MusicOutline width={28} height={28}/>}
                                        mode={music_id ? "primary" : "secondary"}
                                        onClick={() => {
                                            if (music_id) {
                                                setActivePopout(MUSIC_ACTION);
                                            } else {
                                                setActivePanel(ADD_MUSIC);
                                            }
                                        }}
                                        className={"edit-podcast__controls__block__button"}/>
                                <Button before={<Icon28BarChartUp/>} mode={accretion_enabled ? "primary" : "secondary"}
                                        className={"edit-podcast__controls__block__button"}
                                        onClick={() => setAccretion(!accretion_enabled)}/>
                                <Button before={<Icon28BarChartDown/>} mode={fading_enabled ? "primary" : "secondary"}
                                        className={"edit-podcast__controls__block__button"}
                                        onClick={() => setFading(!fading_enabled)}/>
                            </div>
                        </div>
                    </Card>
                </CardGrid>

                <Group header={<Header mode="secondary">Таймкоды</Header>}
                       description="Отметки времени с названием темы. Позволяют слушателям легче путешествовать по подкасту.">
                    <List>
                        {timecodes.map(({id, title, time}) => (
                            <TimecodeItem key={id} id={id} title={title} time={time}/>
                        ))}
                    </List>
                    <CellButton
                        before={<Button className={"edit-podcast__timecode__remove"} before={<Icon24AddOutline/>}/>}
                        onClick={() => {
                            addTimecode((new Date()).getTime());
                        }}
                    >Добавить таймкод</CellButton>
                </Group>
            </React.Fragment>
        );
    };
}

export default connect(state => ({
    timecodes: state.timecode,
    fading_enabled: state.effects.fading,
    accretion_enabled: state.effects.accretion,
    music_id: state.effects.music,
}), {setActivePanel, addTimecode, setFading, setAccretion, setActivePopout})(EditPodcast);