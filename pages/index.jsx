import Link from 'next/link'

export default () => (
  <ul>
    <li>
      <Link href="/a" as="/example">
        <a>a</a>
      </Link>
    </li>
  </ul>
)
