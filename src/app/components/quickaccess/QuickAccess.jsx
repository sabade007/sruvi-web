import React from "react";
import { Heading, LargeHeading, Para, Subheading } from "../general/Styles";
import { ContactEmergency } from "@mui/icons-material";

const QuickAccess = () => {
  return (
    <div>
      <Para text="Quick Access" white></Para>
      <Subheading text={"Get in touch with me"}></Subheading>
      <Heading text={"Get in touch with me"} secondary></Heading>
      <LargeHeading text={"Get in touch with me"} primary></LargeHeading>
      <ContactEmergency />
    </div>
  );
};

export default QuickAccess;
