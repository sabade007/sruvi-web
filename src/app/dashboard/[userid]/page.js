"use client";
import Headerbottom from "@/app/components/general/Headerbottom";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Page({ params }) {
  return (
    <div>
      <div>My Post: {params.userid}</div>;
    </div>
  );
}
