import React from "react";
import { Form } from "react-bootstrap";

const FilterByName = ({ inputSearch, setInputSearch }) => {
	return (
		<div style={{ width: "50%", margin: "1% 20%" }}>
			<Form.Control
				type='text'
				placeholder='Enter movie title ...'
				onChange={(e) => setInputSearch(e.target.value)}
				value={inputSearch}
			/>
		</div>
	);
};

export default FilterByName;
