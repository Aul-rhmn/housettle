import React from "react";
import { Fade } from "react-awesome-reveal";

import { InputText } from "elements/Form";



export default function BookingInformation(props) {
  const { data, ItemDetails, checkout } = props;


  return (
    <Fade direction="right">
      <div className="container mb-3">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-5 border-right py-5 pr-lg-5">
            <Fade delay={100}>
              <div className="card">
                <figure className="img-wrapper">
                  <img
                    className="img-cover"
                    src={ItemDetails.imageUrls[0].url}
                    alt={ItemDetails.name}
                  />
                </figure>
                <div className="row align-items-center mt-3">
                  <div className="col">
                    <div className="meta-wrapper">
                      <h5>{ItemDetails.name}</h5>
                      <span className="text-gray-500">
                        {ItemDetails.city}, {ItemDetails.country}
                      </span>
                    </div>
                  </div>
                  <div className="col-6 col-lg-auto">
                    <span className="d-lg-flex d-sm-block ">
                      ${+checkout.duration * ItemDetails.price} USD
                      <span className="d-block text-gray-500">per</span>
                      {checkout.duration} {ItemDetails.unit}
                      {+checkout.duration > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
            <div className="col-12 col-lg-5 py-5 pl-lg-5">
                <Fade delay={300}>
                    <label htmlFor="firstName">First Name</label>
                    <InputText 
                        id="firstName"
                        name="firstName"
                        value={data.firstName}
                        onChange={props.onChange}
                    />
                    <label htmlFor="lastName">Last Name</label>
                    <InputText 
                        id="lastName"
                        name="lastName"
                        value={data.lastName}
                        onChange={props.onChange}
                    />
                    <label htmlFor="email">Email Address</label>
                    <InputText 
                        id="email"
                        name="email"
                        type="email"
                        value={data.email}
                        onChange={props.onChange}
                    />
                    <label htmlFor="phone">Phone Number</label>
                    <InputText 
                        id="phone"
                        name="phone"
                        type="tel"
                        value={data.phone}
                        onChange={props.onChange}
                    />
                </Fade>
            </div>
        </div>
      </div>
    </Fade>
  );
  

}
