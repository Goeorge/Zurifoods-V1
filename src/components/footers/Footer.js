import React from "react";
import styled from "styled-components";
import "../../App.css";

import { IconContext } from "react-icons";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { AiFillAndroid } from "react-icons/ai";

function Footer() {
	return (
		<Container>
			<div>
				<Heading>About Us</Heading>
				<AboutUs>
					<img src="/img/zurifoods-logo.png" alt="Zurifoods footer logo" />
					<SocialLinks>
						<a href="#cta">
							<IconContext.Provider value={{ className: "icon social-icon" }}>
								<FaFacebook />
							</IconContext.Provider>
						</a>
						<a href="#cta">
							<IconContext.Provider value={{ className: "icon social-icon" }}>
								<FaInstagram />
							</IconContext.Provider>
						</a>
						<a href="#cta">
							<IconContext.Provider value={{ className: "icon social-icon" }}>
								<FaTwitter />
							</IconContext.Provider>
						</a>
						<a href="#cta">
							<IconContext.Provider value={{ className: "icon social-icon" }}>
								<FaLinkedin />
							</IconContext.Provider>
						</a>
					</SocialLinks>
					<Copyright>
						Copyright &copy; 2030 by JB.
						<br /> All rights reserved
					</Copyright>
				</AboutUs>
			</div>
			<div>
				<Heading>Contact Us</Heading>
				<ContactUs>
					<Address>
						Address: Kai plaza 4th Floor, Room 3 & 4
						<br />
						Opposite Odeon, Tom Mboya Streets
					</Address>
					<ContactInfo>
						<a href="#cta">254 701 048 713</a>
						<a href="#cta">info@Zurifoods.com</a>
						<a href="#cta">support@Zurifoods.com</a>
					</ContactInfo>
				</ContactUs>
			</div>
			<div>
				<Heading>Account</Heading>
				<AccountHelp>
					<a href="#cta">Create account</a>
					<a href="#cta">Sign in</a>
					<a href="#cta">
						<img src="/img/app/ios_app.svg" alt="iOS App" />
					</a>
					<a href="#cta">
						<img src="/img/app/google_play.png" alt="Android App" />
					</a>
				</AccountHelp>
			</div>
			<div>
				<Heading>Company</Heading>
				<CompanyHelp>
					<a href="#cta">About Zurifoods</a>
					<a href="#cta">For Business</a>
					<a href="#cta">Cooking partners</a>
					<a href="#cta">Careers</a>
				</CompanyHelp>
			</div>
			<div>
				<Heading>Resources</Heading>

				<ResourcesHelp>
					<a href="#cta">Recipe directory</a>
					<a href="#cta">Help center</a>
					<a href="#cta">Terms & Conditions</a>
					<a href="#cta">Return Policy</a>
					<a href="#cta">Privacy & Safety Terms</a>
				</ResourcesHelp>
			</div>
		</Container>
	);
}

export default Footer;

const Container = styled.div`
	display: flex;
	align-items: top;
	justify-content: center;
	gap: 6.8rem;

	padding: 4rem 1.8rem;
	margin-bottom: 0;
	/* border-top: 1px solid #f3f9ee; */
	background-color: #f1ceb2;
`;

const Heading = styled.h3`
	font-size: 18px;
	font-weight: 500;
	color: #000;
	margin-bottom: 4rem;
`;

const AboutUs = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1.4rem;

	img {
		height: 4rem;
		width: 16rem;
		margin-bottom: 3.2rem;
	}
`;

const Copyright = styled.p`
	font-size: 14px;
	color: #767676;
	margin-top: auto;
`;

const ContactUs = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2.4rem;
`;

const Address = styled.div``;

const ContactInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 10px;

	font-style: normal;
	font-size: 1.8rem;
	line-height: 1.8rem;

	a {
		color: #767676;
	}
`;

const AccountHelp = styled.div`
	display: flex;
	flex-direction: column;
	// align-items: center;
	justify-content: center;
	gap: 2rem;

	a:visited,
	a:link {
		text-decoration: none;
		font-size: 1.6rem;
		color: #767676;
		transition: all 0.3s;
	}

	a:hover,
	a:active {
		color: #555;
	}

	img {
		width: 100px;
	}
`;

const CompanyHelp = styled(AccountHelp)``;

const ResourcesHelp = styled(AccountHelp)``;

const SocialLinks = styled.div`
	height: 60px;
	list-style: none;
	display: flex;
	gap: 2rem;

	span {
		height: 2.4rem;
		width: 2.4rem;
		color: #79bc42;

		a:link,
		a:visited {
		}

		a:hover,
		a:active {
			background-color: #555;
		}
	}
`;

// .contacts p:first-child {
//   margin-bottom: 2.4rem;
// }
