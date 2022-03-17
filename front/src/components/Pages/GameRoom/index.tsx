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

  const [deck, setDeck] = useState<Deck>(new Deck(1));
  const [table, setTable] = useState<ICard[]>([]);

  const [selectedCards, setSelectCards] = useState<ICard[]>([]);

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
          return item !== card
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

      newDeckCards = deck.cards.filter(item => {
        if (item !== card)
          return item
      });

      newDeck.cards = newDeckCards;
      setDeck(newDeck);
      newPlayer2.hand.push(card);
      setPlayer2(newPlayer2);

    }
  }

  function handlerSelectCards(card: ICard, player: IPlayer): any {
    if (selectedCards.length < 2) {
      let selecteds = selectedCards;
      selecteds.push(card);
      setSelectCards(selecteds);
    }

    if (selectedCards.length === 2 && selectedCards[0].value === selectedCards[1].value) {
      let newTable = table
        .filter(item => item !== selectedCards[0])
        .filter(item => item !== selectedCards[1]);

      setTable(newTable);

      let newPlayer = player;
      newPlayer.hand = player.hand
        .filter(item => item !== selectedCards[0])
        .filter(item => item !== selectedCards[1]);

      newPlayer.lot = newPlayer.lot.concat(selectedCards);

      if (player1 === player)
        setPlayer1(newPlayer);
      else if (player2 === player)
        setPlayer2(newPlayer);


      setSelectCards([]);
    }
    console.log(selectedCards.length, table.length, player1.hand.length)
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
          card => {
            return (
              <Box
                key={card.value + card.suit} onClick={() => handlerSelectCards(card, player1)}>

                <Card
                  key={card.value + card.suit}
                  suit={card.suit}
                  value={card.value}
                />
              </Box>

            )
          })}
      </Table>

      <Box sx={{
        flex: '1',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center'
      }}>

        <Player key={player1.id} name={player1.name} hand={player1.hand} lot={player1.lot}>
          {player1.hand.map(card => {
            return (
              <Box
                key={card.value + card.suit}
                onClick={() => handlerSelectCards(card, player1)}>

                <Card
                  key={card.value + card.suit}
                  value={card.value}
                  suit={card.suit}
                />
              </Box>
            )
          })}
        </Player>

        <Box sx={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <button onClick={handlerStart}>Start</button>
        </Box>
        <Player key={player2.id} name={player2.name} hand={player2.hand} lot={player2.lot}>
          {player2.hand.map(card => {
            return (
              <Box
                key={card.value + card.suit}
                onClick={() => handlerSelectCards(card, player2)}>

                <Card
                  key={card.value + card.suit}
                  value={card.value}
                  suit={card.suit}
                />
              </Box>
            )
          })}
        </Player>
      </Box>

    </Box>
  )
}

export default index;