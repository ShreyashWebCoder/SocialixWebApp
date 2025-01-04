import { Stack, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

const PostTwo = () => {
  const _300 = useMediaQuery("(min-width:300px)");
  const _400 = useMediaQuery("(min-width:400px)");
  const _500 = useMediaQuery("(min-width:500px)");
  const _650 = useMediaQuery("(min-width:650px)");

  return (
    <>
      <Stack flexDirection={"column"} justifyContent={"space-between"}>
        <Stack flexDirection={"column"} gap={2}>
          <Stack flexDirection={"column"}>
            <Typography
              variant="h6"
              fontSize={_400 ? "1rem" : "0.8rem"}
              fontWeight={"bold"}
            >
              Shreyash Wadhai
            </Typography>
            <Link to={"/post/2"}>
              <Typography
                variant="h5"
                fontSize={
                  _650 ? "1.2rem" : _400 ? "1rem" : _300 ? "0.9rem" : "0.8rem"
                }
              >
                Hello Guyz, This is my first Post.
              </Typography>
            </Link>
          </Stack>
          <Stack flexDirection={"row"} gap={2} flexWrap={"wrap"}>
            <img
              src="/src/assets/error_404_Page.png"
              alt=""
              loading="lazy"
              width={
                _650
                  ? "400px"
                  : _500
                  ? "350px"
                  : _400
                  ? "250px"
                  : _300
                  ? "180px"
                  : "150px"
              }
              height={"auto"}
            />
          </Stack>
        </Stack>
        <Stack flexDirection={"column"} gap={1}>
          <Stack flexDirection={"row"} gap={3} m={1}>
            <FaRegHeart size={_400 ? 28 : 22} />
            <FaRegComment size={_400 ? 28 : 22} />
            <FaRetweet size={_400 ? 28 : 22} />
            <IoIosSend size={_400 ? 28 : 22} />
          </Stack>
          <Stack
            flexDirection={"row"}
            gap={1}
            position={"relative"}
            top={1}
            left={4}
          >
            <Typography
              variant="caption"
              color={"GrayText"}
              fontSize={_650 ? "1.1rem" : "0.9rem"}
            >
              2 like
            </Typography>
            <Typography
              variant="caption"
              color={"GrayText"}
              fontSize={_650 ? "1.1rem" : "0.9rem"}
            >
              1 comment
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default PostTwo;
