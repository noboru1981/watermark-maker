import React, {Component} from "react";
import {Row, Form, Col, ToggleButton, ButtonGroup, FormGroup} from "react-bootstrap";

const ButtonGroupParentStyle = {
    display: "flex"
};

const ButtonGroupStyle = {
    width: "100%"
};

const ButtonStyle = {
    width: "100%",
    display: "block"
};

/**
 *
 */
class PositionSelector extends Component {
    render() {
        return (
            <Row>
                <Col sm={4}>
                    <FormGroup>
                        <Form.Label>表示位置</Form.Label>
                        <Row>
                            <Col style={ButtonGroupParentStyle}>
                                <ButtonGroup style={ButtonGroupStyle} toggle>
                                    <ToggleButton type={"radio"} name={"captionPosition"} value={7} style={ButtonStyle}>↖</ToggleButton>
                                </ButtonGroup>
                                <ButtonGroup style={ButtonGroupStyle} toggle>
                                    <ToggleButton type={"radio"} name={"captionPosition"} value={8} style={ButtonStyle}>↑</ToggleButton>
                                </ButtonGroup>
                                <ButtonGroup style={ButtonGroupStyle} toggle>
                                    <ToggleButton type={"radio"} name={"captionPosition"} value={9} style={ButtonStyle}>↗</ToggleButton>
                                </ButtonGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={ButtonGroupParentStyle}>
                                <ButtonGroup style={ButtonGroupStyle} toggle>
                                    <ToggleButton type={"radio"} name={"captionPosition"} value={4} style={ButtonStyle}>←</ToggleButton>
                                </ButtonGroup>
                                <ButtonGroup style={ButtonGroupStyle} toggle>
                                    <ToggleButton type={"radio"} name={"captionPosition"} value={5} style={ButtonStyle}>・</ToggleButton>
                                </ButtonGroup>
                                <ButtonGroup style={ButtonGroupStyle} toggle>
                                    <ToggleButton type={"radio"} name={"captionPosition"} value={6} style={ButtonStyle}>→</ToggleButton>
                                </ButtonGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={ButtonGroupParentStyle}>
                                <ButtonGroup style={ButtonGroupStyle} toggle>
                                    <ToggleButton type={"radio"} name={"captionPosition"} value={1}>↙</ToggleButton>
                                </ButtonGroup>
                                <ButtonGroup style={ButtonGroupStyle} toggle>
                                    <ToggleButton type={"radio"} name={"captionPosition"} value={2}>↓</ToggleButton>
                                </ButtonGroup>
                                <ButtonGroup style={ButtonGroupStyle} toggle>
                                    <ToggleButton type={"radio"} name={"captionPosition"} value={3}>↘</ToggleButton>
                                </ButtonGroup>
                            </Col>
                        </Row>
                    </FormGroup>
                </Col>
            </Row>
        );
    }
}

export default PositionSelector;
