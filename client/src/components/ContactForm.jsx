import { useState } from "react";
import Swal from "sweetalert2";
//import swal from "sweetalert";
import emailjs from "emailjs-com";
import Container from "react-bootstrap/Container";
import { Row, Col, Form, Button } from "react-bootstrap";

const ContactForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handleMessageChange = (e) => {
		setMessage(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Configura tus credenciales de EmailJS
		const userId = "XFOCj1lcdr26fixhg";
		const serviceId = "service_fp6mjuo";
		const templateId = "template_rbpnauw";

		emailjs.init(userId);

		emailjs
			.send(serviceId, templateId, {
				name: name,
				email: email,
				message: message,
			})
			.then(() => {
				Swal.fire({
					icon: "success",
					title: "¡Mensaje enviado!",
					text: "Lo contactaremos a la brevedad.",
				});
			})
			.catch(() => {
				Swal.fire({
					icon: "error",
					title: "Error",
					text: "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.",
				});
			});

		setName("");
		setEmail("");
		setMessage("");
	};

	return (
		<>
			<Container className="d-flex justify-content-center align-items-center mt-3">
				<Row className="w-50 border border-1 border-secondary rounded">
					<Form onSubmit={handleSubmit}>
						<h6 className="mt-3">Escribí un mensaje para que te contactemos</h6>
						<Row className="">
							<Col>
								<Form.Group className="my-2" as={Row} controlId="formName">
									<Form.Label column sm={3}>
										Nombre:
									</Form.Label>
									<Col sm={9}>
										<Form.Control
											type="text"
											value={name}
											onChange={handleNameChange}
											placeholder="Ingresa tu nombre"
											required
										/>
									</Col>
								</Form.Group>

								<Form.Group className="my-2" as={Row} controlId="formEmail">
									<Form.Label column sm={3}>
										Email:
									</Form.Label>
									<Col sm={9}>
										<Form.Control
											type="email"
											value={email}
											onChange={handleEmailChange}
											placeholder="Ingresa tu email"
											required
										/>
									</Col>
								</Form.Group>

								<Form.Group
									className="my-2 align-items-cente"
									as={Row}
									controlId="formMessage"
								>
									<Form.Label column sm={3}>
										Mensaje:
									</Form.Label>
									<Col sm={9}>
										<Form.Control
											as="textarea"
											rows={3}
											value={message}
											onChange={handleMessageChange}
											placeholder="Escribe tu mensaje"
											required
										/>
									</Col>
								</Form.Group>

								<Form.Group as={Row} controlId="formSubmit" className="mb-3">
									<Col className="d-flex justify-content-center">
										<Button variant="primary" type="submit">
											Enviar
										</Button>
									</Col>
								</Form.Group>
							</Col>
						</Row>
					</Form>
				</Row>
			</Container>
		</>
	);
};

export default ContactForm;
