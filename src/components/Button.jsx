import '../styles/Button.css'

export default function Button({ label, onClick ,isClick}) {
    return (
        <div>
            <button onClick={onClick} className={`Buttons ${isClick ? 'active' : ''}`} aria-current={isClick ? 'page' : undefined}>
               <h2>{label}</h2> 
            </button>
        </div>
    )

}