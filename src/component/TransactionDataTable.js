import React from 'react'
import ScaleLoader from "react-spinners/ScaleLoader";


const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

const TransactionDataTable = ({transactions, loading }) => {
  return (
      
    loading
    ? 
    <div className="d-flex justify-content-center">
        <ScaleLoader 
            color={'#1c8754'}
            css={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
         />
    </div>: 
    // <h3>Transactions </h3>
    <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>S/N</th>
                    <th>Merchant</th>
                    <th>From</th>
                    <th>Beneficiary Account</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Response code</th>
                    <th>Date</th>

                </tr>
            </thead>
            <tbody>
                {
                    transactions.map((transaction, index) => {
                        index++
                        return (
                            <tr key={index}>
                        <td>{index}</td>
                        <td>{transaction.merchantId}</td>
                        <td>{transaction.fromAccount}</td>
                        <td>{transaction.beneficiaryAccountNumber}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.transferStatus}</td>
                        <td>{transaction.cbaResponseCode}</td>
                        <td>{transaction.transactionDate}</td>

                        
                    </tr>);})
                }
            </tbody>
        </table> 

  )
}

export default TransactionDataTable