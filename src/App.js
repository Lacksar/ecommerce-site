import Navbar from "./com/Navbar";
import ProductPage from "./com/ProductPage";
import Context from "./context/DataState";
import { Routes, Route } from "react-router-dom";
import Cart from "./com/Cart.js"
import ProductView from "./com/ProductView";
import { Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";



function App() {







  return (
    <>



      <Flex mt={30} ml={30} mb={"200px"} w={"250px"} h={"24"} maxH={"auto"} p={0} shadow={"md"} pr={2} borderRadius={5} alignItems={"center"} justifyContent={"space-around"} gap={5}>
        <Image src={"https://i.ibb.co/30Gyzzv/Screenshot-2023-04-30-222358.png"} h={"60%"} w={"auto"} ml={2} />
        <Flex direction={"column"} gap={2}>
          <Heading fontSize={"2xl"}>Website configuration</Heading>
          <Text fontSize={"1xl"} fontWeight={"medium"} textAlign={"right"} w={"auto"}><span style={{ color: "gray", background: "lightgreen", padding: "2px", borderRadius: "5px" }} >On Premium Plan</span></Text>
        </Flex>

      </Flex>




      <Context>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<ProductPage />}></Route>
          <Route path="/cart" exact element={<Cart />}></Route>
          <Route path="/product/:id" exact element={<ProductView />}></Route>

        </Routes>
      </Context>

    </>
  );
}

export default App;
