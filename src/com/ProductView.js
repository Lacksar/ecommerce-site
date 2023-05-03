import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { CartState } from "../context/DataState";
import { useParams } from "react-router-dom";
import StarRating from "./StarRating";



export default function ProductView() {


    const { state: { initialProducts }, dispatch, state: { cart } } = CartState();
    let { id } = useParams();
    id = Number(id)

    let pr = initialProducts;


    let p = pr.filter(x => { if (x.id === id) { return x } else return; });
    const product = p[0];


    let sideProducts = initialProducts.filter(x => { if (x.category === product.category) { return x } else return; });




    return (
        <>

            <Flex mt={"20"}>
                <Flex mb={"20"} mt={20} w={"10%"} direction={"column"} display={["none", "none", "inline-block", "inline-block"]}>
                    {sideProducts.map(x => {

                        return <Image src={x.image} w={"100%"} />

                    })}
                </Flex>

                <Flex w={"90%"} mt={[2, 7, 10, 15]} transform={["scale(1)", "scale(1)", "scale(1)", "scale(1)",]} minH={"auto"} h={"auto"} ml={"auto"} mr={"auto"} direction={["column", "row"]}>
                    <Flex w={["100%", "35%", "30%", "40%"]} >

                        <Image src={product.image} h={["64", "52", "40%", "70%"]} w={"auto"} ml={"auto"} mr={"auto"} />
                    </Flex>
                    <Flex w={["100%", "65%", "70%", "60%"]} alignItems={"center"} direction={"column"} boxSizing={"border-box"} pl={5} pr={5} h={"auto"} mb={7}>

                        <Heading fontSize={["20", "2xl", "2xl", "2xl"]}>
                            {product.title}

                        </Heading>
                        <Text fontSize={["16", "20", "2xl", "2xl"]} mb={5}>Category: {product.category}</Text>


                        <Text fontSize={["16", "20", "2xl", "2xl"]} mt={10} mb={10}>{product.description}</Text>
                        <StarRating rating={Math.round(product.rating.rate)} mt={"10"} />

                        <Text fontSize={["20", "20", "2xl", "2xl"]} mb={4}>{product.rating.rate} of 5 stars / Count: {product.rating.count}</Text>
                        <Text mt={2} mb={2} fontWeight={["", "", "", "semibold"]} fontSize={[20, 20, "2xl", "2xl"]}>Price: ${product.price}</Text>

                        {cart.some((p) => p.id == product.id) ?
                            <>
                                <Flex mt={5} mb={5} alignItems={"center"} gap={2} justifyContent={"center"} transform={"scale(1.3)"}>
                                    <Button bg={"blackAlpha.400"} color={"gray.900"} onClick={() => { dispatch({ type: "incQty", payload: product }) }}>+</Button>

                                    <Text>{
                                        cart.map(x => {

                                            if (x.id === product.id) return x.qty;
                                            else return;

                                        })
                                    }</Text>

                                    <Button bg={"blackAlpha.400"} color={"gray.900"} onClick={() => { dispatch({ type: "decQty", payload: product }) }}>-</Button>
                                </Flex>
                                <Button bg={"red.300"} onClick={() => dispatch({ type: "RemoveFromCart", payload: product })} >Remove From Cart</Button></> :
                            <Button bg={"blue.500"} onClick={() => dispatch({ type: "AddToCart", payload: product })} mt={5}>Add To Cart</Button>}

                    </Flex>
                </Flex>
            </Flex>


        </>
    )

}

