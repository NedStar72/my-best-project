import React from 'react'
import axios from 'axios'
import { IAnime } from '../../../server/models/Anime'
import Link from 'next/link'
import '../../style/index.scss'
import Bootstrap from '../../components/Bootstrap'
import Head from '../../components/Head'

interface IAnimeList { animes: IAnime[] }

export default class AnimeMainPage extends React.Component<{}, IAnimeList> {
    state: IAnimeList = {
        animes: []
    }

    componentDidMount = () => {
        axios.get<IAnime[]>('/api/anime')
            .then((res) => {
                this.setState({ animes: res.data })
            })
    }

    render = () => {
        return <>
            <Bootstrap />
            <Head />
            <div className='container'>
                {this.state.animes.map((a, i) =>
                    <div key={i}>
                        <Link href={`/anime/${a._id}`}><a>{a.title}</a></Link>
                    </div>
                )}
            </div>
        </>
    }
}