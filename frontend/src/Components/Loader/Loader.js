import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {motion} from 'framer-motion'
import Logo from '../../Images/logotip.png'
import './Loader.css'
const Loader = () => {
    return (
        <motion.div className='loader'
                    animate={{
                        x: 0,
                        // backgroundColor: 'rgba(35, 150, 110, 0.3)',
                        boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
                        position: 'fixed'
                    }}
                    transition={{repeat: Infinity, duration: 1}}
        >
            <div className='mx-[15%] md:mx-auto'>
            <div class="loader">
  <div class="justify-content jimu-primary-loading"></div>
</div>
            </div>
        </motion.div>
    )
}

export default Loader