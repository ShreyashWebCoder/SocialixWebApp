import { Stack, Typography, useMediaQuery } from "@mui/material";
import { IoIosMore } from "react-icons/io";
import PostOne from "./post/PostOne";
import PostTwo from "./post/PostTwo";

const HomePost = () => {
  const _300 = useMediaQuery("(min-width:300px)");
  const _400 = useMediaQuery("(min-width:400px)");
  const _650 = useMediaQuery("(min-width:650px)");

  return (
    <>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        borderBottom={_650?"3px solid gray":"2px solid gray"}
        p={2}
        mx={"auto"}
        width={_400 ? "60%" : "95%"}
        // maxWidth={"90%"}
        sx={{
          ":hover": {
            cursor: "pointer",
            boxShadow: "10px 10px 10px gray",
            borderRadius: "0.5rem",
          },
          transition: "all ease-in-out 0.3s",
        }}
      >
        <Stack flexDirection={"row"} gap={2} maxWidth={"90%"}>
          <PostOne />
          <PostTwo />
        </Stack>
        <Stack
          flexDirection={"row"}
          justifyContent={"center"}
          gap={1}
          fontSize={"1rem"}
        >
          <Typography
            variant="caption"
            color={"GrayText"}
            // fontSize={"1rem"}
          fontSize={_400 ? "1rem" : "0.9rem"}
            position={"relative"}
            top={2}
          >
            4hr
          </Typography>
          <IoIosMore size={28} />
        </Stack>
      </Stack>
    </>
  );
};

export default HomePost;
