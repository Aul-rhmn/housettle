import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

import Header from "parts/Header";
import Button from "elements/Button";
import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller,
} from "elements/Stepper";

import BookingInformation from "parts/CheckOut/BookingInformation";
import Payment from "parts/CheckOut/Payment";
import Completed from "parts/CheckOut/Completed";

import ItemDetails from "json/itemDetails.json";
import { useNavigate, useLocation } from "react-router-dom";

const Checkout = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    proofPayment: "",
    bankName: "",
    bankHolder: "",
  });
  const [checkout, setCheckout] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const onChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    window.scroll(0, 0);

    const { state } = location;

    if (state && state.bookingData) {
      setCheckout(state.bookingData);
    } else {
      navigate("/");
    }
  }, [location, navigate]);

  if (!checkout)
    return (
      <div className="text-center">
        <div
          className="row align-items-center justify-content-center text-center"
          style={{ height: "100vh" }}
        >
          <div className="col-3">
            Choose your room
            <div>
              <Button
                className="btn btn-primary mt-5"
                type="link"
                href="/"
                isLight
              >
                Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    );

  const steps = {
    bookingInformation: {
      title: "Booking Information",
      description: "Please fill up the blanks fields below",
      content: (
        <BookingInformation
          data={data}
          checkout={checkout}
          ItemDetails={ItemDetails}
          onChange={onChange}
        />
      ),
    },
    payment: {
      title: "Payment",
      description: "Kindly follow the instructions below",
      content: (
        <Payment
          data={data}
          ItemDetails={ItemDetails}
          checkout={checkout}
          onChange={onChange}
        />
      ),
    },
    completed: {
      title: "Completed, Enjoy your vacation",
      description: null,
      content: <Completed />,
    },
  };

  return (
    <>
      <Header isCentered />

      <Stepper steps={steps}>
        {(prevStep, nextStep, CurrentStep, steps) => (
          <>
            <Numbering
              data={steps}
              current={CurrentStep}
              style={{ marginBottom: 50 }}
            />

            <Meta data={steps} current={CurrentStep} />

            <MainContent data={steps} current={CurrentStep} />

            {CurrentStep === "bookingInformation" && (
              <Controller>
                {data.firstName !== "" &&
                  data.lastName !== "" &&
                  data.email !== "" &&
                  data.phone !== "" && (
                    <Fade>
                      <Button
                        className="btn mb-3"
                        type="button"
                        isBlocked
                        isPrimary
                        hasShadow
                        onClick={nextStep}
                      >
                        Continue to Book
                      </Button>
                    </Fade>
                  )}
                <Button
                  className="btn gray"
                  type="link"
                  isBlocked
                  islight
                  href={`/properties/${ItemDetails._id}`}
                >
                  Cancel
                </Button>
              </Controller>
            )}

            {CurrentStep === "payment" && (
              <Controller>
                {data.proofPayment !== "" &&
                  data.bankName !== "" &&
                  data.bankHolder !== "" && (
                    <Fade>
                      <Button
                        className="btn mb-3"
                        type="button"
                        isBlocked
                        isPrimary
                        hasShadow
                        onClick={nextStep}
                      >
                        Continue to Book
                      </Button>
                    </Fade>
                  )}
                <Button
                  className="btn"
                  type="button"
                  isBlocked
                  islight
                  onClick={prevStep}
                >
                  Cancel
                </Button>
              </Controller>
            )}

            {CurrentStep === "completed" && (
              <Controller>
                <Button
                  className="btn"
                  type="link"
                  isBlocked
                  isPrimary
                  hasShadow
                  href=""
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Back to Home
                </Button>
              </Controller>
            )}
          </>
        )}
      </Stepper>
    </>
  );
};

export default Checkout;
