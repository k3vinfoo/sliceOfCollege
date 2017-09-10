import React, { Component } from 'react';
import firebase from './firebase.js';

class SignUp extends Component {
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e){
      e.PreventDefault();
      const usersRef = firebase.database().ref('users');
      const user = {
        fullname: this.state.fullname,
        bday: this.state.bday,
        email: this.state.email,
        password: this.state.password
      };
      usersRef.push(user);
      this.setState({
        fullname: '',
        bday: '',
        email: '',
        password: ''
      });
  }

  constructor(){
      super();
      this.state = {
        fullname: '',
        bday: '',
        email: '',
        password: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className='app'>
        <header>
            <div className='wrapper'>
              <h1>Live the life of a College Student</h1>
              
            </div>
        </header>
        <div className='container'>
          <section className='add-item'>
              <form onSubmit = {this.handleSubmit}>
                <input type="text" name="fullname" onChange = {this.handleChange} value = {this.state.fullname} placeholder="Full Name" />
                <input type="date" name="bday" onChange = {this.handleChange} value = {this.state.bday} placeholder="birthday" />
                <input type="email" name="email" onChange = {this.handleChange} value = {this.state.email} placeholder="email" />
                <input type="password" name="password" onChange = {this.handleChange} value = {this.state.password} placeholder="password" />
                <button>Add Item</button>
              </form>
          </section>
          <section className='display-item'>
            <div className='wrapper'>
              <ul>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default SignUp;  