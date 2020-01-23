import Link from 'next/link';
import { Component } from 'react';

interface MenuProps {
    links: string[]
}

export default class extends Component<MenuProps> {
    render() {
        return <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
                <Link href='/'><a className="navbar-brand">shiki</a></Link>
                    <ul className="navbar-nav mr-auto">
                        {this.props.links.map((link, i) =>
                            <li className="nav-item" key={i}>
                                <Link href={link}><a className="nav-link">{link}</a></Link>
                            </li>
                        )}
                    </ul>
            </nav>
        </>
    }
}
