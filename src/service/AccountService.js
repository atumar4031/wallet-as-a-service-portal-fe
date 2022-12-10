import axios from "axios";

const BASE_URL = "http://localhost:5001/account";
    const fetchAccounts =  (currentPage, accountsPerPage) =>{
        return  axios.get(BASE_URL+"/page?offset="+ currentPage +"&pageSize="+ accountsPerPage);
    }

    const SearchAccount = (searchType, queryString) => {
        return axios.get(`${BASE_URL}/${searchType}?query=${queryString}`);
    }

    const changeStatus =(account, status) => {
        const accountStatusDto = {
            accountNumber: account,
            status: status
        }
        return axios.patch(`${BASE_URL}/status`, accountStatusDto);
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

    const findAccountsByStatus = (status) => {
        return  axios.get(`${BASE_URL}/status/${status}`);
    }

    const findAccountsByMarchentAndStatus = (accountType, status) => {
        return axios.get(`${BASE_URL}/filterByStatus?merchant=${accountType}&status=${status}`)
    }

    const findAccountsByMarchentAndDateRange = (accountType, start, stop) => {
        return axios.get(`${BASE_URL}/filterByRange?merchant=${accountType}&start=${start}&stop=${stop}`)
    }

    const findAccountsByMarchentStatusAndDateRange =(accountType, status, dateRange) => {
        const {start, stop} = dateRange;
        return axios.get(`${BASE_URL}/filterByMerchantStatusAndDateRange?merchant=${accountType}&status=${status}&start=${start}&stop=${stop}`)
    }

    const AccountService ={
        fetchAccounts,
        SearchAccount,
        changeStatus,
        fetchByDateCreatedRange,
        findAccountsByStatus,
        findAccountsByMarchentAndStatus,
        findAccountsByMarchentAndDateRange,
        findAccountsByMarchentStatusAndDateRange
    }

export default  AccountService;