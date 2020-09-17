import {Button, Cell, Input} from "@vkontakte/vkui";
import {Icon28RemoveCircleOutline} from "@vkontakte/icons";
import React from "react";
import {connect} from "react-redux";

class TimecodeItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: props.index,
            title: props.title,
            time: props.time,
        };
    }

    render = () => {
        const {index, title, time} = this.state;
        return (
            <Cell id={`cell${index}`} before={
                <Button className={"edit-podcast__timecode__remove"} id={index} mode={"destructive"}
                        before={<Icon28RemoveCircleOutline height={26} width={26}/>}/>}>
                <div className={"edit-podcast__timecode"}>
                    <div className={"edit-podcast__timecode__title_input"}>
                        <Input type="text" name={`title${index}`} placeholder={"Название эпизода"} defaultValue={title}
                               onChange={e => {
                                   this.setState({title: e.target.value});
                               }}/>
                    </div>
                    <div className={"edit-podcast__timecode__time_input"}>
                        <Input type="time" name={`time${index}`} placeholder={"00:00"} defaultValue={time}
                               onChange={e => {
                                   this.setState({time: e.target.value});
                               }}/>
                    </div>
                </div>
            </Cell>
        );
    }
}

export default connect(() => ({}), {})(TimecodeItem);