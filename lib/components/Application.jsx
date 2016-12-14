import React, {Component} from 'react';
import InputContainer from '../containers/InputContainer';
import OutputContainer from '../containers/OutputContainer';

class Application extends Component {

  render() {

    // JSON.parse(localStorage.getItem('items'));

    return (
      <div>
        <h1 id="top-of-page">Flash Shopper</h1>
        <InputContainer />
        <OutputContainer />
        <a href="#top-of-page"><button id="top-of-page-button" type="button">Top of Page</button></a>
      </div>
    );
  }

}


export default Application;
