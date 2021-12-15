import React, { Component } from 'react';

class ClickOutside extends Component {
    componentWillMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    };
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    };

    handleClick = (e) => {
        if (this.node.contains(e.target)) {
            return;
        }
    };
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
export default ClickOutside;
