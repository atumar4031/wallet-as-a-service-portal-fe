import axios from "axios";

const BASE_URL = "http://localhost:5001/notification";
const fetchNotifications = (currentPage, accountsPerPage) =>  {
    return axios.get(`${BASE_URL}/page?offset=${currentPage}&pageSize=${accountsPerPage}`)
}

const resetPushNotificationTrial =(reference)=>{
    return axios.patch(`${BASE_URL}/trials?reference=${reference}`)
}
const searchNotification = (debitacc) => {
    return axios.get(`${BASE_URL}/debitaccno?query=${debitacc}`);
}

const fetchByDateCreatedRange = (start, stop) => {
    if(start !== "" && stop !== ""){
        return  axios.get(`${BASE_URL}/dateRange/${start}/${stop}`);
    }else if(start !== ""){
        return  axios.get(`${BASE_URL}/date/${start}`);
    }
    else if(stop !== ""){
        return  axios.get(`${BASE_URL}/date/${stop}`);
    }
}

const findNotificationBySearchAndDateRange = (search, dateRange) =>{ // filterBySearchAndRange filterBySearchStatusAndDateRange
    const {start, stop} = dateRange;
    return axios.get(`${BASE_URL}/filterBySearchAndRange?search=${search}&start=${start}&stop=${stop}`)

}
const findNotificationsByStatus = (status) => {
    return axios.get(`${BASE_URL}/findNotificationByStatus?status=${status}`)
}


const findNotificationBySearchStatusAndDateRange = (search, status, dateRange) =>{
    const {start, stop} = dateRange;
    return axios.get(`${BASE_URL}/filterBySearchStatusAndDateRange?search=${search}&status=${status}&start=${start}&stop=${stop}`)
}

// @GetMapping(value = "/findNotificationByStatusAndSearch")
//     public ResponseEntity<?> findNotificationByStatusAndSearch(@RequestParam("status") String status,@RequestParam("search") String search){
//         return notificationService.findNotificationByStatusAndSearch(status, search);
//     }

const findNotificationByStatusAndSearch = (search, status) => {
    return axios.get(`${BASE_URL}/findNotificationByStatusAndSearch?search=${search}&status=${status}`)
}

const NotificationService ={
    fetchNotifications,
    resetPushNotificationTrial,
    searchNotification,
    fetchByDateCreatedRange,
    findNotificationsByStatus,
    findNotificationBySearchAndDateRange,
    findNotificationBySearchStatusAndDateRange,
    findNotificationByStatusAndSearch
}

export default NotificationService;