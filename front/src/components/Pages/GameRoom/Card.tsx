import { Paper, Typography } from '@mui/material'
import React from 'react'
import { ICard } from '../../../interfaces/models/cards'
import { ImClubs, ImDiamonds, ImHeart, ImSpades } from 'react-icons/im';
import { GiCardDraw, GiCardExchange } from 'react-icons/gi';

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
      case 'back': return (<GiCardExchange />)
      case 'buy': return (<GiCardDraw />)
    }
  }

  return (
    <Paper sx={{
      color: _color,
      width: '75px',
      height: '90px',
      display: 'flex',
      backgroundColor: 'white',
      justifyContent: 'space-around',
      alignContent: 'space-around',
      padding: '4px',
      cursor: 'grab',
      opacity: '1',
      '&:hover': {
        cursor: 'grab',
        opacity: '0.9',
      },
      '&:active': {
        cursor: 'grabbing',
        opacity: '0.8',
      },
      '&:focus': {
        cursor: 'grabbing',
        opacity: '0.8',
      },
    }}>
      {card.suit !== 'back' &&
        <Typography fontWeight='bold' variant='h5' component={'h5'}>{card.value}</Typography>
      }
      <Typography alignSelf='end' variant='h3' component={'h3'}>
        {setIcon(card.suit)}
      </Typography>
    </Paper >
  )
}
