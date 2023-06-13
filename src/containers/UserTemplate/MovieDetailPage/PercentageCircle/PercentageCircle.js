import React, { Component } from 'react'

export default class PercentageCircle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { percent } = this.props;
        let strokeDash = percent * 10;
        return (
            <svg viewBox="0 0 36 36" className="circular-chart">
                <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="circle" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" strokeDasharray={[strokeDash, 100]} />
                <text x={18} y={20.35} className="percentage">{percent}</text>
            </svg>
        )
    }
}
