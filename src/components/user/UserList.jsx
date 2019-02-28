import React, { Component } from 'react'
import axios from 'axios'

const baseUsers = 'https://jsonplaceholder.typicode.com/users'
const basePosts = 'https://jsonplaceholder.typicode.com/posts'
const baseAlbums = 'https://jsonplaceholder.typicode.com/albums'
const basePhotos = 'https://jsonplaceholder.typicode.com/photos'

export default class UserList extends Component {

    constructor() {
        super();
        this.state = { user: {}, post: {}, album: {}, photo: {}, list: [] }
    }

    componentWillMount() {
        axios.all([
            axios.get(baseUsers),
            axios.get(basePosts),
            axios.get(baseAlbums),
            axios.get(basePhotos)
        ])
        .then(axios.spread((userResp, postResp, albumResp, photoResp) => {
            this.setState({ list: userResp.data, post: postResp.data, album: albumResp.data, photo: photoResp.data })
        }));
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>UserName</th>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>City</th>
                        <th>Ride in group</th>
                        <th>Day of the week</th>
                        <th>Posts</th>
                        <th>Albums</th>
                        <th>Photos</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.username}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address.city}</td>
                    
                    {/* {this.state.list.map(album => {
                        return (
                            <td key={album.id}>{album.id}</td>
                        );
                    })}
                    {this.state.list.map(photo => {
                        return (
                            <td key={photo.id}>{photo.id}</td>
                        );
                    })} */}
                    {/* <td>{user.rideInGroup}</td>
                    <td>{user.dayOfTheWeek}</td>
                    */}
                    <td>
                        <button className="btn btn-warning">
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger">
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderTable()}
            </div>
        )
    }
}