import React from 'react'
import { Flex, Stack,Button,Box,Text,Image, FormControl,
    FormLabel,InputGroup,InputRightElement,Input} from '@chakra-ui/react'


function Signin() {

    return (
        <Stack>
            <Box backgroundColor="whiteAlpha.800" w="500px" h="500px" mt="75px" ml="180px" border="2px" borderColor="black" >
                <Flex marginTop="40px">
                    <Text fontSize="30px" marginLeft="130px">Sign in to</Text>
                    <Image src="./images/logo.png" w="20" h="10" marginLeft="15px" />
                </Flex>
                <Box w="80%" h="1px" backgroundColor="black" ml="50" mt="10px"/>
                <Stack mt="100px">
                    <form method="post" >
                        <Stack>
                             <FormControl>
                                <Flex>
                                    <FormLabel ml="50px" htmlFor ="email" fontSize="18px"  mt="7px">Email Address</FormLabel> 
                                    <Input 
                                    isRequired 
                                    type="email" 
                                    id ="email" 
                                    placeholder=" Enter Email" 
                                    border="1px" 
                                    borderColor="black" 
                                    w="250px"
                                  
                                     /> 
                                </Flex>
                         </FormControl> 
                         <FormControl>
                                <Flex mt="25px">
                                    <FormLabel ml="50px" mr="50px" htmlFor ="password" mt="6px" fontSize="18px">Password</FormLabel> 
                                    <InputGroup  borderColor="black" w="250px">
                                    <Input 
                                    isRequired 
                                    id ="password" placeholder="Enter password" 
                                   
                                
                                  
                                    /> 

                                    <InputRightElement >
                                        <Button  h="15px" w="70px" size="sm" variant="link"   mr="30px"> 
                                            
                                        </Button>
                                    </InputRightElement>
                                    </InputGroup>
                                </Flex>
                         </FormControl>
                         <FormControl>
                            <Button bgColor="blue" border="2px" borderColor="blue"  ml="10%" mt="15%" >
                               You havn't Account 
                             </Button>
                             <Button bgColor="blue" border="2px" borderColor="blue" type="submit" ml="30%" mt="15%" >
                                 Sing in
                             </Button>
                         </FormControl>
                        </Stack>
                    </form> 
                    </Stack>    
             </Box>

        </Stack>
    )
}

export default Signin
