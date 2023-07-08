import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FotoGGV from "../assets/Fotoggv.jpg";
import FotoLuli from "../assets/FotoLuli.jpg"

const About = () => {
	return (
		<Container className="animate__animated animate__zoomIn">
			<Col className="text-center">
				<h3 className="my-5">¿Quienes somos?</h3>
			</Col>
			<Row>
				<Col sm={3}>
					<Row className="d-flex justify-content-center align-items-center">
						<img className="img-fluid img" src={FotoGGV} />
					</Row>
					<Row>
						<h6 className="text-center my-3 fw-bold">Gustavo Gómez Villafañe</h6>
					</Row>
				</Col>
				<Col className="d-flex align-items-center">
					<p className="text-start mx-5 mb-5 mt-0 lh-lg  pt-0 p-3">
						- Desarrollador Web (full-stack egresado en Henry).
						<br />
						- Licenciado en Administración de Empresas (Universidad de
						Belgrano).
						<br />
						- Maestría en Administración con orientación estratégica. (UB y
						Ecole Management Lyon)
						<br />
						- Experiencia de más de 25 años trabajando en multinacionales
						ocupando cargos de Dirección.
						<br />
						<br />
						<text className="fst-italic fw-bold">
							{`"Mi objetivo como Desarrollador Web, es diferenciarme a partir de generar valor agregado a mis clientes combinando la Programación, mi formación como Licenciado en Administración y experiencia en el mundo empresarial."`}
						</text>
					</p>
				</Col>
				<hr className="my-3 border border-secondary" />
			</Row>
			<Row>
				<Col className="d-flex align-items-center">
					<p className="text-start mx-5 mb-5 mt-0 lh-lg pt-0 p-3">
						- Diseñadora Gráfica (egresada en Universidad de Palermo)
						<br />
						- Trabajo de manera independiente hace 3 años
						<br />
						<br />
						<text className="fst-italic fw-bold">
							{`“Busco orientar mi práctica hacia un enfoque integral que combina la creatividad y funcionalidad para crear soluciones comunicacionales efectivas y visualmente impactantes.”`}
						</text>
					</p>
				</Col>
				<Col sm={3}>
					<Row className="d-flex justify-content-center align-items-center">
						<img className="img-fluid img" src={FotoLuli} />
					</Row> 
					<Row>
						<h6 className="text-center  fw-bold my-3 ">Lucía Gómez Villafañe</h6>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default About;
