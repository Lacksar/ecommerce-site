import React, { useContext } from "react";
import { CartState } from "../context/DataState";
import ProductCard from "./ProductCard";
import { Center, Container, Flex, Grid, GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import ProductType from "./ProductType";

export default function ProductPage(props) {


    const { state: { products }, state: { category } } = CartState();



    return (
        <>

            <Flex gap={0} flexDirection={["column", "column", "row", "row"]}>

                <Container maxW={["100%", "100%", "35%", "30%"]} >

                    <ProductType />

                </Container>





                <Container background={""} minW={["100%", "100%", "60%", "70%"]} overflow={"hidden"}>
                    {category ? <>

                        <Center mt={5}><Text fontWeight={"light"} fontSize={"4xl"}>{category.charAt(0).toUpperCase() + category.slice(1)}</Text></Center>


                    </> : null}


                    <Center>
                        <Grid
                            gridTemplateColumns={["repeat(1, 1fr)", " repeat(2, 1fr)", "repeat(2,1fr)", "repeat(3, 1fr)"]} rowGap={["auto", "auto", "10", "10"]} ml={"auto"}>

                            {products.map(item => (<ProductCard data={item} key={item.id} />))}
                        </Grid>
                    </Center>

                </Container>

            </Flex >

        </>);
}