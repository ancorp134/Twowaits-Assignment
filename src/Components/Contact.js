import React, { useState } from "react";

function Contact() {
  
  const [data,setData] = useState(
    {
      fullname : "",
      email : "",
      msg : "",
    });

  const InputEvent=(event) => {
    const {name,value} =event.target;

    setData((preVal)=> {
      return {
        ...preVal,
        [name]:value, 
      };
    });
  };

  const formSubmit= (e)=>{
      e.preventDefault();
      alert(`Thank you ${data.fullname} for Contacting us , we will get back to you soon`);
      setData(
        {
          fullname: "",
          email: "",
          msg: "",
        });
  }


  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>

      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit} id="form">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Full Name
              </label>
              <input
                type="name"
                className="form-control"
                id="exampleFormControlInput1"
                name="fullname"
                value={DataTransfer.fullname}
                onChange={InputEvent}
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                name="email"
                value={DataTransfer.email}
                onChange={InputEvent}
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                
                placeholder="Enter Message.."
                name="msg"
                value={data.msg}
                onChange={InputEvent}
                required
              ></textarea>
            </div>
            <div className="col-12 contact">
              <button type="submit" className="btn-get-started">
                Send Message
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
