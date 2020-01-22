import React, { Component } from 'react';
import Link from 'next/link';
import AnimeForm from '../components/AnimeForm'
import '../style/index.scss'

export default class Create extends Component<{}> {
    render() {
        return (
            <div className='container'>
                <h3>Добавить аниме</h3>
                <div>
                    <h4><Link href='/'><a>/</a></Link></h4>
                    <AnimeForm />
                </div>
            </div>
        );
    }
}