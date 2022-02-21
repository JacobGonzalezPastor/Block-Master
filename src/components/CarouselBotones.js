import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

export const CarouselBotones = () => {
  return (
      <>
          <Button variant='warning'>
              <Row>
                  <Col sm={2}>
                      <i className="bi bi-play-circle-fill"></i>
                  </Col>
                  <Col sm={10}>
                      VER AHORA
                  </Col>
              </Row>
          </Button>
          <Button size='auto' variant='outline-warning' className='mx-2'>
              <Row>
                <Col sm={2}>
                      <i className="bi bi-plus"></i>
                  </Col>
                  <Col sm={10}>
                      VER DESPUÉS
                  </Col>
              </Row>
          </Button>
      </>


  )
}