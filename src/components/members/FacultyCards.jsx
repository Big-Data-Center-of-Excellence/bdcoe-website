import React from 'react'
import './card.css'
import './album.css'
import cardBackground from '../../assets/images/cardBack.svg'

function FacultyCards() {
  return (
    <div className='container-album'>

      <div className='child-album' style={{ paddingBottom: "1em" }}>
        <img
          className='background-card'
          src={cardBackground}
          alt="back"
        />
        <img className='overlay'
          src="https://www.akgec.ac.in/wp-content/uploads/2023/04/RUCHI-GUPTA.jpg"
          alt='bdcoe'
        />
        <h3 style={{ paddingBottom: "1em" }}>Dr. Ruchi Gupta</h3>
        <h4>Associate Professor</h4>

      </div>


      <div className='child-album' style={{ paddingBottom: "1em" }}>
        <img
          className='background-card'
          src={cardBackground}
          alt="back"
        />
        <img className='overlay'
          src="http://res.cloudinary.com/dhy42cidp/image/upload/v1729435141/ytazhk1sgbv8do71fga6.jpg"
          alt='bdcoe'
        />
        <h3 style={{ paddingBottom: "1em" }}>Mr. Amit Kumar</h3>
        <h4>Assistant Professor</h4>
      </div>


      <div className='child-album' style={{ paddingBottom: "1em" }}>
        <img
          className='background-card'
          src={cardBackground}
          alt="back"
        />
        <img className='overlay'
          src="https://ucarecdn.com/599d1a82-3ca2-4426-bd09-3d01f0625ef6/-/preview/311x376/"
          alt='bdcoe'
        />
        <h3 style={{ paddingBottom: "1em" }}>Mr. Ropak Kumar</h3>
        <h4>Assistant Professor</h4>
      </div> 

    </div>
  )
}

export default FacultyCards