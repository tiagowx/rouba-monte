/* eslint-disable react-hooks/rules-of-hooks */
import { Box } from "@mui/material"
import { useState } from "react";
import { Deck } from "../../../classes/Deck";
import { ICard } from "../../../interfaces/models/cards";
import { IPlayer } from "../../../interfaces/models/player";
import { IRoom } from "../../../interfaces/models/room";
import { Card } from "./Card";
import { Table } from "./Table";

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [room, setRoom] = useState<IRoom>({
    name: 'Primeira',
    status: 'waiting'
  })

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [players, setPlayer] = useState<IPlayer[]>();

  const [deck, setDeck] = useState<ICard[]>(new Deck(1).cards);
  const [table, setTable] = useState<ICard[]>([]);


  return (
    <Box>
      <Table>
        {deck.map(c => (<Card key={c.value+c.suit} suit={c.suit} value={c.value} />))}
      </Table>

    </Box>
  )
}

export default index;