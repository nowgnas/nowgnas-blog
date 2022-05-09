import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql, Link } from "gatsby"

const Sidebar = () => {
    const data = useStaticQuery(graphql`
        query BioQuery {
            site {
                siteMetadata {
                    author {
                        name
                        summary
                    }
                    social {
                        twitter
                    }
                }
            }
        }
    `)
    const author = data.site.siteMetadata?.author
    const social = data.site.siteMetadata?.social

    return (
        <>
            <div className="sidebar">
                <Link to="/">
                    {/* <img src="../images/pingus.png" /> */}
                    <StaticImage
                        className="bio-avatar"
                        formats={["auto", "webp", "avif"]}
                        src="../images/pingus.png"
                        width={50}
                        height={50}
                        quality={95}
                        alt="Profile picture"
                    />
                </Link>
                <div className="sidebar-title">blog title</div>
                <div>{author} </div>
            </div>
        </>
    )
}
export default Sidebar
