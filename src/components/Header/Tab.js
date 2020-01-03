import React, { Component } from 'react';
import '../../styles/Header/Tab.css'

class Tab extends Component {    
    render() {
        let status = (this.props.selected ? "tab selected" : "tab")
        return (
            <div className={status} onClick={this.props.onClick}>
              {this.props.tabName}
            </div>
        )
    }
}

export default Tab
