import React, { useState, useEffect} from 'react'
import NotificationFilter from "../component/Datafilters/NotificationFilter"
import Pagination from "../component/Pagination"
import NotificationDataTable from "../component/NotificationDataTable"
import NotificationService from '../service/NotificationService'

const Notification = ()=> {
    const[notifications, setNotifications] = useState([])
    const[loading, setLoading] = useState(false)
    const[inSearch, setInSearch] = useState(false)
    const [reload, setReload] = useState(false);

    const[trialLoader, setTrialLoader] = useState("")
    const[currentPage, setCurrentPage] = useState(0)
    const[notificationsPerPage, setNotificationsPerPage] = useState(5)
    const [searchInput, setSearchInput] = useState("");
    const [dateRange, setDateRange] = useState({start: "", stop: ""});

    const handlePrevious = () => setCurrentPage((preCurrentPage) => preCurrentPage - 1);
    const handleNext = () =>  setCurrentPage((preCurrentPage) => preCurrentPage + 1);

    const handlePageSize = (number) => {
        console.log(number)
        setNotificationsPerPage(number);
    }

    const fetchNotifications = async (number, size) => {
        setLoading(true)
        const response = await NotificationService.fetchNotifications(number, size);
        const {content} = response.data;
        setNotifications(content)
        setLoading(false)
    }

    useEffect(() => {
        fetchNotifications(currentPage, notificationsPerPage);
    },[currentPage, notificationsPerPage,reload])

    const resetTrials = async (reference) => {
        setTrialLoader(reference)
        const response = await NotificationService.resetPushNotificationTrial(reference)
        const {object, status} = response.data

        if(status === "OK"){

            const updatedNotifications = notifications.map(notfs => object.cbaReference === notfs.cbaReference ? object : notfs);
            
            setNotifications(updatedNotifications)
        }
        setTrialLoader("")
    }

    const handleSearch = async (input) => {

        const response = await NotificationService.searchNotification(input);
        const notificationList = response.data;

        setNotifications([...notificationList.data])
        setInSearch(true)
        setSearchInput(input)
     }

     const filterByDateCreated = async (dates) => {
        const {start, stop} = dates;
        setDateRange(dates)

        if(!inSearch){
            const response = await NotificationService.fetchByDateCreatedRange(start, stop);
            const {data} = response.data;
            setNotifications([...data]);
            console.log(data)
        }else{
            if(start !== "" && stop !== ""){
             
                const response = await NotificationService.findNotificationBySearchAndDateRange(searchInput, dates);
                const {data} = response.data;
                setNotifications([...data])    
            }
       }
    }

    const findByNotificationStatus = async (status) => {
        if(!inSearch){
             const response = await NotificationService.findNotificationsByStatus(status);
             const {data} = response.data;
             setNotifications(data)

        }else {
            if(dateRange.start === "" && dateRange.stop === ""){
                console.log("inSearch not date")
                const response = await NotificationService.findNotificationByStatusAndSearch(searchInput, status);
                const {data} = response.data;
                setNotifications(data)
                

            }else{
                const response = await NotificationService.findNotificationBySearchStatusAndDateRange(searchInput, status, dateRange);
                const {data} = response.data;
                setNotifications(data)
            }
        } 
    }




  return (
    <section className="section--datatable container card shadow mt-5 " style={{"padding":"20px"}}>
        
    <NotificationFilter 
        tableName={"Notification"}
        data={notifications}
        handleSearch={handleSearch}
        filterByDateCreated={filterByDateCreated}
        findByNotificationStatus={findByNotificationStatus}
        setReload={setReload}
        />

    <NotificationDataTable 
        notifications={notifications}
        loading ={loading}
        resetTrials={resetTrials}
        trialLoader={trialLoader}
    />

    <Pagination 
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        handlePageSize={handlePageSize}
    />
</section>
  )
}

export default Notification