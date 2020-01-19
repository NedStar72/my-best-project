import Link from 'next/link';
import { Component } from 'react';


interface MenuProps {
    links: string[]
}

export default class Menu extends Component<MenuProps> {
    render() {
        return <>
            {this.props.links.map((link, i) => <div key={i}>
                <Link href={link}>
                    <a>{link}</a>
                </Link>
            </div>)}
        </>
    }
}
