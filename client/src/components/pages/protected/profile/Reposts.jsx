import { Stack, useMediaQuery } from "@mui/material";
import HomePost from "../../../home/HomePost";

const Reposts = () => {
  const _300 = useMediaQuery("(min-width:300px)");
  const _400 = useMediaQuery("(min-width:400px)");
  const _650 = useMediaQuery("(min-width:650px)");
  return (
    <>
      <Stack
        flexDirection={"column"}
        gap={2}
        mb={10}
        width={_400 ? "800px" : "100%"}
        mx={"auto"}
      >
        <HomePost />
        <HomePost />
      </Stack>
    </>
  );
};

export default Reposts;
