import React, {Component} from "react"

const canvasStyle = {
    minWidth: 1,
    width: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
}

/**
 * 画像描画領域
 */
class DrawArea extends Component {
    constructor(props) {
        super(props)

        this.width = props.width

        this.label = React.createRef()
        this.canvas = React.createRef()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.renderPreview();
    }

    renderPreview() {
        const img = new Image();
        const ctx = this.canvas.current.getContext('2d');
        img.src = URL.createObjectURL(this.props.image);
        img.onload = () => {
            ctx.drawImage(img, 0, 0);
        }
    }

    render() {
        return (
            <label ref={this.label} htmlFor="fileSelector">
                <canvas ref={this.canvas}
                        style={canvasStyle}
                        width={this.props.width}
                        height={this.props.height}/>
            </label>
        )
    }
}

export default DrawArea
