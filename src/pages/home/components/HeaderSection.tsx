import React from 'react';
import { history } from 'umi';
import { useEffect } from 'react';
import { Affix } from 'antd';
import '../index.less';

const HeaderSection: React.FC<{}> = () => {

    return (
        <>
            <header className="style-one style-two" id="main-header">
                <div className="container-fluid sub-header">
                    <div className="row">
                        <div className="col-auto">
                            <div className="number-info">
                                <ul className="list-inline">
                                    <li className="list-inline-item"> <a
                                        href="/cdn-cgi/l/email-protection#7605030606190402361f071819181f15021e131b13055815191b">
                                        <i className="fa fa-envelope"></i><span className="__cf_email__"
                                            data-cfemail="8cfff9fcfce3fef8cce5fde2e3e2e5eff8e4e9e1e9ffa2efe3e1">Service@gzecloud.com</span></a>
                                    </li>
                                    <li className="list-inline-item"> <a href="tel:+0123456789"> <i
                                        className="fa fa-phone"></i>(+86)13435678401</a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid main-header" id="header">
                    <div className="row">
                        <div className="col-sm-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand" onClick={() => { history.push('/') }}> <img className="img-fluid"
                                    src="/images/logo-blue.png" width="250"/> </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"><i
                                        className="ion-navicon"></i></span> </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <div className="menu-main-menu-container">
                                        <ul id="top-menu" className="navbar-nav ml-auto">
                                            <li className="menu-item">
                                                <a onClick={() => { history.push('/') }} style={{ fontSize: "16px" }}>??????</a> <i className="fa toggledrop"
                                                    aria-hidden="true"></i>
                                            </li>
                                            <li className="menu-item">
                                                <a onClick={() => { history.push('/about') }} className="isubmenu" style={{ fontSize: "16px" }}>????????????</a> <i className="fa toggledrop"></i>
                                            </li>
                                            <li className="menu-item">
                                                <a className="isubmenu" style={{ fontSize: "16px" }}>????????????</a> <i
                                                    className="fa fa-angle-down toggledrop" aria-hidden="true"></i>
                                                <ul className="sub-menu">
                                                    <li className="menu-item" > <a onClick={() => { history.push('/serve/rpaTool') }}>RPA??????</a>
                                                    </li>
                                                    <li className="menu-item" > <a onClick={() => { history.push('/serve/textMining') }}>????????????</a>
                                                    </li>
                                                    <li className="menu-item" > <a onClick={() => { history.push('/serve/linearSearch') }}>????????????</a>
                                                    </li>
                                                    <li className="menu-item" > <a onClick={() => { history.push('/serve/dataVisual') }}>???????????????</a>
                                                    </li>
                                                    <li className="menu-item" > <a onClick={() => { history.push('/serve/dataManagement') }}>????????????</a>
                                                    </li>
                                                    <li className="menu-item" > <a onClick={() => { history.push('/serve/simulation') }}>????????????</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sub-main">
                                    <nav aria-label="breadcrumb">
                                        <div className="blue-btn button"> <a onClick={() => { history.push('/apply') }} style={{ fontSize: "16px" }}>????????????</a> </div>
                                    </nav>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default HeaderSection;