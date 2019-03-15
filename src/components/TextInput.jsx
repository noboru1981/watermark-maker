import React, {Component} from "react";
import {InputGroup, Form, FormControl, Button} from "react-bootstrap";

/**
 * ファイルセレクタ
 */
class TextInput extends Component {

    render() {
        return (
            <Form.Group controlId="formTextInput">
                <Form.Label>表示するテキスト</Form.Label>
                <Form.Control type={"text"}/>
            </Form.Group>
        );
    }
}

export default TextInput;
