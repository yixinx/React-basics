import React from "react";

export class Home extends React.Component{
    constructor(props){
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            changedHomeLink: "new home link"
        };
    }

    onMakeOlder(){
        this.setState({
            age: this.state.age += 3
        });
    }
    
    changeLink(){
        this.props.changeLink(this.state.changedHomeLink);
    }

    render(){
        return (
            <div>
                <p>In a new component!</p>
                <p>{this.props.name}</p>
                <p>{this.state.age}</p>
                <p>{this.state.status}</p>
                <p>{this.props.user.name}</p>
                <p>{this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li> )}</p>
                <hr/>
                {this.props.children}
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me Older!</button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr/>
                <button onClick={this.changeLink.bind(this)} className="btn btn-primary">Change Link</button>
            </div>
        );
    }
}

Home.propsTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number,
    user: React.PropTypes.object,
    children: React.PropTypes.element.isRequired,
    greet: React.PropTypes.func
}