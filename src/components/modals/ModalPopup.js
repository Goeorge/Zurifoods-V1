import { React, useEffect, useState } from "react";
import CSS from "../App.css";

function ModalPopup(props) {
	const [show, setShow] = useState(false);

	const closeHandler = (e) => {
		setShow(false);
		props.onClose(false);
	};

	useEffect(() => {
		setShow(props.show);
	}, [props.show]);

	return (
		<div
			style={{
				visibility: show ? "visible" : "hidden",
				opacity: show ? "1" : "0",
			}}
			className={CSS.overlay}
		>
			<div className={CSS.popup}>
				<h2>{props.title}</h2>
				<span className={CSS.close} onClick={closeHandler}>
					&times;
				</span>
				<div className={CSS.content}>{props.children}</div>
			</div>
		</div>
	);
}

// ModalPopup.propTypes = {
// 	title: PropTypes.string.isRequired,
// 	show: PropTypes.bool.isRequired,
// 	onClose: PropTypes.func.isRequired,
// };

export default ModalPopup;
