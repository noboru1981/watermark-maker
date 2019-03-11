import React, {Component} from "react";

/**
 * 画像描画領域
 */
class DrawArea extends Component {
    constructor(props) {
        super(props);

        this.canvas = React.createRef();
    }

    render() {
        return (
            <div>
                <label htmlFor="fileSelector">
                    <canvas ref={this.canvas}
                            style={
                                {
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    background: "orange"
                                }
                            }
                            width={this.props.width}
                            height={this.props.height}/>
                </label>
            </div>
        );
    }
}

export default DrawArea;
