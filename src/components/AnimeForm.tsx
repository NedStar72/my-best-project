import React, { Component } from 'react';
import axios from 'axios'
import Router from 'next/router'
import '../style/index.scss'
import { IAnime } from '../../server/models/Anime'

export default class extends Component<{ id?: string }, IAnime> {
    state : Readonly<IAnime> = {
        _id: '',
        title: '',
        description: ''
    }

    componentDidMount = () => {
        if (this.props.id === undefined)
            return;
        axios.get(`/api/anime/${this.props.id}`)
            .then((res) => this.setState(res.data))
            .catch(reason => console.log(reason));
    }

    onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ title: e.target.value });
    }

    onDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({ description: e.target.value });
    }

    onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { title, description } = this.state;

        if (this.props.id === undefined)
            axios.post<IAnime>('/api/anime', { title, description })
                .then((res) => Router.replace(`/anime/${res.data._id}`))
                .catch(reason => console.log(reason));
        else
            axios.put<IAnime>(`/api/anime/${this.props.id}`, { title, description })
                .then((res) => Router.replace(`/anime/${res.data._id}`))
                .catch(reason => console.log(reason));

    }

    render = () => {
        const { title, description } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <div className='mb-4'>
                    <label htmlFor='title' className='block'>Название</label>
                    <input className='form-control' type='text' name='title' defaultValue={title} placeholder='Название' onChange={this.onTitleChange} />
                </div>
                <div className='mb-4'>
                    <label htmlFor='description' className='block'>Описание</label>
                    <textarea className='form-control' name='description' placeholder='Описание' cols={80} rows={3} defaultValue={description} onChange={this.onDescriptionChange} />
                </div>
                <button className='btn btn-primary' type='submit'>Submit</button>
            </form>
        );
    }
}