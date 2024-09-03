import React from "react";
import { Fade } from "react-awesome-reveal";
import ImageHero from "assets/images/img-hero.jpg";
import ImageHeroF from "assets/images/img-hero-frame.jpg";

import Button from "elements/Button";
import formatNumber from "utlts/formatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <Fade direction="up">
    <section className="container pt-4">
      <div className="hero-content">
        <div className="col-lg-6 hero-text">
          <h1 className="font-weight-bold line-height-1 mb-3">
            Rediscover Serenity, <br />
            Unveil Dream Vacation
          </h1>
          <p
            className="mb-4 font-weight-normal text-gray-600"
            style={{ lineHeight: "170%" }}
          >
            Embark on Unforgettable Journeys, by Capturing Treasured Memories to
            Last a Lifetime.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>
          <div className="data-travelers mt-4 justify-content-lg-start">
            <div className="icon mr-4" >
              <img
                width="36"
                height="36"
                src="/images/ic_traveler.svg"
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.travelers)}{" "}
                <span className="text-gray-600 font-weight-light">
                  Travelers
                </span>
              </h6>
            </div>
            <div className="icon" style={{ marginRight: 15 }}>
              <img
                width="36"
                height="36"
                src="/images/ic_treasure.svg"
                alt={`${props.data.treasures} Treasures`}
              />

              <h6 className="mt-3">
                {formatNumber(props.data.treasures)}{" "}
                <span className="text-gray-600 font-weight-light">
                  Treasures
                </span>
              </h6>
            </div>
            <div className="icon">
              <img
                width="36"
                height="36"
                src="/images/ic_cities.svg"
                alt={`${props.data.cities} Cities`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.cities)}{" "}
                <span className="text-gray-600 font-weight-light">Cities</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-lg-6 image-hero-wrapper">
          <div className="image-container">
            <img
              src={ImageHero}
              alt="Room with couches"
              className="hero-image img-fluid"

            />
            <img
              src={ImageHeroF}
              alt="Room with couches Frame"
              className="hero-image-frame img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
    </Fade>
  );
}
