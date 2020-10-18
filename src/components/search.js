import { Component } from "react";
import React from 'react';

class Search extends React.Component{
    state={
        term:'Search'
    };

    handleChange = (event) =>{
        this.setState({
            term:event.target.value
        });
    };

    handleSubmit = event =>{
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render()
    {
        return(
            <div class="ui search">
                   <form onSubmit={this.handleSubmit} className='ui form'>
                        <div class="ui icon input">
                        <input onChange={this.handleChange} type="text" value= {this.state.term}/>
                        <i class="search icon"></i>
                        </div>
                    </form>
          </div>
        )
    }
}

export default Search;