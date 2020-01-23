import React, { Component } from 'react';
import AnimeForm from '../../components/AnimeForm'
import '../../style/index.scss'
import Bootstrap from '../../components/Bootstrap'
import Head from '../../components/Head'

export default class Create extends Component<{ id: string }> {
    static getInitialProps({ query: { id } }: { query: { id: string } }) {
        return { id }
    }

    render() {
        return <>
            <Bootstrap />
            <Head />
            <div className='container'>
                <h3>Изменить аниме</h3>
                <div>
                    <AnimeForm id={this.props.id} />
                </div>
            </div>
        </>
    }
}