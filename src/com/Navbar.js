import { Button, Container, Flex, Input, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../context/DataState";
import { wrap } from "framer-motion";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

export default function Navbar() {

    const { state: { cart }, totalPrice, dispatch } = CartState();

    const [search, setSearch] = useState("")






    return (


        < Flex gap="2" justifyContent={"space-around"} alignItems={"center"} flexWrap={"wrap"} w={["100%", "100%", "100%", "80%"]} bg={"gray.900"} mt={5} position={"sticky"} top={0} zIndex={100} h={["auto", "auto", "auto", 16]} pt={2} pb={2} overflow={"hidden"} ml={"auto"} mr={"auto"} borderRadius={"5"} direction={["column", "row", "row", "row"]}>
            <Flex gap={5}>
                <Flex gap={2} flexWrap={"wrap"}>
                    <Link to="/" ><Button bg={"blue.600"} w={["auto", "auto", "auto", "100px"]} h={["35px"]}>Home</Button></Link>
                    <Link to="/cart"><Button bg={"blue.600"} display={"flex"} flexDirection={"row"} w={["auto", "auto", "auto", "100px"]} h={["35px"]} > <FaShoppingCart size={"80%"} /> <Text as="sup" color={"red.300"} ml={"1px"} fontWeight={"semibold"} fontSize={15}> {cart.length}</Text> </Button></Link>
                </Flex>

                <Flex alignItems={"center"} justifyContent={"center"}><Text fontSize={"1xl"} color={"white"} mt={"auto"} mb={"auto"} ml={"none"} >Total: $
                    <b>{totalPrice.toFixed(2)}</b></Text></Flex>
            </Flex>

            <Flex alignItems={"center"} justifyContent={["center", "center", "space-between", "space-between"]} h={"100%"} w={["auto", "200px", "auto", "auto"]} flexWrap={"wrap"} rowGap={1}>
                <Input placeholder="Search..." border={"1px solid white"} mr={1} h={["35px", "35px", "35px", "35px"]} w={["auto", "100px", "100px", "200px"]} _hover={{ transform: "scale(1.2)" }} color={"white"} onChange={(e) => { setSearch(e.target.value); dispatch({ type: "Search", payload: e.target.value }) }} value={search} />
                <Button pl={1} pr={1} onClick={() => { dispatch({ type: "Search", payload: search }) }} h={["35px", "35px", "35px", "35px"]} w={["auto", "auto", "auto", "auto"]} borderRadius={[5, 5, 5, 5]}><FaSearch /></Button>
            </Flex>

        </Flex >



    )


}