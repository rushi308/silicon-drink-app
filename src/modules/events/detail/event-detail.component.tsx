import React, { Component } from 'react';
import EventService from '../../../service/event/eventService';
import Event from "../../../interface/event";
import moment from 'moment';
import { useParams } from 'react-router-dom';

type Props = {

}

type EventDetailState = {
    eventDetail: Event;
}

let id: number;
const QueryParams = () => {
    const params: any = useParams();
    id = params.id;
    return <div></div>;
}

export class EventDetailComponent extends Component<Props, EventDetailState>  {

    constructor(props: Props) {
        super(props);
        this.state = {
            eventDetail: {
                id: 1,
                time: '',
                title: '',
                creator: { name: '', avatarUrl: '' },
                guests: [{ name: '', avatarUrl: '' }],
                type: 'BEERS',
                location: { name: '', latitude: 1, longitude: 1 },
                comments: [{ user: { name: '', avatarUrl: '' }, timestamp: '', message: '' }],
            },
        }
    }

    componentDidMount() {
        this.getEventDetail();
    }

    async getEventDetail() {
        const eventDetail = await EventService.getEventDetail(+id);
        this.setState({ eventDetail });
    }


    render() {
        const { eventDetail } = this.state;
        return <>
            <QueryParams></QueryParams>
            <div className="bg-detail-page pb-4 font-primary-color">
                <section className="text-center container">
                    <div className="row py-lg-5 font-primary-color">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">{eventDetail.title}</h1>
                        </div>
                    </div>
                </section>
                <div className="container ">
                    <div className="row">
                        <div className="col-md-7 mt-2">
                            <div className="card">
                                <div className="card-header">
                                    <label className="card-title-header">Comments</label>
                                </div>
                                <div className="card-body">
                                    {
                                        eventDetail.comments.length > 0 ?
                                            eventDetail.comments.map((comment) => {
                                                return (
                                                    <>
                                                        <div className="row">
                                                            <div className="col-md-1">
                                                                <img src={comment.user.avatarUrl} height="20" width="20" alt='' />
                                                            </div>
                                                            <div className="col-md-11">
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <b>{comment.user.name}</b>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-12 mt-2">
                                                                        <p className="comment-text">{comment.message}</p>
                                                                    </div>

                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-12 mt-2 text-align-right ">
                                                                        <p className="text-muted">{moment(comment.timestamp).format('DD-MM-YYYY HH:mm:ss')}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                            : <p>No Comments Found</p>
                                    }
                                    <div className="row">
                                        <div className="col-md-2">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-2">
                            <div className="card">
                                <div className="card-header">
                                    <label className="card-title-header">Event Details</label>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <i className="fa mt-2 fa-calendar event-detail-icon" aria-hidden="true"></i>
                                        </div>
                                        <div className="col-md-10">
                                            <span className="event-detail-label">EVENT DATE</span>
                                            <p> {moment(eventDetail.time).format('DD-MM-YYYY')}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2">
                                            <i className="fa mt-2 fa-map-marker event-detail-icon" aria-hidden="true"></i>
                                        </div>
                                        <div className="col-md-10">
                                            <span className="event-detail-label">LOCATION</span>
                                            <p> {eventDetail.location.name}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2">
                                            <i className="fa mt-2 fa-folder-open-o event-detail-icon" aria-hidden="true"></i>
                                        </div>
                                        <div className="col-md-10">
                                            <span className="event-detail-label">CATEGORY</span>
                                            <p> {eventDetail.type}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2">
                                            <i className="fa mt-2 fa-user event-detail-icon" aria-hidden="true"></i>
                                        </div>
                                        <div className="col-md-10">
                                            <span className="event-detail-label">CREATOR</span>
                                            <p><img src={eventDetail.creator.avatarUrl} alt='' /> {eventDetail.creator.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 mt-2">
                            <div className="card">
                                <div className="card-header">
                                    <label className="card-title-header">Event Guests</label>
                                </div>
                                <div className="card-body">
                                    {
                                        eventDetail.guests.length > 0 ?
                                            eventDetail.guests.map((guest) => {
                                                return <div className="row" >
                                                    <div className="col-md-2">
                                                        <img src={guest.avatarUrl} height="20" width="20" alt='' />
                                                    </div>
                                                    <div className="col-md-10">
                                                        {guest.name}
                                                    </div>
                                                </div>
                                            }) : <p>No guests</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    }
}