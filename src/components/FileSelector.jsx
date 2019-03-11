import React, {Component} from "react";
import {InputGroup, Form, FormControl, Button} from "react-bootstrap";

/**
 * ファイルセレクタ
 */
class FileSelector extends Component {
    /**
     * constructor
     * @param props
     */
    constructor(props) {
        super(props);

        this.state = {
            fileName: ""
        }

        this.file = React.createRef();
        this.fileName = React.createRef();
        this.button = React.createRef();

        this.fileSelectHandler = this.fileSelectHandler.bind(this);
        this.fileChangeHandler = this.fileChangeHandler.bind(this);
    }

    /**
     * ファイルが変更された際のイベントハンドラ
     * @param event
     */
    fileChangeHandler(event) {
        this.props.onChange(event);

        const file = event.target.files[0];

        this.setState(() => {
            const newState = {};
            if (file) {
                newState.fileName = file.name;
            } else {
                newState.fileName = "";
            }

            return newState;
        });
    }

    /**
     * ファイル選択ボタンクリック・テキストクリックが行われた際
     * @param event
     */
    fileSelectHandler(event) {
        // 表示されている要素のフォーカスを外し、ファイル選択ダイアログを表示
        this.file.current.click();
        this.fileName.current.blur();
        this.button.current.blur();
    }

    /**
     * render
     * @returns {*}
     */
    render() {
        return (
            <div>
                <Form.Control type="file"
                              id="fileSelector"
                              name={"fileSelector"}
                              onChange={this.fileChangeHandler}
                              ref={this.file}
                              style={{display: "none"}}
                />
                <InputGroup as={"label"} htmlFor={"fileSelector"} className="mb-3">
                    <InputGroup.Prepend onClick={this.fileSelectHandler}>
                        <Button id={'selectButton'}
                                ref={this.button}>Select Image</Button>
                    </InputGroup.Prepend>
                    <FormControl aria-describedby="basic-addon1"
                                 id={'filename'}
                                 ref={this.fileName}
                                 readOnly={true}
                                 onClick={this.fileSelectHandler}
                                 value={this.state.fileName}
                    />
                </InputGroup>
            </div>
        );
    }
}

export default FileSelector;
