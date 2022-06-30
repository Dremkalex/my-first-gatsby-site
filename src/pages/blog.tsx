import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import {IData, IMdx, INodes} from "../types/data";

interface IBlog {
    id: string;
    body: string;
    frontmatter: {
        title: string;
        name: string;
        author: string;
        date: string;
    };
}

interface IBlogPageProps extends IData<IMdx<INodes<IBlog>>>{}

const BlogPage: React.FC<IBlogPageProps> = ({data}) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {
                    data.allMdx.nodes.map((node) => (
                        <article key={node.id}>
                            <h2>{node.frontmatter.title}</h2>
                            <p>Posted: {node.frontmatter.date}</p>
                            <MDXRenderer>
                                {node.body}
                            </MDXRenderer>
                        </article>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
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
  }
`

export default BlogPage