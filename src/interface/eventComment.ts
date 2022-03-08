import User from "./user";

interface EventComment {
    user: User;
    timestamp: string;
    message: string;
}

export default EventComment;