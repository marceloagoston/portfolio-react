import React from "react";
import { Card } from "react-bootstrap";

import backend from "../images/backend.jpeg";
import frontend from "../images/frontend.jpeg";
import consultant from "../images/it-consulting.jpeg";


const Services = () => {
    const ProjectList = [
        {
            id:1,
            nombre:'Backend Development',
            descripcion:'Lorem ipsum ladero impsous simpson cognitis marcelo',
            imagen: backend
        },
        {
            id:2,
            nombre:'Frontend Development',
            descripcion:'Lorem ipsum ladero impsous simpson cognitis marcelo',
            imagen: frontend
        },
        {
            id:3,
            nombre:'IT Consultant',
            descripcion:'Ecom Lorem ipsum ladero impsous simpson cognitis marcelo',
            imagen: consultant
        }
    ]
    return (
        <div className="projects">
            <h2>Services</h2>
            <div className="wrapper">
                {ProjectList.map((item)=>{
                    return <div>
                        <Card>
                            <Card.Img variant="top" src={item.imagen} />
                            <Card.Body>
                                <Card.Title>{item.nombre}</Card.Title>
                                <Card.Text style={{color:'grey'}}>{item.cliente}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                })}
            </div>
        </div>
    )
};

export default Services;