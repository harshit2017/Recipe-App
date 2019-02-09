import React from 'react';
import { render } from 'react-dom';

import Ingredient from './Ingredient'
const IngredientsList = ({ list }) =>
    <ul className="ingredients"> 
           {list.map((ingredient, i) =>
                        <Ingredient key={i} {...ingredient} /> )} 
     </ul>
export default IngredientsList