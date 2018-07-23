import React from "react";
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();
  goToStore = (e) => {
    // 1. Stop page from re-loading
    e.preventDefault();
    console.log('in goToStore');
    // 2. get the text from input
    console.log('this.myInput', this.myInput);
    // 3. Change the page to / store/ whatever-the-entered
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input 
          type="text" 
          ref={this.myInput}
          required 
          placeholder="Store Name" 
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
