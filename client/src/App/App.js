import React, {Component} from 'react';
import api from '../services/api'
import '../App.css';

class App extends Component{

  async componentDidMount(){
    const result = api.call('post','auth/login',{
      username: 'David',
      password: 'password'
    });

    console.log(result);
    console.log("Hello");
  }

  render(){
    return(<div>App Works</div>);
  }
}

export default App;
