import React,{useState} from 'react'
import { Flex, Stack,Button,Box,Text,Image, FormControl,
    FormLabel,InputGroup,InputRightElement,Input,useToast} from '@chakra-ui/react'
import axios from "axios";
import { useHistory} from "react-router-dom"



function Register() {
    
    let history = useHistory();

    const [emailaddress, setEmailAddress] =useState('');
    const [password, setPassword] =useState('');
    const [cpassword, setCpassword] =useState('');
    const [ShowPassword, setShowPassword] = useState(false);
    const isInvalidsubmit = password === '' || emailaddress === '';
    const isInvalidshow = password === '' ;
    const toast = useToast();
    const [user, setUser] = useState(null); 

   
    const st = sessionStorage.getItem("st");

    const api = axios.create({
        baseURL :"http://localhost:5000"
    })
    

    const handleSingIn = async (event) => {
        event.preventDefault();
       

    if(password === cpassword){
            
            if(st === "s"){

                const res = await api.post("/student/register",{email:emailaddress,password:password});
                setUser(res.data);
                
            
        if(res.status === 200){

        console.log('emailAddress', emailaddress);
        console.log('password', password);
        console.log('cpassword', cpassword);
        console.log(res)

    
        
        toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 3000,
            isClosable: true,
            })

            history.push('/singinpage');
        }
        if(res.status === 400){
            toast({
                title: "This email address is already being used",
                status: "warning",
                duration: 3000,
                isClosable: true,
                })
        }
        if(res.status === 500){

            toast({
                title: "Server error Plece try again",
                status: "error",
                duration: 3000,
                isClosable: true,
                })
        }
        
        }
        
        if(st === "t"){
            console.log(st)

        const res = await api.post("/teacher/register",{email:emailaddress,password:password});
        setUser(res.data);
            
        
    if(res.status === 200){

    console.log('emailAddress', emailaddress);
    console.log('password', password);
    console.log('cpassword', cpassword);
    console.log(res)
    
    toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 3000,
        isClosable: true,
        })

        history.push('/singinpage');

        }
        if(res.status===404){
            toast({
                title: "This email address is already being used",
                status: "warning",
                duration: 3000,
                isClosable: true,
                })
        }
       if(res.status === 400){
            toast({
                title: "This email address is already being used",
                status: "warning",
                duration: 3000,
                isClosable: true,
                })
        }
        if(res.status === 500){

            toast({
                title: "Server error Plece try again",
                status: "error",
                duration: 3000,
                isClosable: true,
                })
        }
        
        }
    }else{
            toast({
              title: "Password must be same",
              status: "warning",
              duration: 3000,
              isClosable: true,
            })
          
        }
     };
     const singin = (event) => {
        event.preventDefault();
        history.push('/singinpage')
    }



    return (
        <Stack>
            <Box backgroundColor="whiteAlpha.800" w="500px" h="500px" mt="75px" ml="180px" border="2px" borderColor="black">
                <Flex marginTop="40px">
                    <Text fontSize="30px" marginLeft="130px">Register to</Text>
                    <Image src="./images/logo.png" w="20" h="10" marginLeft="15px" />
                </Flex>
                <Box w="80%" h="1px" backgroundColor="black"  ml="50" mt="10px"/>
                <Stack mt="100px">
                    <form method="post" onSubmit={handleSingIn}>
                        <Stack>
                             <FormControl>
                                <Flex>
                                    <FormLabel ml="50px" mr="50px" htmlFor ="email" fontSize="18px"  mt="7px">Email Address</FormLabel> 
                                    <Input 
                                    isRequired 
                                    type="email" 
                                    id ="email" 
                                    placeholder=" Enter Email" 
                                    value={emailaddress} 
                                    onChange={({target}) => setEmailAddress(target.value)}
                                    border="1px" 
                                    borderColor="black" 
                                    w="250px"
                                  
                                     /> 
                                </Flex>
                         </FormControl> 
                         <FormControl>
                                <Flex mt="25px">
                                    <FormLabel ml="50px" mr="87px" htmlFor ="password" mt="6px" fontSize="18px">Password</FormLabel> 
                                    <InputGroup  borderColor="black" w="250px">
                                    <Input 
                                    isRequired 
                                    type={ShowPassword  ? 'test' : 'password'} 
                                    id ="password" placeholder="Enter password" 
                                    value={password} 
                                    onChange={({target}) => setPassword(target.value)}
                                    /> 

                                    <InputRightElement >
                                        <Button  h="15px" w="70px" size="sm" variant="link"  onClick={() => setShowPassword(!ShowPassword)} disabled={isInvalidshow}   mr="30px"> 
                                        {ShowPassword ? 'Hide' : 'Show'}
                                        </Button>
                                    </InputRightElement>
                                    </InputGroup>
                                </Flex>
                         </FormControl>
                         <FormControl>
                                <Flex mt="5px">
                                    <FormLabel ml="50px" mr="10px" htmlFor ="password" mt="6px" fontSize="18px">Conform Password</FormLabel> 
                                    <Input 
                                    borderColor="black" w="250px"
                                    isRequired 
                                    type={ShowPassword  ? 'test' : 'password'} 
                                    id ="password" placeholder="Conform Password" 
                                    value={cpassword} 
                                    onChange={({target}) => setCpassword(target.value)} 
                                    /> 
                                </Flex>
                         </FormControl>
                         <FormControl>
                            <Button bgColor="blue" border="2px" borderColor="blue" onClick={singin} ml="10%" mt="10%">
                                 Alredy Have Account
                             </Button>
                             <Button bgColor="blue" border="2px" borderColor="blue" disabled={isInvalidsubmit} type='submit'  ml="30%" mt="10%">
                                 Register
                             </Button>
                         </FormControl>
                        </Stack>
                    </form> 
                    </Stack>    
             </Box>

        </Stack>
    )
}

export default Register