import React, {useState, useEffect} from 'react';
import {InputGroup, FormControl, Button} from 'react-bootstrap';


const DashBoard = e => {


  async function sendApiRequest() {
    let APP_ID = "87fed42d";
    let API_KEY = "68321153310172e99b2609b96cd9e726";	
    let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=pizza`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    
  }


  return (

    <div>
      <InputGroup className="col-6 offset-3">
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button onClick={sendApiRequest} variant="outline-secondary">Button</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  )
}

export default DashBoard;