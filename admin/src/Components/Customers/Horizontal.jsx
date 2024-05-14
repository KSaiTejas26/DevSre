import React, { useState, useRef } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { ChakraProvider, Box, Flex, Button, useMediaQuery } from "@chakra-ui/react";
import img2 from "./Images/img5.jpg";
import Prod from "./Prod";

function Horizontal() {
  const data = [
    {
      img: img2,
      name: "Product1",
      desc: "Generating random paragraphs...",
      brand: "Realpage",
      price: "18000",
    },
    {
      img: img2,
      name: "Product1",
      desc: "Generating random paragraphs...",
      brand: "Realpage",
      price: "18000",
    },
    {
      img: img2,
      name: "Product1",
      desc: "Generating random paragraphs...",
      brand: "Realpage",
      price: "18000",
    },
    {
      img: img2,
      name: "Product1",
      desc: "Generating random paragraphs...",
      brand: "Realpage",
      price: "18000",
    },
    {
      img: img2,
      name: "Product1",
      desc: "Generating random paragraphs...",
      brand: "Realpage",
      price: "18000",
    },
    {
      img: img2,
      name: "Product1",
      desc: "Generating random paragraphs...",
      brand: "Realpage",
      price: "18000",
    },
    {
      img: img2,
      name: "Product1",
      desc: "Generating random paragraphs...",
      brand: "Realpage",
      price: "18000",
    },
    // Add more product objects as needed
  ];
  const [scroll, setScroll] = useState(0);
  const scrollElement = useRef();
  const [isLargerThanMd] = useMediaQuery("(min-width: 768px)");

  const scrollRight = () => {
    const container = scrollElement.current;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const maxScroll = scrollWidth - clientWidth;
    const newScroll = Math.min(scroll + 300, maxScroll);
    setScroll(newScroll);
    container.scrollTo({
      left: newScroll,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    const container = scrollElement.current;
    const newScroll = Math.max(scroll - 300, 0);
    setScroll(newScroll);
    container.scrollTo({
      left: newScroll,
      behavior: "smooth",
    });
  };

  return (
    <ChakraProvider>
      <div className="row">
        <div className="col-md-1 d-flex justify-content-center">
          <Button
            bg="white"
            shadow="md"
            rounded="full"
            p="1"
            top="50%"
            transform="translateY(-50%)"
            onClick={scrollLeft}
            display={isLargerThanMd ? "inline-flex" : "none"}
          >
            <ArrowBackIosNewIcon />
          </Button>
        </div>
        <div className="col-md-10">
          <Box>
            <h2 className="text-2xl font-semibold py-4">
              New Launches in Sofas
            </h2>
            <Flex
              direction={isLargerThanMd ? "row" : "row"} // Adjust direction based on screen size
              align="center"
              overflowX={isLargerThanMd ? "auto" : "auto"} // Disable horizontal scrolling on small screens
              ref={scrollElement}
              css={{
                "&::-webkit-scrollbar": {
                  height: "8px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "gray",
                  borderRadius: "8px",
                },
              }}
            >
              {data.map((product, index) => (
                <Box key={index} flexShrink={0} mx={isLargerThanMd ? 2 : 0} my={isLargerThanMd ? 0 : 2}>
                  <Prod {...product} />
                </Box>
              ))}
            </Flex>
          </Box>
        </div>
        <div className="col-md-1 d-flex justify-content-center">
          <Button
            bg="white"
            shadow="md"
            rounded="full"
            p="1"
            top="50%"
            transform="translateY(-50%)"
            onClick={scrollRight}
            display={isLargerThanMd ? "inline-flex" : "none"}
          >
            <ArrowForwardIosIcon />
          </Button>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default Horizontal;