import { Component } from "react";
//! Для модалкі замість z-index в react
import { createPortal } from "react-dom";
import './Modal.css';

//! Для модалкі замість z-index в react
const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {

    componentDidMount() {
        console.log('Modal componentDidMount')

        this.handleKeyDown = (e) => {
            if (e.code === 'Escape') {
                console.log('ESC')
                this.props.onClose();
            }
        }
        window.addEventListener('keydown', this.handleKeyDown)
    }

    
    componentDidUpdate(prevProps, prevState) {
        console.log('Modal componentDidUpdate')

    }

    componentWillUnmount() {
        console.log('Modal componentWillUnmount');
        window.removeEventListener('keydown', this.handleKeyDown);
}

    
    render() {
        return createPortal (
            <div className="Modal-backgdrop">
                <div className="Modal-content">
                    {this.props.children}
                </div>
            </div>,
            modalRoot
        )
    }
}