import {Button, Cell, Input} from "@vkontakte/vkui";
import {Icon28RemoveCircleOutline} from "@vkontakte/icons";
import React from "react";
import {connect} from "react-redux";
import {removeTimecode, editTimecode} from "../../../actions/actionCreator";

class TimecodeItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            title: props.title,
            time: props.time,
        };
    }

    render = () => {
        const {id, title, time,} = this.state;
        const {removeTimecode, editTimecode,} = this.props;
        return (
            <Cell id={`cell${id}`} before={
                <Button className={"edit-podcast__timecode__remove"} id={id} mode={"destructive"}
                        before={<Icon28RemoveCircleOutline height={26} width={26}/>}
                        onClick={() => {
                            removeTimecode(id);
                        }}/>}>
                <div className={"edit-podcast__timecode"}>
                    <div className={"edit-podcast__timecode__title_input"}>
                        <Input type="text" name={`title${id}`} placeholder={"Название эпизода"} defaultValue={title}
                               onBlur={e => {
                                   editTimecode(id, e.target.value, time);
                                   this.setState({title: e.target.value});
                               }}/>
                    </div>
                    <div className={"edit-podcast__timecode__time_input"}>
                        <Input type="time" name={`time${id}`} placeholder={"00:00"} defaultValue={time}
                               onBlur={e => {
                                   editTimecode(id, title, e.target.value);
                                   this.setState({time: e.target.value});
                               }}/>
                    </div>
                </div>
            </Cell>
        );
    }
}

export default connect(() => ({}), {removeTimecode, editTimecode})(TimecodeItem);