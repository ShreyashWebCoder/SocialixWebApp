import { InputAdornment, TextField } from "@mui/material";
import { MdPersonSearch } from "react-icons/md";
import React from "react";

const SearchInput = () => {
  return (
    <>
      <TextField
        sx={{
          width: "90%",
          maxWidth: "750px",
          boxShadow: "5px 5px 5px gray",
          borderRadius: "15px",
          px: 2,
          py: 1,
          my: 5,
          mx: "auto",
          "& .MuiOutlinedInput-root": {
            color: "black",
            "& fieldset": {
              border: "none",
            },
          },
        }}
        placeholder="search user..."
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{
                color: "black",
              }}
            >
              <MdPersonSearch />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default SearchInput;
