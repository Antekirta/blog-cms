import React from 'react'
import {SiteHeader} from "./components/SiteHeader/SiteHeader"
import {SiteFooter} from "./components/SiteFooter/SiteFooter"
import {SiteSidebar} from "./components/SiteSidebar/SiteSidebar"
import {MainMenu} from "./components/MainMenu/MainMenu"
import {HomePage} from "./pages/HomePage/HomePage"

const baseMarkup = (
    <React.Fragment>
        <SiteHeader/>

        <div className="container">
            <MainMenu></MainMenu>

            <div className="row no-gutters">
                <div className="col-8">
                    <HomePage></HomePage>
                </div>

                <div className="col-4">
                    <SiteSidebar/>
                </div>
            </div>
        </div>

        <SiteFooter/>
    </React.Fragment>
)

export {baseMarkup}
