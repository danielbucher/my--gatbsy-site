import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Me lying on a bed with a tabby cat on my back and an orange cat by my side."
        src="../images/eu_peto_e_farofa.jpg"
      />
    </Layout>
  );
};

export default IndexPage;
