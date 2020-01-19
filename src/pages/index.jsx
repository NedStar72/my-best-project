import Link from 'next/link'
import Menu from '../components/Menu'

export default () => (
  <ul>
    <li>
      <Menu links={[
        <Link href="/a" as="/example">
          <a>a</a>
        </Link>
      ]} />
    </li>
  </ul>
)
