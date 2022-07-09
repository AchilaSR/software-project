import {Stack,Button,Box,Text,Grid, GridItem,Image} from '@chakra-ui/react'
import React from 'react'
import Register from '../components/Register'



function Registerpage() {

 

    return (
        <Stack>
             <Box w="100%" h="55px"/>
            <Stack w="1536px" h="650px" bgImage='./images/signinback.jpeg' border="2px" borderColor="black" mb="10px">
                <Grid h="650px" w="100%" templateColumns="repeat(2, 1fr)" gap={2} >
                        <GridItem w="100%" rowSpan={1} colSpan={1} >
                            <Stack backgroundColor="whiteAlpha.700" h="200px" w="460px" mt="75px" ml="100px" >
                           <Image src="./images/logo.png" w="400px" h="130px"  m="30px"/>
                            </Stack>
                            <Button h="40px" size="sm" colorScheme="blue" fontSize="20px"  m="30px" mt="300px"> 
                                Back to main page
                            </Button>
                        </GridItem>  
                        <GridItem w="100%" rowSpan={1} colSpan={1}> 
                           <Register/>
                        </GridItem>
                </Grid>           
            </Stack>
            
        </Stack>
    )
}

export default Registerpage
