import * as React from 'react'
import {graphql} from "gatsby";
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'
import {IData, IMdx, INodes} from "../../types/data";
import {IBlog} from "./index";

interface IBlogPostProps extends IData<IMdx<IBlog>>{}

const BlogPost: React.FC<IBlogPostProps> = ({data}) => {
    console.log(data)
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
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
                date(formatString: "MMMM D, YYYY")
            }
            id
            body
        }
    }
`

export default BlogPost