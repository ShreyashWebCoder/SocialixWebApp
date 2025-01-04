import React, { useState } from "react";
import { Stack, TextField, useMediaQuery } from "@mui/material";
import HomePost from "../../home/HomePost";
import Comments from "../../home/post/Comments";

const SinglePost = () => {
  const [comment, setComment] = useState("");

  const _300 = useMediaQuery("(min-width:300px)");
  const _400 = useMediaQuery("(min-width:400px)");
  const _650 = useMediaQuery("(min-width:650px)");

  return (
    <>
      <Stack flexDirection={"column"} my={5} gap={5}>
        <HomePost />
        <Stack
          flexDirection={"column"}
          gap={2}
          width={_400 ? "80%" : "100%"}
          mx={"auto"}
        >
          <Comments />
        </Stack>
        <TextField
          variant="outlined"
          autoFocus
          placeholder="Comment here..."
          id="comment"
          sx={
            _400
              ? {
                  width: "50%",
                  mx: "auto",
                  my: 5,
                  p: 1,
                }
              : {
                  width: "90%",
                  mx: "auto",
                  // my: 5,
                  // p: 1,
                }
          }
          onChange={(e) => setComment(e.target.value)}
        />
      </Stack>
    </>
  );
};

export default SinglePost;
