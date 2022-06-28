import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons'
import Data from '../../utils/Data.json'

const Header = () => {
  const [data, setData] = React.useState(Data)
  return (
    <div>
      {data && data.map((items) => {
        console.log(items["title"]);
        return (
          <div className='header_wrapper'>
            <h1 className='header_one'>{items['title']}</h1>
            <h3 className='header_three'> {items['subtitle']} <FontAwesomeIcon icon={faCircleQuestion} /> </h3>
          </div>
        )

      })}

    </div>
  )
}

export default Header