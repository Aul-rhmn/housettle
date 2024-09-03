import React from "react";
import Button from "elements/Button";
import { Fade } from "react-awesome-reveal";

export default function Activities({ data }) {
  if (data.length === 0) return null;

  return (
    <section className="container">
      <Fade direction="up" delay={100}>
        <h4 className="mb-3 font-weight-medium">Activities</h4>
        <div className="container-grid">
          {data.map((item, index2) => {
            return (
              <div
                className="item column-3 row-1"
                key={`activity-item-${index2}`}
              >
                <Fade direction="up" delay={200 * index2}>
                  <div className="card">
                    {item.isPopular && (
                      <div className="tag">
                        Most <span className="font-weight-light">Picked</span>
                      </div>
                    )}
                    <figure className="img-wrapper" style={{ height: 160 }}>
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        href={`/properties/${item._id}`}
                        className="stretched-link d-block text-gray-800"
                      >
                        <h5 className="h4">{item.name}</h5>
                      </Button>
                      <span className="text-gray-500">{item.type}</span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}
