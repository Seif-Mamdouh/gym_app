import React from 'react'
import { Stack, Typography } from '@mui/material';

import icon from '../assets/icons/gym.png';

const BodyPart = (item, setBodyPart, bodyPart) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        bodyPart === item ? {
          borderTop: "400px solid #ff2625",
          backgroundcolor: "#fff",
          borderBottomLeftRadius: '20px',
          width: '270px',
          height: '280px',
          cursor: 'pointer', 
          gap: '47px'
            } : ""
      }
    >
      <img
        src={icon}
        alt="dumbbell"
        style={{
          width: "100px",
          height: "100px",
        }}
      />
    </Stack>
  );
}

export default BodyPart