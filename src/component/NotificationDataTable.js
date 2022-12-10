import React from 'react'
import ScaleLoader from "react-spinners/ScaleLoader";
import { LineWave } from "react-loader-spinner";
import {GrPowerReset} from "react-icons/gr";



const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
const NotificationDataTable = ({notifications, loading, resetTrials, trialLoader}) => {

    const handleResetTrials = (e) => {
        const {reference} = e.target.dataset;
        console.log(reference);
        resetTrials(reference)
    }


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
    </div>
    :  <table className="table table-striped table-bordered">
{/* 
"id": 1,
            "merchantId": null,
            "creditAccount": "1100014501",
            "debitAccount": "1200012782",
            "amount": 100.0,
            "narration": "MONO/CREDIT_WALLET/1100012703/WAAS20221121094101",
            "cbaReference": "2202031867",
            "transactionDate": "2022-11-21T23:00:00.000+00:00",
            "status": "PENDING",
            "lastNotificationTime": "2022-11-21T23:00:00.000+00:00",
            "notificationResponse": null,
            "notificationTrials": 0,
            "senderBankCode": null,
            "senderBankName": null,
            "senderAccountName": null,
            "senderAccountNumber": null,
            "sessionId": null,
            "nodeId": "10.185.223.24" */}
        <thead>
            <tr>
                <th>S/N</th>
                <th>debit bank</th>
                <th>debit account</th>
                <th>credit account</th>
                <th> date</th>
                <th>time</th>
                <th>status</th>
                <th>trials</th>

            </tr>
        </thead>
        <tbody>
            {
                notifications.map((notification, index) => {
                    index++
                    return (
                        <tr key={index}>
                        <td>{index}</td>
                        <td>{notification.senderBankName}</td>
                        <td>{notification.debitAccount}</td>
                        <td>{notification.creditAccount}</td>
                        <td>{new Date(notification.transactionDate).toLocaleDateString()}</td>
                        <td>{new Date(notification.transactionDate).toLocaleTimeString()}</td>
                        <td>{notification.status}</td>
                        <td>
                            {
                                trialLoader === notification.cbaReference ? 
                                
                                <LineWave
                                height="50"
                                width="70"
                                color="#4fa94d"
                                visible={true}
                                ariaLabel='falling-lines-loading'
                              />
                               :
                            <div className='trials-container p-2 d-flex justify-content-evenly align-items-center'>
                                <div className=''>{notification.notificationTrials}</div>
                                {notification.notificationTrials < 10 ? "" :<span className='shadow-sm p-1'><GrPowerReset onClick={handleResetTrials} data-reference={notification.cbaReference} 
                                 className='reset-trials' /></span>}</div>
                                }
                            
                        </td>

                    </tr>
                    );})
            }
        </tbody>
    </table> 
  )
}

export default NotificationDataTable
