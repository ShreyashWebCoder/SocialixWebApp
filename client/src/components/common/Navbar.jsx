import React from "react";
import { Link } from "react-router-dom";
import { Stack, useMediaQuery } from "@mui/material";

// Icons
import { IoHome } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { FaEdit, FaArrowLeft } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  const _300 = useMediaQuery("(min-width:300px)");
  const _400 = useMediaQuery("(min-width:400px)");

  return (
    <>
      <Stack
        flexDirection={"row"}
        maxWidth={"100%"}
        justifyContent={"space-around"}
        // color={"black"}
        alignItems={"center"}
      >
        <FaArrowLeft size={_400 ? 28 : 24} className="link" />
        <Link to={"/"} className="link">
          <IoHome size={_400 ? 32 : 24} cursor={"pointer"} />
        </Link>
        <Link to={"/search"}>
          <IoSearchSharp size={_400 ? 28 : 24} cursor={"pointer"} />
        </Link>
        <Link>
          <FaEdit size={_400 ? 28 : 24} cursor={"pointer"} />
        </Link>
        <Link>
          <IoHeart size={_400 ? 28 : 24} cursor={"pointer"} />
        </Link>
        <Link to={"/profile/posts/1"} className="link">
          <RxAvatar size={_400 ? 28 : 24} cursor={"pointer"} />
        </Link>
      </Stack>
    </>
  );
};

export default Navbar;
