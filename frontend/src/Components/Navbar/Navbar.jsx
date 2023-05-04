import React from "react";
import "./Navbar.css";
import logo from "../../Assets/CourseTube.png";
import TextField from "@mui/material/TextField";
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExploreDrop from '../ExploreDrop';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img className="logoImg" src={logo} alt="logo"/>
        </div>
        <div className="searchContainer">
          <div className="searchBox">
            <div className="search">
            <TextField
            placeholder='Want to learn ?'
              height='20px'
              sx={{
                "& fieldset": { border: "none" },
              }}
              InputProps={{
                style: {
                  height: "40px",
                  width:'450px'
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
              </div>
          <div className="explore">
            <ExploreDrop/>
          </div>
          </div>
        </div>
        <div className="signinContainer">
          <div className="sigin">
            <span className="siginSpan">Signin</span>
          </div>
          <div className="createAccount">
          <Button variant="contained">Creare free Account</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;