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

        this.fileSelectHandler = this.fileSelectHandler.bind(this);
        this.fileChangeHandler = this.fileChangeHandler.bind(this);
    }

    /**
     * component読み込み時
     */
    componentDidMount() {
        this.fileSelector = document.getElementById('fileSelector');
        this.filenameText = document.getElementById('filename');
        this.selectButton = document.getElementById('selectButton');
    }

    /**
     * ファイルが変更された際のイベントハンドラ
     * @param event
     */
    fileChangeHandler(event) {
        const files = this.fileSelector.files;

        let fileNames = '';

        // filesは単一なので直値していでも構わないが一応for...ofループでファイル名を取る
        for (let file of files) {
            fileNames += file.name
        }

        // 表示用ファイル名欄への出力
        this.filenameText.value = fileNames;
    }

    /**
     * ファイル選択ボタンクリック・テキストクリックが行われた際のイベントハンドラ
     * @param event
     */
    fileSelectHandler(event) {
        // 表示されている要素のフォーカスを外し、ファイル選択ダイアログを表示
        this.filenameText.blur();
        this.selectButton.blur();
        this.fileSelector.click();
    }

    render() {
        return (
            <div>
                <Form.Control type="file"
                              id="fileSelector"
                              onChange={this.fileChangeHandler}
                              style={{display: "none"}}
                />
                <label htmlFor="fileSelector">
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend onClick={this.fileSelectHandler}>
                            <Button id={'selectButton'}>Select Image</Button>
                        </InputGroup.Prepend>
                        <FormControl aria-describedby="basic-addon1"
                                     id={'filename'}
                                     readOnly={true}
                                     onClick={this.fileSelectHandler}
                        />
                    </InputGroup>
                </label>
            </div>
        );
    }
}

export default FileSelector;
