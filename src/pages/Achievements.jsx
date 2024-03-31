import React from 'react';
import Navbar from '../components/navbar/navbar';
import SIH from '../assets/images/SIH.jpg';
import SIH2 from '../assets/images/SIH2.jpg';
import anveshna from '../assets/images/anveshna.jpg';
import Jodhpur from '../assets/images/Jodhpur.jpg'
import Footer from '../components/footer/footer';

function Achievements() {
  return (
    <div>
      <Navbar />
     <div className='p-6 lg:mt-24 sm:p-3'>
      
      
      <div className="parent gap-6 mt-8  flex flex-wrap  justify-center">
        <div className="img1 w-full sm:w-[37%] h-full border border-black">
          <img src={SIH} alt=""  />
        </div>
        <div className="img2 w-full sm:w-[37%] border border-black ">
          <img src={anveshna} alt="" />
        </div>
        <div className="img3 w-full sm:w-[37%] border border-black">
        <img src={SIH2} alt="" />

        </div>
        <div className="img3 w-full sm:w-[37%] border border-black">
        <img src={Jodhpur} alt="" />

        </div>
      </div>
        <ul className='list-disc'>
          <li className='mt-4 lg:mx-6 sm:mx-4 '>Our team proudly boasts three winners and over five finalists in the prestigious Smart India Hackathon (SIH).</li>
          <li className='mt-2 lg:mx-6 sm:mx-4 '>Our 3rd-year coordinators, Harsh Sharma and Tarun Lalwani, alongside Manya Singhal,  2nd-year member, and their team 'Saksham', for the exceptional performance at Anveshna. </li>
          <li className='mt-2 lg:mx-6 sm:mx-4 '>Our team member, Krish Kumar, a second-year student, emerged victorious in a hackathon held in Jodhpur.</li>
          <li className='mt-2 lg:mx-6 sm:mx-4 '>Our 4th year co-ordinators Sankalp Srivastava, Mayank Johari, Somya Maheshwari and their teams Anthracite 2.0 and Nyaysetu for reaching the finals of Smart India Hackathon 2023.</li>
        </ul>
      </div>
       <Footer/>
      </div>
   
  );
}

export default Achievements;

