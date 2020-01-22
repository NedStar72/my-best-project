import React from 'react';
import Link from 'next/link';
import axios from 'axios'
import '../../style/index.scss'
import { IAnime } from '../../../server/models/Anime'

class AnimePage extends React.Component<{ id: string }, IAnime>{
    state = {
        _id: "",
        title: "",
        description: ""
    }

    static getInitialProps({ query: { id } }: { query: { id: string } }) {
        return { id }
    }

    componentDidMount = () => {
        axios.get(`/api/anime/${this.props.id}`)
            .then(res => {
                this.setState(res.data);
            })
            .catch((reason) => console.log(reason));
    }

    render = () => {
        return <div className='container'>
            <h3>Страница аниме</h3>
            <div>
                <h4><Link href="/"><a>/</a></Link></h4>
            </div>
            <div>
                <h4><Link href={`/edit/${this.props.id}`}><a>Редактировать</a></Link></h4>
            </div>
            <div>{this.state.title}</div>
            <div>{this.state.description}</div>
        </div>
    }
}

export default AnimePage;