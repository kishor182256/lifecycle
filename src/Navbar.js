import React, { Component } from 'react';



export default class Navbar extends Component{



    render = () =>{
        return (
            <div className="col-12">
            <h2 className="bg-primary text-center">{this.props.name}</h2>
           </div>
        )
    }

}