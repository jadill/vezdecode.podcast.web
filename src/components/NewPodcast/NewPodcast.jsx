import React from 'react';
import {
    Button,
    PanelHeader,
    PanelHeaderBack,
    Input,
    FormLayout,
    File,
    Checkbox,
    Card,
    Placeholder,
    SimpleCell,
    Subhead,
    Textarea
} from "@vkontakte/vkui";

import '../../index.scss'
import './NewPodcast.css'
import {connect} from "react-redux";
import {setActivePanel} from "../../actions/actionCreator";
import {CREATE_PODCAST, SHARE_PODCAST} from "../../constants/common";
import Icon24Document from "@vkontakte/icons/dist/24/document";
import Icon32PictureOutline from '@vkontakte/icons/dist/32/picture_outline';
import Icon24BrowserForward from '@vkontakte/icons/dist/24/browser_forward';

const NewPodcast = () => (
    <React.Fragment>
        <PanelHeader left={<PanelHeaderBack onClick={() => setActivePanel(CREATE_PODCAST)}/>}>
            Новый подкаст
        </PanelHeader>
        <FormLayout>
            <div id="podcast_card">
                <Card style={{height: "72px"}}>
                    <div id="podcast_cover">
                        <File mode="tertiary" align={"center"} style={{margin: "auto"}}>
                            <Icon32PictureOutline/>
                        </File>
                    </div>
                </Card>
                <div id="podcast_name">
                    <Subhead style={{color: "var(--text_subhead)", padding: "2px 12px 7px"}}
                             weight="regular">Название</Subhead>
                    <Input top="Название" type="text" placeholder="Введите название подкаста"/>
                </div>
            </div>
            <Textarea top="Описание подкаста" placeholder="Введите описание подкаста"/>
            <Placeholder
                header="Загрузите Ваш подкаст"
                action={<File top="Загрузите Ваш подкаст" controlSize="xl" mode="outline" before={<Icon24Document/>}/>}
            >
                Выберите готовый аудиофайл из вашего телефона и добавьте его
            </Placeholder>
            <div>
                <Checkbox>Ненормативный контент</Checkbox>
                <Checkbox>Исключить эпизод из экспорта</Checkbox>
                <Checkbox>Трейлер подкаста</Checkbox>
            </div>
            <SimpleCell
                bottom="При публикации записи с эпизодом,
                он становится доступным для всех пользователей."
                description="Всем пользователям"
                onClick={() => this.setState({activePanel: 'nothing'})}
                expandable left={<Icon24BrowserForward/>}>Кому доступен данный подкаст</SimpleCell>
            <Button disabled mode={"primary"} size={"xl"} stretched onClick={() => {
            }}>
                Далее
            </Button>

        </FormLayout>

    </React.Fragment>
);
export default connect(state => ({}), {setActivePanel})(NewPodcast);