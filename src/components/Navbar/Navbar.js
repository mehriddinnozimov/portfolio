import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MyModal from '../Modal/Modal';

import { useState } from 'react'

import { contact } from '../../portfolio'

let modalProps = {}

function Navbar() {
	const [ show, setShow ] = useState(false)
	function onModal(v) {
		let prefix = ""
		switch(v) {
			case 'phone':
				prefix = "tel:"
				break;
			case 'email':
				prefix = "mailto:"
				break;
			default:
				prefix = ""
				break;
		}
		setShow(true)
		modalProps = {title: v.toUpperCase(), body: contact[v], prefix: prefix}
	}
	return (
		<nav className="navbar opa">
		  <div className="container-fluid">
		    <h6 href="/" className="text-violet n-brand">Mehriddin Nozimov</h6>
		    <div>
		    	<a href="#phone"><span className="mx-2 text-violet"><FontAwesomeIcon icon="fa-solid fa-phone" onClick={() => onModal("phone")}/></span></a>
		    	<a href="#github"><span className="mx-2 text-violet"><FontAwesomeIcon icon="fa-brands fa-github" onClick={() => onModal("github")} /></span></a>
		    	<a href="#email"><span className="mx-2 text-violet"><FontAwesomeIcon icon="fa-solid fa-envelope" onClick={() => onModal("email")} /></span></a>
		    </div>
		  </div>
		  {show ? <MyModal title={modalProps.title} body={modalProps.body} show={show} prefix={modalProps.prefix} onHide={() => setShow(false)} /> : ""}
		</nav>
	)
}

export default Navbar;