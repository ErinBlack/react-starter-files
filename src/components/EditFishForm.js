import React from "react";
import {formatPrice} from '../helpers';
class EditFishForm extends React.Component {
  handleChange = (event) => {
    console.log('in handleChange with ', event.currentTarget.value);
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value,
    }
    this.props.updatedFish(this.props.index, updatedFish); 
    }
  
  render() {
    return (
       <div className="fish-edit">
        <input 
          type="text" 
          name="name" 
          onChange={this.handleChange} 
          value={this.props.fish.name}/>
        <input 
          type="text" 
          name="price" 
          onChange={this.handleChange} 
          value={formatPrice(this.props.fish.price)}/>
        <select 
          type="text" 
          name="status" 
          onChange={this.handleChange}  
          value={this.props.fish.status}>
            <option value="available">Fresh!</option>
            <option value="unavailable">Sold Out!</option>
        </select>
        <textarea 
          name="desc" 
          onChange={this.handleChange} 
          value={this.props.fish.desc}>
        </textarea>
        <input 
          type="text" 
          name="image" 
          onChange={this.handleChange} 
          value={this.props.fish.image}/>
       </div>
    ); 
  }
}

export default EditFishForm;
