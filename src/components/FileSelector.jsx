import React, { Component } from "react";
import {InputGroup, Form, FormControl, Button} from "react-bootstrap";

/**
 * ファイルセレクタ
 */
class FileSelector extends Component {
    render() {
        return (
            <div>
                <Form.Control type="file" id="fileSelector" style={{ display: "none" }} />
                <label htmlFor="fileSelector">
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <Button>Select Image</Button>
                    </InputGroup.Prepend>
                    <FormControl aria-describedby="basic-addon1" readOnly={true} />
                    </InputGroup>
                </label>
            </div>
        );
    }
}

export default FileSelector;