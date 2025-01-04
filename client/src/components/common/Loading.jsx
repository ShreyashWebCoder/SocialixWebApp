import { Stack, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <>
      <Stack
        flexDirection={"row"}
        minHeight={"50vw"}
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        my={5}
      >
        <CircularProgress color="success" />
      </Stack>
    </>
  );
};

export default Loading;
