import React, {Component} from "react";

const fonts = [
    {value: "serif", label: "serif"},
    {value: "sans-serif", label: "sans-serif"}
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
                {fonts.map((r, k) => <option value={r.value} key={k}>{r.label}</option>)}
            </select>
        );
    }
}

export default FontSelector;
