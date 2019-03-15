import React, {Component} from "react";
import {Container, Row, Col} from "react-bootstrap";
import DrawArea from "./components/DrawArea";
import FileSelector from "./components/FileSelector";
import TextInput from "./components/TextInput";
import PositionSelector from "./components/PositionSelector";
import FontSelector from "./components/FontSelector";

/**
 *
 */
class App extends Component {
    /**
     *
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
            fontFace: "serif"
        };

        this.fileChangeHandler = this.fileChangeHandler.bind(this);
        this.fontChangeHandler = this.fontChangeHandler.bind(this);
    }

    /**
     *
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
                                  height={this.state.imgSize.height}/>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <FileSelector onChange={this.fileChangeHandler}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <TextInput/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <PositionSelector/>
                            </Col>
                        </Row>
                        <FontSelector onChange={this.fontChangeHandler}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
