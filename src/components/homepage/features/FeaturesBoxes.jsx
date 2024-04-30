import React from 'react'
import { Container } from 'react-bootstrap'
import Box from './Box'

export default function FeaturesBoxes() {
  return (
    <div>
        <Container>

        <div className="row m-auto padding-y-150px px-auto">
            <div className="col-md-6">
                <Box title = "Clients" digit ={80}/>
            </div>
            <div className="col-md-6">
                <Box title = "Years Experience" digit ={5}/>
            </div>
            <div className="col-md-6">
                <Box title = "Projects" digit ={250}/>
            </div>
            <div className="col-md-6">
                <Box title = "Field Experts" digit ={45}/>
            </div>
        </div>
        </Container>
    </div>
  )
}