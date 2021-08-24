import React, { Component } from "react";
import { Container, CardGroup, Col, Row } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./AboutUs.css";
import photo1 from "../assets/mohammed.jpeg";
import photo2 from "../assets/tahany.jpg";
import photo3 from "../assets/moayad.jpg";

export class AboutUs extends Component {
    render() {
        return (
            <Container className="my-5">
                <h1 style={{ margin: "20px", textAlign: "center" }}>About Us</h1>
                <p style={{ padding: "10px", margin: "20px", textAlign: "center" }}>
                    <b>Relax Inn</b> was founded in 2021, Relax Inn serving the people who
                    love travling. Our Relax Inn serves booking hotels, and shows
                    different types of Hotels depend on the budget or how many stars and
                    the services each hotel gives.
                </p>
                <Container className="center-photo d-flex justify-content-center">
                    <CardGroup className="card__collection clear-fix">
                        <Row>
                            <Col>
                                <div
                                    className="cards cards--two"
                                    style={{ minWidth: '250px', marginLeft: '25px' }}
                                >
                                    <img
                                        src={photo3}
                                        style={{ height: "100%" }}
                                        className="img-responsive"
                                        alt="Cards"
                                    />
                                    <span className="cards--two__rect"></span>
                                    <span className="cards--two__tri"></span>
                                    <p>Moayad Alhaj</p>
                                    <ul className="cards__list">
                                        <li>
                                            <a
                                                style={{ textDecoration: "none", color: "#000" }}
                                                href="https://github.com/moayadalhaj"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FaGithub />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                style={{ textDecoration: "none", color: "#000" }}
                                                href="https://www.linkedin.com/in/moayad-alhaj"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FaLinkedin />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                style={{ textDecoration: "none", color: "#000" }}
                                                href="https://www.facebook.com/moayad.osama.7"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FaFacebook />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col>
                                <div
                                    className="cards cards--two"
                                    style={{ minWidth: '250px', marginLeft: '25px' }}
                                >
                                    <img src={photo2} className="img-responsive" alt="Cards" />
                                    <span className="cards--two__rect"></span>
                                    <span className="cards--two__tri"></span>
                                    <p>Tahany Ali</p>
                                    <ul className="cards__list">
                                        <li>
                                            <a
                                                style={{ textDecoration: "none", color: "#000" }}
                                                href="https://github.com/tahany777"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FaGithub />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                style={{ textDecoration: "none", color: "#000" }}
                                                href="https://www.linkedin.com/in/tahany-ali/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FaLinkedin />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                style={{ textDecoration: "none", color: "#000" }}
                                                href="--"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FaFacebook />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col>
                                <div className="cards cards--two"
                                    style={{ minWidth: '250px', marginLeft: '25px' }}>
                                    <img
                                        src={photo1}
                                        style={{ height: " 100%" }}
                                        className="img-responsive"
                                        alt="Cards"
                                    />
                                    <span className="cards--two__rect"></span>
                                    <span className="cards--two__tri"></span>
                                    <p>Mohammad Silwadi</p>
                                    <ul className="cards__list">
                                        <li>
                                            <a
                                                style={{ textDecoration: "none", color: "#000" }}
                                                href="https://github.com/mohammadsilwadi"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FaGithub />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                style={{ textDecoration: "none", color: "#000" }}
                                                href="https://www.linkedin.com/in/mohammad-silwadi-141782170/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FaLinkedin />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                style={{ textDecoration: "none", color: "#000" }}
                                                href="https://web.facebook.com/mohammed.silwadi/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FaFacebook />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </CardGroup>
                </Container>
            </Container>
        );
    }
}

export default AboutUs;