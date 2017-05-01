import React from "react";

export class Home extends React.Component{
    render(){
        console.log(this.props);
        return (
            <div>
                <p>In a new component!</p>
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
                <p>{this.props.user.name}</p>
                <p>{this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li> )}</p>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}

Home.propsTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    user: React.PropTypes.object,
    children: React.PropTypes.element.isRequired
}