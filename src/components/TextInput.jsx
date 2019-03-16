import React, {Component} from "react";
import {Form} from "react-bootstrap";

/**
 * テキスト入力ボックス
 */
class TextInput extends Component {

    render() {
        return (
            <Form.Group controlId="formTextInput">
                <Form.Label>表示するテキスト</Form.Label>
                <Form.Control type={"text"} onChange={this.props.onChange}/>
            </Form.Group>
        );
    }
}

export default TextInput;
