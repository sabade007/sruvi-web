"use client";
import Blogdescription from "@/app/components/blog/Blogdescription";
import Header from "@/app/components/general/Header";
import Headerbottom from "@/app/components/general/Headerbottom";
import React, { useEffect, useState } from "react";
import { db } from "../../../../firebase";
import { doc, getDoc } from "firebase/firestore";

const page = ({ params }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [conclusion, setConclusion] = useState("");
  const [image, setimage] = useState("");
  const [point1, setpoint1] = useState("");
  const [point2, setpoint2] = useState("");
  const [point3, setpoint3] = useState("");
  const [point4, setpoint4] = useState("");
  const [point1d, setpoint1d] = useState("");
  const [point2d, setpoint2d] = useState("");
  const [point3d, setpoint3d] = useState("");
  const [point4d, setpoint4d] = useState("");
  const [author, setauthor] = useState("");
  const [role, setrole] = useState("");
  const [date, setdate] = useState("");
  const [authdesc, setauthdesc] = useState("");

  const blogid = params.blogID;

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "blogs", blogid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();

        setTitle(data.title);
        setDescription(data.description);
        setConclusion(data.conclusion);
        setimage(data.image);
        setpoint1(data.point1);
        setpoint2(data.point2);
        setpoint3(data.point3);
        setpoint4(data.point4);

        setpoint1d(data.point1d);
        setpoint2d(data.point2d);
        setpoint3d(data.point3d);
        setpoint4d(data.point4d);

        setauthor(data.author);
        setrole(data.role);
        setdate(data.date);
        setauthdesc(data.authdesc);
      } else {
        console.log("No such document!");
      }
    };
    fetchData();
  }, [blogid]);

  return (
    <div>
      <Header />
      <Headerbottom />
      <Blogdescription
        title={title}
        description={description}
        conculsion={conclusion}
        img={image}
        p1={point1}
        p2={point2}
        p3={point3}
        p4={point4}
        pd1={point1d}
        pd2={point2d}
        pd3={point3d}
        pd4={point4d}
        author={author}
        role={role}
        date={date}
        Authdesc={authdesc}
      />
    </div>
  );
};

export default page;
