import React from "react";

import ImageHero from "assets/images/img-hero.jpg";
import ImageHeroF from "assets/images/img-hero-frame.jpg";
import IconCities from "assets/images/icons/ic_cities.svg";
import IconTraveler from "assets/images/icons/ic_traveler.svg";
import IconTreasure from "assets/images/icons/ic_treasure.svg";
import Button from "elements/Button";
import formatNumber from "utlts/formatNumber";

export default function Hero(props) {
  function showGuestFavorite() {
    window.scrollTo({
      top: props.refGuestFavorite.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            Rediscover Serenity, <br />
            Unveil Dream Vacation
          </h1>
          <p
            className="mb-4 font-weight-normal text-gray-600 w-75"
            style={{ lineHeight: "170%" }}
          >
            Embark on Unforgettable Journeys, by Capturing Treasured Memories to
            Last a Lifetime.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showGuestFavorite}
          >
            Show Me Now
          </Button>

          <div className="row" style={{ marginTop: 80 }}>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36"
                height="36"
                src={IconTraveler}
                alt={`${props.data.travelers} Travelers`}
              />

              <h6 className="mt-3">
                {formatNumber(props.data.travelers)}{" "}
                <span className="text-gray-600 font-weight-light">
                  Travelers
                </span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36"
                height="36"
                src={IconTreasure}
                alt={`${props.data.treasures} Treasures`}
              />

              <h6 className="mt-3">
                {formatNumber(props.data.treasures)}{" "}
                <span className="text-gray-600 font-weight-light">
                  Treasures
                </span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                width="36"
                height="36"
                src={IconCities}
                alt={`${props.data.Cities} Cities`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.cities)}{" "}
                <span className="text-gray-600 font-weight-light">Cities</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="pl-3" style={{ width: 590, height: 400 }}>
            <img
              src={ImageHero}
              alt="Room with couches"
              className="img-fluid position-absolute"
              style={{ margin: "-20px 0 0 -30px", zIndex: 1 }}
            />
            <img
              src={ImageHeroF}
              alt="Room with couches Frame"
              className="img-fluid position-absolute"
              style={{ margin: "50px -15px -15px 0" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
