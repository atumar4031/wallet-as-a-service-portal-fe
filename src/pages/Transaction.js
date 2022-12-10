import React, {useEffect , useState } from "react";
import DataFiltering from "../component/Datafilters/TransactionFilter";
import TransactionService from "../service/TransactionService";
import TransactionDataTable from "../component/TransactionDataTable"
import Pagination from "../component/Pagination"

const  Transaction = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [inSearch, setInSearch] = useState(false);
    const [searchType, setSearchType] = useState("");
    const[currentPage, setCurrentPage] = useState(1)
    const[transactionPerPage, setTransactionPerPage] = useState(5)

    const getAllTarnsactions = async (offset, pageNo) =>{
        setLoading(true)
        const response = await TransactionService.fetchAllTransactions(offset, pageNo);
        const {content} = response.data; 
        console.log(content)
        setTransactions(content);
        setLoading(false)
    }

    useEffect(() => {
        getAllTarnsactions(currentPage,transactionPerPage);
    }, [currentPage, transactionPerPage])

    const handlePrevious = () => setCurrentPage((preCurrentPage) => preCurrentPage - 1);
    const handleNext = () =>  setCurrentPage((preCurrentPage) => preCurrentPage + 1);

    const handlePageSize = (number) => {
        console.log(number)
        setTransactionPerPage(number);
    }

    const handleSearch = async (type, search) =>{
        const response = await TransactionService.findTransationByFromAccount(type, search); 
        const {data} = response.data;
        setTransactions(data);
        setInSearch(true)
        setSearchType(type)

        
    //    const response = await AccountService.SearchAccount(type, input);
    //    console.log("DATA is ");
    //    const accountList = response.data;
    //    setAccounts([...accountList.data])
    //    setInSearch(true)
    //    setSearchType(type)
        
    }

    return (
        <section className="container card shadow mt-5 " style={{"padding":"20px"}}>
                 <DataFiltering 
                    tableName={"transaction"}
                    data={transactions}
                    isTransaction={true}
                    handleSearch={handleSearch}
            />
            <TransactionDataTable
                transactions={transactions}
                loading={loading}
            />
            <Pagination 
                handlePrevious={handlePrevious}
                handleNext={handleNext}
                handlePageSize={handlePageSize}
            />
        </section>

   );
}

export default Transaction;