import * as React from "react"

const Footer = ({ tags }) => {
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
          <li>
            {tags.map(tagName => (
              <button className="tag-button">{`#${tagName}`}</button>
            ))}
          </li>
          <li>item2</li>
        </ul>
      </nav>
    </>
  )
}

export default Footer
