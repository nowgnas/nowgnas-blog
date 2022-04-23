import * as React from "react"

const Footer = () => {
  return (
    <>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>item1</li>
          <li>item2</li>
        </ul>
      </nav>
    </>
  )
}

export default Footer
