import React from 'react'
import styled from 'styled-components'
import PageBuilder from 'components/page-blocks/aggregators/PageBuilder'
import FrontPageTitleBlock from 'components/page-blocks/blocks/FrontPageTitleBlock'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import PropSection from 'components/page-blocks/sections/PropSection'
import {Link} from 'react-router-dom'
// import CAImg from './images/ca.png'
import {Button} from 'pages/about'

const Attrib = styled.h3`
  display: block;
  font-size: 11px;
  color: #999;
  margin-bottom: 20px
  text-align: center;
`


let Data = {
	pageId:"home-page",
	meta: {
		canonicalUrl:"https://www.ballot.fyi/",
		documentTitle:"California State Propositions 2018 – a nonpartisan guide",
		socialHeadline:"The quickest nonpartisan voter guide for the midterms",
		socialDescription:"A nonpartisan guide to California's 11 propositions, including daylight saving, cage-free eggs, and rent control",
		socialImage:"general.png",
	},
	blocks: [
		{
			component: FrontPageTitleBlock,
			data: {
				title: "A Nonpartisan guide to California's 2018 election",
				body: <span>This election, California gives us 11 semi-ridiculous, yet very important, ballot initiatives to vote on and make fun of. We'll break them down for you, explain what different sides are saying and why your vote actually matters. <br/><br/>We'll be updating our guide up until Election Day on November 6th, but <Link to="/follow">subscribe</Link> to our newsletter to stay in touch
					<br/><br/>
					P.S. If you live in SF or San Jose, we have you covered on your local ballot – visit <a href="https://www.bythebay.cool/" target="_blank" rel="noreferrer noopener">By The Bay</a>.</span>,
			}
		},
		{
			component: PropSection,
			data:{}
		},
		{
      component: TextWithTitleBlock,
      data: {
        title: "Like this stuff?",
				nColWidth: 8,
        text:
					<span id="contact">
						We've spent months researching and writing the content for this site. We're a small team (two people), and we want to make sure we can do this again in 2020. If you like what you see, please consider making a contribution.
						<Button href="https://www.bythebay.cool/contribute/">
							Let's do this
						</Button>
						<Attrib>You'll be redirected to our sister site, By The Bay.</Attrib>
					</span>,
      }
    },
  ]
}



export default () => (
	<PageBuilder data={Data}/>
);
