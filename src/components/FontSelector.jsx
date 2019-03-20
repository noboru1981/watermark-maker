import React, {Component} from "react";

const fonts = [
    {value: "YuMincho", label: "游明朝"},
    {value: "YuGothic", label: "游ゴシック"}
];

/**
 *
 */
class FontSelector extends Component {
    /**
     *
     * @returns {*}
     */
    render() {
        return (
            <select onChange={this.props.onChange}>
                {fonts.map((r, k) => <option value={r.value}
                                             key={k}>{r.label}</option>)}
            </select>
        );
    }
}

export default FontSelector;
