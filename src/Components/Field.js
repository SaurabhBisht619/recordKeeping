import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import './Field.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Field() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [data, setData] = useState([]);

const addData = ()=>{
    if(name.length === 0 || email.length===0){
      alert("Please enter valid data");
      return;
    }
    setData([...data,{ name,email}]);
    setName("");
    setEmail("");
}

const removeItem = (index)=>{
    let arr = data;
    arr.splice(index,1);
    setData([...arr]);
}

  return (
    <>
    <div className='body'>
    <Stack spacing={6} direction="row">

      <TextField value={name} onChange={(e)=> setName(e.target.value)} id="outlined-basic" label="name" variant="outlined" />

      <TextField value={email} onChange={(e)=> setEmail(e.target.value)} id="outlined-basic" label="email" variant="outlined" />
      
      <button className='btns' onClick={addData}><AddIcon fontSize='large'/></button>
    </Stack>
    </div>

    <div className="field">
        <div className="field_val">
          <h2>Name</h2>
          <h2>Email</h2>
          <h2>Remove</h2>
        </div>

    {
      data.map((val,index)=>{
        return(
          <div className="field_val">
          <h2>{val.name}</h2>
          <h2>{val.email}</h2>
          <h2 onClick={()=>removeItem(index)}><DeleteForeverIcon/></h2>
        </div>
        )
      })

    }


    </div>
    
    </>
  )
}

export default Field
