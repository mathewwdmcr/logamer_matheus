import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex justify-between items-center py-6 px-[5%] bg-gray-900'>
      <h1 className='logo p-2 text-[1.5rem] text-white cursor-pointer transition-all'>Wingslompson <span className='text-[#95ff00] p-1'>GAMER</span></h1>
    
        <nav>
            <ul>
                <li>
                    <Link to="/" className='text-white text-lg no-underline hover:text-[#95ff00] hover:underline transition-all'>Home</Link>
                </li>

                <li>
                    <Link to="/Contato" className='text-white text-lg no-underline hover:text-[#95ff00] hover:underline transition-all'>Contato</Link>
                </li>

                <li>
                    <Link to="/Jogos" className='text-white text-lg no-underline hover:text-[#95ff00] hover:underline transition-all'>Jogos</Link>
                </li>

                <li>
                    <Link to="/Login" className='text-white text-lg no-underline hover:text-[#95ff00] hover:underline transition-all'>Login</Link>
                </li>
            </ul>
        </nav>
    
    </header>
  )
}

export default Header
