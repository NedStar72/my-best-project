import Link from 'next/link'
import Menu from '../components/Menu'
import "../style/index.scss"

export default () => <div className="container">
  <Menu links={[
    "/example"
  ]} />
</div>