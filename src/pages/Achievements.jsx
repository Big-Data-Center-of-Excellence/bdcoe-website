import React from 'react';
import Navbar from '../components/navbar/navbar';
import SIH from '../assets/images/SIH.jpg';
import SIH2 from '../assets/images/SIH2.jpg';
import anveshna from '../assets/images/anveshna.jpg';
import Jodhpur from '../assets/images/Jodhpur.jpg'
import Footer from '../components/footer/footer';
import './Achievements.css';

function Achievements() {
  return (
    <div>
      <Navbar />
     <div className=' head'>
      
      <h1 className='heading'>Achievements</h1>
      <div className="parent ">

          <img src="https://www.akgec.ac.in/wp-content/uploads/2023/03/ITAchieve1.jpeg" alt=""  className='img1' />
      
      
          <img src="https://www.akgec.ac.in/wp-content/uploads/2023/03/ITAchieve2.jpeg" alt=""className='img2' />
       
          <img src={SIH} alt=""  className='img1' />
      
      
          <img src={anveshna} alt=""className='img1' />
        
       
        <img src={SIH2} alt="" className='img1'/>

       
       
        <img src={Jodhpur} alt="" className='img1'/>

       
      </div>
        <ul className='list-disc'>
          <li >Our team proudly boasts three winners and over five finalists in the prestigious Smart India Hackathon (SIH).</li>
          <li >Our 4th year co-ordinators Prateek chaurasia and their teams  for winning  of Smart India Hackathon 2022.</li>
          <li >Our 4th year co-ordinators Sankalp Srivastava and their teams  for winning  of Smart India Hackathon 2022.</li>
          <li >Our 3rd-year coordinators, Harsh Sharma and Tarun Lalwani, alongside Manya Singhal,  2nd-year member, and their team 'Saksham', for the exceptional performance at Anveshna. </li>
          <li >Our team member, Krish Kumar, a second-year student, emerged victorious in a hackathon held in Jodhpur.</li>
          <li >Our 4th year co-ordinators Sankalp Srivastava, Mayank Johari, Somya Maheshwari and their teams Anthracite 2.0 and Nyaysetu for reaching the finals of Smart India Hackathon 2023.</li>
        </ul>
      </div>
       <Footer/>
      </div>
   
  );
}

export default Achievements;