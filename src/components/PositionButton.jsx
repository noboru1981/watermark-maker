import React from "react";
import {ButtonGroup, ToggleButton} from "react-bootstrap";

const ButtonGroupStyle = {
    width: "100%"
};

const ButtonStyle = {
    width: "100%",
    display: "block"
};


const PositionButton = (props) => {
    return (
        <ButtonGroup style={ButtonGroupStyle}
                     toggle>

            <ToggleButton type={"radio"}
                          style={ButtonStyle}
                          name={"captionPosition"}
                          onChange={props.onChange}
                          value={props.value}>{props.children}</ToggleButton>
        </ButtonGroup>
    );
}

export default PositionButton;
