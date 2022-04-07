import React from "react";
import styled from "styled-components";

function InnerFooter() {
	return (
		<Copyright>
			<span>@ 2022 Zuri Foods</span>
			<span>Privacy Policy | Terms</span>
		</Copyright>
	);
}

export default InnerFooter;

const Copyright = styled.div`
	width: 100%;
	position: sticky;
	top: 0;
	z-index: 100;

	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #f1ceb2;

	/* Because we want the header to be sticky later */
	height: 4.6rem;
	padding: 1.4rem 4.8rem;
	// position: relative;

	span {
		font-weight: 600;
	}
`;
