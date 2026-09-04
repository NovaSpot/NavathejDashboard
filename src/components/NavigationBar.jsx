import '../styles/NavigationBar.css'
import logo from '../assets/logo.png'
import Button from './Button'

export default function NavigationBar({ activePage, onPageChange }) {
    return (
        <div>
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
                <Button label="Employees" onClick={() => onPageChange('Employees')} isClick={activePage === 'Employees'} />
                <Button label="Upcoming" onClick={() => onPageChange('Upcoming')} isClick={activePage === 'Upcoming'} />
                <Button label="Customers" onClick={() => onPageChange('Customers')} isClick={activePage === 'Customers'} />
                <Button label="Request" onClick={() => onPageChange('Request')} isClick={activePage === 'Request'} />
                <Button label="Update" onClick={() => onPageChange('Update')} isClick={activePage === 'Update'} />
            </div>

        </div>
        </div>
    )
}
