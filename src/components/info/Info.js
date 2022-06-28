import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faShare } from '@fortawesome/free-solid-svg-icons';
import  {faHeart}  from '@fortawesome/fontawesome-free-regular';
import './Info.css';
import Kim from '../../images/Kimberly.jpeg'
import Paint from '../../images/Painting.jpg'
import Data from '../../utils/Data.json'


const Info = () => {

  const [data, setData] = React.useState(Data)

    return (
        
        <div className='info_wrapper'>
            {data && data.map(items =>{
                return(
                    <div className='info_details'>
                    <p>
                     {items['body']}
                    </p>
                    <div className='profile'>
                        <img src={Kim} alt='profile_pic' className='profile_pic' />
                        <span>{items['author']}</span>
                    </div>
                    <div className='star_icon'>
                        <FontAwesomeIcon icon={faStar} className='font_icon'/>
                        <FontAwesomeIcon icon={faStar} className='font_icon'/>
                        <FontAwesomeIcon icon={faStar} className='font_icon'/>
                        <FontAwesomeIcon icon={faStar} className='font_icon'/>
                        <FontAwesomeIcon icon={faStar} className='font_icon'/>
                        <span>{items['teacher_review']} total reviews for this teacher</span>
                    </div>
                    <div className='star_icon_two'>
                        <FontAwesomeIcon icon={faStar} className='font_icon'/>
                        <FontAwesomeIcon icon={faStar} className='font_icon'/>
                        <FontAwesomeIcon icon={faStar} className='font_icon'/>
                        <FontAwesomeIcon icon={faStar} className='font_icon'/>
                        <FontAwesomeIcon icon={faStar} className='font_icon'/>
                        <span>{items['class_review']} reviews for this class</span>
                    </div>
                    <span className='estimated_info'>Completed by {items['completed_by']} learners</span>
                    <div className='class_schedule'>
                        <button>
                            See Class Schedule 
                        </button>
                            <FontAwesomeIcon icon={faHeart} className='fa_icon'/>
                            <span className='save'>Save</span>
                            <FontAwesomeIcon icon={faShare}  style={{ color: 'rgb(101, 49, 197)' }} className='fa_icon'/>
                            <span className='share'>Share</span>
                    </div>
                </div>
                )
                
            })}
           
            <div>
                <img src={Paint} alt='painting' className='paint_pic'/>
            </div>
        </div>
    )
}

export default Info