import React from 'react';
import {List, PanelHeader, PanelHeaderBack, Search,} from "@vkontakte/vkui";

import '../../index.css'
import {connect} from "react-redux";
import {setActivePanel, setMusic} from "../../actions/actionCreator";
import {EDIT_PODCAST} from "../../constants/common";
import MusicItem from "./components/Item";

export const AUDIO_LIBRARY = [
    {
        id: 3201,
        icon: `${process.env.PUBLIC_URL}/avatars/nice.png`,
        sound: `${process.env.PUBLIC_URL}/sound/CLICK_Nice.mp3`,
        singer: "CLICK",
        name: "Nice"
    },
    {
        id: 3202,
        icon: `${process.env.PUBLIC_URL}/avatars/astronomia.jpg`,
        sound: `${process.env.PUBLIC_URL}/sound/Vicetone&TonyIgy-Astronomia.mp3`,
        singer: "Vicetone & Tony Igy",
        name: "Astronomia"
    },
];

class AddMusic extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({search: e.target.value});
    }

    get audio_library() {
        const search = this.state.search.toLowerCase();
        return AUDIO_LIBRARY.filter(({name, singer}) => name.toLowerCase().indexOf(search) > -1 || singer.toLowerCase().indexOf(search) > -1);
    }

    render = () => {
        const {setActivePanel} = this.props;
        return (
            <React.Fragment>
                <PanelHeader left={<PanelHeaderBack onClick={() => setActivePanel(EDIT_PODCAST)}/>}
                             separator={false}>
                    Выбрать музыку
                </PanelHeader>
                <Search value={this.state.search} onChange={this.onChange}/>
                {this.audio_library.length > 0 &&
                <List>
                    {this.audio_library.map(({id, icon, singer, name}) =>
                        (<MusicItem key={id} id={id} image={icon} singer={singer} name={name}/>)
                    )}
                </List>
                }
            </React.Fragment>
        );
    };
}

export default connect(() => ({}), {setActivePanel, setMusic})(AddMusic);