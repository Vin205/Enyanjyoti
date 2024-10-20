import React from 'react'

import { useNavigate } from 'react-router-dom';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
function Educ ()  {
  const navigate = useNavigate();
  const [goToSef, setGoToSef] = React.useState(false);
  const [goToAct, setGoToAct] = React.useState(false);

  if (goToSef) {
    return navigate('/sef');
  }

  if (goToAct) {
    return navigate('/act');
  }
 
  return (
    <>
    <main style={{ backgroundImage: 'url("./images/e22.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
  
   
  <section  >
       <div class="py-5">
        <div className="container">
     <div className="col">
     <h2 align="center" style={{color :'green' }}>“Education is the most powerful weapon which you can use to change the world.”</h2>
     <div class="py-5">
     
       </div>
       
       <div>
  <MDBCard style={{ maxWidth: '700px', margin: 'auto', marginBottom: '200px', borderRadius : '5px',borderColor : 'black', backgroundColor :'#FB8C00',}}>
    <MDBRow className='g-0'>
      <MDBCol md='4'>
        <MDBCardImage src='./images/e6.png' alt='...' fluid style={{ height: '100%',width :'auto'}}/>
      </MDBCol>
      <MDBCol md='8'>
        <MDBCardBody>
        <div class="card-header" style={{backgroundColor : ' #FFFF8D'}}>
          <MDBCardTitle className='card-title' align='center' style={{fontWeight :'bold' }} >Conceptual Learning</MDBCardTitle>
          </div>
          <div class="py-5">
          <MDBCardText className='card-text' style={{color :'white' }} >
          Building a foundation of brilliance through deep conceptual understanding.
Elevate your thinking, embrace conceptual learning's power and
See beyond the surface where concepts become the keys to wisdom.
          </MDBCardText>
          </div>
          <div class="py-2">
          <button type="button" class="btn btn-primary">Learn Now</button>
          </div>
         
        </MDBCardBody>
      </MDBCol>
    </MDBRow>
  </MDBCard>



 
</div>
<div>
  <MDBCard style={{ maxWidth: '700px', margin: 'auto', marginBottom: '200px', borderRadius : '5px',borderColor : 'black', backgroundColor :'#9C27B0'}}>
    <MDBRow className='g-0'>
      <MDBCol md='4'>
        <MDBCardImage src='./images/e7.png' alt='...' fluid style={{ height: '100%',width :'auto'}} />
      </MDBCol>
      <MDBCol md='8'>
        <MDBCardBody>
        <div class="card-header" style={{backgroundColor : '#D1C4E9'}}>
          <MDBCardTitle className='card-title' align='center' style={{fontcolor :'white',fontWeight :'bold' }}>Life Skills </MDBCardTitle>
          </div>
          <div class="py-5">
          <MDBCardText className='card-text' style={{color :'white' }}>
          Empower yourself with life skills that last a lifetime by 
          Unlocking the secrets to a successful and fulfilling life.Craft a meaningful life with essential life skills.
          </MDBCardText>
          </div>
          <div class="py-2">
          <button type="button" class="btn btn-primary" onClick={() =>{setGoToSef(true);}}>Explore Now</button>
          </div>
          <div>
            
          </div>
        </MDBCardBody>
      </MDBCol>
    </MDBRow>
  </MDBCard>



 
</div>
<div>
  <MDBCard style={{ maxWidth: '700px', margin: 'auto', marginBottom: '200px', borderRadius : '5px',borderColor : 'black', backgroundColor :'#00695C'}}>
    <MDBRow className='g-0'>
      <MDBCol md='4'>
        <MDBCardImage src='./images/e8.png' alt='...' fluid style={{ height: '100%',width :'auto'}} />
      </MDBCol>
      <MDBCol md='8'>
        <MDBCardBody>
        <div class="card-header" style={{backgroundColor : '#B2DFDB'}}>
          <MDBCardTitle className='card-title' align='center' style={{fontcolor :'white',fontWeight :'bold' }}>Activity Based Learning</MDBCardTitle>
          </div>
          <div class="py-5">
          <MDBCardText className='card-text' style={{color :'white' }}>
          Engage, explore, excel the magic of activity-based learning and
Hands-on learning for a head-start in life's journey.
Turn lessons into adventures with activity-based discovery.
          </MDBCardText>
          </div>
          <div class="py-2">
          <button type="button" class="btn btn-primary" onClick={() =>{setGoToAct(true);}}>Check Now </button>
          </div>
        </MDBCardBody>
      </MDBCol>
    </MDBRow>
  </MDBCard>

</div>
 




 


   </div>
   </div>
   </div>
   </section>
   
   
   </main>

   
  

    
    
    </>
  )
}
export default Educ;