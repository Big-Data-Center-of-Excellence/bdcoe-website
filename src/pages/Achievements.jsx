import React from 'react';
import Navbar from '../components/navbar/navbar';
import SIH from '../assets/images/SIH.jpg';
import SIH2 from '../assets/images/SIH2.jpg';
import rise from '../assets/images/rise.jpg';
import innohacks from '../assets/images/innohacks.jpg';
import finalist from '../assets/images/finalist.jpeg';
import technolite from '../assets/images/technolite.jpeg';
import africa from '../assets/images/africa.jpeg';
import zonals from '../assets/images/zonals.jpg';
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
      <div className="parent">

          <div className='sub-parent '>
          <img src="https://www.akgec.ac.in/wp-content/uploads/2023/03/ITAchieve1.jpeg" alt=""  className='img1' />
         <div className='cnt'>
         <p className='labels'> Winner: SIH 2022</p>
          <p className='text'>Our 4th-year coordinator, Prateek Chaurasia, and his team PROXYMORONS, have clinched first position in SIH.</p>
         </div>
          </div>
         <div className='sub-parent '>
         <img src="https://www.akgec.ac.in/wp-content/uploads/2023/03/ITAchieve2.jpeg" alt=""className='img1' />
         <div className='cnt'>
         <p className='labels'> Winner: SIH 2022</p>
          <p className='text'>Our 4th year coordinator Sankalp Srivastava and his team IDEAL-BITS have clinched first position in SIH.</p>
         </div>
         </div>
         <div className='sub-parent'>
          <img src={zonals} alt="" className=' img1'/>
         <div className='cnt'>
         <p className='labels'>Winner: AKTU Zonals 2022</p>
         <p className='text'>Our 4th-year coordinator, Abhishek Gupta, along with his teammate Bhavya Agrawal, has secured  2nd rank in AKTU Zonals event Game of Codes.</p>
         </div>
         </div>
         <div className='sub-parent '>
         <img src={SIH} alt=""  className='img1' />
        <div className='cnt'>
        <p className='labels'>Winner: SIH 2023</p>
        <p className='text'>Our 3rd year coordinator, Anugya Tiwari and her team Technovertz have clinched first position in Smart India Hackathon 2023!</p>
        </div>
         </div>
         <div className='sub-parent '>
         <img src={anveshna} alt=""className='img1' />
         <div className='cnt'>
          <p className='labels'>Winner: Anveshna 2024</p>
         <p className='text'>Our 3rd-year coordinators, Harsh Sharma and Tarun Lalwani, alongside Manya Singhal, a 2nd-year member, and their team 'Saksham', have performed very well in Anveshna organized by Agastya International Foundation.</p>
         </div>
         </div>
         <div className='sub-parent'>
          <img src={Jodhpur} alt="" className='img1'/>
         <div className='cnt'>
          <p className='labels'>Winner: Prometeo 2024</p>
         <p className='text' > Our 2nd-year member, Krish Kumar, and his team, Team !404: Coding Triumph, emerged victorious in Prometeo Hackathon held at IIT Jodhpur.</p>
         </div>
         </div>
         <div className='sub-parent '>
         <img src={rise} alt=""  className='img1' />
         <div className='cnt'>
         <p className='labels'>Winner:  RIISE 2024</p>
         <p className='text'>Our 3rd-year coordinators, Harsh Sharma, Tarun Lalwani, and Ketan Singh, along with their team Saksham, have secured first position in RIISE, organized by Indraprastha IIIT Delhi.</p>
         <p></p>
         </div>
         </div>
         <div className='sub-parent'>
          <img src={africa} alt="" className=' img1'/>
         <div className='cnt'>
         <p className='labels'>Finalist: UNESCO Africa Hackathon 2022</p>
         <p className='text'>Our 4th-year coordinator, Prateek Chaurasia, and his team AGRICODE have earned a spot in the finals of the UNESCO Africa Hackathon.</p>
         </div>
         </div>
        
         
          <div className='sub-parent'>
          <img src={SIH2} alt="" className='img1'/>
         <div className='cnt'>
          <p className='labels'>Finalist : SIH 2023</p>
         <p className='text'>Our 4th-year co-ordinators, Mayank Johari and Somya Maheshwari, along with their team Nyaysetu, have earned a spot in finals of the Smart India Hackathon.</p>
         </div>
          </div>
         
          <div className='sub-parent'>
          <img src={finalist} alt="" className=' img1'/>
         <div className='cnt'>
          <p className='labels'>Finalist : SIH 2023</p>
         <p className='text'> Our 4th-year coordinator, Sankalp Srivastava, and his team Anthracite 2.0, have earned a spot in finals of the Smart India Hackathon 2023</p>
         </div>
         </div>
         <div className='sub-parent'>
          <img src={technolite} alt="" className=' img1'/>
         <div className='cnt'>
         <p className='labels'>Finalist : Technolite 2023</p>
         <p className='text'>Our 4th-year coordinator, Sankalp Srivastava, and his team Genesis, have earned a spot in the finals of Technolite, organized by Delhi Skills and Entrepreneurship University.</p>
         </div>
         </div>
         <div className='sub-parent '>
         <img src={innohacks} alt=""  className='img1' />
        <div className='cnt'>
        <p className='labels'>Finalist: Innohacks 2023</p>
        <p className='text'>Our 3rd-year coordinator, Atishay Jain, and his team TECH-BELLATORS, have performed exceptionally well in Innohacks organized by KIET.</p>
        </div>
         </div>
        
        
         </div>
        </div>
       <Footer/>
      </div>
   
  );
}

export default Achievements;


