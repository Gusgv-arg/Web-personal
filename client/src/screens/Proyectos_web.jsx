import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Principal from "../assets/Principal.png";
import link from "../assets/link.svg";
import "animate.css";
import { Link } from "react-router-dom";

const Proyectos_web = () => {
	return (
		<>
			<Container>
				<Row className="animate__animated animate__zoomIn">
					<h2 className="text-left my-5">Desarrollo Web</h2>
					<br />

					<Row>
						<Row>
							<div className="d-flex d-inline-flex">
								<h5 className="text-decoration-underline me-2">E-Commerce V2.: </h5>
								<span>venta online de productos</span>
							</div>
						</Row>

						<Col>
							<br />
							<p>Funcionalidades:</p>
							<p>✔️ Búsquedas avanzadas</p>
							<p>✔️ Carrito de Compras</p>
							<p>✔️ Pagos: Paypal, Mercado Pago, Crypto</p>
							<p>✔️ Chat on-line</p>
							<p>✔️ Registro usuarios</p>
							<p>✔️ Notificaciones de mail al usuario</p>
							<p>✔️ Reseñas clientes</p>
							<p>✔️ Panel Admin: abm productos y usuarios</p>
						</Col>
						<Col>
							<img src={Principal} />
							<p className="mt-3 text-center">
								<Link
									to="https://ecommercev2.onrender.com/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-black-50 text-decoration-none"
								>
									<img src={link} className="me-2"></img>
									Link
								</Link>
							</p>
						</Col>
					</Row>
				</Row>
			</Container>
		</>
	);
};

export default Proyectos_web;
