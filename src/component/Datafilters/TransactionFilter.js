import React, {useState} from "react";
import {exportToExcel} from "../../service/utils/Excel"
import {GrPowerReset} from "react-icons/gr"; 


function DataFiltering ({tableName , data, handleSearch, filterByDateCreated, findByTransactionStatus, setReload}) {
    const [validate, setValidate] = useState(false);
    const [transactionType, setTransactionType] = useState("fromAccount");
    const [searchInput, setSearchInput] = useState("");
    const [createdAt, setCreatedAt] = useState({start:"",stop:""});

    const handleExcelExport = () =>{
        exportToExcel(data)
    }

    const changeSearchInput = (e) => {
        const input = e.target.value;
        setSearchInput(input)
    }
    const changeSearchType = (e) => {
        const type = e.target.dataset.tag;
        setTransactionType(type)
        setSearchInput("")
    }

    const submitSearch = (e) => {
        e.preventDefault();
        if(searchInput.trim() !== ""){
            setValidate(false)
            handleSearch(transactionType, searchInput)
        }else{
            setValidate(true)
            setSearchInput("");
        }

    }

    const changeDateRange = (e) => {
        const {name, value} = e.target;
        setCreatedAt(prev => ({...prev, [name]: value}))
    }

    const handleFilterByDateRange = (e) => {
        e.preventDefault();
       filterByDateCreated(createdAt)
    }

    const filterByTransactionStatus = (e) => {
        const status = e.target.dataset.tag;
        console.log(status)
        findByTransactionStatus(status)
    }
    const refresh =() => {
        setReload(prev => !prev)
    }





    return (
        <main>
            <h3 className="h5 text-sm mb-5" style={{"color":"#e3e7e4", "fontFamily":"Montserrat"}}>{tableName}</h3>
            <div className="d-flex mb-5  p-2 mt-3 justify-content-between align-item-center">
                <div className="d-flex">
                    <form className="input-group d-flex justify-content-center search-group" onSubmit={submitSearch}>
                    <div className="dropdown input-group-item">
                        <button className="btn btn-success dropdown-toggle no-radius"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Search by
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1"> 
                            <li><div className="dropdown-item" data-tag="fromAccount" onClick={changeSearchType} >from account</div></li>
                            <li><div className="dropdown-item" data-tag="merchant" onClick={changeSearchType} >Merchant</div></li>
                        </ul>
                    </div>
                        <input 
                            className="input-group-item input-bg"
                            placeholder={`search by ${transactionType === "fromAccount" ? "from account" : transactionType}`}
                            type={'text'}
                            name="search"
                            value={searchInput} 
                            onChange={changeSearchInput}
                        />
                            
                        <button  type="submit" className="btn btn-success no-radius"><span className="fa fa-search"></span>search</button>
                      {validate ? <div className="text-danger">input is required</div> : ""}
                    </form>
                </div>
                <div className="">
                <form className="d-inline-flex input-group filter-form" onSubmit={handleFilterByDateRange}>
                    <div className="input-group-item">
                        <input 
                            onChange={changeDateRange}
                            value={createdAt.start}
                            name="start"
                            type="date"
                            className="border-0"
                            placeholder="start date" />
                    </div>
                    <div className="input-group-item">
                        <input 
                            onChange={changeDateRange}
                            value={createdAt.stop}
                            name="stop"
                            type="date" 
                            className="border-0" 
                            placeholder="stop date"
                          />
                    </div>
                    <button type="submit" className="border-0 btn  btn btn-success no-radius">fetch</button>
                </form>
                </div>
                <div className="">
                <button className="btn btn-success dropdown-toggle mx-2 no-radius"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                            <span className="fa fa-filter"></span>
                        Filter by
                        </button>
                        
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><div className="dropdown-item" data-tag="SUCCESS" onClick={filterByTransactionStatus} >SUCCESS</div></li>
                        <li><div className="dropdown-item" data-tag="PENDING" onClick={filterByTransactionStatus} >PENDING</div></li>
                        <li><div className="dropdown-item" data-tag="FAILED" onClick={filterByTransactionStatus}>FAILED</div></li>
                    </ul>
                    <button type="button" onClick={handleExcelExport} className="btn btn-success float-right no-radius">
                        Export Data <span className="fa fa-download"></span></button>
                </div>

            </div>
            <button className="mb-3 float-end border-0" onClick={refresh}>refresh <GrPowerReset 
            
            /></button>

        </main>
    );
}

export default DataFiltering;