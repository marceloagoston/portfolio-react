import React from "react";
import { Card } from "react-bootstrap";

import liraImg from "../images/lira.png";
import liraArch from "../images/archivum.png";
import liraMonit from "../images/monitoresbi.png";
import liraSgd from "../images/sgd.png";
import ruaiImg from "../images/ruai.png";

const Projects = () => {

    const ProjectList = [
        {
            id:1,
            nombre:'Registro Único de Aplicaciones Informáticas',
            cliente:'Ecom Chaco',
            imagen: ruaiImg
        },
        {
            id:2,
            nombre:'Lira Gestión',
            cliente:'Caja Notarial del Colegio de Escribanos del Chaco',
            imagen: liraImg
        },
        {
            id:3,
            nombre:'Monitores BI',
            cliente:'Ecom Chaco',
            imagen: liraMonit
        },
        {
            id:4,
            nombre:'Sistema Gestor Documental',
            cliente:'Ecom Chaco',
            imagen: liraSgd
        },
        {
            id:5,
            nombre:'Archivum',
            cliente:'Cognitis Software House',
            imagen: liraArch
        }
    ]
    return (
        <div className="projects">
            <h2>Projects</h2>
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

export default Projects;