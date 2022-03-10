import { Grid } from '@mui/material'
import React from 'react'

export const Table: React.FC = ({ children }) => {

  return (
    <Grid container sx={{
      minWidth: '80%',
      minHeight: '80%',
      alignItems: 'center',
      justifyContent: 'center',

      backgroundColor: 'greenyellow',
      justifyItems: 'stretch'
    }}>
      {children}
    </Grid>
  )
}
