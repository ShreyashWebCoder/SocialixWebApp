import {
  Avatar,
  Button,
  Chip,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { FaInstagram } from "react-icons/fa";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const ProfileLayout = () => {
  const _300 = useMediaQuery("(min-width:300px)");
  const _400 = useMediaQuery("(min-width:400px)");
  const _650 = useMediaQuery("(min-width:650px)");

  return (
    <>
      <Stack
        flexDirection={"column"}
        gap={2}
        p={2}
        m={2}
        width={_650 ? "800px" : "90%"}
        mx={"auto"}
      >
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack flexDirection={"column"} gap={1}>
            <Typography
              variant="h2"
              fontWeight={"bold"}
              fontSize={_400 ? "2rem" : _300 ? "1rem" : "0.8rem"}
            >
              Shreyash_Wadhai_001
            </Typography>
            <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
              <Typography variant="h2" fontSize={"1rem"}>
                Shreyash Wadhai
              </Typography>
              <Chip
                label={"socialix.net"}
                size="small"
                sx={{
                  fontSize: "0.7rem",
                  ":hover": {
                    cursor: "pointer",
                    // fontWeight:"bold"
                  },
                }}
              />
            </Stack>
          </Stack>
          <Avatar
            src=""
            alt=""
            sx={{
              width: 60,
              height: 60,
              ":hover": {
                cursor: "pointer",
              },
            }}
          />
        </Stack>
        <Typography variant="subtitle2"> This is a bio !</Typography>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="subtitle2" color="gray">
            20 followers
          </Typography>
          <FaInstagram size={30} cursor={"pointer"} />
        </Stack>
      </Stack>
      <Button
        size="large"
        sx={{
          color: "black",
          width: "800px",
          maxWidth: "90%",
          mx: "auto",
          textAlign: "center",
          border: "1px solid gray",
          borderRadius: "10px",
          ":hover": {
            cursor: "pointer",
            bgcolor: "black",
            color: "white",
          },
          transition: "all ease 0.3s",
        }}
        className=""
      >
        Edit Profile
      </Button>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-evenly"}
        maxWidth={"90%"}
        my={5}
        // pb={"0rem"}
        borderBottom={"2px solid gray"}
        fontSize={"1.2rem"}
        width={"800px"}
        mx={"auto"}
      >
        <Link
          to="/profile/posts/1"
          className=" w-28 text-center pb-2 border-b-2 hover:border-black"
        >
          Posts
        </Link>
        <Link
          to="/profile/replies/1"
          className=" w-28 text-center pb-2 border-b-2 hover:border-black"
        >
          Replies
        </Link>
        <Link
          to="/profile/reposts/1"
          className=" w-28 text-center pb-2 border-b-2 hover:border-black"
        >
          Reposts
        </Link>
      </Stack>
      <Outlet />
    </>
  );
};

export default ProfileLayout;
