import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function Delete() {
    const navigate = useNavigate();

    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://reactjs-front.com/BackEnd-Laravel/public/api/delete/${id}`)
            .then((resultadoAPI) => {
                navigate('/')
                console.log('Dado Eliminado com sucessos', resultadoAPI)
            })

            .catch(() => {
                console.log("Dado nao eliminado ")
            })

    }, []);
}