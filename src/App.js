import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Nabar from './Nabar.js'
import Hom from './Hom.js'
import Educ from './Educ.js';
import Quiz from './Quiz.js';
import Craft from './Craft.js';
import Sef from './Sef.js';
import Act from './Act.js';

function App  () {
  return (
    <>
    
    <div>
         <Nabar/>
    <Routes>
  
    <Route path ='/' element={<Hom/>}/>
    <Route path ='educ' element={<Educ/>}/>
    <Route path ='sef' element={<Sef/>}/>
    <Route path ='craft' element={<Craft/>}/>
    <Route path ='quiz' element={<Quiz/>}/>
    <Route path ='act' element={<Act/>}/>
    </Routes>
    
     
    </div>
    </>
  );
}

export default App;