import React, { useState } from 'react';
import {NavBar, Footer} from "../components";
import { navbarData, footerData } from "../const/const";
import axios from 'axios';

function Home() {
  return (
    <div>
        <NavBar data={navbarData}/>
        <Footer data={footerData}/>

    </div>
  )
}

export default Home

