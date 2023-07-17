import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState } from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function Clr() {
  const [clr,setClr]=useState("");
  const [clor,setClor]=useState("");
  const handleClr=(event)=>{
    event.preventDefault();
    setClor(clr);
  }

  return (
    
    <div className='formDiv' style={{backgroundColor:clor}}>
      <form>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form3Example1' label='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form3Example2' label='Last name' />
        </MDBCol>
      </MDBRow>
      <MDBInput className='mb-4' type='email' id='form3Example3' label='Email address' />
      <MDBInput className='mb-4' label='Address' id='typeText' type='text' />
      <MDBInput className='mb-4' label='Phone number' id='typePhone' type='tel' />
      <MDBInput className='mb-4' label='Select Color' id='typePhone' type='color' value={clr} onChange={(e)=>{e.preventDefault();
        setClr(e.target.value);}
      }/>

      <MDBBtn type='submit' className='mb-4' block onClick={handleClr}>
        Change Color
      </MDBBtn>

      
    </form>

    </div>
    
  );
}
