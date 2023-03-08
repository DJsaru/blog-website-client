import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Head from './Heading';

const name = 'saru';
const age = '21';
const link = 'link website';
const image = 'img link';


const root = ReactDOM.createRoot(document.getElementById('root'));

const [count, setcount] = useState (0);

const num = () => {
    setcount(count + 2);
};

root.render( 
    <div> 
        <h1> The { count } is calculating </h1>

        {/* <h1> I am { name } </h1>/ */}
        < Head />   export , import , writteenn

        <p>I am { age } years old</p>

        <h1> {` i am ${name} i am ${age} years old `}   </h1>

        < a href={ link } ></a>
        < img src= { image } />
    </div>
);

