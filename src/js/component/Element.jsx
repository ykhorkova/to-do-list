import React from 'react';
import PropTypes from 'prop-types';

export class Element extends React.Component{
    
    render(){
        return(
            <li className="list-group">{this.props.taskTitle}</li>
            );
    }
    
}

Element.propTypes = {
  taskTitle: PropTypes.string
};