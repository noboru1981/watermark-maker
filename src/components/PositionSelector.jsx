import React, {Component} from "react";
import {Row, Form, Col, FormGroup} from "react-bootstrap";
import PositionButton from "./PositionButton"

const ButtonGroupParentStyle = {
    display: "flex"
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
                                <PositionButton value={7} onChange={this.props.onChange}>↖︎</PositionButton>
                                <PositionButton value={8} onChange={this.props.onChange}>↑</PositionButton>
                                <PositionButton value={9} onChange={this.props.onChange}>↗</PositionButton>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={ButtonGroupParentStyle}>
                                <PositionButton value={4} onChange={this.props.onChange}>←</PositionButton>
                                <PositionButton value={5} onChange={this.props.onChange}>・</PositionButton>
                                <PositionButton value={6} onChange={this.props.onChange}>→</PositionButton>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={ButtonGroupParentStyle}>
                                <PositionButton value={1} onChange={this.props.onChange}>↙︎</PositionButton>
                                <PositionButton value={2} onChange={this.props.onChange}>↓</PositionButton>
                                <PositionButton value={3} onChange={this.props.onChange}>↘︎</PositionButton>
                            </Col>
                        </Row>
                    </FormGroup>
                </Col>
            </Row>
        );
    }
}

export default PositionSelector;
