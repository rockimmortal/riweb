import React, { Component } from 'react';
import axios from 'axios'

class createEvent extends Component {
    state = {
        summary: "Test Post",
        location: "Enter Event Location here",
        description: "If it work it works",
        startDate: "2020-05-06T09:30:00-08:00",
        endDate: "2020-05-08T10:00:00-08:00",
        displayComp: true
    }

    handleSummary = (data) => {
        this.setState({
            summary: data.target.value
        });
    }
    handleLocation = (data) => {
        this.setState({
            location: data.target.value
        });
    }
    handleDescription = (data) => {
        this.setState({
            description: data.target.value
        });
    }
    handleStart = (data) => {
        this.setState({
            startDate: data.target.value + ":00-07:00"
        });
    }
    handleEnd = (data) => {
        this.setState({
            endDate: data.target.value + ":00-07:00"
        });
    }

    newEvent = () => {
        this.setState({
            displayComp: true
        });
        // console.log(this.state.displayComp);
    }
    manageEvent = () => {
        this.setState({
            displayComp: false
        });
        // console.log(this.state.displayComp);
    }

    postDataHandler = () => {
        let send = {
            summary: this.state.summary,
            location: this.state.location,
            description: this.state.description,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        }
        axios.post('https://jc89gggsc8.execute-api.us-west-2.amazonaws.com/dev/event/create', send)
            .then(response => {
                console.log(response);
            });
        // console.log(this.state.endDate);
    }

    componentWillMount(){
        axios.get('https://jc89gggsc8.execute-api.us-west-2.amazonaws.com/dev/event/search')
            .then(response => {
                console.log(response);
            });
    }

    render() {
        let disp = null;
        if(this.state.displayComp){
            disp = (<div className="container d-flex justify-content-center" style={{
                marginTop: `10px`,
                border: `1px solid`,
            }}>
                <form className="w-100" style={{
                    marginTop: `10px`
                }}>
                    <div className="d-flex">
                        <div className="d-flex flex-column">
                            <div className="form-row d-flex">
                                <div className="form-group">
                                    <div className="col w-100">
                                        <input type="text" className="form-control" id="eventName" placeholder="Event Name" onChange={this.handleSummary} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col w-100">
                                        <input type="text" className="form-control" id="location" placeholder="Location" onChange={this.handleLocation} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row d-flex">
                                <div className="form-group">
                                    <div className="col w-100">
                                        <input type="datetime-local" className="form-control" id="exampleInputEmail3" placeholder="Start Date" onChange={this.handleStart} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col w-100">
                                        <input type="datetime-local" className="form-control" id="exampleInputEmail3" placeholder="End Date" onChange={this.handleEnd} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-check ml-auto">
                            <div className="d-flex flex-column">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label className="form-check-label" for="defaultCheck1">
                                    Create Lyft Promo Code
                        </label>
                            </div>

                            <div className="d-flex flex-column">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label className="form-check-label" for="defaultCheck1">
                                    Ticket Required
                        </label>
                            </div>

                            <div className="d-flex flex-column">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label className="form-check-label" for="defaultCheck1">
                                    Free Event
                        </label>
                            </div>

                            <div className="d-flex flex-column">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label className="form-check-label" for="defaultCheck1">
                                    Create Facebook Event
                        </label>
                            </div>
                        </div>

                    </div>

                    <div className="form-row d-flex">
                        <div className="form-group mr-auto">
                            <div className="col w-100">
                                <input type="email" className="form-control" id="exampleInputEmail7" aria-describedby="emailHelp" placeholder="Performer Name" />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col w-100">
                                <input type="file" className="custom-file-input" id="customFile" />
                                <label className="custom-file-label" for="customFile">Choose file</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <textarea className="w-100" rows="8" id="description" placeholder="Event details/Description go here" onChange={this.handleDescription}></textarea>
                    </div>

                    <div className="form-row d-flex">
                        <button type="button" className="btn btn-success ml-auto" onClick={this.postDataHandler}>Save</button>
                        <button type="button" className="btn btn-danger ml-1">Cancel</button>
                    </div>

                </form>
            </div>)
        }else{
            disp=(<div>hello world</div>)
        }


        return (
            <div>
                <div style={{
                    marginTop: `10vh`,
                    textAlign: `center`,
                }}>

                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <label className="btn btn-secondary active">
                            <input type="radio" name="options" id="option1" autocomplete="off" onClick={this.newEvent}/> New Event
                        </label>
                        <label className="btn btn-secondary">
                            <input type="radio" name="options" id="option2" autocomplete="off" onClick={this.manageEvent}/> Manage Event
                        </label>
                    </div>
                </div>
                {disp}
            </div>)
    }
}

export default createEvent;
