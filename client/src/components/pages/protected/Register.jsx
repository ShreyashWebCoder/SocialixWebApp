import {
  Box,
  Button,
  Link,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  //  HOOK's
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  //  MUI-MediaQuery
  const _650 = useMediaQuery("(min-width:650px)");

  //  Funcation's
  const toggleLogin = (e) => {
    e.preventDefault();
    setLogin((pre) => !pre);
  };

  // const handleInput = () => {};

  const submitLogin = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    console.log("Login : ", data);
  };

  const submitRegister = (e) => {
    e.preventDefault();
    const data = {
      username,
      email,
      phone,
      password,
    };
    console.log("Register : ", data);
  };

  return (
    <>
      <Stack className="w-full h-screen justify-center items-center bg-gray-200">
        <Stack className=" lg:w-[35%] md:w-[45%] sm:w-[95%] h-auto bg-gray-50 flex flex-col justify-center items-center p-3 shadow-2xl rounded-lg">
          <Box className="logo" sx={{ mb: -2 }}>
            <img
              src="/src/assets/app_logo.png"
              alt="Logo"
              className="rounded-full w-[60px]"
              // style={{ width: "56px" }}
            />
          </Box>
          <Typography variant="h4" fontWeight="bold" color="black" mt={4} fontSize={_650 ?"2.5rem" :"2rem"}>
            {login ? "Sign in" : "Welcome"} to Socialix!
          </Typography>
          <Typography variant="body2" color="gray.300" mt={2} mb={4}>
            {login ? null : "Register to create your first Socialix account"}
          </Typography>

          <form action="">
            <Box
              component="ul"
              sx={{ listStyle: "none", p: 1, m: 0 }}
              height={"auto"}
            >
              {login ? null : (
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography
                    variant="body2"
                    className="font-bold text-gray-650 mb-1"
                  >
                    Name
                  </Typography>
                  <TextField
                    variant="outlined"
                    // name="name"
                    // value={user.username}
                    // onChange={handleInput}
                    onChange={(e) => setUsername(e.target.value)}
                    fullWidth
                    className="w-[20vw] rounded-lg"
                  />
                </Box>
              )}

              <Box component="li" sx={{ mb: 2 }}>
                <Typography
                  variant="body2"
                  className="font-bold text-gray-650 mb-1"
                >
                  Email
                </Typography>
                <TextField
                  variant="outlined"
                  // name="name"
                  // value={user.email}
                  // onChange={handleInput}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  fullWidth
                  className="w-[20vw] rounded-lg"
                />
              </Box>
              {login ? null : (
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography
                    variant="body2"
                    className="font-bold text-gray-650 mb-1"
                  >
                    Phone
                  </Typography>
                  <TextField
                    variant="outlined"
                    // name="name"
                    // value={user.phone}
                    // onChange={handleInput}
                    onChange={(e) => setPhone(e.target.value)}
                    type="number"
                    fullWidth
                    className="w-[20vw] rounded-lg"
                  />
                </Box>
              )}

              <Box component="li" sx={{ mb: 2 }}>
                <Typography
                  variant="body2"
                  className="font-bold text-gray-650 mb-1"
                >
                  Password
                </Typography>
                <TextField
                  variant="outlined"
                  // name="name"
                  // value={user.password}
                  // onChange={handleInput}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  fullWidth
                  className="w-[20vw] rounded-lg"
                />
              </Box>
              <Box component="li" className="flex center mt-4">
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  sx={_650 ? {
                    width: "18vw",
                    height: "5vh",
                    borderRadius: "10px",
                    my: 2,
                    mx:5
                  } : {
                    width: "50vw",
                    height: "5vh",
                    borderRadius: "10px",
                    my: 2,
                    mx:5
                  }}
                  onClick={login ? submitLogin : submitRegister}
                >
                  {login ? "Login" : "Register"}
                </Button>
              </Box>
              <Typography
                flexDirection={"row"}
                variant="subtitle2"
                className="text-xs text-center pt-3 font-semibold"
              >
                {login ? " Don't " : "Already "} have an account?
                <Link
                  component="button"
                  color="primary"
                  underline="always"
                  fontWeight="bold"
                  onClick={toggleLogin}
                  marginLeft={"2rem"}
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  px={2}
                >
                  {login ? "Sign Up" : "Login"}
                </Link>
              </Typography>
            </Box>
          </form>
        </Stack>
      </Stack>
    </>
  );
};

export default Register;

// import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// const Register = () => {
//   const [login, setLogin] = useState(false);
//   const [user, setUser] = useState({
//     username: "",
//     email: "",
//     phone: "",
//     password: "",
//   });

//   const toggleLogin = (e) => {
//     e.preventDefault();
//     setLogin((prev) => !prev);
//     setUser({
//       username: "",
//       email: "",
//       phone: "",
//       password: "",
//     });
//   };

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   };

//   const submitForm = (e) => {
//     e.preventDefault();
//     console.log(user);
//   };

//   return (
//     <>
//       <Stack className="w-full h-screen justify-center items-center bg-gray-200">
//         <Stack className="lg:w-[35%] sm:w-[95%] h-auto bg-gray-50 flex flex-col justify-center items-center p-3 shadow-2xl rounded-lg">
//           <Box className="logo" sx={{ mb: -2 }}>
//             <img
//               src="/src/assets/app_logo.png"
//               alt="Logo"
//               className="rounded-full w-[60px]"
//             />
//           </Box>
//           <Typography variant="h4" fontWeight="bold" color="black" mt={4}>
//             {login ? "Sign in" : "Welcome to Socialix!"}
//           </Typography>
//           <Typography variant="body2" color="gray.300" mt={2} mb={4}>
//             {login ? null : "Register to create your first Socialix account"}
//           </Typography>

//           <form onSubmit={submitForm}>
//             <Box
//               component="ul"
//               sx={{ listStyle: "none", p: 1, m: 0 }}
//               height={"auto"}
//             >
//               {!login && (
//                 <Box component="li" sx={{ mb: 2 }}>
//                   <Typography
//                     variant="body2"
//                     className="font-bold text-gray-650 mb-1"
//                   >
//                     Name
//                   </Typography>
//                   <TextField
//                     variant="outlined"
//                     name="username"
//                     value={user.username}
//                     onChange={handleInput}
//                     fullWidth
//                     className="w-[20vw] rounded-lg"
//                   />
//                 </Box>
//               )}

//               <Box component="li" sx={{ mb: 2 }}>
//                 <Typography
//                   variant="body2"
//                   className="font-bold text-gray-650 mb-1"
//                 >
//                   Email
//                 </Typography>
//                 <TextField
//                   variant="outlined"
//                   name="email"
//                   value={user.email}
//                   onChange={handleInput}
//                   type="email"
//                   fullWidth
//                   className="w-[20vw] rounded-lg"
//                 />
//               </Box>

//               {!login && (
//                 <Box component="li" sx={{ mb: 2 }}>
//                   <Typography
//                     variant="body2"
//                     className="font-bold text-gray-650 mb-1"
//                   >
//                     Phone
//                   </Typography>
//                   <TextField
//                     variant="outlined"
//                     name="phone"
//                     value={user.phone}
//                     onChange={handleInput}
//                     type="tel"
//                     fullWidth
//                     className="w-[20vw] rounded-lg"
//                   />
//                 </Box>
//               )}

//               <Box component="li" sx={{ mb: 2 }}>
//                 <Typography
//                   variant="body2"
//                   className="font-bold text-gray-650 mb-1"
//                 >
//                   Password
//                 </Typography>
//                 <TextField
//                   variant="outlined"
//                   name="password"
//                   value={user.password}
//                   onChange={handleInput}
//                   type="password"
//                   autoComplete="current-password"
//                   fullWidth
//                   className="w-[20vw] rounded-lg"
//                 />
//               </Box>

//               <Box component="li" className="flex center mt-4">
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   color="success"
//                   sx={{
//                     width: "18vw",
//                     height: "5vh",
//                     borderRadius: "10px",
//                     my: 2,
//                   }}
//                 >
//                   {login ? "Login" : "Register"}
//                 </Button>
//               </Box>

//               <Typography
//                 flexDirection={"row"}
//                 variant="subtitle2"
//                 className="text-xs text-center pt-3 font-semibold"
//               >
//                 {login ? " Don't have an account? " : "Already have an account? "}
//                 <Link
//                   component="button"
//                   color="primary"
//                   underline="always"
//                   fontWeight="bold"
//                   onClick={toggleLogin}
//                   marginLeft={"2rem"}
//                   flexDirection={"row"}
//                   justifyContent={"space-between"}
//                   px={2}
//                 >
//                   {login ? "Sign Up" : "Login"}
//                 </Link>
//               </Typography>
//             </Box>
//           </form>
//         </Stack>
//       </Stack>
//     </>
//   );
// };

// export default Register;
