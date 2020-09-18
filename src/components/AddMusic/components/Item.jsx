import {Avatar, SimpleCell} from "@vkontakte/vkui";
import {Icon24MoreHorizontal} from "@vkontakte/icons";
import React from "react";
import {connect} from "react-redux";
import {setMusic, setActivePanel} from "../../../actions/actionCreator";
import {EDIT_PODCAST} from "../../../constants/common";

class MusicItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
        };
    }

    render = () => {
        const {id} = this.state;
        const {singer, image, name, setMusic, setActivePanel} = this.props;
        return (
            <SimpleCell key={id} before={<Avatar mode="image" src={image}/>}
                        description={singer}
                        after={<Icon24MoreHorizontal fill="var(--accent)"/>}
                        onClick={() => {
                            setMusic(id);
                            setActivePanel(EDIT_PODCAST);
                        }}>
                {name}
            </SimpleCell>
        );
    }
}

export default connect(() => ({}), {setMusic, setActivePanel})(MusicItem);