import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const SingleSong = ({ song }) => {
  return (
    <>
      <Row xs={1} md={1} className="g-4 ">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={song.album.cover_medium} alt="track" />
              <Card.Body>
                <Card.Title>{song.album.title}</Card.Title>
                <Card.Text>{song.artist.name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default SingleSong;
