import axios from "axios";

const BASE_URL = "http://localhost:5001/transaction";

const fetchAllTransactions = (currentPage, transactionsPerPage) => {
    return axios.get(`${BASE_URL}/${currentPage}/${transactionsPerPage}`);
}
const findTransationByFromAccount = (type, search) => {
    return axios.get(`${BASE_URL}/${type}?search=${search}`)
}

const TransactionService = {
    fetchAllTransactions,
    findTransationByFromAccount,
}

export default TransactionService;