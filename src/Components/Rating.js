import React from "react";
import { Flex, Rate } from "antd";
const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const Rating = ({ rating, setRating }) => {
	const handleChange = (value) => {
		setRating(value);
	};
	return (
		<Flex gap='middle' vertical>
			<Rate tooltips={desc} onChange={handleChange} value={rating} />
		</Flex>
	);
};

export default Rating;
