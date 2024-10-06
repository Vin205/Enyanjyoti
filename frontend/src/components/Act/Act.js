import React from 'react'
import {useNavigate } from 'react-router-dom'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
function Act ()  {
    
  const navigate = useNavigate();
  const [goToSef, setGoToQuiz] = React.useState(false);
  const [goToAct, setGoToCraft] = React.useState(false);

  if (goToSef) {
    return navigate('/quiz');
  }

  if (goToAct) {
    return navigate('/craft');
  }
    return (

      
    <div style={{ backgroundImage: 'url("./images/e21.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <main>
  
   
  <section  >
       <div class="py-5">
        <div className="container">
     <div className="col">
     <h1 align="center" >Activity Based Learning</h1>
     <div class="py-5">
     
       </div>
       
       <div>
  <MDBCard style={{ maxWidth: '700px', margin: 'auto', marginBottom: '200px', borderRadius : '5px',borderColor : 'black', backgroundColor :'#009688',}}>
    <MDBRow className='g-0'>
      <MDBCol md='4'>
        <MDBCardImage src='./images/e16.png' alt='...' fluid style={{ height: '100%',width :'auto'}}/>
      </MDBCol>
      <MDBCol md='8'>
        <MDBCardBody>
        <div class="card-header" style={{backgroundColor : 'lightblue'}}>
          <MDBCardTitle className='card-title' align='center' style={{fontWeight :'bold' }} >General Knowledge Quiz</MDBCardTitle>
          </div>
          <div class="py-5">
          <MDBCardText className='card-text' style={{color :'white' }} >
           Solve interesting quizes, test your knowledge and enjoy learning.
          </MDBCardText>
          </div>
          <div class="py-2">
          <button type="button" class="btn btn-primary" onClick ={() =>{ setGoToQuiz(true);}}>Test Now</button>
          </div>
         
        </MDBCardBody>
      </MDBCol>
    </MDBRow>
  </MDBCard>



 
</div>
<div>
  <MDBCard style={{ maxWidth: '700px', margin: 'auto', marginBottom: '200px', borderRadius : '5px',borderColor : 'black', backgroundColor :'#00897B'}}>
    <MDBRow className='g-0'>
      <MDBCol md='4'>
        <MDBCardImage src='./images/e15.png' alt='...' fluid style={{ height: '100%',width :'auto'}} />
      </MDBCol>
      <MDBCol md='8'>
        <MDBCardBody>
        <div class="card-header" style={{backgroundColor : 'lightblue'}}>
          <MDBCardTitle className='card-title' align='center' style={{fontcolor :'white',fontWeight :'bold' }}>Art and Craft </MDBCardTitle>
          </div>
          <div class="py-5">
          <MDBCardText className='card-text' style={{color :'white' }}>
          Outshine with your creativity and learn arand craft frrom best out of waste.
          </MDBCardText>
          </div>
          <div class="py-2">
          <button type="button" class="btn btn-primary"onClick ={() =>{ setGoToCraft(true);}}>Explore Now</button>
          </div>
          <div>
            
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

   <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
      <p>&copy; Edu@enyanjyoti. All rights reserved.</p>
    </footer>
         </div>
    

    
  );
};

export default Act;