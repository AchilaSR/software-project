import React, { useState, useEffect } from "react";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import Userheader from "../components/Userheder";
import Searchitemcontener from "../components/Searchitemcontener";
import { Scrollbars } from "react-custom-scrollbars";
import axios from "axios";

function Searchsection() {
  const [renum, setRenum] = useState(1);
  const [arr, setArr] = useState([]);

  const searchtext = sessionStorage.getItem("searchbody");
  const subject = sessionStorage.getItem("subject");

  return (
    <>
      <Userheader />
      <Grid w="100%" h="560px" templateColumns="repeat(10, 1fr)">
        <GridItem W="100%" colSpan={2}></GridItem>
        <GridItem colSpan={6}>
          <Text mt="2%">
            Your Search "{searchtext}" : {subject}
          </Text>
          <Scrollbars style={{ width: "100%", height: "100%" }}>
            <Searchitemcontener />
            <Searchitemcontener />
            <Searchitemcontener />
            <Searchitemcontener />
            <Searchitemcontener />
          </Scrollbars>
        </GridItem>
        <GridItem colSpan={2} />
      </Grid>
    </>
  );
}

export default Searchsection;
