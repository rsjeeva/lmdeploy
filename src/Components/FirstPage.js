import React, { useEffect, useState } from "react";
import classes from '../UI/FirstPage.module.css';
import {Link} from 'react-router-dom';

function FirstPage(){


    return <div className={classes.firstpage}>
        <div className={classes.sidebar}>
            <ul>
                <Link className={classes.linkstyle} to='/firstpage/admin'>Admin</Link>
                <Link className={classes.linkstyle} to='firstpage/student'>Student</Link>
            </ul>
        </div>
    </div>
}

export default FirstPage;