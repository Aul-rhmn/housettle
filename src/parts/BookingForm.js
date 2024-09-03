import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import Button from "elements/Button";
import { InputNumber, InputDate } from "elements/Form";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ itemDetails }) => {
  const [data, setData] = useState({
    duration: 1,
    date: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  });

  const navigate = useNavigate();

  const updateData = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const startDate = new Date(data.date.startDate);
    const endDate = new Date(data.date.endDate);
    const countDuration = new Date(endDate - startDate).getDate();
    
    if (data.date !== endDate) {
      setData((prevData) => ({
        ...prevData,
        duration: countDuration,
      }));
    }
  }, [data.date]);

  useEffect(() => {
    const startDate = new Date(data.date.startDate);
    const endDate = new Date(
      startDate.setDate(startDate.getDate() + +data.duration - 1)
    );
    
    if (data.duration !== endDate) {
      setData((prevData) => ({
        ...prevData,
        date: {
          ...prevData.date,
          endDate: endDate,
        },
      }));
    }
  }, [data.duration]);

  const startBooking = () => {
    const bookingData = {
      _id: itemDetails._id,
      duration: data.duration,
      date: {
        startDate: data.date.startDate,
        endDate: data.date.endDate,
      },
      price: itemDetails.price,
    };
    navigate("/checkout", { state: { bookingData } });
  };

  return (
    <div className="card bordered p-4 p-md-5">
      <h4 className="mb-3">Start Booking</h4>
      <h5 className="h2 text-teal mb-4 font-weight-bold">
        ${itemDetails.price}{" "}
        <span className="text-gray-500 font-weight-light">
          per {itemDetails.unit}
        </span>
      </h5>
  
      <div className="form-group">
        <label htmlFor="duration">How long you will stay?</label>
        <InputNumber
          max={30}
          suffix={" night"}
          isSuffixPlural
          onChange={updateData}
          name="duration"
          value={data.duration}
          className="form-control"
        />
      </div>
  
      <div className="form-group">
        <label htmlFor="date">Pick a date</label>
        <InputDate
          onChange={updateData}
          name="date"
          value={data.date}
          className="form-control"
        />
      </div>
  
      <h6 className="text-gray-500 font-weight-light mb-4">
        You will pay{" "}
        <span className="text-gray-900">
          ${itemDetails.price * data.duration} USD
        </span>{" "}
        per{" "}
        <span className="text-gray-900">
          {data.duration} {itemDetails.unit}
        </span>
      </h6>
  
      <Button
        className="btn btn-primary btn-block"
        hasShadow
        onClick={startBooking}
      >
        Continue to Book
      </Button>
    </div>
  );
};

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
};

export default BookingForm;
