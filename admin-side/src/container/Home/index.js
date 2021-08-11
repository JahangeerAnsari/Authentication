import React, { useEffect, useRef, useState } from 'react'
import { Container } from 'react-bootstrap'
import Layout from '../../components/Layout'

/**
* @author
* @function Home
**/


const Home = (props) => {
  return(
    <Layout>
      
         <Container style={{marginTop:'5rem'}} className="text-center" text>
         <h1 className="heading-text">hello from admin dash</h1>
         </Container>
      
    </Layout>
   )

 }

export default Home