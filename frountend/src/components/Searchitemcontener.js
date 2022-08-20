import React, { useState, useEffect } from "react";
import { Stack, Text, Box, Avatar, Flex, useToast } from "@chakra-ui/react";
import { Scrollbars } from "react-custom-scrollbars";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Searchitemconteneritem from "./Serarchteacherinfofocage";

function Searchitemcontener(props) {
  const st = sessionStorage.getItem("st");

  let history = useHistory();

  const as = props.data;

  const toast = useToast();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [workplace, setWorkplace] = useState("");
  const [about, setAbout] = useState("");
  const [avaPhoto, setAvaPhotor] = useState("");
  const [searchid, setSearchid] = useState("");
  const [subject, setSubject] = useState("");

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
  const ssubject = sessionStorage.getItem("subject");
  const searchtext = sessionStorage.getItem("searchbody");

  return ssubject == "All Subjects" && searchtext == "" ? (
    <Searchitemconteneritem
      fname={fname}
      avaPhoto={avaPhoto}
      lname={lname}
      subject={subject}
      workplace={workplace}
      about={about}
      searchid={searchid}
    />
  ) : searchtext == "" ? (
    ssubject == subject ? (
      <Searchitemconteneritem
        fname={fname}
        avaPhoto={avaPhoto}
        lname={lname}
        subject={subject}
        workplace={workplace}
        about={about}
        searchid={searchid}
      />
    ) : null
  ) : ssubject == "All Subjects" ? (
    searchtext == fname ? (
      <Searchitemconteneritem
        fname={fname}
        avaPhoto={avaPhoto}
        lname={lname}
        subject={subject}
        workplace={workplace}
        about={about}
        searchid={searchid}
      />
    ) : null
  ) : ssubject == subject && searchtext == lname ? (
    <Searchitemconteneritem
      fname={fname}
      avaPhoto={avaPhoto}
      lname={lname}
      subject={subject}
      workplace={workplace}
      about={about}
      searchid={searchid}
    />
  ) : null;
}

export default Searchitemcontener;
