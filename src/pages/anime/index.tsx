import React from 'react'
import axios from 'axios'
import { IAnime } from '../../../server/models/Anime'
import Link from 'next/link'

export default class AnimeMainPage extends React.Component<{}, { animes: IAnime[] }> {
    state = {
        animes: [] as IAnime[]
    }

    componentDidMount = () => {
        axios.get('/api/anime')
            .then((res) => {
                this.setState({ animes: res.data })
            })
    }

    render = () => {
        return <div className='container'>
            <div>
                <Link href='/'><a>/</a></Link>
            </div>
            {this.state.animes.map((a, i) =>
                <div key={i}>
                    <Link href={`/anime/${a._id}`}><a>{a.title}</a></Link>
                </div>
            )}
        </div>
    }
}