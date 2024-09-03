import React from 'react'
import {Fade} from 'react-awesome-reveal'
import CompletedIlustration from 'assets/images/completed.jpg'

export default function Completed() {
    return (
        <Fade>
          <div className="container mb-3">
            <div className="row justify-content-center text-center">
              <div className="col-12 col-md-8 col-lg-4">
                <img
                  src={CompletedIlustration}
                  className="img-fluid mt-3"
                  alt="completed checkout homestay"
                />
                <p className="text-gray-500 mt-2">
                  We will inform you via email later once the transaction has been accepted
                </p>
              </div>
            </div>
          </div>
        </Fade>
      );
}
