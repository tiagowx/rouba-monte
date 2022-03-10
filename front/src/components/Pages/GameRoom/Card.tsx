import { Paper, Typography } from '@mui/material'
import React from 'react'
import { ICard } from '../../../interfaces/models/cards'
import { ImClubs, ImDiamonds, ImHeart, ImSpades } from 'react-icons/im';

export const Card: React.FC<ICard> = (card: ICard) => {

  const _color = () => {
    if (card.suit === 'clubs' || card.suit === 'spades')
      return 'black'
    else return 'red'
  };
  function setIcon(suit: string) {
    switch (suit) {
      case 'clubs': return (<ImClubs />)
      case 'diams': return (<ImDiamonds />)
      case 'hearts': return (<ImHeart />)
      case 'spades': return (<ImSpades />)
    }
  }

  return (
    <Paper sx={{
      width: '60px',
      height: '80px',
      display: 'flex',
      backgroundColor: 'white',
      justifyContent: 'space-around',
      alignContent: 'space-around',
      padding: '4px',
      margin: '4px',
      color: _color
    }}>

      <Typography variant='h4' component={'h4'}>{card.value}</Typography>
      <Typography alignSelf='end' variant='h3' component={'h3'}>
        {setIcon(card.suit)}
      </Typography>
    </Paper >
  )
}
