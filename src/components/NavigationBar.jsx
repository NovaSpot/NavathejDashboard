import '../styles/NavigationBar.css'
import logo from '../assets/logo.png'
import Button from './Button'

export default function NavigationBar() {
    function handleClick() {
        alert("Button clicked")
    }
    return (
        <div className="Navigation" aria-label="Main navigation">
            <div className='NameAndLogo'>
                <div className='logo'>
                    <img src={logo} alt='logo' />

                </div>
                <div className='Name'>
                    <h1>CarDhekho</h1>
                </div>
            </div>
            <div className='ButtonDiv'>
                <Button label="Employees" onClick={handleClick}></Button>
                <Button label="Upcoming" onClick={handleClick}></Button>
                <Button label="Customers" onClick={handleClick}></Button>
                <Button label="Request" onClick={handleClick}></Button>
                <Button label="Update" onClick={handleClick}></Button>
            </div>

        </div>
    )
}
