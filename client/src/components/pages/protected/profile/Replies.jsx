import { Stack, useMediaQuery } from "@mui/material";
import React from "react";
import Comments from "../../../home/post/Comments";

const Replies = () => {
  const _300 = useMediaQuery("(min-width:300px)");
  const _400 = useMediaQuery("(min-width:400px)");
  const _650 = useMediaQuery("(min-width:650px)");
  return (
    <>
      <Stack
        flexDirection={"column"}
        gap={2}
        width={_400 ? "800px" : "90%"}
        mx={"auto"}
      >
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
      </Stack>
    </>
  );
};

export default Replies;
