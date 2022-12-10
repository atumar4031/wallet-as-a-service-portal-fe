import React, {useEffect, useState} from "react";
import AccountDataTable from "../component/AccountDataTable";
import DataFiltering from "../component/Datafilters/AccountFilter";
import Pagination from "../component/Pagination";
import AccountService from "../service/AccountService";


function Account(){
    
    const[accounts, setAccounts] = useState([])
    const[loading, setLoading] = useState(false)
    const[status, setStatus] = useState(false)
    const [inSearch, setInSearch] = useState(false);
    const [reload, setReload] = useState(false);
    const[currentPage, setCurrentPage] = useState(1)
    const[accountsPerPage, setAccountsPerPage] = useState(5)
    const [searchType, setSearchType] = useState("");
    const [accountSearchInput, setAccountSearchInput] = useState("");
    const [dateRange, setDateRange] = useState({start: "", stop: ""});



    const getAllAccounts = async (offset, pageNo) =>{
        setLoading(true)
        const response = await AccountService.fetchAccounts(offset, pageNo);
        
        // const {content, pageSize, totalElements, totalPages, last} = response.data; 

        const {content} = response.data; 
        setAccounts(content);
        setLoading(false)
    }

        useEffect(()  => {
            getAllAccounts(currentPage, accountsPerPage);
        },[currentPage, accountsPerPage, status, reload])


    const handlePrevious = () => setCurrentPage((preCurrentPage) => preCurrentPage - 1);
    const handleNext = () =>  setCurrentPage((preCurrentPage) => preCurrentPage + 1);

    const handlePageSize = (number) => {
        console.log(number)
        setAccountsPerPage(number);
    }
    const handleSearch = async (type, input) => {

       const response = await AccountService.SearchAccount(type, input);
       console.log("DATA is ");
       const accountList = response.data;
       setAccounts([...accountList.data])
       setInSearch(true)
       setSearchType(type)
       setAccountSearchInput(input)
    }

    const handleChangeStatus = async (account, status) => {
        setStatus(true)
       const response = await AccountService.changeStatus(account, status);
       console.log(response);
       setStatus(false)
    }
    
    const filterByDateCreated = async (dates) => {
        const {start, stop} = dates;
        setDateRange(dates)

        if(!inSearch){
            const response = await AccountService.fetchByDateCreatedRange(start, stop);
            const {data} = response.data;
            setAccounts([...data])
        }else if(inSearch && searchType === "merchant"){
            if(start !== "" && stop !== ""){
                const response = await AccountService.findAccountsByMarchentAndDateRange(accountSearchInput, start, stop);
                const {data} = response.data;
               console.log(data)
               setAccounts([...data])   
            }
       }
    }

    const findByAccountStatus = async (status) => {
        if(!inSearch){
             const response = await AccountService.findAccountsByStatus(status);
             const {data} = response.data;
            setAccounts(data)

        }else if(inSearch && searchType === "merchant" && dateRange.start !== "" && dateRange.stop !== ""){
            const response = await AccountService.findAccountsByMarchentStatusAndDateRange(accountSearchInput, status, dateRange);
            const {data} = response.data;
           setAccounts(data)
        console.log(dateRange)

       }else if(inSearch && searchType === "merchant"){
             const response = await AccountService.findAccountsByMarchentAndStatus(accountSearchInput, status);
             const {data} = response.data;
            setAccounts(data)
        }
    }

    return (
        <section className="section--datatable container card shadow mt-5 " style={{"padding":"20px"}}>
            <DataFiltering 
                data={accounts}
                tableName={"Waas accounts"}
                handleSearch={handleSearch}
                filterByDateCreated={filterByDateCreated}
                findByAccountStatus={findByAccountStatus}
                setReload={setReload}
                
            />
            <AccountDataTable 
                accounts={accounts}
                loading={loading} 
                handleChangeStatus={handleChangeStatus}
            />

            <Pagination 
                handlePrevious={handlePrevious}
                handleNext={handleNext}
                handlePageSize={handlePageSize}
            />
        </section>

   );
}

export default Account;