import {useRef, useState} from "react";
import { MainServiceFront} from "../src/services/frontend/MainService";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Home() {

    const nameRef = useRef(null);
    const surnameRef = useRef(null);
    const emailRef = useRef(null);

    const sheets = MainServiceFront.getInstance().getGoogleSheets();

    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');
    const [email,setEmail] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        try{
           await sheets.updateSheet([name,surname,email], 'spreadsheetId');

           nameRef.current.value = '';
           surnameRef.current.value = '';
           emailRef.current.value = '';
        }
        catch(e){
            console.log('error',e);
        }
    }

  return (
      <Box component='form' onSubmit={handleSubmit} sx={{'& > :not(style)': { m: 3, width: '40ch' },height:'100vh',display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
          <TextField label="Name" inputRef={nameRef} autoComplete='off' variant="standard" onChange={(e) => setName(e.target.value)} />
          <TextField label="Surname" inputRef={surnameRef} autoComplete='off' variant="standard" onChange={(e) => setSurname(e.target.value)} />
          <TextField label="Email" inputRef={emailRef} autoComplete='off' variant="standard" onChange={(e) => setEmail(e.target.value)} />
          <Button sx={{maxWidth:'120px'}} variant="contained" type='submit'>Submit</Button>
      </Box>
  )
}
