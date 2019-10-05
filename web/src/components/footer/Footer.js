import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css'

import facebook from './images/facebook.png'
import twitter from './images/twitter.png'
import instagram from './images/instagram.png'

function Footer() {
	const footerRef = useRef();
	let position;
	const [footerSpace, setFooterSpace] = useState(0);
	useEffect(() => {
		position = footerRef && footerRef.current.getBoundingClientRect();
		console.log(position);
		console.log(window.innerHeight);
		if (position && (position.top < window.innerHeight))
			setFooterSpace(window.innerHeight - position.top - position.height)
	}, [])
	const Space = () => (<div style={{ height: footerSpace }}/>)
	return (
		<>
		<Space />
		<div className="Footer" ref={footerRef} >
			<div className="footerColumn">
				<div><h1>Assembl(i)</h1></div>
				<div><Link to="/description">Description/Mission</Link></div>
				<div><Link to="/statement">Statement</Link></div>
			</div>
			<div className="footerColumn">
				<div><h1>USEFUL LINKS</h1></div>
				<div><Link to="/">Home</Link></div>
				<div><Link to="/about">About</Link></div>
				<div><Link to="/contact">Contact</Link></div>
				<div><Link to="https://www.lead555.com/">Lead555</Link></div>
			</div>
			<div className="footerColumn">
				<div><h1>STAY IN TOUCH</h1></div>
				<div><Link to="/phone">Phone</Link></div>
				<div><Link to="/email">Email</Link></div>
				<div className="footerMediaIcons">
					<a href="https://facebook.com"><img className="footerMediaIcon" src={facebook} /></a>
					<a href="https://twitter.com"><img className="footerMediaIcon" src={twitter} /></a>
					<a href="https://instagram.com"><img className="footerMediaIcon" src={instagram} /></a>
				</div>
			</div>
		</div>
		</>
	)
}

export default Footer