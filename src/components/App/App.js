import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from '../Person/Person';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        users: [
          // {
          //   name: 'Luke',
          //   freshness: 3,
          // },
        ],
        user: 'Luke',
        freshness: 3,
    };
  }

  // changeUser = (event) => {
  //   console.log('event.target.value: ', event.target.value);
  //   this.setState({
  //     user: event.target.value,
  //   });
  // }

  // changeFreshness = (event) => {
  //   const newFreshness = event.target.value;
  //   this.setState({
  //     freshness: newFreshness,
  //   })
  // }

  // clickForFresh = (event) => {
  //   console.log('clickForFresh: ', event.target);
  // }

  addMoreUserNames = (event) => {
    const newUser = this.state.user;
    const newFreshness = this.state.freshness;
    this.setState({
      users: [...this.state.users, {
        name: newUser,
        freshness: newFreshness,
      }],
    });
  }

  changeUserValue = (event) => {
    const valueType = event.target.dataset.type;
    const newValue = event.target.value;
    console.log('valueType', valueType);
    console.log('newValue', newValue);

    console.log('state object', {
      [valueType]: newValue
    });
    
    
    this.setState({
      [valueType]: newValue
    });
  }

  render() {
    // DON'T WORRY ABOUT THIS
    const peopleComponents = this.state.users.map((userData, userIdx) => {
      return <Person key={userIdx}
        name={userData.name}
        clickForFresh={this.clickForFresh}
        freshness={userData.freshness}
      />
    });

    return (
      <div className="App">
        <h1>React Local State</h1>
        <input type="text"
          data-type="user"
          onChange={this.changeUserValue}
          placeholder="New User" />
        <br />
        <input type="text"
          data-type="freshness"
          onChange={this.changeUserValue}
          placeholder="New Freshness" />    

        <p>User of {this.state.user} is {this.state.freshness} fresh!!!</p>    

        { peopleComponents }

        <br />
        <button onClick={this.addMoreUserNames}>Add More Users</button>

      </div>
    )
  }
}

export default App;
