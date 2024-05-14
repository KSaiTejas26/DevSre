import React from 'react';
import { Card, ButtonGroup, CardBody, CardFooter, Button, Image, Text, useMediaQuery } from '@chakra-ui/react';
import { Stack, Heading, Divider, Flex } from '@chakra-ui/react';
import img from './Images/img7.jpg';

function Prod() {
  const [isLargerThanMd] = useMediaQuery('(min-width: 768px)');

  return (
    <Card
      maxW={isLargerThanMd ? 'sm' : 'md'}
      className={isLargerThanMd ? 'd-flex col-md-12' : 'd-flex col-md-4'}
      shadow="xl"
    >
      <CardBody>
        <Flex direction={isLargerThanMd ? 'column' : 'column'} align={isLargerThanMd ? 'center' : ''}>
          <div className={isLargerThanMd ? 'd-flex justify-content-center' : 'd-flex justify-content-center'}>
            <Image src={img} alt="Green double couch with wooden legs" borderRadius="lg" />
          </div>
          <Stack>
            <div className="my-1"><Heading size="md">Living room Sofa</Heading></div>
            <div className="d-flex">
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people
                who love a chic design with a sprinkle of vintage design.
              </Text>
            </div>
            <Text color="blue.600" fontSize={isLargerThanMd ? '2xl' : 'lg'}>
              $450
            </Text>
          </Stack>
        </Flex>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2" className={isLargerThanMd ? 'd-flex' : ''}>
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default Prod;