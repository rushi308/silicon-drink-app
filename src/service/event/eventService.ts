import http from "../http";

const resource = 'events';

const getEventList = (search?:string,page?:number,pageSize?:number) => {   
    return http.get(`/${resource}?page=${page}&pageSize=${pageSize}&search=${search}`).then((response) => {
        return response.data;
    })
    .catch((error) => {
        return error;
    });
};

const getEventDetail = (id:number) => {   
    return http.get(`/${resource}/${id}`).then((response) => {
        return response.data;
    })
    .catch((error) => {
        return error;
    });
};


const EventService = {
    getEventList,
    getEventDetail
};

export default EventService;