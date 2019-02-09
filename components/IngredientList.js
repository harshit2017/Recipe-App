import Ingredient from './Ingredient'
import React from 'react';
import { render } from 'react-dom';

const IngredientList = ({ list }) => {
    <ul className="ingredients">
  list.map((ingredient,i))=><Ingredient key={i} {...ingredient}/>
  </ul>
}

export default IngredientList;