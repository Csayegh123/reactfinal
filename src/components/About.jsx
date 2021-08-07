import React from "react";
import chris3 from "./chris3.jpeg";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <img 
          src={chris3} 
          alt="mypic"
          height= "550px"
          width= "550px"
          />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
             I went to KU for my IT training. I studied many languages and platforms including html, css, javascript, jquery, react, mongodb, Mysql, Nosql, and I learned how to deploy on apps on React, Heroku, and Github.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
