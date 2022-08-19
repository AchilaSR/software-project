import React,{useState} from 'react'
import { Flex, Stack,Button,Box,Text,Image, FormControl,
    FormLabel,InputGroup,InputRightElement,Input,useToast} from '@chakra-ui/react'
import axios from 'axios';
import { useHistory} from "react-router-dom"

function Signin() {

    let history = useHistory();

    const [emailaddress, setEmailAddress] =useState('');
    const [password, setPassword] =useState('');
    const [ShowPassword, setShowPassword] = useState(false);
    const isInvalidsubmit = password === '' || emailaddress === '';
    const isInvalidshow = password === '' ;
    const [user, setUser] = useState(null); 
    const toast = useToast();
     
    const api = axios.create({
        baseURL :`http://localhost:5000/`
    })

    const st = sessionStorage.getItem("st");

    const handleSingIn = async (event) => {
        event.preventDefault();
        if(st==="s"){
        try{
            const res = await api.post("/student/login",{email:emailaddress,password:password});
            setUser(res.data);
            

            if(res.status === 200){
            console.log('emailAddress', emailaddress);
            console.log('password', password);
            console.log('It was submited');
            console.log(res.data.id)

            sessionStorage.setItem("id",res.data.id);

            toast({
                title: "Login Succesful",
                status: "success",
                duration: 3000,
                isClosable: true,
                }) 
             history.push('/userpage');

            }
        }catch(err){
            console.log(err);
        }}
        if(st==="t"){
            try{
                const res = await api.post("/teacher/login",{email:emailaddress,password:password});
                setUser(res.data);
                
    
                if(res.status === 200){
                console.log('emailAddress', emailaddress);
                console.log('password', password);
                console.log('It was submited');
                console.log(res.data.id)
    
                sessionStorage.setItem("id",res.data.id);
    
                toast({
                    title: "Login Succesful",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                    }) 
                 history.push('/userpage');
    
                }
                else{
                    toast({
                        title: "Something went wrong",
                        description: "Plece cheak email and password",
                        status: "error",
                        duration: 3000,
                        isClosable: true,
                        }) 
                }
            }catch(err){
                toast({
                    title: "Something went wrong",
                    description: "Plece cheak email and password",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                    }) 
    
                }
            }}


    const register = (event) => {
        event.preventDefault();

        history.push('/registerpage')

    };


    return (
        <Stack>
            <Box backgroundColor="whiteAlpha.800" w="500px" h="500px" mt="75px" ml="180px" border="2px" borderColor="black" >
                <Flex marginTop="40px">
                    <Text fontSize="30px" marginLeft="130px">Sign in to</Text>
                    <Image src="./images/logo.png" w="20" h="10" marginLeft="15px" />
                </Flex>
                <Box w="80%" h="1px" backgroundColor="black" ml="50" mt="10px"/>
                <Stack mt="100px">
                    <form method="post" onSubmit={handleSingIn}>
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
                                    value={emailaddress} 
                                    onChange={({target}) => setEmailAddress(target.value)}
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
                                    type={ShowPassword  ? 'test' : 'password'} 
                                    id ="password" placeholder="Enter password" 
                                    value={password} 
                                    onChange={({target}) => setPassword(target.value)}
                                  
                                    /> 

                                    <InputRightElement >
                                        <Button  h="15px" w="70px" size="sm" variant="link" onClick={() => setShowPassword(!ShowPassword)} disabled={isInvalidshow}   mr="30px"> 
                                        {ShowPassword ? 'Hide' : 'Show'}
                                        </Button>
                                    </InputRightElement>
                                    </InputGroup>
                                </Flex>
                         </FormControl>
                         <FormControl>
                            <Button bgColor="blue" border="2px" borderColor="blue" onClick={register} ml="10%" mt="15%" >
                               You havn't Account 
                             </Button>
                             <Button bgColor="blue" border="2px" borderColor="blue" type="submit" disabled={isInvalidsubmit} ml="30%" mt="15%" >
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
