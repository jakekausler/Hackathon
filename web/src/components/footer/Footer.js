import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css'

function Footer(props) {
  const [fixedToBottom, setFixedToBottom] = useState(false)

  const calculatePosition = () => {
    let appHeight = document.getElementById('app-container').getBoundingClientRect().height
    let footerHeight = document.getElementsByTagName('footer')[0].getBoundingClientRect().height
    let windowHeight = window.innerHeight

    if (appHeight <= windowHeight) {
      document.getElementById('app-container').setAttribute('style', `padding-bottom: ${footerHeight}px`)
      setFixedToBottom(true)
    } else {
      document.getElementById('app-container').setAttribute("style", "padding-bottom: 0px")
      setFixedToBottom(false)
    }
  }
  
  useEffect(calculatePosition)
  window.addEventListener('resize', calculatePosition)
  
  let conditionalStyles =
    fixedToBottom ?
    {bottom: 0, position: 'absolute'} :
    {bottom: 'auto', position: 'initial'}

	return (
		<>
		<footer className="Footer" style={conditionalStyles}>
			<div className="footerColumn">
				<div><h1>Assembl(i)</h1></div>
				<div><Link to="/description">Description / Mission</Link></div>
				<div><Link to="/statement">Statement</Link></div>
			</div>
			<div className="footerColumn">
				<div><h1>USEFUL LINKS</h1></div>
				<div><Link to="/">Home</Link></div>
				<div><Link to="/about">About</Link></div>
				<div><Link to="/contact">Contact</Link></div>
				<div><a href="https://www.lead555.com/">Lead555</a></div>
			</div>
			<div className="footerColumn">
				<div><h1>STAY IN TOUCH</h1></div>
				<div><Link to="/phone">Phone</Link></div>
				<div><Link to="/email">Email</Link></div>
				<div className="footerMediaIcons">
					<a href="https://facebook.com"><img className="footerMediaIcon" src="/img/FACEBOOK.png" /></a>
					<a href="https://twitter.com"><img className="footerMediaIcon" src="/img/TWITTER.png" /></a>
					<a href="https://instagram.com"><img className="footerMediaIcon" src="/img/INSTAGRAM.png" /></a>
				</div>
			</div>
		</footer>
		</>
	)
}

export default Footer
