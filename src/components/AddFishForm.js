import React from 'react';

class AddFishForm extends React.Component {
    createFish = (e) => {
        e.preventDefault();
    }

    render(){
        return (
           <form className="fish-edit" onSubmit={this.createFish}>
               <input name="name" type="text" placehoder="Name"/>
               <input name="price" type="text" placehoder="Price"/>
               <input name="status" type="text" placehoder="Status"/>
               <select name="status">
                    <option value="available">Fresh!</option>
                    <option vaoue="unavailable">Sold Out</option>
               </select>
               <textArea name="desc" placehoder="Desc"/>
               <input name="image" type="text" placehoder="Image"/>
               <button type="submit">+ Add Fish</button>
           </form>
        )
    }
}


export default AddFishForm;