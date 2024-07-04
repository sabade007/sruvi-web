import { Card } from "@mui/material";
import React from "react";
import { Para, Subheading } from "../general/Styles";
import { CircleRounded } from "@mui/icons-material";

const Blogbulletpoints = ({ icon, title, d1, d2, d3 }) => {
  if (!icon) {
    icon = <DesignServicesRounded className="mr-2" />;
  }

  return (
    <div>
      <Card variant="outlined" className="p-4 rounded-lg">
        <div className="flex flex-row ">
          {icon}

          <Subheading text={title} black />
        </div>

        <div className="ml-[5%] mt-4">
          <div className="flex flex-row items-center mb-2">
            <CircleRounded className="mr-2 opacity-50" fontSize="sm" />
            <Para text={d1} black />
          </div>
          <div className="flex flex-row  items-center mb-2">
            <CircleRounded className="mr-2 opacity-50" fontSize="sm" />
            <Para text={d2} black />
          </div>
          <div className="flex flex-row  items-center mb-2">
            <CircleRounded className="mr-2 opacity-50" fontSize="sm" />
            <Para text={d3} black />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Blogbulletpoints;
