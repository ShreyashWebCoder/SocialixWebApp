import React from "react";
import SearchInput from "../../search/SearchInput";
import SearchProfileBar from "../../search/SearchProfileBar";
import { Stack, useMediaQuery } from "@mui/material";

const Search = () => {
  const _300 = useMediaQuery("(min-width:300px)");
  const _400 = useMediaQuery("(min-width:400px)");
  const _650 = useMediaQuery("(min-width:650px)");
  return (
    <>
      <SearchInput />
      <Stack
        flexDirection={"column"}
        gap={1}
        mb={5}
        width={_400 ? "60%" : "90%"}
        maxWidth={"750px"}
        mx={"auto"}
      >
        <SearchProfileBar />
        <SearchProfileBar />
        <SearchProfileBar />
        <SearchProfileBar />

      </Stack>
    </>
  );
};

export default Search;
