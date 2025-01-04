import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Error404Page = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen mt-5 flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300">
      <Box className="text-center w-[98vw] p-8 rounded-lg shadow-lg bg-white max-w-lg mx-auto">
        {/* 3D Image */}
        <div className="w-48 h-48 mx-auto mb-8">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.W_RP6m3xaAuSbuMU2xfAnQHaFE&pid=Api&P=0&h=180" // Replace with your 3D illustration path
            alt="Lost in Space"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Error Message */}
        <Typography variant="h1" className="text-6xl font-bold text-blue-650">
          404
        </Typography>
        <Typography variant="h5" className="text-2xl font-semibold mt-2">
          Oops! Page Not Found
        </Typography>
        <Typography className="mt-4 pb-8 text-gray-650">
          It seems like the page you're looking for doesn't exist.
        </Typography>

        {/* Go Home Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(-1)}
          className=" bg-blue-650 hover:bg-blue-700 px-6 py-3 text-white text-lg"
        >
          Go to Home
        </Button>
      </Box>
    </div>
  );
};

export default Error404Page;
