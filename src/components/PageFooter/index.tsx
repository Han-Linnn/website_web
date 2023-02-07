import React from 'react';
import { history } from 'umi';
import { useEffect } from 'react';

const PageFooter: React.FC<{}> = () => {
    useEffect(() => {
    }, []);

    return (
        <>
            <footer className="footer-one iq-bg-dark iq-over-dark-90" id="contact">
                <div className="container">
                    <div className="footer-top">
                        <div className="row">
                            
                            <div className="col-lg-4 col-md-6 col-sm-6 ">

                                <p className="footer-logo"><img alt="img" src="/images/logo-blue.png" width="250" /></p>

                                <p className="footer-logo">驱动数据科学应用于业务</p>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 mt-4 mt-lg-0 mt-md-0">
                                <h4 className="footer-title">导航</h4>
                                <div className="menu-footer-menu-container">
                                    <ul className="menu">
                                        <li className="menu-item"> <a onClick={() => { history.push('/') }} aria-current="page">首页</a> </li>
                                        <li className="menu-item"> <a onClick={() => { history.push('/about') }}>关于我们</a> </li>
                                        <li className="menu-item"> <a onClick={() => { history.push('/apply') }}>申请试用</a> </li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-0 mt-4">
                                <h4 className="footer-title iq-rmt-30">联系我们</h4>
                                <ul className="iq-contact">
                                    <li> <a href="tel:+0123456789"><i className="fa fa-phone"></i><span>(+86)13435678401</span></a> </li>
                                    <li> <a
                                        href="/cdn-cgi/l/email-protection#8cfff9fcfce3fef8cce5fde2e3e2e5eff8e4e9e1e9ffa2efe3e1"><i
                                            className="fa fa-envelope"></i><span className="__cf_email__">cs@gzeloud.com</span></a>
                                    </li>
                                    <li> </li>
                                    <li> <a><i className="fa fa-home"></i><span>广州市天河区黄埔大道西365号1404</span></a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="copyright-footer">
                        <div className="pt-3 pb-3">
                            <div className="row flex-row-reverse justify-content-between">
                                <div className="col-lg-12 col-md-12 text-lg-center text-md-center text-center"> <span
                                    className="copyright">&copy; Copyright 2021 广州泷铧信息科技有限公司 | <a target="_blank" href="https://beian.miit.gov.cn">粤ICP备15006235号</ a></span> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default PageFooter;