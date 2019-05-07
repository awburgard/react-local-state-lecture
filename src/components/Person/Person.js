import React, {Component} from 'react';

class Person extends Component {
    // constructor(props) {
    //     super(props);

    //     // this.state = {
    //     //     name: 'Scott',
    //     //     freshness: 10
    //     // }
    // }

    render() {
        return (
            <div>
                Name: { this.props.name }
                <br />
                Freshness: {this.props.freshness}
                <br />
                <button onClick={this.props.clickForFresh}>More Fresh</button>
            </div>
        )
    }
}

export default Person;