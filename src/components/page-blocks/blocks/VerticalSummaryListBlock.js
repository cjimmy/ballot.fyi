import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Color from 'layout/colors'
import {LinkOutIcon} from 'components/static/icons'
/*
usage

{

	component: VerticalSummaryListBlock,
	data: {
		listNItems: 3, //optional
		buttonText: "View more", //optional
		stories: [
			{
				title: "Defied state law and issued same-sex marriage licenses (2004)",
				description: <span>While it was still illegal in California in 2004, Gavin, as Mayor of SF, ordered his County Clerk to issue 4K same-sex marriage licenses.</span>,
			},
			{
				title: <span>Passed universal health care in SF (2007)</span>,
				description: "As mayor, Gavin implemented Healthy SF, a program that provided health care to all residents including undocumented immigrants",
			},
		],
	}
},
*/

const Container = styled.div`
	margin-top: 40px;
`;

const TitleContainer = styled.div`
margin-bottom: 10px;
	@media screen and (max-width: 767px) {
		text-align: center;
	}
`;

export const ExpandButton = styled.div`
	margin: 40px auto 0 auto;
	padding: 10px 20px;
	display: flex;
	max-width: 200px;
	align-items: center;
	justify-content: center;
	background-color: black;
	border-radius: 4px;
	@media not all and (hover: none) {
    &:hover{
      background-color: ${Color('pink2')};
      cursor: pointer;
    }
  }
`;

const StyledH3 = styled.h3`
	font-size: 14px;
	font-weight: bold;
	margin-bottom: 3px;

`
export const ExpandButtonLabel = styled.h2`
	font-size: 14px;
	text-align: center;
	color: white;
`;
const LinkContainer = styled.div`
	display: flex;
	@media screen and (max-width: 767px) {
		justify-content: center;
	}
`
const StoryLink = styled.a`
	display: block;
	font-family: ${props=>props.theme.fonts.helvetica};
	font-size: 12px;
	margin-right: 20px;
`
const LinkOutStyle = styled.div`
	height: 20px;
	min-width: 20px;
	width: 20px;
	transform: translateY(2px);
`

const Snippet = (props) => {
	const {title, description, links} = props.data;
	let expandedLinks = null;
 	if(links) {
		expandedLinks = links.map((link,i)=>{
			return(
				<React.Fragment key={i}>
					<LinkOutStyle><LinkOutIcon color={Color('red')}/></LinkOutStyle>
					<StoryLink href={link.url} target="_blank" rel="noreferred noopener">{link.label}</StoryLink>
				</React.Fragment>
			)
		})
	}
	return(
		<Container>
			<TitleContainer>
				<StyledH3>{title}</StyledH3>
				{links &&
					<LinkContainer>{expandedLinks}</LinkContainer>}
			</TitleContainer>
			{description}
		</Container>
	)
}



class VerticalSummaryListBlock extends React.Component  {
	constructor(props) {
		super(props);
		this.state = {
			expanded: false,
		}
	}

	expandContainer = () => {
		this.setState({expanded: true})
	}

	render() {
		const { stories, listNItems, buttonText } = this.props.data;
		const nItems = listNItems || 3;
		const snippets = stories.map( (story, i) => {
			if(i < nItems) {
				return(
					<Snippet key={i} data={story}/>
				);
			} else {
				return null
			}
		});
		//-- most readable, but stylistically inelegant way to do this
		let restOfSnippets = stories.map( (story, i) => {
			if(i >= nItems) {
				return(
					<Snippet key={i} data={story}/>
				);
			} else {
				return null;
			}
		})

		if (restOfSnippets[restOfSnippets.length-1] === null) {
			restOfSnippets = null;
		}
		return(
			<div>
				<Row>
			    <Col
			    	xsOffset={1} xs={10}
			      smOffset={2} sm={8}
			      mdOffset={3} md={6}
			      lgOffset={3} lg={6}
			    >
						{snippets}
						{(!this.state.expanded && restOfSnippets) &&
							<ExpandButton onClick={this.expandContainer}>
								<ExpandButtonLabel>{buttonText}</ExpandButtonLabel>
							</ExpandButton>
						}
						{this.state.expanded && restOfSnippets}

					</Col>
				</Row>
			</div>
		);
	}
}

VerticalSummaryListBlock.propTypes = {
	data: PropTypes.shape({
		listNItems: PropTypes.number,
		buttonText: PropTypes.string,
		stories: PropTypes.arrayOf(
			PropTypes.shape({
				title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
				description: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
			})
		),
	})
}

export default VerticalSummaryListBlock;
