import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import About from "./screens/About";
import Desarrollo from "./screens/Desarrollo";
import Diseño from "./screens/Diseño";
import Proyectos_web from "./screens/Proyectos_web";
import Proyectos_diseño from "./screens/Proyectos_diseño";
import "animate.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<header>
					<Navbar
						bg="dark"
						variant="dark"
						expand="lg"
						fixed="top"
						className="p-3 bg-body-tertiar"
					>
						<Container>
							<Navbar.Brand href="/" className=" animate__animated animate__heartBeat">+ Web & Diseño</Navbar.Brand>
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
							<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end me-5">
								<Nav>
									<Nav.Link className="me-5" href="/">Inicio</Nav.Link>
									<Nav.Link className="me-5" href="/about">Nosotros</Nav.Link>
									<NavDropdown className="me-5" title="Servicios" id="basic-nav-dropdown">
										<NavDropdown.Item href="/desarrollo">
											Desarrollo Web
										</NavDropdown.Item>
										<NavDropdown.Item href="/diseño">
											Diseño Gráfico
										</NavDropdown.Item>
									</NavDropdown>
									<NavDropdown className="me-5" title="Proyectos" id="basic-nav-dropdown">
										<NavDropdown.Item href="/proyectos-web">
											Desarrollo Web
										</NavDropdown.Item>
										<NavDropdown.Item href="/proyectos-diseño">
											Diseño Gráfico
										</NavDropdown.Item>
									</NavDropdown>
								</Nav>
							</Navbar.Collapse>
						</Container>
					</Navbar> 					
				</header>
				<main>
					<Container className="mt-5 min-vh-100 d-flex align-items-center">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/desarrollo" element={<Desarrollo />} />
							<Route path="/diseño" element={<Diseño />} />
							<Route path="/proyectos-web" element={<Proyectos_web />} />
							<Route path="/proyectos-diseño" element={<Proyectos_diseño />} />
						</Routes>
					</Container>
				</main>

				<footer>
					<Footer />
				</footer>
			</BrowserRouter>
		</>
	);
}

export default App;
