import React from 'react'
import axios from 'axios'
import { IAnime } from '../../../../server/models/Anime'
import '../../../style/index.scss'
import Bootstrap from '../../../components/Bootstrap'
import Head from '../../../components/Head'
import AnimeList from '../../../components/AnimeList'

export interface AnimesPageState {
    animes: IAnime[],
    pages: number,
    amount: number,
    loading: boolean,
}

export interface AnimesPageProps {
    search?: string,
    page: number
}

export default class AnimesPage extends React.Component<AnimesPageProps, AnimesPageState> {
    state: AnimesPageState = {
        animes: [],
        pages: 0,
        amount: 0,
        loading: false
    }

    static getInitialProps({ query: { search, page } }: { query: { search?: string, page: number } }) {
        page = Number(page);
        // if (!page)
        //     throw Error("Page is not a number");
        return { search, page }
    }

    componentDidMount = async () => {
        await axios.get<number>('/api/anime/pages', { params: { search: this.props.search } })
            .then((res) => {
                this.setState({ amount: res.data })
                console.log('pages:', res.data);
            })
        this.loadPage(this.props.page);
        window.addEventListener('scroll', this.onScroll);
    }

    loadPage = (page: number) => {
        if (this.state.loading || this.state.pages === this.state.amount)
            return;
        this.setState({ loading: true })
        axios.get<IAnime[]>(`/api/anime/page/${page}`, { params: { search: this.props.search } })
            .then((res) => {
                this.setState((state) => {
                    return { animes: state.animes.concat(res.data), loading: false, pages: state.pages + 1 };
                })
            })
    }

    onScroll = (_e: Event) => {
        let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
        if (windowRelativeBottom < document.documentElement.clientHeight + 200)
            this.loadPage(this.state.pages + 1);
    }

    render = () => {
        return <>
            <Bootstrap />
            <Head />
            <div className='container pb-2'>
                <AnimeList animes={this.state.animes} />
            </div>
        </>
    }
}