import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const Hand: React.FC = ({ children }) => {
  return (
    <Box sx={{
      display: 'flex',
      flex: '1',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {children}
    </Box>
  )
}

