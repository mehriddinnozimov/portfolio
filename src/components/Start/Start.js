import Pacman from '../Pacman/Pacman';
import Loading from '../Loading/Loading';

import { useEffect } from 'react';

function Start({ start, setStart }) {
	useEffect(() => {
		if(!start) {
		  let left = -80
		  const leftToRight = document.getElementById("left-to-right")
		  setTimeout(() => {
		    const int = setInterval(() => {
		      leftToRight.style.left = ++left + "%"
		    }, 50)
		    setTimeout(() => {
		      clearInterval(int)
		      setStart()
				}, 5750)
		  }, 3000)
		}
	}, [])
	
	return (
		<div>
      <div className='top-center left-start left-to-right' id="left-to-right">
        <Pacman />
      </div>
      <div className='center' id="start-page">
        <div className='row'>
          <div className='col-3'>
            <Loading />
          </div>
          <div className='col-9'>
            <h5 className='pt-1 text-violet'>Mehriddin Nozimov</h5>
            <p className='pt-1 fs-14'>Backend developer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Start;