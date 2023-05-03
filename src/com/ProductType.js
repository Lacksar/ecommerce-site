
import { Button, Center, Checkbox, Container, Flex, Heading, Radio, Select, Text, RadioGroup, Stack, useDisclosure, Drawer, DrawerOverlay, DrawerHeader, DrawerCloseButton, DrawerContent, DrawerBody } from "@chakra-ui/react";
import { CartState } from "../context/DataState";
import { useEffect, useRef, useState } from "react";




function ProductType() {

    const { state: { cart }, dispatch } = CartState();


    const [check, setCheck] = useState(null);

    const changeCheck = () => {
        setCheck(null);
    }


    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    const { innerWidth } = window;

    console.log(innerWidth)



    return (
        <>


            {innerWidth <= 767 ? <>

                <Container pl={5} pt={0}>
                    <Button mt={2} bg={"blue.600"} ml={0} borderRadius={"100px"} ref={btnRef} onClick={onOpen} >&#8801;</Button>
                </Container>
            </>
                :

                <>
                    <Flex mb={20} mt={30} direction={"column"} overflow={"scroll"} display={["none", "none", "inline", "inline"]} position={"sticky"} top={20}>
                        <Flex bg={""} mt={10} flexDirection={"column"} >
                            <Text fontSize={"2xl"} textAlign={"center"} >Category</Text>
                            <br />

                            <Flex gap={3} direction={"column"} alignItems={"center"}>
                                <Button w={["70%", "60%", "80%", "60%"]} background={"green.500"} color={"white"} _hover={{ bg: "green.900" }} onClick={() => { dispatch({ type: "reset", payload: "none" }) }}><Text fontSize={"sm"} _hover={{ transform: "scale(1.1)" }} >All</Text></Button>
                                <Button w={["70%", "60%", "80%", "60%"]} background={"green.500"} color={"white"} _hover={{ bg: "green.900" }} onClick={() => { dispatch({ type: "category_filter", payload: "men's clothing" }) }}><Text fontSize={"sm"}  >men's clothing</Text></Button>
                                <Button w={["70%", "60%", "80%", "60%"]} background={"green.500"} color={"white"} _hover={{ bg: "green.900" }} onClick={() => { dispatch({ type: "category_filter", payload: "jewelery" }) }}><Text fontSize={"sm"} >jewelery</Text></Button>
                                <Button w={["70%", "60%", "80%", "60%"]} background={"green.500"} color={"white"} _hover={{ bg: "green.900" }} onClick={() => { dispatch({ type: "category_filter", payload: "electronics" }) }}><Text fontSize={"sm"}>electronics</Text></Button>
                                <Button w={["70%", "60%", "80%", "60%"]} background={"green.500"} color={"white"} _hover={{ bg: "green.900" }} onClick={() => { dispatch({ type: "category_filter", payload: "women's clothing" }) }}><Text fontSize={"sm"} >women's clothing</Text></Button>
                            </Flex>

                        </Flex>





                        <Flex mt={10} flexDirection={"column"} >
                            <Text fontSize={"2xl"} textAlign={"center"} >Filters</Text>
                            <br />

                            <Flex gap={3} direction={"column"} alignItems={"center"} bg={"gray.100"} pt={5} pb={5} borderRadius={10} _hover={{ bg: "gray.50" }}>


                                {/* By Price */}
                                <Flex alignItems={"center"} direction={"column"} gap={2}>
                                    <Text fontSize={"1.2em"}>By Price</Text>
                                    <Flex>
                                        <RadioGroup onChange={(e) => { dispatch({ type: e, payload: e }) }}>
                                            <Stack direction='column'>
                                                <Radio value='Price_high-low' _checked={check} onClick={changeCheck}>High To Low</Radio>
                                                <Radio value='Price_low-high' _checked={check} onClick={changeCheck}>Low To High</Radio>
                                            </Stack>
                                            <Text fontSize={"1.2em"} mt={3}>By Rating</Text>
                                            <Stack direction='column'>
                                                <Radio value='Rate_high-low' _checked={check} onClick={changeCheck}>High To Low</Radio>
                                                <Radio value='Rate_low-high' _checked={check} onClick={changeCheck}>Low To High</Radio>
                                            </Stack>
                                        </RadioGroup>
                                    </Flex>
                                </Flex>






                                <Flex alignItems={"center"} direction={"column"} gap={2} mt={4}>
                                    <Flex>
                                        <Button bg={"blue.300"} onClick={() => { dispatch({ type: "reset" }); setCheck(false); }} > Clear Filters</Button>
                                    </Flex>
                                </Flex>




                            </Flex>

                        </Flex>
                    </Flex >

                </>

            }



            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />

                    <DrawerBody>
                        <Flex mb={20} mt={30} direction={"column"} overflowY={"scroll"} >
                            <Flex bg={""} mt={10} flexDirection={"column"} >
                                <Text fontSize={"2xl"} textAlign={"center"} >Category</Text>
                                <br />

                                <Flex gap={3} direction={"column"} alignItems={"center"}>
                                    <Button w={["70%", "60%", "80%", "60%"]} background={"green.500"} color={"white"} _hover={{ bg: "green.900" }} onClick={() => { dispatch({ type: "reset", payload: "none" }) }}><Text fontSize={"sm"} _hover={{ transform: "scale(1.1)" }} >All</Text></Button>
                                    <Button w={["70%", "60%", "80%", "60%"]} background={"green.500"} color={"white"} _hover={{ bg: "green.900" }} onClick={() => { dispatch({ type: "category_filter", payload: "men's clothing" }) }}><Text fontSize={"sm"}  >men's clothing</Text></Button>
                                    <Button w={["70%", "60%", "80%", "60%"]} background={"green.500"} color={"white"} _hover={{ bg: "green.900" }} onClick={() => { dispatch({ type: "category_filter", payload: "jewelery" }) }}><Text fontSize={"sm"} >jewelery</Text></Button>
                                    <Button w={["70%", "60%", "80%", "60%"]} background={"green.500"} color={"white"} _hover={{ bg: "green.900" }} onClick={() => { dispatch({ type: "category_filter", payload: "electronics" }) }}><Text fontSize={"sm"}>electronics</Text></Button>
                                    <Button w={["70%", "60%", "80%", "60%"]} background={"green.500"} color={"white"} _hover={{ bg: "green.900" }} onClick={() => { dispatch({ type: "category_filter", payload: "women's clothing" }) }}><Text fontSize={"sm"} >women's clothing</Text></Button>
                                </Flex>

                            </Flex>





                            <Flex mt={10} flexDirection={"column"} position={"sticky"} top={"20"} >
                                <Text fontSize={"2xl"} textAlign={"center"} >Filters</Text>
                                <br />

                                <Flex gap={3} direction={"column"} alignItems={"center"} bg={"gray.100"} pt={5} pb={5} borderRadius={10} _hover={{ bg: "gray.50" }}>


                                    {/* By Price */}
                                    <Flex alignItems={"center"} direction={"column"} gap={2}>
                                        <Text fontSize={"1.2em"}>By Price</Text>
                                        <Flex>
                                            <RadioGroup onChange={(e) => { dispatch({ type: e, payload: e }) }}>
                                                <Stack direction='column'>
                                                    <Radio value='Price_high-low' _checked={check} onClick={changeCheck}>High To Low</Radio>
                                                    <Radio value='Price_low-high' _checked={check} onClick={changeCheck}>Low To High</Radio>
                                                </Stack>
                                                <Text fontSize={"1.2em"} mt={3}>By Rating</Text>
                                                <Stack direction='column'>
                                                    <Radio value='Rate_high-low' _checked={check} onClick={changeCheck}>High To Low</Radio>
                                                    <Radio value='Rate_low-high' _checked={check} onClick={changeCheck}>Low To High</Radio>
                                                </Stack>
                                            </RadioGroup>
                                        </Flex>
                                    </Flex>






                                    <Flex alignItems={"center"} direction={"column"} gap={2} mt={4}>
                                        <Flex>
                                            <Button bg={"blue.300"} onClick={() => { dispatch({ type: "reset" }); setCheck(false); }} > Clear Filters</Button>
                                        </Flex>
                                    </Flex>




                                </Flex>

                            </Flex>
                        </Flex >
                    </DrawerBody>

                </DrawerContent>

            </Drawer>


        </>
    );
}

export default ProductType;
