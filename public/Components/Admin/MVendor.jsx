import React from 'react';
import { Image, Card, Icon, Button, Grid } from 'semantic-ui-react';
import Img from "../../../public/elliot.jpg";
import "./mv.css";
import DeleteIcon from '@mui/icons-material/Delete';
import DelModal from "./DelModal";
import MediaQuery from "react-responsive";

const CardExampleCard = () => {
  const totalCards = 16;
  const cards = [];

  for (let i = 0; i < totalCards; i++) {
    const card = (
      <Card key={i} className="custom-card" centered>
        <div className="image-frame">
          <Image src={Img} className="card-image" />
        </div>
        <Card.Content>
          <Card.Header className="card-header">Card Header</Card.Header>
          <Card.Meta>Card Meta</Card.Meta>
          <Card.Description>
            This is the description of the card. You can provide additional details or information here.
          </Card.Description>
        </Card.Content>
        <Card.Content extra style={{ display: 'flex'}}>
          <div>
            <a>
              <Icon name='user' />
              16 Friends
            </a>
          </div>
          <div>
            <DelModal />
          </div>
        </Card.Content>
      </Card>
    );

    cards.push(card);
  }

  return (
    <div className="card-container">
      <Grid columns={3} doubling stackable>
        {cards.map((card, index) => (
          <Grid.Column key={index}>
            {card}
          </Grid.Column>
        ))}
      </Grid>
      <MediaQuery maxWidth={1400}>
        <div className="card-container">
          <Grid columns={2} doubling stackable>
            {cards.map((card, index) => (
              <Grid.Column key={index}>
                {card}
              </Grid.Column>
            ))}
          </Grid>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={850}>
        <div className="card-container">
          <Grid columns={1}>
            {cards.map((card, index) => (
              <Grid.Column key={index}>
                {card}
              </Grid.Column>
            ))}
          </Grid>
        </div>
      </MediaQuery>
      {/* <MediaQuery maxWidth={400}>
        <div className="card-container">
          <Grid columns={1} doubling stackable>
            {cards.map((card, index) => (
              <Grid.Column key={index}>
                {card}
              </Grid.Column>
            ))}
          </Grid>
        </div>
      </MediaQuery> */}
    </div>
  );
};

export default CardExampleCard;