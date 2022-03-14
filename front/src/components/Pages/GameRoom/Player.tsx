import { Box, Typography } from '@mui/material'
import React from 'react'
import { IPlayer } from '../../../interfaces/models/player'
import { Card } from './Card'
import { Hand } from './Hand'

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
          <Card suit='back' value={''} />
        </Box>
      </Box>
      <Hand>
        {player.hand?.map(card => {
          return (<Card
            key={card.value + card.suit}
            value={card.value}
            suit={card.suit}
          />)
        })}
      </Hand>
    </Box>
  )
}
