import React from 'react';
import Title from './Title';
import aboutBackground from '../../images/aboutBcg.jpeg';

export default function Info () {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={ aboutBackground }
              className="img-fluid img-thumbnail"
              alt="about imagee"
              style={ { background: "var(--primaryColor)" } }
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="About Us" />
            <p className="text-lead text-muted my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nisi error veritatis vero voluptatum dolorem quod alias laudantium neque vitae!</p>
            <p className="text-lead text-muted my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nisi error veritatis vero voluptatum dolorem quod alias laudantium neque vitae!</p>
            <button className="main-link" type="button">more info &raquo;</button>
          </div>
        </div>
      </div>
    </section>
  )
}
