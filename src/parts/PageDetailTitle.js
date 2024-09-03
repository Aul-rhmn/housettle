import React from "react";
import { Fade } from "react-awesome-reveal";
import Breadcrumb from "elements/Breadcrumb";


export default function PageDetailTitle({ data, breadcrumb }) {
  return (
    <section className="container spacing-sm">
      <Fade bottom>
        <div className="row align-items-center">
          <div className="col-12 col-lg">
            <Breadcrumb data={breadcrumb} />
          </div>
          <div className="col-12 col-lg-auto text-center">
            <h1 className="h2">{data.name}</h1>
            <span className="text-gray-400">
              {data.city}, {data.country}
            </span>
          </div>
          <div className="col-12 col-lg"></div>
        </div>
      </Fade>
    </section>
  );
}
