import { Button, Center, Container, Flex, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { CartState } from "../context/DataState";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

export default function ProductCard(props) {

  const item = props.data;
  const { state: { cart }, dispatch } = CartState();



  return (
    <>






      <GridItem zIndex={2} mt={[2, 5, 10, 10]} minH={["400px", "auto", "auto", "auto"]} border={"1px"} w={["70%", "90%", "90%", "90%"]} borderBottom={"2px solid black"} borderRight={"2px solid black"} borderLeft={"2px solid black"} p={"5"} borderRadius={10} ml={["auto", "auto", 4, 3]} mr={["auto", "auto", 4, 3]}>
        <Flex direction={"column"} w={"100%"} >
          <Image borderRadius={10} src={item.image} transitionDuration={"2s"} _hover={{ transform: "scale(1.1)" }} zIndex={0} h={["auto", "auto", "auto", "auto"]} w={["90%", "auto", "auto", "auto"]} />
          <Text mt={2} mb={[1, 2, 2, 2]} fontWeight={"semibold"} fontSize={["1xl", "2xl", "2xl", "2xl"]}>${item.price}</Text>
          <Heading fontSize={["15", "15", "15", "15"]}>{item.title.length > 50 ? item.title.slice(0, 50) + "..." : item.title}</Heading>

          <StarRating rating={Math.round(item.rating.rate)} /><Text fontSize={"1xl"}>{item.rating.rate} of 5 stars</Text>


          <Center>
            <Flex mt={2} mb={2} alignItems={"center"} gap={2} justifyContent={"center"}>
              <Link to={`/product/${item.id}`}>
                <Button bg={"blue.300"} mt={[1, 2, 2, 2]} pl={"10"} pr={"10"}>ReadMore</Button>
              </Link>
            </Flex>
          </Center>

          {cart.some((p) => p.id == item.id) ?
            <>
              <Flex mt={2} mb={2} alignItems={"center"} gap={2} justifyContent={"center"}>

                <Button bg={"blackAlpha.400"} color={"gray.900"} onClick={() => { dispatch({ type: "incQty", payload: item }) }}>+</Button>




                <Text>{
                  cart.map(x => {

                    if (x.id === item.id) return x.qty;
                    else return;

                  })


                }</Text>




                <Button bg={"blackAlpha.400"} color={"gray.900"} onClick={() => { dispatch({ type: "decQty", payload: item }) }}>-</Button>
              </Flex>
              <Button bg={"red.300"} onClick={() => dispatch({ type: "RemoveFromCart", payload: item })}>Remove From Cart</Button></> :
            <Button bg={"blue.500"} onClick={() => dispatch({ type: "AddToCart", payload: item })}>Add To Cart</Button>}



        </Flex>
      </GridItem>


    </>
  )
}