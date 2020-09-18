import React from 'react';
import {
    Button,
    Card,
    Checkbox,
    File,
    FormLayout,
    Input,
    PanelHeader,
    PanelHeaderBack,
    Placeholder,
    Separator,
    SimpleCell,
    Subhead,
    Textarea,
} from "@vkontakte/vkui";

import '../../index.css'
import './NewPodcast.css'
import {connect} from "react-redux";
import {
    setActivePanel,
    setActivePopout,
    setFormNewPodcastAdultContent,
    setFormNewPodcastCover,
    setFormNewPodcastDescription,
    setFormNewPodcastExcludeEpisode,
    setFormNewPodcastFile,
    setFormNewPodcastTitle,
    setFormNewPodcastTrailer
} from "../../actions/actionCreator";
import {CREATE_PODCAST, EDIT_PODCAST, SET_AVAILABILITY, VIEW_PODCAST} from "../../constants/common";
import Icon32PictureOutline from '@vkontakte/icons/dist/32/picture_outline';
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import {Icon28PodcastOutline} from "@vkontakte/icons";

class NewPodcast extends React.Component {
    canContinue = () => {
        const {cover, title, description, sound_file,} = this.props;
        return cover && cover !== '' && title && title !== '' && description && description !== '' && sound_file && sound_file !== '';
    }

    render = () => {
        const {
            setActivePanel, setActivePopout,
            cover,
            title,
            description,
            sound_file,
            adult_content,
            exclude_episode,
            trailer,
            availability,
            setFormNewPodcastCover,
            setFormNewPodcastTitle,
            setFormNewPodcastDescription,
            setFormNewPodcastFile,
            setFormNewPodcastAdultContent,
            setFormNewPodcastExcludeEpisode,
            setFormNewPodcastTrailer,
        } = this.props;
        return (
            <React.Fragment>
                <PanelHeader left={<PanelHeaderBack onClick={() => setActivePanel(CREATE_PODCAST)}/>}>
                    Новый подкаст
                </PanelHeader>
                <FormLayout>
                    <div id="podcast_card">
                        <Card style={{height: "72px"}}>
                            <div id="podcast_cover">
                                {cover && cover !== '' &&
                                <Avatar src={cover} size={72} mode="image"/>
                                }
                                {(!cover || cover === '') &&
                                <File mode="tertiary" align={"center"} style={{margin: "auto"}}
                                      defaultValue={cover}
                                      onChange={e => setFormNewPodcastCover(e.target.value)}>
                                    <Icon32PictureOutline/>
                                </File>
                                }
                            </div>
                        </Card>
                        <div id="podcast_name">
                            <Subhead style={{color: "var(--text_subhead)", padding: "2px 12px 7px"}}
                                     weight="regular">Название</Subhead>
                            <Input top="Название" type="text" placeholder="Введите название подкаста"
                                   defaultValue={title}
                                   onChange={e => setFormNewPodcastTitle(e.target.value)}/>
                        </div>
                    </div>
                    <Textarea top="Описание подкаста" placeholder="Введите описание подкаста" defaultValue={description}
                              onChange={e => setFormNewPodcastDescription(e.target.value)}/>
                    {(!sound_file || sound_file === '') &&
                    <Placeholder
                        header="Загрузите Ваш подкаст" className={"new-podcast__placeholder"}
                        action={<File controlSize="l" mode="outline" defaultValue={sound_file}
                                      onChange={e => setFormNewPodcastFile(e.target.value)}>Загрузить
                            файл</File>}
                    >
                        Выберите готовый аудиофайл из вашего телефона и добавьте его
                    </Placeholder>
                    }
                    {sound_file && sound_file !== '' &&
                    <SimpleCell
                        bottom="Вы можете добавить таймкоды и скорректировать подкаст в режиме редактирования"
                        before={<Icon28PodcastOutline/>}
                        indicator={"59:16"}
                    >{sound_file}</SimpleCell>
                    }
                    {sound_file && sound_file !== '' &&
                    <Button mode={"outline"} size={"xl"} stretched
                            onClick={() => setActivePanel(EDIT_PODCAST)}
                    >Редактировать аудиозапись</Button>
                    }
                    <Separator/>
                    <div>
                        <Checkbox onChange={e => setFormNewPodcastAdultContent(e.target.checked)}
                                  defaultChecked={adult_content}>Ненормативный
                            контент</Checkbox>
                        <Checkbox onChange={e => setFormNewPodcastExcludeEpisode(e.target.checked)}
                                  defaultChecked={exclude_episode}>Исключить
                            эпизод из
                            экспорта</Checkbox>
                        <Checkbox onChange={e => setFormNewPodcastTrailer(e.target.checked)} defaultChecked={trailer}>Трейлер
                            подкаста</Checkbox>
                    </div>
                    <SimpleCell
                        bottom="При публикации записи с эпизодом, он становится доступным для всех пользователей."
                        description={availability}
                        onClick={() => setActivePopout(SET_AVAILABILITY)}
                        expandable>Кому доступен данный подкаст</SimpleCell>
                    <Button mode={"primary"} size={"xl"} stretched disabled={!this.canContinue()}
                            onClick={() => setActivePanel(VIEW_PODCAST)}
                    >Далее</Button>

                </FormLayout>

            </React.Fragment>
        );
    }
}

export default connect(state => ({
    cover: state.form_new_podcast.cover,
    title: state.form_new_podcast.title,
    description: state.form_new_podcast.description,
    sound_file: state.form_new_podcast.sound_file,
    adult_content: state.form_new_podcast.adult_content,
    exclude_episode: state.form_new_podcast.exclude_episode,
    trailer: state.form_new_podcast.trailer,
    availability: state.form_new_podcast.availability,
}), {
    setActivePanel,
    setFormNewPodcastCover,
    setFormNewPodcastTitle,
    setFormNewPodcastDescription,
    setFormNewPodcastFile,
    setFormNewPodcastAdultContent,
    setFormNewPodcastExcludeEpisode,
    setFormNewPodcastTrailer,
    setActivePopout,
})(NewPodcast);