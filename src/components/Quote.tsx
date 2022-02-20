import React from "react";
import { useQuery } from "react-query";

import PatternImage from "../images/pattern-divider-mobile.svg";
import Dice from "../images/icon-dice.svg";

const Quote = () => {
	const { isLoading, isSuccess, data } = useQuery("data", () =>
		fetch("https://api.adviceslip.com/advice", {
			method: "GET",
		}).then((res) => res.json())
	);

	if (isLoading || !isSuccess) {
		return (
			<div className="container">
				<div className="quote">
					<p>Loading..</p>
				</div>
			</div>
		);
	}
	return (
		<div className="container">
			<div className="quote">
				<p className="secondary-text quote__number">{`Advice #${data.slip.id}`}</p>
				<h1 className="primary-text quote__advice">
					{`"${data.slip.advice}"`}
				</h1>
				<div className="quote__image">
					<img src={PatternImage} />
				</div>
				<div className="quote__dice">
					<img src={Dice} />
				</div>
			</div>
		</div>
	);
};

export default Quote;
