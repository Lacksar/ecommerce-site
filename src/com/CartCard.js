import React from "react";
import { CartState } from "../context/DataState";
import { Flex, Heading, Image, Text, Button, Center, Container } from "@chakra-ui/react";



export default function CartCard(props) {

    const { item } = props;

    const { state: { cart }, dispatch } = CartState();



    return (


        <>


            <Flex w={["90%", "100%"]} height={"auto"} borderBottom={"2px solid black"} alignItems={"center"} gap={"30px"} direction={["column", "row"]} h={["auto", "56"]} mt={5} pb={2}>
                <Flex w={["100%", "30%", "40%"]} h={["56", "100%"]} alignItems={["center", "center"]} justifyContent={["center", "center"]} mb={[0, 3, 3, 3]} overflow={"hidden"}>
                    <Image src={item.image} h={["56", "56"]} w={["auto", "100%"]} objectFit={"contain"} objectPosition={"center center"} m={0} />
                </Flex>

                <Flex direction={"column"} w={["100%", "70%", "60%"]} h={"100%"} alignItems={"center"}>
                    <Text fontSize={["17", "2xl", "2xl", "2xl"]}>${item.price}</Text>
                    <Heading fontSize={["20", "2xl", "2xl", "2xl"]} fontWeight={"semibold"} mb={[2, 3, 3, 3]}>{item.title}</Heading>


                    <Flex mt={[1, 2, 2, 2]} mb={[1, 2, 2, 2]} alignItems={"center"} gap={2} justifyContent={"center"} w={"50%"} >

                        <Button bg={"blackAlpha.400"} color={"gray.900"} onClick={() => { dispatch({ type: "incQty", payload: item }) }}>+</Button>
                        <Text>{item.qty}</Text>
                        <Button bg={"blackAlpha.400"} color={"gray.900"} onClick={() => { dispatch({ type: "decQty", payload: item }) }}>-</Button>
                    </Flex>

                    <Button bg={"red.300"} mt={2} w={["auto", "50%"]} onClick={() => dispatch({ type: "RemoveFromCart", payload: item })} >Remove From Cart</Button>


                </Flex>



            </Flex>



        </>



    )

}