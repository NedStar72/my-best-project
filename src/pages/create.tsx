import React, { Component } from 'react';
import AnimeForm from '../components/AnimeForm'
import Bootstrap from '../components/Bootstrap'
import Head from '../components/Head'
import '../style/index.scss'

export default class Create extends Component<{}> {
    render() {
        return <>
            <Bootstrap />
            <Head />
            <div className='container'>
                <h3>Добавить аниме</h3>
                <AnimeForm />
            </div>
        </>
    }
}