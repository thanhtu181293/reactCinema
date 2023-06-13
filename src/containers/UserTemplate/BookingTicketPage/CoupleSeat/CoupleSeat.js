import React, { Component } from 'react';
import style from './CoupleSeat.module.scss';

export default class CoupleSeat extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value1: 1,
            value2: 2,
            isSelect: false,
        }
    }
    handleClick = () => {
        this.setState({
            isSelect: !this.state.isSelect
        })
    }
    render() {
        const {isSelect, type} = this.state;
        return (
            <div className = {style.coupleSeat}>
                <div className={`seat-area ${isSelect? 'selecting show-text': ''}`}
                 onClick = {() => this.handleClick()}>
                    <span className = "box-center">
                        <span className ="seat-value">
                            {this.props.value1}
                        </span>
                        <span className ="seat-value">
                            {this.props.value2}
                        </span>
                    </span>
                    <span className = "seat-border"></span>
                </div>
            </div>
        )
    }
}
