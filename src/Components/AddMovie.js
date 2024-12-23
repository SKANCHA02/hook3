import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AddMovie = ({ add }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	// init state
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [rate, setRate] = useState("");
	const [posterUrl, setPosterUrl] = useState("");

	// update state
	const handleTitle = (event) => {
		setTitle(event.target.value);
	};
	const handleDescription = (event) => {
		setDescription(event.target.value);
	};
	const handleRate = (event) => {
		setRate(event.target.value);
	};
	const handlePosterUrl = (event) => {
		setPosterUrl(event.target.value);
	};

	const handleMovie = (e) => {
		let newMovie = { title, description, rate, posterUrl };
		add(newMovie);
		handleClose();
	};

	return (
		<div>
			<Button variant='primary' onClick={handleShow}>
				Add Movie
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add Movie</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form.Label>Movie title</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter movie title'
						value={title}
						onChange={(event) => handleTitle(event)}
					/>
					<Form.Label>Movie description</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter movie description'
						value={description}
						onChange={(event) => handleDescription(event)}
					/>
					<Form.Label>Movie rate</Form.Label>
					<Form.Control
						type='number'
						placeholder='Enter movie rate'
						value={rate}
						onChange={(event) => handleRate(event)}
					/>
					<Form.Label>Movie poster</Form.Label>
					<Form.Control
						type='url'
						placeholder='Enter mo ie poster'
						value={posterUrl}
						onChange={(event) => handlePosterUrl(event)}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button variant='primary' onClick={() => handleMovie()}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default AddMovie;
