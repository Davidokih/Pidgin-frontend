import React from "react";
import FadeLoader from "react-spinners/PuffLoader";
const LoadingState = () => {
	return (
		<div
			style={ {
				height: "100vh",
				width: "100%",
				background: "rgba(0,0,0,0.5)",
				color: "#fff",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				position: "fixed",
				zIndex: "1111"
			} }>
			<div>
				<FadeLoader color='#fff' />
			</div>
		</div>
	);
};

export default LoadingState;
