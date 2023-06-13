import React, { Component } from 'react';
import {isNullorUnDefined} from '../../../../assets/utils/utils';
import style from './TrailerPopup.module.scss';
import { connect } from 'react-redux';


 class Trailerpopup extends Component {
    constructor(props) {
        super(props)
    }
    onClose = () => {
        this.props.dispatch({
            type: 'CLOSE_TRAILER_POPUP',
            src: ''
        })
    }
    render() {
        let {src} = this.props;
        return (
                <div className = {`${style.trainerModal} modal`} id="trainerModal" role = "dialog" data-backdrop="static" data-keyboard="false">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-body">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.onClose}>
                                    <span aria-hidden="true">×</span>
                                </button>
                                <iframe width="900" height="530" src = {src} frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
                            </div>
                        </div>
                    </div>
                </div>

          );
    }
}

const mapStatetoProps = (state) => {
    return {
        src : state.TrailerPopupReducers.src
    }
}

export default connect(mapStatetoProps, null)(Trailerpopup)