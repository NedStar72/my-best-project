import Link from 'next/link';
import React, { Component } from 'react';

class Menu extends Component {
    state = {
        links: [] as Link[]
    }

    constructor(props: Readonly<{ links: Link[] }>) {
        super(props);
        this.state.links = props.links;
    }

    render() {
        return <div className="container">
            {this.state.links.map((link) => <div>{link}</div>)}
        </div>
    }
}

export default Menu;
