import { Stack } from "@chakra-ui/react";
import Useheader from "../components/Userheder";
import Body from "../components/Body";
import Footer from "../components/Footer";


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