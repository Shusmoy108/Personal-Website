import React from "react";
import { CardMedia, Card, Typography, Divider } from "@mui/material";
import { withStyles } from "@mui/material";
import styles from "./AboutStyle";
import PropTypes from "prop-types";
import pp from './pp.jpg'
export default function About() {
    const classes :any = styles;
    return (
        <div style={{marginTop:100}}>
            <div style={{display:'flex', flexDirection:"row", gap:5}}>
                <div style={{}}>
                    <img src={pp} alt='hello' style={{ width:300, borderRadius:10}}/>
                </div>
                <div>
                <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              fontFamily:"Comic Neue"
            }}
          >
            About&nbsp;Me&nbsp;
          </Typography>
                </div>
            </div>
      </div>
    );
  
}
