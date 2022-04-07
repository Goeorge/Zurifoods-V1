import styled from "styled-components";
import { React } from "react";
import "../../App.css";

function Login(props) {
	const { onModuleClick, login } = props;
	return (
		<LoginContainer>
			<LoginWrapper>
				<div className="modal-close" onClick={() => onModuleClick(login)}>
					<span>X</span>
				</div>
				<h1 className="heading-tertiary">Login</h1>
				<LoginInputsWrapper>
					<InputItem className="">
						<label className="label">Username / Email</label>
						<input
							placeholder="john doe"
							type="input"
							className="input login"
						/>
					</InputItem>
					<InputItem className="">
						<label>Password</label>
						<input
							placeholder="john doe"
							type="input"
							className="input login"
						/>
					</InputItem>
				</LoginInputsWrapper>
				<a href="#cta" className="btn btn--full">
					Login
				</a>
				<LoginFooter>
					<span>
						Forgot your password? <a href="#cta">Reset Here</a>
					</span>
					<a href={"/signup"}>Create Account</a>
				</LoginFooter>
			</LoginWrapper>
		</LoginContainer>
	);
}

export default Login;

const LoginContainer = styled.div`
	width: 100%;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;

	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(197, 197, 197, 0.6);

	z-index: 999;
`;

const LoginWrapper = styled.div`
	width: 400px;
	background-color: white;
	border-radius: 20px;
	padding: 1rem 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1.2rem;

	.modal-close {
		color: #79bc42;
		border: 1px solid #79bc42;
		padding: 4px;
		border-radius: 101px;
		cursor: pointer;
	}
`;

const LoginInputsWrapper = styled.div`
	width: 60%;
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
`;

const InputItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	margin-bottom: 15px;
	gap: 1rem;

	input {
		border-radius: 16px;
		text-align: center;
		border: 0.5px solid #79bc42;
	}
`;

const LoginFooter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2.4rem;
`;
