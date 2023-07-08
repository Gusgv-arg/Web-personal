import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
	return (
		<Container className="min-vw-100">
			<Row className="bg-secondary p-4 text-light">
				<Col className="d-flex justify-content-center align-items-center">
					<span className="mx-3">Contactos</span>
					<a
						href="http://linkedin.com/in/gustavo-gomez-villafañe-6164526"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-linkedin mx-3 text-light icons" />
					</a>
					<a
						href="https://wa.me/5491161405589"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-whatsapp mx-3 text-light icons" />
					</a>{" "}
					<a href="mailto: gusgvillafane@gmail.com">
						<i className="far fa-envelope mx-3 text-light icons" />
					</a>
					<a
						href="https://discord.com/accessibility/#0958"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-discord mx-3 text-light icons" />
					</a>
				</Col>

				<Col className="d-flex justify-content-center align-items-center">
					<span className="mx-3">¡Seguinos en redes socales!</span>
					<i className="fab fa-facebook mx-3" />
					<i className="fab fa-instagram mx-3" />
					<i className="fab fa-twitter mx-3" />
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
