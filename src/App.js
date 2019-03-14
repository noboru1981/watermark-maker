import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import DrawArea from "./components/DrawArea"
import FileSelector from "./components/FileSelector"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: false,
            imgSize: {
                height: 0,
                width: 0
            }
        }

        this.fileChangeHandler = this.fileChangeHandler.bind(this)
    }

    fileChangeHandler(event) {
        const file = event.target.files[0]

        // chromeはダイアログを閉じるとファイル選択が解除されるので空値セット
        if (!file) {
            this.setState((currentState) => {
                const newState = currentState
                newState.file = new Blob()
                newState.imgSize = {
                    height: 0,
                    width: 0
                }

                return newState
            })
            return
        }

        const allowedFileTypes = ["image/png", "image/jpeg", "image/gif"]
        const isImageSelected = allowedFileTypes.indexOf(file.type) > -1
        const img = new Image()

        if (isImageSelected) {
            img.onload = () => {
                this.setState((currentState) => {
                    let newState = currentState
                    newState.imgSize = {
                        height: img.naturalHeight,
                        width: img.naturalWidth
                    }
                    return newState
                })

            }
            img.src = URL.createObjectURL(file)
        }

        this.setState((currentState) => {
            const newState = currentState
            if (isImageSelected) {
                newState.file = file
            } else {
                newState.file = false
            }

            return newState
        })
    }

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
                        <FileSelector onChange={this.fileChangeHandler}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App
