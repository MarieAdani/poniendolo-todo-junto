import React from "react";

class PersonCard extends React.Component {

    constructor(props) {
        super(props)
        this.state= {
            edad: this.props.age
        }
    }

    render () {
        const {lastName, firstName, hairColor}= this.props
        return (
            <div className="row justify-content-center">
                <div className="col-3 card mb-3 p-3">
                    <h2>{lastName}, {firstName}</h2>
                    <p>Age: {this.state.edad}</p>
                    <p>Hair Color: {hairColor}</p>
                    <button className= "btn btn-info" onClick={this.cumple}>Birthday Button for {firstName}</button>
                </div>
            </div>
        )
    }

    cumple = () => {
        let nuevaEdad = this.state.edad +1;
        this.setState({edad: nuevaEdad});
    }

}

export default PersonCard;