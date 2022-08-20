import {
  Stack,
  Flex,
  Box,
  Text,
  Spacer,
  Image,
  InputGroup,
  Input,
  InputLeftElement,
  Select,
  Tooltip,
  FormControl,
  FormLabel,
  InputRightElement,
  useToast,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  BellIcon,
  ChevronDownIcon,
  DeleteIcon,
  ViewIcon,
  ViewOffIcon,
} from "@chakra-ui/icons";
import axios from "axios";
// import Noticontener from "./Noticontener"
// import Searchitemcontener from "./Searchitemcontener";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

function Userheader() {
  const api = axios.create({
    baseURL: `http://localhost:5000/`,
  });

  const id = sessionStorage.getItem("id");
  const st = sessionStorage.getItem("st");

  const [searchbody, setSearchbody] = useState("");
  const [subject, setSubject] = useState("All Subjects");
  const [renum, setRenum] = useState(1);
  const [profname, setProfname] = useState("");
  const [arr, setArr] = useState([]);

  const [currentp, setCurrentp] = useState("");
  const [npassword, setNpassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [ShowPassword, setShowPassword] = useState(false);
  const [upuser, setUpuser] = useState();

  sessionStorage.setItem("searchbody", searchbody);
  sessionStorage.setItem("subject", subject);

  let history = useHistory();

  // useEffect( () => {
  //     async  function fetchMyAPI() {

  //     if(st==="s"){
  //         // const res = await api.get(`/student/student/${id}`);
  //         // setProfname(res.data.firstname)
  //     }
  //     if(st==="t"){
  //         const res = await api.get(`/teacher/getnoti/${id}`);

  //         console.log(res)
  //     }

  // }

  // fetchMyAPI()

  // },[])

  useEffect(() => {
    async function fetchMyAPI() {
      if (st === "s") {
        const res = await api.get(`/student/student/${id}`);
        setProfname(res.data.firstname);
      }
      if (st === "t") {
        const resname = await api.get(`/teacher/teacher/${id}`);
        setProfname(resname.data.firstname);
        const res = await api.get(`/teacher/getnoti/${id}`);
        setArr(res.data);
      }

      setRenum(renum + 1);
    }

    fetchMyAPI();
    console.log("ewfigsegf");
  }, [renum == 1]);

  const esolimage = (event) => {
    event.preventDefault();
    history.push("/userpage");
  };

  const search = async (event) => {
    event.preventDefault();
    history.push("/searchsection");
  };

  const logout = (event) => {
    event.preventDefault();
    history.push("/");
  };
  const profile = (event) => {
    event.preventDefault();
    if (st === "s") {
      history.push("/infostudent");
    }
    if (st === "t") {
      history.push("/infoteacher");
    }
  };

  // **************************************Change password*********************************

  const changepassword = async (event) => {
    event.preventDefault();
    console.log(currentp);

    const res = await api.post("/student/changep", {
      id: id,
      password: currentp,
      newpassword: npassword,
    });
    setUpuser(res.data);

    if (res.status === 200) {
      toast({
        title: "Password change sucessfull",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      history.push("/singinpage");
    }
  };

  //******************************************* model **********************************************

  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  //   *************************************** delete acc **********************************

  const deleteaccount = async (event) => {
    event.preventDefault();
    const res = await api.delete(`/student/delectacc/${id}`);

    if (res.status === 200) {
      toast({
        title: "Account Delete Sucessfull",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      history.push("/");
    }
  };

  return (
    <Stack w="100%" h="106px" margin="0px" padding="0px">
      <Flex margin="0" padding="0" bgColor="#020B2C" w="100%" h="40px">
        <Text fontSize="18" fontWeight="bold" p={2} color="blue" ml="5px">
          Hi {profname} ,
        </Text>
        <Spacer />
        {/* <Box onClick={logout} fontWeight="bold" fontSize="18" w="100px" p={2} color="blue" margin="0" padding="2" >
            Log out
        </Box>
        <Box onClick={profile} fontWeight="bold" fontSize="18" w="130px" p={2} color="blue" margin="0" padding="2" >
            Your Profile
        </Box> */}

        {/* *****************************************my E-learn**************************************** */}

        <Menu>
          <MenuButton
            textColor="blue"
            mr="40px"
            rightIcon={<ChevronDownIcon />}
          >
            My E-learn
          </MenuButton>
          <MenuList>
            <MenuItem minH="20px">
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="https://placekitten.com/100/100"
                alt="Fluffybuns the destroyer"
                mr="12px"
              />
              <span>My Profile</span>
            </MenuItem>

            <MenuItem
              minH="20px"
              onClick={() => {
                onOpen();
              }}
            >
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="./images/reset.jpg"
                alt="Fluffybuns the destroyer"
                mr="12px"
              />
              <span>Password Reset</span>
            </MenuItem>

            <MenuItem minH="20px" onClick={onOpen}>
              <DeleteIcon color="red" ml="6px" mr="20px" />
              <span>Delect My Account</span>
            </MenuItem>

            <MenuItem minH="20px" onClick={logout}>
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="./images/signout.jpg"
                alt="Fluffybuns the destroyer"
                mr="12px"
              />
              <span>Sing Out</span>
            </MenuItem>
          </MenuList>
        </Menu>

        <Popover>
          <PopoverTrigger>
            <Avatar bg="blue" size="sm" mr="14px" mt="5px">
              <BellIcon w={8} h={8} m="15px" mr="11px" color="white" />
              <AvatarBadge boxSize="1.25em" bg="red">
                1
              </AvatarBadge>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            {/* <Box pt="25px" border="2px" borderColor="blue" borderRadius="5">
                    
                {arr.map((arr, i) => (
                    
                    <Noticontener data= {i} />

                ))}
                    
                
             </Box> */}
          </PopoverContent>
        </Popover>
        {/*
         ************************************************************************************************** */}

        <Modal isCentered isOpen={isOpen} onClose={onClose} size="md">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Change Password</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form method="post" onSubmit={changepassword}>
                <InputGroup borderColor="black">
                  <Input
                    isRequired
                    type={ShowPassword ? "test" : "password"}
                    placeholder="Current Password"
                    value={currentp}
                    onChange={({ target }) => setCurrentp(target.value)}
                  />
                  <InputRightElement>
                    <Button
                      h="15px"
                      w="70px"
                      size="sm"
                      variant="link"
                      onClick={() => setShowPassword(!ShowPassword)}
                      mr="30px"
                    >
                      {ShowPassword ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Input
                  isRequired
                  type={ShowPassword ? "test" : "password"}
                  placeholder="New Password"
                  value={npassword}
                  onChange={({ target }) => setNpassword(target.value)}
                  border="1px"
                  borderColor="black"
                  mt="3%"
                />
                <Input
                  isRequired
                  type={ShowPassword ? "test" : "password"}
                  placeholder="Conform New Password"
                  value={cpassword}
                  onChange={({ target }) => setCpassword(target.value)}
                  border="1px"
                  borderColor="black"
                  mt="1%"
                />
                <Button bgColor="blue" type="submit" ml="150px" mt="40px">
                  Change Password
                </Button>
                <Button onClick={onClose} ml="5px" mt="40px">
                  Close
                </Button>
              </form>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>

        {/* ********************************************************************************************************** */}

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete Account</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Are you sure to delete your Account ?</Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="red" mr="2%" onClick={deleteaccount}>
                Delete My Account
              </Button>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/*
         *********************************************************************************************************************** */}
      </Flex>
      <Flex w="100%" h="55px">
        <Box w="21%" h="48" />
        <Image
          src="./images/logo.png"
          w="100px"
          h="50px"
          marginRight="20px"
          onClick={esolimage}
        />
        <Box
          bg="#81E6D9"
          border="4px"
          borderRight="0px"
          borderColor="black"
          w="450px"
          h="48px"
          textAlign="left"
          text
          color="white"
          marginTop="5px"
        >
          <Tooltip hasArrow label="Search Your Teacher" bg="blue.600">
            <InputGroup>
              <InputLeftElement
                variant="unstyled"
                pointerEvents="none"
                children={<SearchIcon color="#718096" />}
              />
              <Input
                type="text"
                color="#718096"
                placeholder="Enter your Teacher"
                variant="unstyled"
                margin="1.5"
                value={searchbody}
                onChange={({ target }) => setSearchbody(target.value)}
              />
            </InputGroup>
          </Tooltip>
        </Box>
        <Box
          bg="#81E6D9"
          border="4px"
          borderColor="black"
          h="48px"
          w="150px"
          textAlign="left"
          text
          color="white"
          marginTop="5px"
        >
          <Tooltip hasArrow label="Select Subject" bg="blue.600">
            <Select
              placeholder="All Subject"
              color="#718096"
              onChange={(e) => setSubject(e.target.value)}
              variant="unstyled"
              margin="1.5"
            >
              <option subject="Mathamatics">Mathamatics</option>
              <option subject="Bio Science">Bio Science</option>
              <option subject="Physics">Physics</option>
              <option subject="Chemistry">Chemistry</option>
              <option subject="ICT">ICT</option>
            </Select>
          </Tooltip>
        </Box>
        <Box
          bg="blue"
          h="48px"
          w="170px"
          marginTop="5px"
          marginLeft="5px"
          textAlign="center"
          onClick={search}
        >
          <Text color="#FFFFFF" fontSize="20" marginTop="2">
            Search
          </Text>
        </Box>
        <Box w="21%" h="48" />
      </Flex>
      <Flex w="100%" h="0.7">
        <Box w="20%" h="0.5" />
        <Box w="80%" h="1" bg="black" />
        <Box w="20%" h="0.5" />
      </Flex>
    </Stack>
  );
}

export default Userheader;
