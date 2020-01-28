import React from 'react'
import { IAnime } from '../../server/models/Anime'
import Link from 'next/link'

interface AnimeListProps {
    animes: IAnime[]
}

export default class AnimeList extends React.Component<AnimeListProps> {

    static getInitialProps(animes: IAnime[]) {
        return { animes }
    }

    render = () => {
        return <>
            {this.props.animes.map(a =>
                <div key={a._id} className="pt-400">
                    <Link href={`/anime/${a._id}`}><a>{a.title}</a></Link>
                </div>
            )}
        </>
    }
}