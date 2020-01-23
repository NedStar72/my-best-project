import React, { Component } from 'react';
import axios from 'axios'
import Router from 'next/router'
import '../style/index.scss'
import { IAnime } from '../../server/models/Anime'

export default class extends Component<{ id?: string }, IAnime> {
    state = {
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
        this.state.title = e.target.value;
    }

    onDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.state.description = e.target.value;
    }

    onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { title, description } = this.state;

        if (this.props.id === undefined)
            axios.post('/api/anime', { title, description })
                .then((res) => Router.replace(`/anime/${res.data._id}`))
                .catch(reason => console.log(reason));
        else
            axios.put(`/api/anime/${this.props.id}`, { title, description })
                .then((res) => Router.replace(`/anime/${res.data._id}`))
                .catch(reason => console.log(reason));

    }

    render = () => {
        const { title, description } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    <label htmlFor='title' className='block'>Название:</label>
                    <input type='text' name='title' defaultValue={title} placeholder='Название' onChange={this.onTitleChange} />
                </div>
                <div>
                    <label htmlFor='description' className='block'>Описание:</label>
                    <textarea name='description' placeholder='Описание' cols={80} rows={3} defaultValue={description} onChange={this.onDescriptionChange} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        );
    }
}