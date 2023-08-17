import { Component } from "react";
import './Modal.css';

export default class Modal extends Component {

    componentDidMount() {
        console.log('Modal componentDidMount')
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log('Modal componentDidUpdate')
    }
    
    render() {
        return (
            <div className="Modal-backgdrop">
                <div className="Modal-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}