import React from 'react';
import {
    Button,
    Cell,
    Div,
    FixedLayout,
    Group,
    List,
    PanelHeader,
    PanelHeaderBack,
    Separator,
    SimpleCell,
    Text,
    Title,
} from "@vkontakte/vkui";

import '../../index.css'
import {connect} from "react-redux";
import {NEW_PODCAST, SHARE_PODCAST} from "../../constants/common";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import {setActivePanel} from "../../actions/actionCreator";

class ViewPodcast extends React.Component {
    canContinue = () => {
        const {cover, title, description, sound_file,} = this.props;
        return cover && cover !== '' && title && title !== '' && description && description !== '' && sound_file && sound_file !== '';
    }

    render = () => {
        const {
            setActivePanel,
            cover,
            title,
            description,
            timecodes,
        } = this.props;
        return (
            <React.Fragment>
                <PanelHeader left={<PanelHeaderBack onClick={() => setActivePanel(NEW_PODCAST)}/>}>
                    Новый подкаст
                </PanelHeader>
                <Div className={"view-podcast__main"}>
                    <Group>
                        <Cell
                            before={<Avatar size={72} src={cover} mode="image"/>}
                            size="l"
                            description="Кренж"
                            bottomContent="Длительность: 59:16"
                        >{title}</Cell>
                    </Group>
                    <Group header={<Title weight={"semibold"} level={"3"}>Описание</Title>}>
                        <Text weight={"regular"}>
                            {description}
                        </Text>
                    </Group>
                    <Group header={<Title weight={"semibold"} level={"3"}>Содержание</Title>}>
                        <List>
                            {timecodes.map(({id, title, time}) => (
                                <SimpleCell disabled key={id}><span style={{color: 'var(--accent)'}}>{time}</span> — {title}
                                </SimpleCell>
                            ))}
                        </List>
                    </Group>
                </Div>
                <FixedLayout vertical="bottom" style={{background: '#FFF'}}>
                    <Separator wide/>
                    <Div>
                        <Button mode={"primary"} size={"xl"} stretched
                                onClick={() => setActivePanel(SHARE_PODCAST)}
                        >Опубликовать подкаст</Button>
                    </Div>
                </FixedLayout>
            </React.Fragment>
        );
    }
}

export default connect(state => ({
    cover: state.form_new_podcast.cover,
    title: state.form_new_podcast.title,
    description: state.form_new_podcast.description,
    sound_file: state.form_new_podcast.sound_file,
    timecodes: state.timecode,
}), {setActivePanel})(ViewPodcast);