import React from 'react';
import './form.css'

const Form = () => {


  return (

  <div class="container">
  <form>
    <i class="fas fa-paper-plane"></i>

    <div class="input-group">
      <label>Full Name</label>
      <input type="text" placeholder="Enter your name"/>
    </div>

    <div class="input-group">
      <label>Phone No.</label>
      <input type="tel" placeholder="123 456 7890"/>
    </div>

    <div class="input-group">
      <label>Email Id</label>
      <input type="email" placeholder="Enter Email"/>
    </div>   

    <div class="input-group">
      <label>Your Message</label>
      <textarea rows="5" placeholder="Enter your message"></textarea>
    </div>

  <button>Submit</button>
 
</form>

</div>


  )

};

export default Form;
