import { Stack ,Flex ,Box,Text,Spacer,Image,InputGroup,Input,InputLeftElement,Select,Tooltip} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import React from 'react'



function Header() {

    return (
      <Stack w="100%" h="106px" margin="0px" padding="0px" > 
         <Flex  margin="0" padding="0" bgColor='#020B2C'  w="100%" h="40px" >
            <Text fontSize="18" fontWeight="bold" p={2} color="blue" >Hi Student/Teacher</Text>
            <Spacer/>
             <Text color={'blue'} pr="10px" pt="7px">SIGN IN</Text>
             <Text color={'blue'} pr="10px" pt="7px">REGISTER</Text>
         </Flex>
         <Flex w="100%" h="55px" >
            <Box w="21%" h="48"/>
            <Image src="./images/logo.png" w="100px" h="50px" marginRight="20px"  />
            <Box bg="#81E6D9" border="4px"  borderRight="0px" borderColor="black" w="450px" h="48px" textAlign="left" text color="white" marginTop="5px">
            <Tooltip hasArrow label="Search Your Teacher" bg="blue.600" >
                <InputGroup  >
                    <InputLeftElement
                        variant="unstyled"
                        pointerEvents="none"
                        children={<SearchIcon color="#718096" />}
                    />
                    <Input type="text" color="#718096" placeholder="Enter your Teacher" variant="unstyled"  margin="1.5"  />
                </InputGroup>
                </Tooltip>
            </Box>
            <Box bg="#81E6D9" border="4px"  borderColor="black"  h="48px" w="150px" textAlign="left" text color="white" marginTop="5px">
            <Tooltip hasArrow label="Select Subject" bg="blue.600" >
                <Select placeholder="All Subject" color="#718096"  variant="unstyled" margin="1.5">
                    <option subject="Mathamatics">Mathamatics</option>
                    <option subject="Bio Science">Bio Science</option>
                    <option subject="Physics">Physics</option>
                    <option subject="Chemistry">Chemistry</option>
                    <option subject="ICT">ICT</option>
                </Select>
              </Tooltip>  
            </Box>
            <Box bg="blue"  h="48px" w="170px"  marginTop="5px" marginLeft="5px" textAlign="center" >
                <Text color="#FFFFFF" fontSize="20" marginTop="2" >Search</Text>
            </Box>
            <Box w="21%" h="48"/>
         </Flex >
         <Flex w="100%" h="0.7">
            <Box w="20%" h="0.5" />
            <Box w="80%" h="1" bg="black"/>
            <Box w="20%" h="0.5"/>
         </Flex>
    </Stack>
    )
}

export default Header

