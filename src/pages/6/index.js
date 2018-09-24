import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'
import SummaryListBlock from 'components/page-blocks/blocks/SummaryListBlock'
import FluidColumnsBlock from 'components/page-blocks/blocks/FluidColumnsBlock'

import Citation from 'components/interactive/citation/citation'
import Acronym from 'components/interactive/acronym'
import {Acronyms, Citations} from './expandables'

const Data = {
	pageId:"prop-6",
	propNum: 6,
	meta: {
		dateCreated: new Date('October 8, 2018 10:00:00'),
		dateModified: new Date('October 8, 2018 10:00:00')
	},
	blocks: [
    {
    	component: TextWithTitleBlock,
    	data: {
    		text: "Prop 6 would repeal the Road Repair and Accountability Act (RRAA), a gas tax and vehicle fee that generates over $5B annually for transportation projects. Prop 6 would also require all future gas tax increases to be approved by voters (via ballot propositions).",
    	},
    },
		{
			component: TextWithTitleBlock,
    	data: {
    		title: "Left vs Right",
    		text: <span>
					The debate over Prop 6 is split along party lines. In 2017, <Acronym data={Acronyms.RRAA}/> narrowly passed, with two Dems voting no and one Republican voting yes (<Citation data={Citations['1']}>thanks to some side deals</Citation>). Since it's passage, Republicans have used it <Citation data={Citations['2']}>to recall a state senator</Citation> and to put Prop 6 on the ballot, <Citation data={Citations['3']}>with a specific goal of increasing Republican voter turnout.</Citation>.
					<br/><br/>
					Conservatives argue that the taxes are regressive, and <Citation data={Citations['5']}>CA already has the second-highest gas taxes in the country.</Citation> They also point to the state's $16B surplus, of which (<Citation data={Citations['4']}> about $14B is for weathering the next recession.</Citation>)
					<br/><br/>
					Democrats point to our lacking infrastructure. <Citation data={Citations['6']}>CA ranks #11 in bridge quality, but #49 in road quality.</Citation> They also explain that a gas tax that pays for transportation infrastructure is like a usage fee. Those who pay the most are also the biggest users.
				</span>,
    	},
		},
		{
			component: SectionTitleBlock,
			data:{
				title: "Walker taxes ranger",
				subtitle: "A breakdown of taxes brought to you by RRAA",
				nColWidth: 6,
			}
		},
		{
			component: SummaryListBlock,
			data: {
				listNItems: 2, //optional
				buttonText: "Two more", //optional
				stories: [
					{
						title: "Gasolina tax",
						description: <span><Acronym data={Acronyms.RRAA}/> raised the gas tax from $0.28/gal to $0.30/gal, and will raise it again in 2019 to $0.47/gal to raise $2.4B in revenue.</span>,
					},
					{
						title: "Diesel tax",
						description: <span><Acronym data={Acronyms.RRAA}/> raised the diesel tax from $0.16/gal to $0.36/gal and increases the diesel fuel sales tax to 5.75% to generate $1.1B.</span>,
					},
					{
						title: "Vehicle Registration fees",
						description: <span>Depending on the value of your car, a <em>transportation improvement fee</em> of $25 to $175 is added to your vehicle registration costs. Rakes in $1.6B.</span>,
					},
					{
						title: "Zero-emission vehicle fee",
						description: <span><Acronym data={Acronyms.RRAA}/> introduced a new $100 fee for ZEVs, which is expected to raise $20M.</span>,
					},
				],
			}
		},
		{
			component: TextWithTitleBlock,
    	data: {
    		title: "And where does the money go?",
    		text: <span>
					~$3.2B a year on average in revenue
					<ul>
						<li>$400M for state bridges and culverts</li>
						<li>$200M for counties with local transportation taxes</li>
						<li>$100M to increase biking and walking</li>
						<li>$25M for freeway service</li>
						<li>$25M for grants to local governments for sustainable communities</li>
						<li>$7M total for transportation-related research and education</li>
						<li>$5M in workforce development grants</li>
					</ul>
					With the remaining $2.5B, half would go to Caltrans for highway maintenance and repair. The other half would go to cities for local transportation infrastructure projects.
				</span>,
    	},
		},
		{
			component: SectionTitleBlock,
			data:{
				title: "Just to be uber clear",
			}
		},
		{
			component: FluidColumnsBlock,
			data: {
				blocks: [
					{
						title: "'Yes' means repeal",
						body: <span><br/>A <em>Yes</em> vote on Prop 6 means you would like
							<ul>
							<li>to get rid of the <Acronym data={Acronyms.RRAA}/> and its associated gas tax increases and transportation improvements.</li>
							<li>to put all future gas tax increases, after being passed by the Legislature and signed by the Governor, on the ballot for CA voters to decide.</li>
						</ul></span>,
					},
					{
						title: "'No' means no-peal",
						body: <span><br/>A <em>No</em> vote means that you wanna<ul>
							<li>continue the tax increases and transportation improvements from <Acronym data={Acronyms.RRAA}/> as planned.</li>
							<li>let future gas tax laws be passed with the current thresholds (two-thirds of state assembly, senate, and one whole governor's signature).</li>
						</ul></span>,
					},
				],
			},
		},
		{
			component: SectionTitleBlock,
			data:{
				title: "More reading"
			}
		},
		{
			component: LinksBlock,
			data: {
				subsections:[
					{
						subsectionTitle: "Arguments in favor",
						links: [
							{
								text: "",
								url: ""
							},
						]
					},
					{
						subsectionTitle: "Arguments against",
						links: [
							{
								text: "SF Chronicle Editorial Board",
								url: "https://www.sfchronicle.com/opinion/editorials/article/Editorial-No-on-Proposition-6-cynical-13189410.php",
							},
							{
								text: "Mercury News & East Bay Times Editorial Board",
								url: "https://www.mercurynews.com/2018/09/04/editorial-no-on-prop-6-to-preserve-state-roads-transit-funds/"
							},
							{
								text: "Press Democrat Editorial Board",
								url: "https://www.pressdemocrat.com/opinion/8645902-181/pd-editorial-no-on-prop?sba=AAS"
							},
						]
					},
					{
						subsectionTitle: "Other",
						links: [
							{
								text: "Breakdown of taxes and revenue from RRAA",
								url: "https://www.sacbee.com/news/politics-government/capitol-alert/article147437054.html",
							},
							{
								text: "Legal text of RRAA",
								url: "http://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=201720180SB1",
							},
						]
					},
					{
						subsectionTitle: "Impartial analyses",
						links: [
							{
								text: "Legislative Analyst's Office analysis",
								url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=6&year=2018",
							},
							{
								text: "Official voter guide digest",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/prop6-title-summ-analysis.pdf"
							},
							{
								text: "Ballotpedia",
								url:"https://ballotpedia.org/California_Proposition_6,_Voter_Approval_for_Future_Gas_and_Vehicle_Taxes_and_2017_Tax_Repeal_Initiative_(2018)"
							},
							{
								text: "Legal text of proposition",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/topl.pdf#Prop6"
							}
						]
					}
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
