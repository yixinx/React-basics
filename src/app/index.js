import React from "react";
import { render } from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            homeLink: "Home"
        }
    }
    changedHomeLink(newName){
        this.setState({
            homeLink: newName
        });
    }
    onGreet(){
        alert("Hello!");
    }
    render(){
        var name="Bob";
        var age=27;
        var user={
            name: "Anna",
            hobbies:["sport", "reading"]
    };
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={name}
                              initialAge={age}
                              user={user}
                              greet={this.onGreet}
                              changeLink={this.changedHomeLink.bind(this)}
                              initialHomeLinkName={this.state.homeLink}
                        >
                            <p>This is a children paragraph!</p>
                        </Home>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));