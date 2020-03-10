import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

const createEvent = () => (
    <div className="container d-flex justify-content-center" style={{
        marginTop:`10px`,
        border:`1px solid`,
    }}>
        <form className="w-100" style={{
            marginTop:`10px`
        }}>
            <div className="d-flex">
                <div className="d-flex flex-column">
                    <div className="form-row d-flex">
                        <div className="form-group">
                            <div className="col w-100">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Event Name"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col w-100">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ticket Price USD"/>
                            </div>
                        </div>
                    </div>
                    <div className="form-row d-flex">
                        <div className="form-group">
                            <div className="col w-100">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Event Date"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col w-100">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Link to Event"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-check ml-auto">
                    <div className="d-flex flex-column">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                        <label className="form-check-label" for="defaultCheck1">
                            Create Lyft Promo Code
                        </label>
                    </div>

                    <div className="d-flex flex-column">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                        <label className="form-check-label" for="defaultCheck1">
                            Ticket Required
                        </label>
                    </div>

                    <div className="d-flex flex-column">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                        <label className="form-check-label" for="defaultCheck1">
                            Free Event
                        </label>
                    </div>

                    <div className="d-flex flex-column">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                        <label className="form-check-label" for="defaultCheck1">
                            Create Facebook Event
                        </label>
                    </div>
                </div>

            </div>


            <div className="form-row d-flex">
                <div className="form-group">
                    <div className="col w-100">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Event Location"/>
                    </div>
                </div>
            </div>

            <div className="form-row d-flex">
                <div className="form-group mr-auto">
                    <div className="col w-100">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Performer Name"/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="col w-100">
                        <input type="file" className="custom-file-input" id="customFile"/>
                        <label className="custom-file-label" for="customFile">Choose file</label>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <textarea className="w-100" rows="8" id="exampleFormControlTextarea1" placeholder="Event details/Description go here"></textarea>
            </div>

            <div className="form-row d-flex">
                <button type="button" className="btn btn-success ml-auto">Save</button>
                <button type="button" className="btn btn-danger ml-1">Cancle</button>
            </div>

        </form>
    </div>
)

export default createEvent