import '../styles/pages.css'

export default function Employee(){
    const user = [
        {
            id:1,name:"Sruthin",action:"hello"
        },
        {
            id:2,name:"Anil",action:"hello"
        },
        {
            id:3,name:"Kiran",action:"hello"
        },
        {
            id:4,name:"Rahul",action:"hello"
        }
    ]
    function onClick(){
        alert("Deleted")
    }
    return(<div>
         
        <div>
            <table>
            <thead>
                <tr>
                    <th>
                        Id
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Action
                    </th>
                </tr>
    
            </thead>
            <tbody>
                {user.map((employee)=>(
                    <tr key={employee.id}>
                        <td>
                            {employee.id}
                        </td>
                        <td>
                            {employee.name}
                        </td>
                        <td>
                            <button type='button' className='delete' onClick={onClick}>Delete</button>
                        </td>

                    </tr>
                ))}
            </tbody>
        </table>

        </div>
    </div>
       
        
    )
}