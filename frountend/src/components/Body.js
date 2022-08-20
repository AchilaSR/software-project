import { Stack,Grid, GridItem,Spacer,Text} from '@chakra-ui/react'
import React from 'react'

function Body() {
    return (
        <Stack  w="100%" h="650px" bgImage='./images/bodyback.jpg'>
            <Spacer w="100%"/>
            <Grid h="80%"templateColumns="repeat(2, 1fr)" gap={4}>
                <GridItem colSpan={1} >
                    <Grid h="100%" templateRows="repeat(8, 1fr)" templateColumns="repeat(8, 1fr)" gap={2}>
                        <GridItem rowSpan={4} colSpan={8}  />
                        <GridItem rowSpan={4} colSpan={2} />
                        <GridItem rowSpan={3} colSpan={5} bgColor={'white'} opacity='70%' p="10px">
                            <Text fontSize="15" color="#222AE8">E Learning | Education</Text>
                            <Text fontSize="50" color="#222AE8">Online Learning Platform </Text>
                            <Text fontSize="30" color="#222AE8">Learning together even when we're apart</Text>
                            <Text fontSize="15" color="#FF0101" fontWeight="bold">Most effective way to solve your educational problems in few minutes.</Text>
                           
                        </GridItem>
                        
                    </Grid>
                </GridItem>
               
            </Grid>
            <Spacer w="100%" />
        </Stack>
       
        
        )
    }
    
    export default Body