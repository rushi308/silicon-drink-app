import EventComment from "./eventComment";
import EventLocation from "./eventLocation";
import User from "./user";

interface Event {
    id: number;
    time: string;
    title: string;
    creator: User;
    guests: User[];
    type: 'BEERS' | 'COCKTAILS' | 'COFFEES' | 'MILKSHAKES';
    location: EventLocation;
    comments: EventComment[];
}

export default Event;