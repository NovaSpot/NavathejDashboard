import '../styles/pages.css'

export default function Update(){
    return(
        <div className='Update-body'>
            <div className='Update-text'>
                <input type="text" placeholder="Enter vehicle Number"/>
                <input type="tel" placeholder="Enter Mobile Number" maxLength={10}/>
                <button class='Accept-Button'>Update</button>
            </div>
            
        </div>
    )
}