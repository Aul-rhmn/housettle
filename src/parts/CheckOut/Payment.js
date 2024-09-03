import React from "react";
import { Fade } from "react-awesome-reveal";

import { InputText, InputFile } from "elements/Form";

import logoBca from "assets/images/logo-bca.jpg";
import logoMandiri from "assets/images/logo-mandiri.jpg";

export default function Payment(props) {
  const { data, ItemDetails, checkout } = props;

  const tax = 10;
  const subTotal = ItemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;

  return (
    <Fade>
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-6 border-right py-4">
            <Fade delay={100}>
              <p className="mb-4">Transfer Pembayaran</p>
              <p>Tax: {tax}%</p>
              <p>Sub total: ${subTotal} USD</p>
              <p>Total: ${grandTotal} USD</p>

              <div className="row align-items-center mb-3">
                <div className="col-lg-auto col-sm-6 mt-3">
                  <img src={logoBca} alt="bank central asia" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Central Asia</dd>
                    <dd>2118 1997</dd>
                    <dd>Aulia Rahman</dd>
                  </dl>
                </div>
              </div>

              <div className="row align-items-center">
                <div className="col-lg-auto col-sm-6">
                  <img src={logoMandiri} alt="mandiri" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Mandiri</dd>
                    <dd>2118 1997</dd>
                    <dd>Aulia Rahman</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>

          <div className="col-lg-5 col-md-6 py-4 pl-sm-5">
            <Fade delay={300}>
              <div className="form-group">
                <label htmlFor="proofPayment">Upload Payment Receipt</label>
                <InputFile
                  accept="image/*"
                  id="proofPayment"
                  name="proofPayment"
                  value={data.proofPayment}
                  onChange={props.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="bankName">Origin Bank</label>
                <InputText
                  id="bankName"
                  name="bankName"
                  type="text"
                  value={data.bankName}
                  onChange={props.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="bankHolder">Sender's Name</label>
                <InputText
                  id="bankHolder"
                  name="bankHolder"
                  type="text"
                  value={data.bankHolder}
                  onChange={props.onChange}
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );

}
