import  React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";




const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

 

const AccountDataTable =  ({accounts, loading, handleChangeStatus}) =>  {

    const changeAccountStatus = (e) => {
        const {account, status} = e.target.dataset;      
        handleChangeStatus(account, status)
    }

    return(
        
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
        </div>
        :  <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>N/S</th>
                    <th>Account name</th>
                    <th>Merchant</th>
                    <th>Account number</th>
                    <th>Status</th>
                    <th>date</th>
                    <th>time</th>
                    <th>Action </th>
                </tr>
            </thead>
            <tbody>
                {
                    accounts.map((account, index) => {
                        index++
                        return (
                            <tr key={index}>
                        <td>{index}</td>
                        <td>{account.accountName}</td>
                        <td>{account.merchant.toUpperCase()}</td>
                        <td>{account.accountNumber}</td>
                        <td>{account.accountStatus}</td>
                        <td>{new Date(account.createdAt).toLocaleDateString()}</td>
                        <td>{new Date(account.createdAt).toLocaleTimeString()}</td>
                        
                        <td className="d-flex justify-content-center">
                            <div className="dropdown">
                                <button className="btn dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <li><div className="dropdown-item" data-account={account.accountNumber} data-status={'ACTIVE'} onClick={changeAccountStatus} >Active</div></li>
                                    <li><div className="dropdown-item" data-account={account.accountNumber} data-status={'SUSPENDED'} onClick={changeAccountStatus} >Suspended</div></li>
                                </ul>
                            </div>
                        </td>
                    </tr>);})
                }
            </tbody>
        </table>   
             
    );
}

export default AccountDataTable;