import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import ItemDetails from "json/itemDetails.json";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";

import Testimony from "parts/Testimony";
import Footer from "parts/Footer";
import Activities from "parts/Activities";
import { useNavigate } from "react-router-dom";


const DetailsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }, []);

  const startBooking = (bookingData) => {
    navigate.push("/checkout");
  };

  const breadcrumb = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  return (
    <>
      <Header />
        <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
      <Fade direction="up">
        <FeaturedImage data={ItemDetails.imageUrls} />
      </Fade>
      <section className="container">
        <div className="row">
          <div className="col-12 col-lg-7">
            <Fade direction="up">
              <PageDetailDescription data={ItemDetails} />
            </Fade>
          </div>
          <div className="col-12 col-lg-5">
            <Fade direction="up">
              <BookingForm itemDetails={ItemDetails} />
            </Fade>
          </div>
        </div>
      </section>
      <Activities data={ItemDetails.activities} />
      <Testimony data={ItemDetails.testimonial} />
      <Footer />
    </>
  );
};

export default DetailsPage;
