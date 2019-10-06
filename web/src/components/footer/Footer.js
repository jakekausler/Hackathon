import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css'

function Footer(props) {
	const footerRef = useRef();
	const [footerSpace, setFooterSpace] = useState(0);
	const calculateSpace = () => {
		const position = footerRef && footerRef.current.getBoundingClientRect();
		if (!position)
			return;
		if (((position.top + position.height) < window.innerHeight)) {
			// Push down the footer when its not at the bottom of screen
			const outputSpace = window.innerHeight - (position.top + position.height);
			if(footerSpace !== outputSpace) {
				setFooterSpace(outputSpace)
			}
		}

		// Reset Footer extra offset to zero
		else if ((position.top > window.innerHeight) && footerSpace !== 0 ) {
			setFooterSpace(0);
		}
	}
	useEffect(calculateSpace)
	const ConditionalSpace = () => (<div style={{ height: footerSpace }}/>)
	return (
		<>
		<ConditionalSpace />
		<div className="Footer" ref={footerRef} >
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
		</div>
		</>
	)
}

export default Footer
