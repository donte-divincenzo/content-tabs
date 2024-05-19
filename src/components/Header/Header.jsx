/* eslint-disable react/prop-types */

const Header = ({links}) => {
    

  return (
        <nav className="header-nav">
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href}>{link.text}</a>
        </li>
      ))}
    </ul>
  </nav>
  )
}

export default Header