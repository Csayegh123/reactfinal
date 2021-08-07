import React from "react";
import chris2 from "./chris2.jpeg";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <img 
          src={chris2} 
          alt="mypic"
          height= "550px"
          width= "550px"
          />
          </div>
          <div class="col-lg-5">
     
            <h1 class="font-weight-light">Contact</h1>
            <p>
             You may email at sayegh.topher@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
