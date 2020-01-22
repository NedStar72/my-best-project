import React, { Component } from 'react';
import Link from 'next/link';
import AnimeForm from '../../components/AnimeForm'
import '../../style/index.scss'

export default class Create extends Component<{ id: string }> {
    static getInitialProps({ query: { id } }: { query: { id: string } }) {
        return { id }
    }

    render() {
        return (
            <div className='container'>
                <h3>Изменить аниме</h3>
                <div>
                    <h4><Link href="/"><a>/</a></Link></h4>
                    <AnimeForm id={this.props.id} />
                </div>
            </div>
        );
    }
}