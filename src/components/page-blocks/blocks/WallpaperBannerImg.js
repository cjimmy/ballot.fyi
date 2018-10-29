import React from 'react'
import PropTypes from 'prop-types'
import Color from 'layout/colors'
import styled from 'styled-components'
import {Spacer} from 'layout/util'
/*
image with slanted background color, like the ones used
on the proposition pages

usage for file:
{

	component: WallpaperBannerImg,
	data: {
		color: "pink",
		image: MustBeAPNG,
	}
},
*/

const AbsoluteOverBleed = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
`;

const AbsoluteUnderBleed = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	display:flex;
	align-items: flex-end;
`;

const Relative = styled.div`
	position: relative;
	min-height: 206px;
	width: 100%;
`;

const Title = styled.h1`
	font-size: 46px;
	line-height: 54px;
	position: relative;
	width: 60%;
	margin: 0 auto;
	text-align: center;
	filter: drop-shadow(2px 2px 0 white);
	@media screen and (max-width: 767px) {
		width: 95%;
	}
`

const Timestamp = styled.h4`
	text-align: right;
	font-size: 12px;
	color: #666;
	letter-spacing: -0.2px;
	padding-top: 10px;
	margin-right: 30px;
	margin-left: 30px;
	@media screen and (max-width: 767px) {
		height: 10px;
		padding-top: 0;
		text-align: center;
	}
`

const Wallpaper = styled.div`
	background-image: url('${props=>props.img}');
	background-repeat: ${props=>props.repeat} no-repeat;
	height: 100px;
	width: 100%;
	background-size: contain;
`;

const WallpaperBannerImg = (props) => {
	const {color, image, repeatType, title, dateCreated, dateModified} = props.data;
	const repeatX = repeatType || "space";
	const dateOptions = {month: "2-digit", day: "2-digit", year: "2-digit", hour: '2-digit', minute:'2-digit'}
	let publishDate = null;
	if(dateCreated) {
		publishDate = (dateCreated.getTime() !== dateModified.getTime()) ?
			`Last updated on ${dateModified.toLocaleString([], dateOptions)}` :
			`Published on ${dateCreated.toLocaleString([], dateOptions)}`;
	}
	return(
		<React.Fragment>
			<Timestamp>{publishDate}</Timestamp>
			<Relative>
				<Spacer height={30}/>
				<AbsoluteOverBleed>
					<Banner color={color}/>
				</AbsoluteOverBleed>
				<AbsoluteUnderBleed>
					<Wallpaper img={image} repeat={repeatX}/>
				</AbsoluteUnderBleed>
				<Title>{title}</Title>
			</Relative>
			<Spacer height={35}/>
		</React.Fragment>
	);
}

const Banner = (props) => (
	<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><path d="M0 42.93L1440 .07v160.04L0 205.07z" fill="url(#Gradient1)" fillRule="evenodd"/><defs><linearGradient id="Gradient1"><stop stopColor={Color(props.color+'1')} offset="0%"/><stop stopColor={Color(props.color+'2')} offset="100%"/></linearGradient></defs></svg>
	)

WallpaperBannerImg.propTypes = {
	data: PropTypes.shape({
		color: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		title: PropTypes.string,
		repeatType: PropTypes.oneOf(["space", "repeat", "round"]),
		dateCreated: PropTypes.instanceOf(Date),
		dateModified: PropTypes.instanceOf(Date),
	})
}

export default WallpaperBannerImg;
