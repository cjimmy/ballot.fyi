import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid';
// import {Spacer} from 'layout/util'

/*
{
	id: "000",
	component: PageTitleBlock,
	data: {
		title: "June 5, 2018 election guide",
		subtitle: "There's a lot to vote on in SF, but we did the homework for you. We've read through a bunch of legalese, opinions, and articles to give you nonpartisan summaries on what you need to know to cast your vote for this primary election.",
		datePublished: new Date('July 29, 2018 15:20:00'), //must be Date objects
		dateModified: new Date('July 29, 2018 17:20:00')
	}
},
*/


const Title = styled.h1`
	font-size: 70px;
	line-height: 65px;
	letter-spacing: 0.9px;
	margin-bottom: 0;
	@media screen and (max-width: 767px) {
		font-size: 60px;
		line-height: 62px;
	}
`;

// transform: rotate(-1.8deg);
const Tilt = styled.div`
	@media screen and (max-width: 1023px) {
		transform: none;
	}
`

const Subheadline = styled.div`
	width: 80%;
	font-size: 14px;
	line-height: 20px;
	margin-top: 15px;
	@media screen and (max-width: 1023px) {
		width: 100%;
		margin-top: 30px;
	}
`;

// const Timestamp = styled.h4`
// 	text-align: right;
// 	font-size: 12px;
// 	color: #999;
// 	@media screen and (max-width: 767px) {
// 		text-align: left;
// 	}
// `


const PageTitleBlock = (props) => {
	const {title, subtitle} = props.data;
	// const dateOptions = {month: "2-digit", day: "2-digit", year: "2-digit", hour: '2-digit', minute:'2-digit'}
	// let status = null;
	// if(datePublished) {
	// 	status = (datePublished.getTime() !== dateModified.getTime()) ?
	// 		`Last updated on \r\n${dateModified.toLocaleString([], dateOptions)}` :
	// 		`Published on ${datePublished.toLocaleString([], dateOptions)}`;
	// }
	return(
		<Row>
	    <Col
	    	xsOffset={1} xs={10}
	      smOffset={2} sm={8}
	      mdOffset={1} md={8}
	      lgOffset={1} lg={8}
      >
				<Tilt>
					<Title>{title}</Title>
					{subtitle && <Subheadline>{subtitle}</Subheadline>}
				</Tilt>
      </Col>
		</Row>
	)
}

PageTitleBlock.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string.isRequired,
		subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		datePublished: PropTypes.instanceOf(Date),
		dateModified: PropTypes.instanceOf(Date),
	}).isRequired
}

export default PageTitleBlock;
