import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'
import {IAllMdx, IData, INodes} from "../../types/data";
import {FileNode} from "gatsby-plugin-image/dist/src/components/hooks";

export interface IBlogFrontmatter {
    title: string;
    name: string;
    author: string;
    date: string;
    hero_image_alt: string;
    hero_image_credit_link: string;
    hero_image_credit_text: string;
    hero_image: FileNode
}

export interface IBlog {
    id: string;
    slug: string;
    body: string;
    frontmatter: IBlogFrontmatter;
}

interface IBlogPageProps extends IData<IAllMdx<INodes<IBlog>>>{}

const BlogPage: React.FC<IBlogPageProps> = ({data}) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {
                    data.allMdx.nodes.map((node) => (
                        <article key={node.id}>
                            <h2>
                                <Link to={`/blog/${node.slug}`}>
                                    {node.frontmatter.title}
                                </Link>
                            </h2>
                            <p>Posted: {node.frontmatter.date}</p>
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
      slug
    }
  }
  }
`

export default BlogPage