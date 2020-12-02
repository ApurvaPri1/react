import React from 'react'
import './Sidebar.css';
// import './Abc.css'
import './Logoo.css'
import { SidebarData } from './SidebarData'

function Sidebar() {
    return (
        // <section className="bodyform">
        // <div className="logoo">
            <div className="Sidebar">
                <ul className="SidebarList">
                    {SidebarData.map((val, key) => {
                        return <li key={key}
                            className="row"
                            onClick={() => { window.location.pathname = val.link }}>
                            <div id="icon">{val.icon}</div>
                            <div id="title">{val.title}</div>
                        </li>
                    })}
                </ul>

            </div>
        // {/* </div> */}
        // </section>
    )
}

export default Sidebar

