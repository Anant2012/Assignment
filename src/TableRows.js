function TableRows({ rowsData, deleteTableRows, handleChange }) {


    return (

        rowsData.map((data, index) => {
            const { Account, Debit, Credit } = data;
            return (
                <tr key={index}>
                    <td className="tab">

                        <select value={Account} onChange={(evnt) => (handleChange(index, evnt))}>
                            <option value="">Select Options</option>
                            <option value="Banking">Banking</option>
                            <option value="Saving">Savings</option>
                            <option value="Current">Current</option>
                        </select>
                    </td>
                    <td className="tab"><input type="number" step="0.01" value={Debit} onChange={(evnt) => (handleChange(index, evnt))} name="Debit" /> </td>
                    <td className="tab"><input type="number" step="0.01" value={Credit} onChange={(evnt) => (handleChange(index, evnt))} name="Credit" /> </td>
                    <td><button className="btn btn-outline-danger" onClick={() => (deleteTableRows(index))}>x</button></td>
                </tr>
                // </div>
            )
        })

    )

}

export default TableRows;