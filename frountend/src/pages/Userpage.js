import { Stack } from "@chakra-ui/react";
import Useheader from "../componants/Userheder";
import Body from "../componants/Body";
import Footer from "../componants/Footer";


function Userpage() {
  return (
    <Stack>
      <Useheader/>
      <Body/>
      <Footer/>
      
    </Stack>
  );
}

export default Userpage;