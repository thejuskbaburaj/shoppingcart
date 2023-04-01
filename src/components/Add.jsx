import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Add = () => {
    const Add = () => {
        var[input,setInput] = useState({
            name:'',
            grade:''
        })
    
        const inputHandler = (e)=>{
            const{name,value} = e.target 
            setInput({...input,[name]:value})
        }
        const readvalues=()=>{
        console.log("Clicked")
        axios.post(" http://localhost:3002/posts ",input)
        .then(response=>{
            alert("sucessfully added")
        })
        .catch(error=>console.log(error))
    }
      return (
        <div>
           <TextField  label="Name" name='name'value={input.name} onChange={inputHandler} />
           <TextField  label="Brand" name='name'value={input.Brand} onChange={inputHandler} />
           <TextField  label="Quantity" name='name'value={input.Quantity} onChange={inputHandler}  />
           <TextField  label="Price" name='name'value={input.Price} onChange={inputHandler} />
           <Button variant='contained' onClick={readvalues}color='success'>submit</Button>
          
        </div>
   
  )
}

export default Add
