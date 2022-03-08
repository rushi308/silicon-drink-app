import React, { Component } from 'react';
import EventService from '../../../service/event/eventService';
import Event from "../../../interface/event";
import BeerIcon from "../../../assets/beer-icon.png";
import CoffeeIcon from "../../../assets/coffee-icon.png";
import CokctailIcon from "../../../assets/cocktail-icon.png";
import MilkshakeIcon from "../../../assets/milkshake-icon.png";
import moment from 'moment';

import { RouteComponentProps } from 'react-router-dom';

interface RouterProps {
    history: string;
}
type Props = RouteComponentProps<RouterProps>;

type EventListState = {
    eventList: Event[];
    searchText: string,
    pageNumber: number,
    pageSize: number
}

export class EventListComponent extends Component<Props, EventListState>  {

    constructor(props: Props) {
        super(props);
        this.state = {
            eventList: [],
            searchText: '',
            pageNumber: 1,
            pageSize: 10
        }
    }

    componentDidMount() {
        this.getEventList();
    }

    async getEventList() {
        const { searchText, pageNumber, pageSize } = this.state;
        const eventList = await EventService.getEventList(searchText, pageNumber, pageSize);
        this.setState({ eventList });
    }

    renderEventLogo(type: string) {
        switch (type) {
            case 'BEERS':
                return BeerIcon;
            case 'COCKTAILS':
                return CokctailIcon;
            case 'COFFEES':
                return CoffeeIcon;
            case 'MILKSHAKES':
                return MilkshakeIcon;
        }
    }

    async searchEvents(searchText: string) {
        this.setState({ searchText });
        this.getEventList();
    }

    redirectEventDetail(id: any) {
        this.props.history.push(`/events/${id}`);
    }

    render() {
        const { eventList } = this.state;
        return <>
            <section className="text-center container">
                <div className="row py-lg-5 font-primary-color">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light ">Explore Events</h1>
                        <p className="lead text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        <input type="text" onChange={(e) => this.searchEvents(e.target.value)} className="search-input" placeholder='Search Events'></input>
                    </div>
                </div>
            </section>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">
                        {
                            eventList?.length > 0 ? eventList.map((event: Event) => {
                                return (<div className="col ">
                                    <div className="card card-border-top shadow-sm bg-theme">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-10">
                                                    <p className="card-text m-0" key={event.id}>{event.title}</p>
                                                    <span className="fw-300">By {event.creator.name}</span>
                                                </div>
                                                <div className="col-2">
                                                    <img width="50" height="50" alt='Event Logo' key={event.id} src={this.renderEventLogo(event.type)} />
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-12">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span>
                                                            <i className="fa fa-map-marker"></i> &nbsp;
                                                            {event.location.name}
                                                        </span>
                                                        <span>
                                                            <i className="fa fa-users"></i> &nbsp;
                                                            {event.guests.length}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-12">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span>
                                                            <i className="fa fa-calendar"></i> &nbsp;
                                                            {moment(event.time).format('DD-MM-YYYY')}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-12">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <small className="text-muted">
                                                            <i className="fa fa-comment"></i> &nbsp; {event.comments.length}
                                                        </small>
                                                        <div className="btn-group">
                                                            <button type="button" onClick={(e) => this.redirectEventDetail(event.id)} className="btn btn-theme-primary">View</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }) : <p className="text-center">No Events Found</p>
                        }
                    </div>
                </div>
            </div>

        </>

    }
}