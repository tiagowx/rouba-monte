import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const Hand: React.FC = ({ children }) => {
  return (
    <Grid sx={{
      display: 'flex',
      flexDirection: 'row',
    }}>
      {children}
    </Grid>
  )
}
