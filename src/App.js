import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import DrawArea from "./components/DrawArea";
import FileSelector from "./components/FileSelector";
import TextInput from "./components/TextInput";
import PositionSelector from "./components/PositionSelector";
import FontSelector from "./components/FontSelector";

/**
 * アプリケーション
 */
class App extends Component {
    /**
     * constructor
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            file: false,
            imgSize: {
                height: 0,
                width: 0
            },
            fontFace: "YuMincho",
            text: "",
            position: 5
        };

        this.fileChangeHandler = this.fileChangeHandler.bind(this);
        this.fontChangeHandler = this.fontChangeHandler.bind(this);
        this.textChangeHandler = this.textChangeHandler.bind(this);
        this.positionChangeHandler = this.positionChangeHandler.bind(this);
    }

    /**
     * ファイル変更
     * @param event
     */
    fileChangeHandler(event) {
        const file = event.target.files[0];

        // chromeはダイアログを閉じるとファイル選択が解除されるので空値セット
        if (!file) {
            this.setState((currentState) => {
                const newState = currentState;
                newState.file = new Blob();
                newState.imgSize = {
                    height: 0,
                    width: 0
                };

                return newState;
            });
            return;
        }

        const allowedFileTypes = ["image/png", "image/jpeg", "image/gif"];
        const isImageSelected = allowedFileTypes.indexOf(file.type) > -1;
        const img = new Image();

        if (isImageSelected) {
            img.onload = () => {
                this.setState(currentState => {
                    let newState = currentState;
                    newState.imgSize = {
                        height: img.naturalHeight,
                        width: img.naturalWidth
                    };
                    return newState;
                });

            };
            img.src = URL.createObjectURL(file);
        }

        this.setState((currentState) => {
            const newState = currentState;
            if (isImageSelected) {
                newState.file = file;
            } else {
                newState.file = false;
            }

            return newState;
        });
    }

    /**
     * フォント変更
     * @param event
     */
    fontChangeHandler(event) {
        const newValue = event.target.value;
        this.setState(currentState => {
            const newState = currentState;
            newState.fontFace = newValue;
            return newState;
        });
    }

    /**
     * テキスト変更
     * @param event
     */
    textChangeHandler(event) {
        const text = event.target.value;
        this.setState(currentState => {
            const newState = currentState;
            newState.text = text;
            return newState;
        });
    }

    /**
     * 位置変更
     * @param event
     */
    positionChangeHandler(event) {
        event.preventDefault();
        event.stopPropagation();

        const positionNumber = Number(event.target.value);

        this.setState(currentState => {
            const newState = currentState;
            newState.position = positionNumber;
            return newState;
        });
    }

    /**
     * render
     * @returns {*}
     */
    render() {
        return (
            <Container className="App">
                <Row className="">
                    <Col>
                        <DrawArea image={this.state.file}
                                  width={this.state.imgSize.width}
                                  renderText={this.state.text}
                                  font={this.state.fontFace}
                                  position={this.state.position}
                                  height={this.state.imgSize.height} />
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <FileSelector onChange={this.fileChangeHandler} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <TextInput onChange={this.textChangeHandler} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <PositionSelector onChange={this.positionChangeHandler} />
                            </Col>
                        </Row>
                        <FontSelector onChange={this.fontChangeHandler} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
