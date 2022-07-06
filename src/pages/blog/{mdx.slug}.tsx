import * as React from 'react'
import {graphql} from "gatsby";
import { MDXRenderer } from 'gatsby-plugin-mdx'
import {GatsbyImage, getImage, IGatsbyImageData} from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import {IData, IMdx, INodes} from "../../types/data";
import {IBlog} from "./index";

interface IBlogPostProps extends IData<IMdx<IBlog>>{}

const BlogPost: React.FC<IBlogPostProps> = ({data}) => {
    const image = getImage(data.mdx.frontmatter.hero_image)

    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            {image && <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt}/>}
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </Layout>
    )
}

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                name
                author
                date(formatString: "MMMM DD, YYYY")
                hero_image_alt
                hero_image_credit_link
                hero_image_credit_text
                hero_image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
            id
            body
        }
    }
`

export default BlogPost