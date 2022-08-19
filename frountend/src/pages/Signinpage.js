import {Stack,Button,Box,Grid, GridItem,Image} from '@chakra-ui/react'
import React from 'react'
import Signin from '../components/Signin'
import { useHistory} from "react-router-dom"



function Signinpage() {
    
    let history = useHistory();

    const back = (event) => {
        event.preventDefault();

        history.push('/');
        
    }; 

    return (
        <Stack>
             <Box w="100%" h="55px"/>
            <Stack w="1920" h="650" bgImage='./images/signinback.jpeg' border="2px" borderColor="black" mb="10px">
                <Grid h="650px" w="100%" templateColumns="repeat(2, 1fr)" gap={2} >
                        <GridItem w="100%" rowSpan={1} colSpan={1} >
                            <Stack backgroundColor="whiteAlpha.700" h="200px" w="460px" mt="75px" ml="100px" >
                           <Image src="./images/logo.png" w="400px" h="130px"  m="30px"/>
                            </Stack>
                            <Button h="40px" size="sm" colorScheme="blue" fontSize="20px" onClick={back} m="30px" mt="300px"> 
                                Back to main page
                            </Button>
                        </GridItem> 
                        <GridItem w="100%" rowSpan={1} colSpan={1}> 
                           <Signin/>
                        </GridItem>
                </Grid>           
            </Stack>
            {/* <Box w="100%" h="10px"/> */}
        </Stack>
    )
}

export default Signinpage