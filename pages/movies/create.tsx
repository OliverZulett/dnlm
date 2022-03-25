import React from "react";
import { Fragment } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Form from "../../components/form/form";

function create() {
  return (
    <Fragment>
      <Navbar />
      <div className="container mx-auto my-14">
        <Form />
      </div>
      <Footer />
    </Fragment>
  );
}

export default create;
