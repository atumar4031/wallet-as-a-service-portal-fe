import * as FileSaver from "file-saver";


import * as XLSX from "xlsx";



export const exportToExcel = (data)=> {
    console.log(data);
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = {Sheets:{data:ws}, SheetNames:["data"]}
    const excelBuffer = XLSX.write(wb, {bookType:"xlsx", type:"array"});
    const excelData = new Blob([excelBuffer], {type:"xlsx"});

    FileSaver.saveAs(excelData,"accounts.xlsx")
}