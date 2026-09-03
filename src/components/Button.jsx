import '../styles/Button.css'

export default function Button({ label, onClick }) {
    return (
        <div>
            <button onClick={onClick} className="Buttons">
               <h2>{label}</h2> 
            </button>
        </div>
    )

}