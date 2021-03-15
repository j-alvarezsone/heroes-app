import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeroCard = ({ id, superhero, alter_ego, first_appearance, characters }) => {
  return (
    <CardColumns>
      <Card className='p-0 mb-2' style={{ maxWidth: '540px' }}>
        <Card.Img variant='top' src={`./assets/heroes/${id}.jpg`} alt='superhero' />
        <div className='col-md-8'>
          <Card.Body>
            <Card.Title>{superhero}</Card.Title>
            <Card.Text>{alter_ego}</Card.Text>
            {alter_ego !== characters && <Card.Text>{characters}</Card.Text>}
            <Card.Text>{first_appearance}</Card.Text>
            <Link to={`./hero/${id}`}>More...</Link>
          </Card.Body>
        </div>
      </Card>
    </CardColumns>
  );
};

export default HeroCard;
