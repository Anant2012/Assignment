
import { useState } from "react";
import TableRows from "./TableRows"
function Addrow() {

    const [rowsData, setRowsData] = useState([]);
    const [debitsum, setdebitsum] = useState(0.00);
    const [creditsum, setcreditsum] = useState(0.00);
    const addTableRows = () => {

        const rowsInput = {
            Account: '',
            Debit: '',
            Credit: ''
        }
        setRowsData([...rowsData, rowsInput])

    }
    const deleteTableRows = (index) => {
        const rows = [...rowsData];
      
        rows.splice(index, 1);
        setRowsData(rows);
        let total=0;
        let total1 = 0;
        for(let i=0;i<rows.length;i++)
        {
                    total+=parseFloat(rowsData[i].Debit);
                    total1 += parseFloat(rowsData[i].Credit);
        }
        setdebitsum(total)
        setcreditsum(total1)
        
        
        
        
      
    }

    const handleChange = (index, evnt) => {

        const { name, value } = evnt.target;
        const rowsInput = [...rowsData];
        rowsInput[index][name] = value;
        setRowsData(rowsInput);
        setdebitsum(sum)
        setcreditsum(sum1)
       
        
    }
    const sum=()=>{let total=0;
     
        for(let i=0;i<rowsData.length;i++)
        {if(rowsData[i].Debit==="") total +=0;
        else
                    total+=parseFloat(rowsData[i].Debit);
        }
        return total;
    }
    
    const sum1 = () => {
        let total1 = 0;

        for (let i = 0; i < rowsData.length; i++) {
            if (rowsData[i].Credit === "") total1 += 0;
            else
                total1 += parseFloat(rowsData[i].Credit);
        }
        return total1;
    }
  
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8">

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Accounts</th>
                                <th>Debit Account</th>
                                <th>Credit Account</th>
                            </tr>

                        </thead>
                        <tbody>

                            <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange}  />

                        </tbody>
                        <th><button className="btn btn-outline-success" onClick={addTableRows} >+Add rows</button></th>
                        <p>Total Debit Amount: {debitsum === 'Nan' ? 0 : debitsum}   </p>
                        <p>Total Credit Amount: {creditsum === 'Nan' ? 0 : creditsum}  </p>
                    </table>

                </div>
                <div className="col-sm-4">

                </div>
            </div>
        </div>
    )

}
export default Addrow;