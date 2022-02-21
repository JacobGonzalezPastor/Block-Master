import React, { memo, useEffect, useState } from 'react'
import { API_URL, IMG_PATH } from '../helpers/Url';
import { CardPeli } from './CardPeli';
import { Col, Container, Row } from 'react-bootstrap';
import { ModalPelis } from './ModalPelis';
const ListPelis = memo(() => {

    const [peliculas, setPelis] = useState([])
    const [pagina, setPagina] = useState(1)

    useEffect(() => {
        getMoviesbyScroll()
    }, [pagina])

    const getMoviesbyScroll = async () => {
        const resp = await fetch(API_URL + pagina)
        const data = await resp.json()
        console.log(data);
        setPelis([...peliculas, ...data.results]);
    }

    const scrollBottom = () => {
        setPagina(pagina + 1)
    }

    window.onscroll = () => {
        const body = document.querySelector('body')
        if (document.documentElement.scrollTop + window.innerHeight >= body.scrollHeight) {
            scrollBottom();
        }
    }

    console.log(peliculas);
    return (
        <Container>
            <h1>Peliculas</h1>
            <Row>
                {
                    peliculas.map(peli => (
                        <Col>
                            <CardPeli
                                key={peli.id}
                                id={peli.id}
                                poster={IMG_PATH + peli.poster_path}
                                calificacion={peli.vote_average}
                                ver_mas={<ModalPelis
                                    key={peli.id}
                                    id={peli.id}
                                    title={peli.title}
                                    img={IMG_PATH + peli.poster_path}
                                    date={peli.release_date}
                                    rating={peli.vote_average}
                                    description={peli.overview}
                                />}
                            />
                        </Col>
                    ))
                }
            </Row>
        </Container>

    )
})

export default ListPelis