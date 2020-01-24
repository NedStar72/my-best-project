import React from 'react';
import Link from 'next/link';
import Router from 'next/router'
import axios from 'axios'
import { IAnime } from '../../../server/models/Anime'
import Bootstrap from '../../components/Bootstrap'
import Head from '../../components/Head'
import '../../style/index.scss'

export default class AnimePage extends React.Component<{ id: string }, IAnime>{
    state : Readonly<IAnime> = {
        _id: "",
        title: "",
        description: ""
    }

    static getInitialProps({ query: { id } }: { query: { id: string } }) {
        return { id }
    }

    componentDidMount = () => {
        axios.get<IAnime>(`/api/anime/${this.props.id}`)
            .then(res => {
                this.setState(res.data);
            })
            .catch((reason) => console.log(reason));
    }

    delete = () => {
        if (confirm("Вы действительно хотите удалить тайтл?"))
            axios.delete<IAnime>(`/api/anime/${this.props.id}`)
                .then(() => Router.replace('/anime'))
                .catch((reason) => console.log(reason));
    }

    render = () => {
        return <>
            <Bootstrap />
            <Head />
            <div className='container'>
                <h3 className='mb-3'>{this.state.title}</h3>
                <div className='d-flex flex-row mb-3'>
                    <div className='mr-3'>
                        <Link href={`/edit/${this.props.id}`}><a className='btn btn-primary btn-sm'>Редактировать</a></Link>
                    </div>
                    <div>
                        <button className='btn btn-primary btn-sm' onClick={this.delete}>Удалить</button>
                    </div>
                </div>
                <div>
                    {this.state.description.split('\n').map((text, i) => <p key={i}>{text}</p>)}
                </div>
            </div>
        </>
    }
}
