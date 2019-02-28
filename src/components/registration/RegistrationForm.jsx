import React, { Component } from 'react'
import axios from 'axios'

const baseUsers = 'https://jsonplaceholder.typicode.com/users'

export default class RegistrationForm extends Component {

    state = { user: {} }

    componentWillMount() {
        axios(baseUsers).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    save() {
        const user = this.state.user
        const url = baseUsers

        axios.post(url, user)
            .then(resp => {
                console.log('salvo com sucesso')
            })
    }

    render() {
        return (
            <div className="container">
                <div className="form">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control"
                                    name="username"
                                    placeholder="" />
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label>City</label>
                                <input type="text" className="form-control"
                                    name="city"
                                    placeholder="" />
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control"
                                    name="name"
                                    placeholder="" />
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <div className="col-12">
                                    <label>Ride in group?</label>
                                </div>
                                <div className="col-12">
                                    <label className="radio-inline">
                                        <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" /> Always
                            </label>
                                    <label className="radio-inline">
                                        <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" /> Sometimes
                            </label>
                                    <label className="radio-inline">
                                        <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" /> Never
                            </label>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label>E-mail</label>
                                <input type="e-mail" className="form-control"
                                    name="email"
                                    placeholder="" />
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <div className="col-12">
                                    <label>Days of the week</label>
                                </div>
                                <div className="col-12">
                                    <label className="checkbox-inline">
                                        <input type="checkbox" id="inlineCheckbox1" value="option1" /> Sun
                                </label>
                                    <label className="checkbox-inline">
                                        <input type="checkbox" id="inlineCheckbox2" value="option2" /> Mon
                                </label>
                                    <label className="checkbox-inline">
                                        <input type="checkbox" id="inlineCheckbox3" value="option3" /> Tue
                                </label>
                                    <label className="checkbox-inline">
                                        <input type="checkbox" id="inlineCheckbox1" value="option1" /> Wed
                                </label>
                                    <label className="checkbox-inline">
                                        <input type="checkbox" id="inlineCheckbox2" value="option2" /> Thu
                                </label>
                                    <label className="checkbox-inline">
                                        <input type="checkbox" id="inlineCheckbox3" value="option3" /> Fri
                                </label>
                                    <label className="checkbox-inline">
                                        <input type="checkbox" id="inlineCheckbox3" value="option3" /> Sat
                                </label>
                                </div>
                            </div>
                        </div>

                        <hr />
                        <div className="row">
                            <div className="col-12 d-flex justify-content-end">
                                <button className="btn btn-primary" onClick={e => this.save(e)}>
                                    Save
                                </button>
                                <button className="btn btn-secondary">
                                    Discard
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}