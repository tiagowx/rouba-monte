/* eslint-disable react-hooks/rules-of-hooks */
import { Box } from "@mui/material"
import { useState } from "react";
import { Deck } from "../../../classes/Deck";
import { GameController } from "../../../classes/GameControler";
import { ICard } from "../../../interfaces/models/cards";
import { IPlayer } from "../../../interfaces/models/player";
import { Card } from "./Card";
import { Player } from "./Player";
import { Table } from "./Table";

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const [deck, setDeck] = useState<Deck>(new Deck(1));
  const [table, setTable] = useState<ICard[]>([]);

  //mocks
  const [player1, setPlayer1] = useState<IPlayer>({ name: 'Player1', lot: [], hand: [] });
  const [player2, setPlayer2] = useState<IPlayer>({ name: 'Player2', lot: [], hand: [] });

  const GC = new GameController('algum', [player1, player2], deck);

  function handlerStart() {
    if (deck.cards.length < 8) return;

    let newTable = [...table];
    let newDeck = deck;

    for (let i = 0; i < 8; i++) {

      let card = GC.ChooseCard(deck.cards);

      let newDeckCards = deck.cards.filter((item) => {
        if (item !== card)
          return item
      });

      newDeck.cards = newDeckCards;
      setDeck(newDeck);

      newTable.push(card);
      setTable(newTable);
    }
    handlerDistributeCards();
  }

  function handlerDistributeCards() {
    for (let i = 0; i < 4; i++) {
      let newDeck = deck;
      let newPlayer1 = player1;
      let newPlayer2 = player2;
      
      let card = GC.ChooseCard(deck.cards);

      let newDeckCards = deck.cards.filter((item) => {
        if (item !== card)
          return item
      });

      newDeck.cards = newDeckCards;
      setDeck(newDeck);

      newPlayer1.hand.push(card);
      setPlayer1(newPlayer1);

      card = GC.ChooseCard(deck.cards);

      newDeckCards = deck.cards.filter((item) => {
        if (item !== card)
          return item
      });

      newDeck.cards = newDeckCards;
      setDeck(newDeck);
      newPlayer2.hand.push(card);
      setPlayer2(newPlayer2);

    }
  }

  return (
    <Box sx={{
      flex: '1',
      minWidth: '100vw',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>

      <Table>
        {table.map(
          c => {
            return (
              <Card
                key={c.value + c.suit}
                suit={c.suit}
                value={c.value}
              />)
          })}
      </Table>

      <Box sx={{
        flex: '1',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center'
      }}>

        <Player key={player1.id} name={player1.name} hand={player1.hand} lot={player1.lot} />
        <Box sx={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <button onClick={handlerStart}>Start</button>

        </Box>
        <Player key={player2.id} name={player2.name} hand={player2.hand} lot={player2.lot} />
      </Box>

    </Box>
  )
}

export default index;