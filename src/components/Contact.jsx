import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObject = new FormData(e.target);

    formDataObject.append("access_key", "3eed4094-9572-4c17-8d3d-28b0bf807289");

    const object = Object.fromEntries(formDataObject);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("😊 Successfully Submitted!", {
        position: "top-center",
        autoClose: 3000, // Close the notification after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        description: "",
      });
    } else {
      toast.error("Submission Failed. Please try again.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div>
      <style>
        {`
          .contact-form-container {
            width: 100%;
            max-width: 450px;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left:39%;
            padding: 45px;
            border: 2px solid #FCC54C;
            margin-top: -8%;
          }
          .contact-info {
            text-align: center;
            margin-left: 29px;
            margin-top: -42px;
            margin-bottom: -24px;
          }
          .contact-info h2 {
            font-size: 25px;
            margin-bottom: 10px;
            margin-top: 10px;
          }
          .contact-info h4 {
            margin-bottom: 10px;
            font-size: 21px;
          }
          .contact-info h3 {
            margin-bottom: 10px;
            font-size: 20px;
          }
          .contact-info address, .contact-info p {
            margin-left: -70px;
          }
          .icon-right1 {
            align-items: end;
            margin-left: 48%;
          }
          .icon-right2 {
            align-items: end;
            margin-left: 42%;
            margin-bottom: 1%;
          }
          .icon-right3 {
            align-items: end;
            margin-left: 24%;
          }
          .hr-line-h {
            border-top: 1px solid #f1c40f;
            margin: -10px 0;
            display: block;
            width: 100%;
          }
          .hr-line {
            border-top: 1px solid #f1c40f;
            margin: 7px 0;
            display: block;
            width: 100%;
          }
          .hr-line1 {
            margin-bottom: 12px;
            margin-top: 19px;
            border-top: 1px solid #f1c40f;
            width: 124%;
            margin-left: -72px;
          }
          .line {
            margin-right: -195px;
          }
          .contact-info span {
            display: inline-block;
          }
          @media (max-width: 600px) {
            .contact-info-container {
              padding: 10px;
              margin: 5px;
            }
          }
          .contact-info a {
            text-decoration: none;
            color: black;
          }
          .contact-info a:hover {
            text-decoration: underline;
          }
          .form-query {
            width: 79vw;
            margin-left: 14%;
            margin-bottom: 40px;
            margin-top: 57px;
            text-align: center;
          }
          .Heading {
            text-align: left;
            padding: 10px;
            margin-left: 55px;
            height: 54px;
            width: 80%;
            border: 2px solid rgb(255, 248, 242);
            background-color: rgba(252, 197, 76, 0.44);
            font-size: 24px;
            font-weight: bold;
            color: #333;
          }
          .form-container {
            background-color: #FFF8E1;
            max-width: 640px;
            width: 100%;
            padding: 1rem;
            margin: 20px auto;
            border: 1px solid #FCC54C;
          }
          .form-container form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          .form-container label {
            margin-bottom: 0.5rem;
            font-weight: bold;
          }
          .form-container input,
          .form-container textarea {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          button[type="submit"] {
            width: fit-content;
            background-color: #FFB74D;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            cursor: pointer;
          }
          button[type="submit"]:hover {
            background-color: #FFA726;
          }
          .image-container {
            margin-left: 308px;
            margin-top: 34%;
          }
          .bg-body-secondary {
            width: 60vw;
            margin: -25% 14% 3% 1%;
            height: 250px;
          }
          .rounded-4 {
            width: 61vw;
            margin-left: 3%;
            margin-top: -38%;
            height: 250px;
            background: linear-gradient(180deg, #F0EDEC 0%, #B5DFF3 100%);
          }
          .contact-us-heading {
            position: relative;
            margin-top: -12%;
            margin-bottom: 8%;
            left: 45%;
            transform: translate(-50%, -50%);
            z-index: 1;
            text-align: center;
            width: 100%;
            color: #fff;
          }
          .box{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 76vw;
            margin-left: 14%;
          }
        `}
      </style>
      <div>
        <div className="image-container">
          <div className="bg-body-secondary position-absolute"></div>
          <div>
         
            <img className="rounded-4 position-relative" alt="background" 
            src="https://i.ibb.co/0GZFzQf/contact.jpg"
            />
          
            <h2 className="contact-us-heading">Contact Us</h2>
          </div>
        </div>
      </div>
      <div>
        <div className="contact-form-container">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <h3 className="hr-line-h"></h3>
            <h4>Office Address</h4>
            <address style={{ display: "flex", textAlign: "justify" }}>
              CoDA Lab (Room No. S-307)
              <br />
              Department Of Computer Science And Engineering
              <br />
              Indian Institute Of Technology (IIT) Roorkee
              <br />
              Roorkee 247667, Uttarakhand, India
            </address>
            <p>
              <span className="hr-line"></span>(+91)-1332-284374{" "}
              <FontAwesomeIcon icon={faPhone} className="icon-right1" />
            </p>
            <span className="hr-line1"></span>
            <p>
              <span className="line"></span> Codaiitr@Gmail.Com <br />
              Sudiproy.Fcs@Iitr.Ac.In{" "}
              <FontAwesomeIcon icon={faEnvelope} className="icon-right2" />
            </p>
            <p>
              <span className="hr-line"></span>Codalab_iitr@Googlegroups.Com{" "}
              <FontAwesomeIcon icon={faHome} className="icon-right3" />
            </p>
          </div>
        </div>
      </div>
      <div className="box" style={{ marginBottom: "7%" }}>
        <div className="form-query">
          <h2 className="Heading">For Any Queries</h2>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Phone Number:</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Description:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#FFB74D",
                ":hover": { backgroundColor: "#FFA726" },
                width: "fit-content",
              }}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Contact;
