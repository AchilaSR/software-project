import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Box
  } from "@chakra-ui/react"
  import { useHistory} from "react-router-dom"

  function Model(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const name = props.name;

    let history = useHistory();

  const teacher = (event) => {
      event.preventDefault();
    if (name === "Sign in"){
      history.push('/singinpage');
      sessionStorage.setItem("st","t")
  }
  else{
      history.push('/registerpage');

      sessionStorage.setItem("st","t")
  }
};
  const student = (event) => {
      event.preventDefault();
      if (name === "Sign in"){
        history.push('/singinpage');
        sessionStorage.setItem("st","s")
    }
    else{
      history.push('/registerpage');
      sessionStorage.setItem("st","s")
  }
  };


    return (
      <>
        
        <Box  onClick={onOpen} fontWeight="bold" fontSize="18" w="100px" p={2} color="blue" margin="0" padding="2" >
                {props.name}
        </Box>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent border="4px" borderColor="blue">
            <ModalHeader>{name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody textAlign="center" m="20px" mt="10%">
              <Button  mr={3} w="160px" h="60px" color="blue" onClick={teacher} border="2px" borderColor="blue">
                As a Teacher
              </Button>
              <Button  mr={3} w="160px" h="60px" color="blue" onClick={student} border="2px" borderColor="blue">
              As a Student
              </Button>
            </ModalBody>
  
            <ModalFooter >
              <Button colorScheme="blue" margin="3" h="30px" w="38" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default Model;