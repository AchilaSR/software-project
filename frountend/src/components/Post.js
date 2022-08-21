import { Flex, Text, Grid, Box, Container, VStack, HStack, Button, Input, Center, Stack, Image} from  "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react"


export default function Post() {
   return (
      <Stack h={"500px"} w={"400px"} >
   <Container h={"470px"} bg={"white"}>
      <VStack h="full" padding={"4"} bg={"telegram.100"}>
         <HStack h="10" w={"full"} bg="yellow.200">
         <Avatar />
            <Text>
               Fathima Shimla
            </Text>
         </HStack>

         <VStack h="full" w={"full"} bg="yellow.200">
         <Image src="./images/question.png" w="full" h="full" /> 
         </VStack>

         <form style={{  alignItems: "center"}} >
            <HStack>

               <Button colorScheme={"blue"} type="submit">
                  Like
               </Button>
               <Button colorScheme={"blue"} type="submit">
                  Comment
               </Button>
               <Button colorScheme={"blue"} type="submit">
                  Share
               </Button>
            </HStack>
         </form>
      </VStack>
   </Container>
</Stack>
   );
 }
