import React from "react";

// This is a stateless component
// We make it stateless because there is no state management in this component
// So we define the who component as a constant variable, using a fat arrow function
// The component can still accept props
export const Header = (props) => {
    return(
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><a href="#">{props.homeLink}</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
