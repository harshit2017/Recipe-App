// Recipe.js
import React from 'react';
import { render } from 'react-dom';

import Instructions from './Instructions'
import IngredientList from './IngredientList'

const Recipe = ({ name, ingredients, steps }) => {
    <section id={name.toLowerCase().replace(/ /g, "-")}> 
      <h1>{name}</h1>
      <ul className="ingredients">
           <IngredientList list={ingredients} />  
      </ul>
      <Instructions title="Cooking Instructions" steps={steps}/>
    </section>

}

export default Recipe