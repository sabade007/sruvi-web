"use client";
import React, { useEffect, useState } from "react";
import { Heading, Para, Subheading } from "./Styles";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import u from "../../assets/u.png";
import Image from "next/image";
import {
  Close,
  Menu,
  Person4Rounded,
  ContactPage,
  DesignServicesRounded,
  HomeRounded,
  InfoRounded,
  Start,
} from "@mui/icons-material";

import { useMediaQuery } from "react-responsive";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { UserAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { auth } from "../../../../firebase";

const Header = () => {
  const [open, setOpen] = useState(false);
  const DashboardSquare03Icon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={20}
      height={20}
      color={"#ffffff"}
      fill={"none"}
      {...props}
    >
      <path
        d="M16 5C16 4.06812 16 3.60218 16.1522 3.23463C16.3552 2.74458 16.7446 2.35523 17.2346 2.15224C17.6022 2 18.0681 2 19 2C19.9319 2 20.3978 2 20.7654 2.15224C21.2554 2.35523 21.6448 2.74458 21.8478 3.23463C22 3.60218 22 4.06812 22 5V9C22 9.93188 22 10.3978 21.8478 10.7654C21.6448 11.2554 21.2554 11.6448 20.7654 11.8478C20.3978 12 19.9319 12 19 12C18.0681 12 17.6022 12 17.2346 11.8478C16.7446 11.6448 16.3552 11.2554 16.1522 10.7654C16 10.3978 16 9.93188 16 9V5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M16 19C16 18.0681 16 17.6022 16.1522 17.2346C16.3552 16.7446 16.7446 16.3552 17.2346 16.1522C17.6022 16 18.0681 16 19 16C19.9319 16 20.3978 16 20.7654 16.1522C21.2554 16.3552 21.6448 16.7446 21.8478 17.2346C22 17.6022 22 18.0681 22 19C22 19.9319 22 20.3978 21.8478 20.7654C21.6448 21.2554 21.2554 21.6448 20.7654 21.8478C20.3978 22 19.9319 22 19 22C18.0681 22 17.6022 22 17.2346 21.8478C16.7446 21.6448 16.3552 21.2554 16.1522 20.7654C16 20.3978 16 19.9319 16 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M2 16C2 14.1144 2 13.1716 2.58579 12.5858C3.17157 12 4.11438 12 6 12H8C9.88562 12 10.8284 12 11.4142 12.5858C12 13.1716 12 14.1144 12 16V18C12 19.8856 12 20.8284 11.4142 21.4142C10.8284 22 9.88562 22 8 22H6C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V16Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M2 5C2 4.06812 2 3.60218 2.15224 3.23463C2.35523 2.74458 2.74458 2.35523 3.23463 2.15224C3.60218 2 4.06812 2 5 2H9C9.93188 2 10.3978 2 10.7654 2.15224C11.2554 2.35523 11.6448 2.74458 11.8478 3.23463C12 3.60218 12 4.06812 12 5C12 5.93188 12 6.39782 11.8478 6.76537C11.6448 7.25542 11.2554 7.64477 10.7654 7.84776C10.3978 8 9.93188 8 9 8H5C4.06812 8 3.60218 8 3.23463 7.84776C2.74458 7.64477 2.35523 7.25542 2.15224 6.76537C2 6.39782 2 5.93188 2 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );

  const BloggerIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={20}
      height={20}
      color={"#ffffff"}
      fill={"none"}
      {...props}
    >
      <path
        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10 10H11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 15H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9577 11.4622V10.5088C14.9577 8.63614 14.9577 7.69981 14.4825 7.04341C13.5821 5.79972 11.833 6.01409 10.4788 6.01409C9.12474 6.01409 7.37562 5.79972 6.47521 7.04341C6 7.69981 6 8.63614 6 10.5088V13.0059C6 15.3601 6 16.5373 6.72879 17.2686C7.45758 18 8.63055 18 10.9765 18H14.6862C17.285 18 18.3239 16.1725 17.913 13.5687C17.6684 12.0195 16.3315 11.4622 14.9577 11.4622Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );

  //   SignIn Code

  const router = useRouter();
  const [logsuccess, setLogsuccess] = useState(false);
  const [uuid, setuuid] = useState("");

  const { user, googleSignIn, logOut } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      setLogsuccess(true);
    } catch (error) {
      console.log(error);
      setLogsuccess(false);
    }
  };

  const [path, setPath] = useState("");

  const handleSignOut = async () => {
    try {
      await logOut();
      setLogsuccess(false);
      if (path === "/dashboard/" + uuid) {
        router.push("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        const uid = currentUser.uid;
        setuuid(uid);
      } else {
      }
    });
  }, [logsuccess]);

  const handleDashboard = () => {
    router.push("/dashboard/" + uuid);
  };

  return (
    <div>
      <div className="xs:hidden sm:hidden md:hidden lg:block xl:block xxl:block">
        <div className=" pb-0">
          <div className="p-4 shadow-lg rounded-lg rounded-b-none">
            <div className="flex justify-between flex-row items-center">
              <div className="flex flex-col">
                <Image
                  src={logo}
                  className=" xxl:w-28 xl:w-24 lg:w-20 md:w-20 sm:w-20 xs:w-20"
                  alt="logo"
                />
                <div className="flex flex-row items-center">
                  <Heading text={"because it's for "}></Heading>
                  <Image
                    src={u}
                    className="xxl:w-4 xl:w-4 lg:w-4 md:w-3 sm:w-3 xs:w-3 ml-2"
                    alt="logo"
                  />
                </div>
              </div>

              <div className="flex flex-col items-end justify-end">
                {!user ? (
                  <div
                    className="flex flex-row items-center    cursor-pointer "
                    onClick={handleGoogleSignIn}
                  >
                    <Subheading text={"Login/Signup"} black={true} />
                    <Person4Rounded className="mr-2 ml-2 text-primary" />
                  </div>
                ) : (
                  <div className="flex flex-row items-center    ">
                    <div className="flex flex-row items-center cursor-pointer">
                      <div className="mr-1">
                        <Subheading text={"Hi!"} secondary={true} />
                      </div>

                      <Subheading text={user.displayName} secondary={true} />
                    </div>

                    <div
                      className="mr-4 ml-4 flex flex-row cursor-pointer"
                      onClick={handleDashboard}
                    >
                      <SpaceDashboardIcon fontSize="small" className=" mr-2" />
                      <Subheading text={"My Dashboard"} black={true} />
                    </div>

                    <div
                      className="cursor-pointer flex flex-row"
                      onClick={handleSignOut}
                    >
                      <LogoutRoundedIcon fontSize="small" className=" mr-2" />
                      <Subheading text={"Logout"} black={true} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="xs:block sm:block md:block lg:hidden xl:hidden xxl:hidden">
        <div className="p-4 pb-0">
          <div className="p-4 shadow-lg rounded-lg rounded-b-none">
            <div className="flex justify-between flex-row items-center">
              <div className="flex flex-col">
                <Image
                  src={logo}
                  className=" xxl:w-28 xl:w-24 lg:w-20 md:w-20 sm:w-20 xs:w-20"
                  alt="logo"
                />
                <div className="flex flex-row items-center">
                  <Heading text={"because it's for "}></Heading>
                  <Image
                    src={u}
                    className="xxl:w-4 xl:w-4 lg:w-4 md:w-3 sm:w-3 xs:w-3 ml-2"
                    alt="logo"
                  />
                </div>
              </div>

              <div>
                <div
                  className="flex flex-row items-center  "
                  onClick={() => setOpen(true)}
                >
                  <Menu className="mr-2 text-secondary" fontSize="medium" />
                </div>
              </div>
              {open && (
                <Drawer
                  className=" w-[50vw] "
                  anchor="right"
                  open={open}
                  onClose={() => setOpen(false)}
                >
                  <div className="p-4 bg-gradient-to-r from-logoblack to-slate-950 h-full">
                    <div className="flex flex-row justify-between items-center">
                      <h1 className="text-white  tracking-widest font-bungee ">
                        Hello there!
                      </h1>
                      <div>
                        <Close
                          className="text-secondary cursor-pointer"
                          fontSize="medium"
                          onClick={() => setOpen(false)}
                        />
                      </div>
                    </div>

                    <Divider className="mt-4" />

                    <List className="mt-0 p-0">
                      {[
                        ...[
                          {
                            text: "Quick Access",
                            route: "/",
                            icon: DashboardSquare03Icon,
                          },
                          {
                            text: "Home",
                            route: "/home",
                            icon: HomeRounded,
                          },
                          {
                            text: "Getting Started",
                            route: "/gettingstarted",
                            icon: Start,
                          },

                          {
                            text: "Services",
                            route: "/services",
                            icon: DesignServicesRounded,
                          },
                          {
                            text: "About",
                            route: "/about",
                            icon: InfoRounded,
                          },
                          {
                            text: "Blog",
                            route: "/blog",
                            icon: BloggerIcon,
                          },
                          {
                            text: "Get in touch",
                            route: "/contact",
                            icon: ContactPage,
                          },
                        ].map(({ text, route, icon }) => (
                          <ListItemButton
                            style={{ margin: "0", padding: "0" }}
                            href="{route}"
                            key={text}
                          >
                            <div className="w-full flex flex-row items-center">
                              <ListItemIcon
                                sx={{ color: "white", fontSize: "small" }}
                              >
                                {React.createElement(icon)}
                              </ListItemIcon>
                              <Para text={text} white></Para>
                            </div>
                          </ListItemButton>

                          // <ListItem
                          //   style={{ padding: "0" }}
                          //   key={text}
                          //   onClick={() => setOpen(false)}
                          // >
                          //   <ListItemButton href={route}>
                          //     <div className="w-full flex flex-row items-center justify-center">
                          //       <ListItemIcon sx={{ color: "white" }}>
                          //         {React.createElement(icon)}
                          //       </ListItemIcon>
                          //       <ListItemText>
                          //         <h1 className="text-white tracking-widest font-bungee">
                          //           {text}
                          //         </h1>
                          //       </ListItemText>
                          //     </div>
                          //   </ListItemButton>
                          // </ListItem>
                        )),
                      ].map((text) => (
                        <ListItem
                          className="w-[50vw] p-0 "
                          key={text}
                          onClick={() => setOpen(false)}
                        >
                          <ListItemText primary={text} />
                        </ListItem>
                      ))}
                    </List>
                  </div>
                </Drawer>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
