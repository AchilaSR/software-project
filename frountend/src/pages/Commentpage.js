
import { Stack, Box, Spacer } from '@chakra-ui/react'
import Userheder from '../components/Userheder'
import Post from '../components/Post'
 
 function Commentpage() {
   return (
      <Stack alignItems="center">
         <Userheder/>
         <Spacer/>
         <Post />
        
         <Post />
         
         <Post />
         
         <Post />

        
      </Stack>
   )
}


    
   export default Commentpage
