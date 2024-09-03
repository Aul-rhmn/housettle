import React from "react";
import Star from "elements/Star";
import TestimonyAccent from "assets/images/frame-testimonial.jpg";
import Button from "elements/Button";
import { Fade } from "react-awesome-reveal";

export default function Testimony({ data }) {
  return (
    <Fade direction="right">
    <section className="container">
      <div className="row align-items-center">
        <div className="col-12 col-lg-auto mb-5 testimonial-hero-wrapper">
          <div className="testimonial-hero">
            <img
              src={data.imageUrl}
              alt="Testimonial"
              className="testimonial-image"
            />
            <img
              src={TestimonyAccent}
              alt="Testimonial frame"
              className="testimonial-frame"
            />
          </div>
        </div>
        <div className="col testimonial-container">
          <h4 className="testimonial-name">{data.name}</h4>
          <Star className="testimonial-star" value={data.rate} width={35} height={35} spacing={4} />
          <h5 className="testimonial-content">
            {data.content}
          </h5>
          <span className="testimonial-family">
            {data.familyName}, {data.familyOccupation}
          </span>
          <div>
            <Button
              className="btn px-5 story-button"
              style={{ marginTop: 40 }}
              hasShadow
              isPrimary
              type="link"
              href={`/testimonial/${data._id}`}
            >
              Read Their Story
            </Button>
          </div>
        </div>
      </div>
    </section>
    </Fade>
  );
}
