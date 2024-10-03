import React from 'react'
import './Hom.css'
import {Navigate} from 'react-router-dom'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
  function Hom ()  {
    const [goToEduc,setGoToEduc] = React.useState(false);
    if (goToEduc)
    {
      return <Navigate to ='/educ' />;
    }
    return (

      
    <div style={{ backgroundImage: 'url("./images/e13.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <main>
   <section>
   <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
     <div className="carousel-indicators">
       <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      
     </div>
     <div className="carousel-inner">
       <div className="carousel-item active">
         <img src="./images/e2.png" class="d-block w-100" alt="..."/>
         
       </div>
       
      
     </div>
     
    
   </div>
   <b></b>
   </section>
   
  <section class="my-5" >
       <div class="py-5">
        <div className="container">
     <div className="col">
     <h1 align="center" style={{color : 'white'}}>Dive into the World of Knowledge, Skills and Wisdom</h1>
     <div class="py-5">
     
       </div>
       
       <div>
  <MDBCard style={{ maxWidth: '700px', margin: 'auto', marginBottom: '200px', borderRadius : '5px',borderColor : 'black', backgroundColor :'#1565C0',}}>
    <MDBRow className='g-0'>
      <MDBCol md='4'>
        <MDBCardImage src='./images/e3.png' alt='...' fluid style={{ height: '100%',width :'auto'}}/>
      </MDBCol>
      <MDBCol md='8'>
        <MDBCardBody>
        <div class="card-header" style={{backgroundColor : 'lightblue'}}>
          <MDBCardTitle className='card-title' align='center' style={{fontWeight :'bold' }} >Education</MDBCardTitle>
          </div>
          <div class="py-5">
          <MDBCardText className='card-text' style={{color :'white' }} >
            Get complete understanding of concepts. Adapt life skills. 
            Gain general knowledge and enjoy activity based learning.
          </MDBCardText>
          </div>
          <div class="py-2">
          <button type="button" class="btn btn-primary" onClick ={() =>{ setGoToEduc(true);}}>Learn Now</button>
          </div>
         
        </MDBCardBody>
      </MDBCol>
    </MDBRow>
  </MDBCard>



 
</div>
<div>
  <MDBCard style={{ maxWidth: '700px', margin: 'auto', marginBottom: '200px', borderRadius : '5px',borderColor : 'black', backgroundColor :'#4527A0'}}>
    <MDBRow className='g-0'>
      <MDBCol md='4'>
        <MDBCardImage src='./images/e4.png' alt='...' fluid style={{ height: '100%',width :'auto'}} />
      </MDBCol>
      <MDBCol md='8'>
        <MDBCardBody>
        <div class="card-header" style={{backgroundColor : 'lightblue'}}>
          <MDBCardTitle className='card-title' align='center' style={{fontcolor :'white',fontWeight :'bold' }}>Career </MDBCardTitle>
          </div>
          <div class="py-5">
          <MDBCardText className='card-text' style={{color :'white' }}>
          Explore Career opportunities and make yourself ready for employment in various fields.
          Learn how to build your own startup and become a successful Entrepreneur
          </MDBCardText>
          </div>
          <div class="py-2">
          <button type="button" class="btn btn-primary">Explore Now</button>
          </div>
          <div>
            
          </div>
        </MDBCardBody>
      </MDBCol>
    </MDBRow>
  </MDBCard>



 
</div>
<div>
  <MDBCard style={{ maxWidth: '700px', margin: 'auto', marginBottom: '200px', borderRadius : '5px',borderColor : 'black', backgroundColor :'#00838F'}}>
    <MDBRow className='g-0'>
      <MDBCol md='4'>
        <MDBCardImage src='./images/e5.png' alt='...' fluid style={{ height: '100%',width :'auto'}} />
      </MDBCol>
      <MDBCol md='8'>
        <MDBCardBody>
        <div class="card-header" style={{backgroundColor : 'lightblue'}}>
          <MDBCardTitle className='card-title' align='center' style={{fontcolor :'white',fontWeight :'bold' }}>Loans and Grants</MDBCardTitle>
          </div>
          <div class="py-5">
          <MDBCardText className='card-text' style={{color :'white' }}>
            Complete information about loans, grants and scholarships. Simple procedure and steps to apply easily.
          </MDBCardText>
          </div>
          <div class="py-2">
          <button type="button" class="btn btn-primary">Check Now </button>
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

  
         </div>
  );
}
    
export default Hom;
