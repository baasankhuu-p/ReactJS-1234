import logo from './logo.svg';
import './style.css';
import Comment from '../Comment';
import { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComment: true
    }
    console.log('====> constructor');
  }


  toggleBtn = () => {
    this.setState({ showComment: !this.state.showComment })
  }
  render() {
    console.log('====> render');
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.toggleBtn}>X</button>
          {this.state.showComment && <Comment author="Дорж" />}
          <img src={logo} className="App-logo" alt="logo" width='150px' />
        </header>
      </div>
    );
  }

}
export default App;
