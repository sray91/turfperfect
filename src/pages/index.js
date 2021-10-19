import * as React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <StaticImage
        alt="Turf Perfect Charleston Logo"
        src="../images/logo.jpeg"
      />
      <p>Welcome to Turf Perfect Charleston!</p>
      <p>We are the premier turf integrator in the Lowcountry!</p>
    </Layout>
  )
}

export default IndexPage