import React from "react";

import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import SingleSong from "./SingleSong";

const Body = () => {
  const [song, setSong] = useState([]);

  useEffect(() => {
    fetchSong();
  }, []);

  const fetchSong = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=madonna", {
        headers: {
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
        },
      });

      if (response.ok) {
        const data = await response.json();
        const songsArray = data.data; // Modifica qui in base alla struttura della risposta della tua API
        setSong(songsArray);
      } else {
        throw new Error("Errore nel recupero degli articoli");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="">
      <Row className="row-cols-3 g-3">
        {song.map((n) => (
          <Col key={n.id}>
            <SingleSong song={n} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
{
}

export default Body;
