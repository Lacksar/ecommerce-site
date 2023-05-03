import React from "react";
import { CartState } from "../context/DataState";
import CartCard from "./CartCard";
import { Heading, Center, Text, Container, Flex } from "@chakra-ui/react";



export default function Cart(props) {

  const { state, state: { cart } } = CartState();



  return (


    <>

      {cart.length !== 0 ? <> <Flex ml={"auto"} mr={"auto"} w={"90%"} mb={5} alignItems={"center"} justifyContent={"center"} direction={"column"} gap={"10"} mt={"10"}>{cart.map((item, index) => {

        return <CartCard key={item.id} item={item} qty={state.qty} />

      })}
      </Flex>
      </> :
        <>

          <Flex direction={"column"} alignItems={"center"} justifyContent={"center"}>
            <svg ml={"auto"} mr={"auto"} style={{ color: "white", marginTop: "50px" }} xmlns="http://www.w3.org/2000/svg" width="30%" height="auto" viewBox="0 0 512 512"><title>ionicons-v5-d</title><circle cx="176" cy="416" r="32"></circle><circle cx="400" cy="416" r="32"></circle><polygon points="167.78 304 429.12 304 467.52 112 133.89 112 125.42 64 32 64 32 96 98.58 96 146.58 368 432 368 432 336 173.42 336 167.78 304"></polygon></svg>

            <Text fontSize={"2xl"} marginLeft={"10"}>No Items In Cart</Text>

          </Flex>

        </>}




    </>



  )

}