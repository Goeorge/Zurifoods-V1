import styled from "styled-components";
import { React } from "react";
import "../../App.css";

function Signup() {
	return (
		<RegisterContainer>
			<h1 className="heading-tertiary">Join and start eating healthy</h1>
			<RegisterWrapper>
				<RegisterInputsWrapper>
					<RegisterInputItem className="form-element">
						<label>Username / Email</label>
						<input
							placeholder="john or sjw@gmail.com"
							type="input"
							className="username"
						/>
					</RegisterInputItem>
					<NamesWrapper>
						<RegisterInputItem className="form-element">
							<label>First Names</label>
							<input placeholder="john" type="input" className="name" />
						</RegisterInputItem>
						<RegisterInputItem className="form-element">
							<label>Last Name</label>
							<input placeholder="doe" type="input" className="name" />
						</RegisterInputItem>
					</NamesWrapper>

					<RegisterInputItem className="form-element">
						<label>Password</label>
						<input placeholder="*****" type="input" className="password" />
					</RegisterInputItem>
					<RegisterInputItem className="form-element">
						<label>Confirm Password</label>
						<input placeholder="*****" type="input" className="password" />
					</RegisterInputItem>
				</RegisterInputsWrapper>
				<a href="#cta" className="btn btn--full">
					Register
				</a>
				<RegisterFooter>
					<span>
						Already have Account? <a href="#cta">Login</a>
					</span>
				</RegisterFooter>
			</RegisterWrapper>
		</RegisterContainer>
	);
}

export default Signup;

const RegisterContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h1 {
		margin-top: 3rem;
		margin-bottom: 4rem;
	}
`;

const RegisterWrapper = styled.div`
	width: 400px;
	background-color: white;
	border-radius: 10px;
	padding: 4rem 0.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;

	border: 0.5px solid #79bc42;
	margin-bottom: 10rem;
`;

const NamesWrapper = styled.div`
	display: flex;
	gap: 1rem;
`;
const RegisterInputsWrapper = styled.div`
	width: 66%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const RegisterInputItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	margin-bottom: 10px;
	gap: 0.5rem;

	input {
		border-radius: 16px;
		text-align: center;
		border: 0.5px solid #79bc42;
	}

	input.active {
		border: 0.5px solid #79bc42;
	}
`;

const RegisterFooter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2.4rem;
`;
