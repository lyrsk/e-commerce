import React from 'react'
import style from './css/style.css'

function NavBar(){
    return(
        <header>
            <ul className='lista'>
                <li><button>Home</button></li>
                <li><button>Productos</button></li>
                <li><button>Nosotros</button></li>
                <li><button>Contacto</button></li>
            </ul>
        </header>
    )
}

export default NavBar