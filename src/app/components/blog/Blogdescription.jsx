import React from "react";
import Header from "../general/Header";
import Headerbottom from "../general/Headerbottom";
import { LargeHeading, Para, Subheading } from "../general/Styles";
import { Card, Container } from "@mui/material";

import { CircleRounded, VerifiedUserRounded } from "@mui/icons-material";

const Blogdescription = ({
  title,
  description,
  p1,
  p2,
  p3,
  p4,
  pd1,
  pd2,
  pd3,
  pd4,
  conculsion,
  img,
  author,
  role,
  date,
  Authdesc,
}) => {
  const UserFullViewIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={48}
      height={48}
      color={"#000000"}
      fill={"none"}
      {...props}
    >
      <path
        d="M15 5C15 6.65685 13.2418 8.5 12 8.5C10.7582 8.5 9 6.65685 9 5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M16.0415 9C17.5645 10.3353 18.5513 12.5969 17.6651 14.7052C17.4742 15.1594 17.0361 15.4539 16.5514 15.4539C16.0585 15.4539 15.2489 15.296 15.0917 15.9374L13.9944 20.4123C13.7656 21.3454 12.9433 22 12 22C11.0567 22 10.2344 21.3454 10.0056 20.4123L8.90833 15.9374C8.75103 15.296 7.94149 15.4539 7.44862 15.4539C6.9639 15.4539 6.52582 15.1594 6.33488 14.7052C5.44866 12.5969 6.43558 10.3353 7.95857 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
  return (
    <div className="mt-10">
      <Container maxWidth="xl">
        <div className="w-full flex flex-col bg-white shadow-lg p-4">
          <LargeHeading text={title} />
          <div className="flex flex-row justify-center items-center mt-8 mb-4">
            <img src={img} style={{ width: "80%" }} alt="blog" />
          </div>

          <div className="p-4">
            <Para text={description} black />
            <div className="mt-4">
              <div className="flex flex-row items-center mb-2">
                <CircleRounded className="mr-2 opacity-50" fontSize="sm" />
                <Subheading text={p1} black />
              </div>
              <Para text={pd1} black />
            </div>
            <div className="mt-4">
              <div className="flex flex-row items-center mb-2">
                <CircleRounded className="mr-2 opacity-50" fontSize="sm" />
                <Subheading text={p2} black />
              </div>
              <Para text={pd2} black />
            </div>

            <div className="mt-4">
              <div className="flex flex-row items-center mb-2">
                <CircleRounded className="mr-2 opacity-50" fontSize="sm" />
                <Subheading text={p3} black />
              </div>
              <Para text={pd3} black />
            </div>

            <div className="mt-4 mb-4">
              <div className="flex flex-row items-center mb-2">
                <CircleRounded className="mr-2 opacity-50" fontSize="sm" />
                <Subheading text={p4} black />
              </div>
              <Para text={pd4} black />
            </div>

            <Subheading text={"Conclusion"} black />
            <Para text={conculsion} black />
          </div>

          <div>
            <Card variant="outlined" className="p-4 rounded-lg">
              <div className="flex flex-row mb-2 justify-between">
                <div className="flex flex-row ">
                  <UserFullViewIcon className="mr-2" />
                  <div>
                    <Subheading text={author} black />
                    <Para text={role} black />
                  </div>
                </div>

                <div>
                  <h1 className="text-black opacity-50">{date}</h1>
                </div>
              </div>

              <Para text={Authdesc} black />
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blogdescription;
