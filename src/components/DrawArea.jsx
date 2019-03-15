import React, {Component} from "react";

const canvasStyle = {
    minWidth: 1,
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%"
};

/**
 * 画像描画領域
 */
class DrawArea extends Component {
    /**
     * constractor
     * @param {*} props
     */
    constructor(props) {
        super(props);

        this.width = props.width;

        this.label = React.createRef();
        this.canvas = React.createRef();
    }

    /**
     *
     * @param prevProps
     * @param prevState
     * @param snapshot
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.renderPreview();
    }

    /**
     *
     */
    renderPreview() {
        const img = new Image();
        const ctx = this.canvas.current.getContext("2d");
        img.src = URL.createObjectURL(this.props.image);
        img.onload = () => {
            ctx.drawImage(img, 0, 0);
        };
    }

    /**
     *
     * @returns {*}
     */
    render() {
        return (
            <label ref={this.label} htmlFor="fileSelector">
                <canvas ref={this.canvas}
                        style={canvasStyle}
                        width={this.props.width}
                        height={this.props.height}/>
            </label>
        );
    }
}

export default DrawArea;
