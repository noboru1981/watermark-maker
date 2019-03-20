import React, {Component} from "react";

const POSITION_UPPER_CENTER = 8;
const POSITION_UPPER_RIGHT = 9;
const POSITION_MIDDLE_LEFT = 4;
const POSITION_MIDDLE_CENTER = 5;
const POSITION_MIDDLE_RIGHT = 6;
const POSITION_BOTTOM_LEFT = 1;
const POSITION_BOTTOM_CENTER = 2;
const POSITION_BOTTOM_RIGHT = 3;

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

        this.x = 0;
        this.y = 0;

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
        if (!this.props.image) return;

        const img = new Image();
        const ctx = this.canvas.current.getContext("2d");


        img.src = URL.createObjectURL(this.props.image);
        img.onload = () => {
            ctx.clearRect(0, 0, this.canvas.current.width, this.canvas.current.height);
            ctx.globalAlpha = 1;
            ctx.drawImage(img, 0, 0);

            this.setPosition();

            const fontSize = `${0.06 * this.canvas.current.height}px`;

            ctx.globalAlpha = 0.8;
            ctx.font = `bold ${fontSize} '${this.props.font}'`;
            ctx.fillStyle = "blue";
            ctx.textAlign = this.textAlign;
            ctx.textBaseline = this.textBaseline;
            ctx.fillText(this.props.renderText, this.x, this.y);
        };
    }

    setPosition() {
        switch (this.props.position) {
            case POSITION_UPPER_CENTER:
            case POSITION_MIDDLE_CENTER:
            case POSITION_BOTTOM_CENTER:
                this.textAlign = "center";
                this.x = this.canvas.current.width / 2;
                break;
            case POSITION_UPPER_RIGHT:
            case POSITION_MIDDLE_RIGHT:
            case POSITION_BOTTOM_RIGHT:
                this.textAlign = "right";
                this.x = this.canvas.current.width;
                break;
            default:
                this.textAlign = "left";
                this.x = 0;
                break;
        }

        switch (this.props.position) {
            case POSITION_MIDDLE_LEFT:
            case POSITION_MIDDLE_CENTER:
            case POSITION_MIDDLE_RIGHT:
                this.textBaseline = "middle";
                this.y = this.canvas.current.height / 2;
                break;
            case POSITION_BOTTOM_LEFT:
            case POSITION_BOTTOM_CENTER:
            case POSITION_BOTTOM_RIGHT:
                this.textBaseline = "bottom";
                this.y = this.canvas.current.height;
                break;
            default:
                this.textBaseline = "top";
                this.y = 0;
                break;
        }
    }

    /**
     *
     * @returns {*}
     */
    render() {
        return (
            <label ref={this.label}
                   htmlFor="fileSelector">
                <canvas ref={this.canvas}
                        style={canvasStyle}
                        width={this.props.width}
                        height={this.props.height} />
            </label>
        );
    }
}

export default DrawArea;
