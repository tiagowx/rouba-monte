import { Box, Typography } from '@mui/material'
import React from 'react'
import { IPlayer } from '../../../interfaces/models/player'
import { Card } from './Card'

export const Player: React.FC<IPlayer> = (player: IPlayer) => {
  const _color = () => {
    if (player.name === 'Player1')
      return 'cyan'
    else return 'pink'
  };

  return (
    <Box sx={{
      flex: 1,
      paddingX: '16px',
      backgroundColor: _color(),
      display: 'flex',
      flexDirection: 'row',
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
      }}>
        <Typography fontWeight='bold' >{player.name}</Typography>
        <Box>
          <Typography margin='4px'>Monte: {player.lot.length}</Typography>
          {player.lot.length === 0 ?
            <Card suit='back' value={''} key={null} />
            :
            <Card 
              suit={player.lot[player.lot.length - 1].suit} 
              value={player.lot[player.lot.length - 1].value} key={player.name+'lot'} />
            
          }
        </Box>
      </Box>
      <Box sx={{
        display: 'flex',
        flex: '1',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {player.children}
      </Box>
    </Box>
  )
}
