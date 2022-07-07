import { Flex, Stack,Text,Grid,GridItem} from '@chakra-ui/react'
import React from 'react'
import { TimeIcon,PhoneIcon,EmailIcon } from '@chakra-ui/icons'



function Footer() {
  return (
   <Stack  className="footer" w="100%" h="550px" bg="#8F9890" marginTop="0" bgImage="./images/footerimg.png"  backgroundPosition="top" backgroundRepeat="no-repeat">
      <Flex w="100%" h="100px" textAlign="center">
          <Text w="100%" h="30" mt="20px" alignItems="center" fontSize="30px" > CONTACT US</Text>
      </Flex>
      <Grid   templateColumns="repeat(2, 1fr)" gap={2}>
                        <GridItem rowSpan={1} colSpan={1} paddingtop="20" paddingleft="100" >
                            <Text mt="20" ml="131" fontWeight="bold" fontSize="20">Office Time</Text>
                            <Text  mt="5" ml="160">
                            <TimeIcon margin="1" color="blue" />
                             Monday to friday - 7am to 5pm
                            </Text>
                            <Text ml="160">
                            <TimeIcon margin="1" color="blue" />
                             Monday to friday - 7am to 5pm
                            </Text>
                        </GridItem>
                        
                        <GridItem rowSpan={1} colSpan={1}>
                        <Text mt="220" ml="521" fontWeight="bold" fontSize="20">Get IN Tuch</Text>
                            {/* <Text  mt="5" ml="360">
                            Colombo13, Main Road, Nugegoda
                            <IoLocationOutline margin="1" color="blue" />
                             
                            </Text> */}
                            <Text ml="425" mt="5" >
                            esoleducation@gmail.com
                            <EmailIcon margin="2" color="blue" />
                            
                            </Text>
                            
                            <Text ml="497">
                            +9436 2222544 
                            <PhoneIcon margin="2" color="blue" />
                            
                            </Text>
                        </GridItem>
                     
      </Grid>
      <Flex w="100%" h="100px" textAlign="center">
          <Text w="100%" h="30" mt="60px" alignItems="center"  >  Copyright 2012-2021 Online Solutions | All Rights Reserved.</Text>
      </Flex>
   </Stack>
  )
}

export default Footer