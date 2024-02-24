import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>ECommerce wants to help you better understand how we collect, use, protect, and share your personal data. This Privacy Policy is designed to help you understand your privacy choices when you visit our site, access our mobile app, or use our services. It does not apply to other websites or services that we do not control, including websites or services of other BigCommerce users. 
This Privacy Policy is incorporated into, and forms an integral part of, the ECommerce Terms of Service. Capitalized terms have the meanings ascribed them in the Definitions section or our Terms of Service. Please note that our services may vary by region
We encourage you to read this Privacy Policy carefully and take the time to get to know our practices. If you have questions about this Privacy Policy or our privacy practices, please contact us at privacy@ECommerce.com.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
