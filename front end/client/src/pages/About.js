import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          ECommerce’s mission is to help our customers sell more at every stage of growth,
          from small startups, to mid-market businesses, to large enterprises. 
          As a leading Open SaaS solution, ECommerce empowers merchants to build, 
          innovate and grow their businesses online. 
          Simply put, we focus on being the best commerce platform so our customers can focus on what matters most: growing their businesses.
          Learn more about our growing industry-wide recognition.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
