import React from 'react';
import { SubHeading } from '..';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsLetter' >
    <div className='app__newsLetter-heading' >
      <SubHeading title='News Letter' />
      <h1 className='headtext__cormorant' > Subscribe To Our NewsLetter </h1>
      <p className="p__opensans">And Never Miss Updates. </p>
    </div>

    <div className='app__newsLetter-input flex__center' >
      <input type="email" placeholder='Enter Your E-Mail Address ' />
      <button className='custom__button' > Subscribe </button>
    </div>

  </div>
);

export default Newsletter;
