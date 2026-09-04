export default function Customers(){
    const data = [
        {
            vehicle_no:"KL58C5555",
            Owner_name:"Navathej",
            insuance_date:"19-10-2027",
            insurance_company:"Angne onnumilla",
            mobile_number:"55555555",
            action:"hhhhhh"
         }
    ]
        return(
            <div>
                <table >
                    <thead>
                    <tr>
                        <th>
                            Vehicle Number
                        </th>
                        <th>
                            Owner Name
                        </th>
                        <th>
                            Insurance Expiry
                        </th>
                        <th>
                            Insurance Company
                        </th>
                        <th>
                            Mobile Number
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((upcoming) => (
                        <tr key={upcoming.vehicle_no}>
                            <td>{upcoming.vehicle_no}</td>
                            <td>{upcoming.Owner_name}</td>
                            <td>{upcoming.insuance_date}</td>
                            <td>{upcoming.insurance_company}</td>
                            <td>{upcoming.mobile_number}</td>
                            <td>
                                <div className='Table-content'>
                                <button className='delete'>Delete</button>
                                </div>
       
                            </td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
        )
}