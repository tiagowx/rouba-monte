import { Grid } from '@mui/material'
import React from 'react'

export const Table: React.FC = ({ children }) => {

  return (
    <Grid container gridColumn={4} sx={{
      flex:4,
      alignSelf: 'center',
      justifySelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'green',
      padding: '32px',
    }}>
      {children}
    </Grid>
  )
}
