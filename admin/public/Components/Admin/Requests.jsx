import React from 'react';
import {
  CardMeta,
  CardHeader,
  CardGroup,
  CardDescription,
  CardContent,
  Button,
  Card,
  Image,
} from 'semantic-ui-react';
import { useMediaQuery } from 'react-responsive'; // Import for media query hook
import AccModalReq from "./ReqModalAcc";
import AccModalRej from "./ReqModalRej";
const CardExampleGroups = () => {
  const renderCards = () => {
    const cards = [];
    const numRows = 5;

    for (let i = 0; i < numRows; i++) {
      const row = [];
      let cardsPerRow = 5; // Default for larger screens
      
      const query0 = useMediaQuery({ query: '(max-width: 1800px)' });
      if (query0) {
        cardsPerRow = 4;
      }

      // Use media query hook to adjust cardsPerRow dynamically
      const query1 = useMediaQuery({ query: '(max-width: 1300px)' });
      if (query1) {
        cardsPerRow = 3;
      }
      const query2 = useMediaQuery({ query: '(max-width: 1050px)' });
      if (query2) {
        cardsPerRow = 2;
      }
      const query3 = useMediaQuery({ query: '(max-width: 700px)' });
      if (query3) {
        cardsPerRow = 1;
      }

      for (let j = 0; j < cardsPerRow; j++) {
        const cardCount = i * cardsPerRow + j + 1; // Calculate unique card count
        row.push(
          <Card key={cardCount}>
            <CardContent>
              <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
              <CardHeader>Steve Sanders</CardHeader>
              <CardMeta>Friends of Elliot</CardMeta>
              <CardDescription>
                Steve wants to add you to the group <strong>best friends</strong>
              </CardDescription>
            </CardContent>
            <CardContent extra>
              <div className='ui two buttons'>
                {/* <Button basic color='green'> */}
                  <AccModalReq/>
                {/* </Button> */}
                {/* <Button basic color='red'> */}
                  <AccModalRej/>
                {/* </Button> */}
              </div>
            </CardContent>
          </Card>
        );
      }
      cards.push(<CardGroup key={i}>{row}</CardGroup>);
    }

    return cards;
  };

  return (
    <div className="center-container" style={{ margin: '0 auto', width: 'fit-content' }}>
      {renderCards()}
    </div>
  );
};

export default CardExampleGroups;
