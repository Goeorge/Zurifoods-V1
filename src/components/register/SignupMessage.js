import React from "react";
import styled from "styled-components";

function SignupMessage() {
	return (
		<ComingSoon>
			<p>Coming Soon..</p>
			<span>Be on the lookout</span>
		</ComingSoon>
	);
}

export default SignupMessage;

const ComingSoon = styled.div`
	text-align: center;
	margin: 20% 30%;
	color: #79bc42;

	p {
		font-size: 50px;
		font-weight: 700;
	}

	span {
		font-size: 20px;
		font-weight: 500;
	}
`;
