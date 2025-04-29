import React from 'react'
import '../index.css'
import Cat_1_DM from './Cat_1_DM'
import Cat_2_DM from './Cat_2_DM'
import Cat_3_DM from './Cat_3_DM'

function Navbar() {
  return (
    <nav>
        <div class="gap-2 flex justify-between">
            <Cat_1_DM/>
            <Cat_2_DM/>
            <Cat_3_DM/>     
        </div>
    </nav>
  )
}

export default Navbar