import React, { useState, useEffect } from "react";
import { Stack, Text, Box, Avatar, Flex, useToast } from "@chakra-ui/react";
import { Scrollbars } from "react-custom-scrollbars";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Searchitemconteneritem(props) {
  const st = sessionStorage.getItem("st");

  let history = useHistory();

  const toast = useToast();

  const fname = props.fname;
  const avaPhoto = props.avaPhoto;
  const lname = props.lname;
  const subject = props.subject;
  const workplace = props.workplace;
  const about = props.about;
  const searchid = props.searchid;

  const tochat = (event) => {
    event.preventDefault();
    if (st === "s") {
      sessionStorage.setItem("searchid", searchid);
      history.push("/studentchat");
    } else {
      toast({
        title: "Student only field",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      border="2px"
      borderColor="black"
      bg="blue.100"
      w="90%"
      h="180px"
      ml="5%"
      mr="5%"
      mt="2%"
      borderRadius="15"
      onClick={tochat}
    >
      <Flex>
        <Avatar
          name={"Dulan"}
          size="2xl"
          m="20px"
          src={"./images/teacher.jpg"}
        />
        <Stack w="100%" m="5px" ml="20px">
          <Flex>
            <Text fontSize="25px">
              {"Dulan"} {"Madushanka"}{" "}
            </Text>
            <Text fontSize="15px" pt="10px">
              {" "}
              ( {"mathamatics"} )
            </Text>
          </Flex>
          <Text fontSize="15px">Work at {"Richman college, Galle"} </Text>
          <Scrollbars mr="" style={{ width: "100%", height: "100%" }}>
            {"I have 30 years teachin experiance"}
          </Scrollbars>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Searchitemconteneritem;
