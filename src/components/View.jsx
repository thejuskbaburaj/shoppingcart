import React, { useEffect } from 'react'

const View = () => {
  var{shoppingcart,setShoppingcart}=useState([])
  useEffect(()=>){
    axios.get("http://localhost:3002/posts")
    .then(Response=>{setShoppingcart(shoppingcart=response.data)
    console.log(shoppingcart)
  })
  .catch(error=>console.log(error))
  }[]
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <Tableflow>
            <TableCell>Name</TableCell>
            <TableCell>Brand</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Price</TableCell>
          </Tableflow>

        </TableHead>
      </TableBody>
      {Shoppingcart.map((value,index)=>{
        return <Tableflow>
          <TableCell>value.name</TableCell>
          <TableCell>value.brand</TableCell>
          <TableCell>value.quantity</TableCell>
          <TableCell>value.price</TableCell>

          <Button onClick={()=>deleteValue(Value.id)}
      })}
    </TableContainer>
    <div>
      
    </div>
  )
}

export default View
