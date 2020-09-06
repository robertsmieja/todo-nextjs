import Link from "next/link"

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/todo">
          <a>Todos</a>
        </Link>
      </li>
      <li>
        <Link href="/user">
          <a>Users</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 16px;
      }
    `}</style>
  </nav>
)

export default Nav
