import './Header.css'
import logo from '../../assets/logo-no-background.svg'

const Header = () => {
    return (
        <>
            

                <div className='container header-container'>
                    <div className='row align-items-start row1'>
                        <div className='col-sm logo-col'>
                            <img id="logo" src={logo}></img>
                        </div>
                    </div>
                </div>

        
        </>
    )
}

export default Header;