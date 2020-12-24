import React from 'react'
import styled from 'styled-components'
export default class Button extends React.Component{
    render(){
        return(
            <a className="button" href={this.props.href}>{this.props.children}</a>
        )
    }
}

