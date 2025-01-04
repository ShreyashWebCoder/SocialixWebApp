import { Link } from "react-router-dom";

import { Grid, Stack, useMediaQuery } from "@mui/material";
import Navbar from "./Navbar";

// Icons
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const _400 = useMediaQuery("(min-width:400px)");

  return (
    <>
      {_400 ? (
        <Stack
          flexDirection={"row"}
          height={52}
          justifyContent={"space-around"}
          alignItems={"center"}
          py={1}
          position={"sticky"}
          top={0}
        >
          <Link to={"/"}>
            <img
              src="/src/assets/app_logo.png"
              alt="logo"
              width={100}
              // height={32}
            />
          </Link>
          <Stack
            justifyContent={"center"}
            width={"550px"}
            bgcolor={"aliceblue"}
            //   color={"black"}
            zIndex={2}
            height={80}
          >
            <Navbar />
          </Stack>
          <BiMenuAltRight size={36} cursor={"pointer"} color="GrayText" />
        </Stack>
      ) : (
        <>
          <Stack
            position={"fixed"}
            bottom={0}
            justifyContent={"center"}
            width={"100%"}
            height={52}
            p={1}
            bgcolor={"aliceblue"}
            zIndex={2}
          >
            <Navbar />
          </Stack>
          <Grid
            container
            height={60}
            justifyContent={"flex-end"}
            alignItems={"center"}
            p={1}
          >
            <Grid item xs={6}>
              <Link to={"/"}>
                <img
                  src="/src/assets/app_logo.png"
                  alt="logo"
                  width={70}
                  height={35}
                />
              </Link>
            </Grid>
            <BiMenuAltRight size={36} cursor={"pointer"} color="GrayText" />
          </Grid>
        </>
      )}
    </>
  );
};

export default Header;
