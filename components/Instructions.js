// Instructions.js
import React from 'react';
import { render } from 'react-dom';

const Instructions = ({ title, steps }) => (<section className="instructions">
                            <h2>{title}</h2> 
                              <ol>{steps.map((step, i) =>  
                              <li key={i}>{step}</li>)}</ol>
                          </section>);

export default Instructions;