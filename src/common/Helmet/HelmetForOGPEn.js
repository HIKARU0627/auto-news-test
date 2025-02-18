import React from "react";

import HelmetForOGP from "./HelmetForOGP";

const HelmetForOGPEn = ({ title, image, description }) => {
  const default_description =
    "On the NU OCW (Nagoya University OpenCourseWare) website, anyone from anywhere in the world can see Nagoya University class information and materials for free.";
  const meta_description = description || default_description;

  return (
    <HelmetForOGP title={title} image={image} description={meta_description} />
  );
};

export default HelmetForOGPEn;
