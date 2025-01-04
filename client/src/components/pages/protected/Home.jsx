import { Button, Stack } from "@mui/material";
import React from "react";
import HomeInput from "../../home/HomeInput";
import HomePost from "../../home/HomePost";

const Home = () => {
  return (
    <>
      <HomeInput />
      <Stack flexDirection={"column"} gap={2} mb={10}>
        <HomePost />
        <HomePost />
        <HomePost />
      </Stack>
      <Button
        size="large"
        sx={{
          my: 5,
          p: 3,
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        Load More
      </Button>
    </>
  );
};

export default Home;
