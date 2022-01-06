/*shippingAddressScreen as ApplicationScreeen.
saveShippingAddress as saveApplicationDetails.
shippingemail as applicationdetails.
*/
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { saveApplicationDetails } from '../actions/cartActions';
import CheckoutSteps from "../components/CheckoutSteps";

export default function ApplicationScreen(props) {
    
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const cart = useSelector((state) => state.cart);
    const { applicationdetails } = cart;
    const navigate = useNavigate();
    if (!userInfo) {
        navigate('/signin');
    }
    const [id, setId] = useState(applicationdetails.id);
    const [email, setEmail] = useState(applicationdetails.email);
    const [name, setName] = useState(applicationdetails.name);
    const [phone, setPhone] = useState(applicationdetails.phone);
    const [college, setCollege] = useState(applicationdetails.college);
    const [degree, setDegree] = useState(applicationdetails.degree);
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            saveApplicationDetails({ id, email, name, phone, college, degree })
          );
        navigate('/apply');
      };
    return (
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Application Form</h1>
        </div>
        <div>
          <label htmlFor="fullName">Id</label>
          <input
            type="text"
            id="id"
            placeholder="Enter Id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            placeholder="Enter postal code"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="college">College</label>
          <input
            type="text"
            id="college"
            placeholder="Enter college"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            id="degree"
            placeholder="Enter degree"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}