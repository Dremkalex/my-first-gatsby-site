import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>I'm making this by following the Gatsby Tutorial.</p>
            <StaticImage
                alt="Cavalier - gift for Osip"
                src="../images/cavalier-king-charles-spaniel-dog.jpg"
            />
        </Layout>
    )
}

export default IndexPage