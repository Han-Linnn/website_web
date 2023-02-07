import React, { useEffect } from 'react'
import { history } from 'umi';
import PageFooter from '@/components/PageFooter';

const simulation: React.FC<{}> = () => {

    return (
        <>
            <div className="text-left iq-breadcrumb-one iq-bg-over black ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8 text-left align-self-center">
                            <nav aria-label="breadcrumb" className="text-left">
                                <h2 className="title" style={{ fontWeight: "bold", fontSize: "40px" }}>化学模拟</h2>
                                <ol className="breadcrumb main-bg" style={{ color: "#437eeb", fontFamily: "Karla" }}>
                                    <li className="breadcrumb-item"><a onClick={() => { history.push('/') }}>首页</a></li>
                                    <li className="breadcrumb-item active">化学模拟</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 text-right wow fadeInRight"> <img alt="banner"
                            className="img-fluid float-right" src="/images/about-us/02.png" /> </div>
                    </div>
                </div>
            </div>

            <div className="main-content">
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 sidebar-service-left">
                                <div className="nav flex-column nav-pills mb-5 widget widget_nav_menu" style={{ fontSize: "17px" }}>
                                    <a className="nav-link" onClick={() => { history.push('/serve/rpaTool') }}>RPA工具</a>
                                    <a className="nav-link" onClick={() => { history.push('/serve/textMining') }}>文本挖掘</a>
                                    <a className="nav-link" onClick={() => { history.push('/serve/linearSearch') }}>垂直搜索</a>
                                    <a className="nav-link" onClick={() => { history.push('/serve/dataVisual') }}>数据可视化</a>
                                    <a className="nav-link" onClick={() => { history.push('/serve/dataManagement') }}>数据治理</a>
                                    <a className="nav-link current-menu-item" onClick={() => { history.push('/serve/simulation') }}>化学模拟</a>
                                </div>
                                <div className="widget get-file">
                                    <a onClick={() => { history.push('/serve/simulation/simulationExperience') }} style={{ fontSize: "16px" }}>
                                        <ul className="list-inline download-item">
                                            <li className="list-inline-item"> <i className="fa fa-file-pdf-o"></i><span className="ml-3">化学反应模拟在线试用</span> </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-8 col-sm-12">
                                <h3 className="text-left mb-2">计算化学模拟技术</h3>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>计算机模拟物质热力学及动力学反应过程</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p>多达数十个反应模型库，适配各种反应状态</p>
                                    </div>
                                </div>
                                <div className="row iq-pb-45">
                                    <div className="col-md-12">
                                        <div className="owl-carousel owl-loaded owl-drag" data-dots="true" data-nav="false" data-items="1"
                                            data-items-laptop="1" data-items-tab="1" data-items-mobile="1" data-items-mobile-sm="1"
                                            data-autoplay="true" data-loop="true" data-margin="30">
                                            <div className="consulting-img  text-left"> <img src="/images/about-us/04.png" alt="slider" />
                                            </div>
                                            {/* <div className="consulting-img  text-left"> <img src="/images/about-us/05.png" alt="slider" />
                                            </div>
                                            <div className="consulting-img  text-left"> <img src="/images/about-us/06.png" alt="slider" />
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3 className="text-left mb-2">化学物质及其反应方程式库</h3>
                                        <p>自动采集各种化学物质及其反应方程式，构建化学反应方程式库</p>
                                    </div>
                                </div>
                                <div className="row iq-pb-45">
                                    <div className="col-sm-12 col-lg-6 col-md-6">
                                        <div className="services-finance-img text-center"> <img width="400" height="400"
                                            src="/images/about-us/05.png" className="attachment-full" alt="" /> </div>
                                    </div>
                                    <div className="mt-5 mt-lg-0 mt-md-0 col-sm-12 col-lg-6 col-md-6" style={{ fontSize: "15px" }}>
                                        <div className="text-left " >
                                            <ul className="iq-list">
                                                <li> <i className="fa fa-check-square-o"></i> <span>替代重复繁琐的日常业务工作</span> </li>
                                                <li> <i className="fa fa-check-square-o"></i> <span>规避人工操作遗漏和错误的风险</span> </li>
                                                <li> <i className="fa fa-check-square-o"></i> <span>跨系统协同，实现不同系统的数据无缝对接</span> </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <PageFooter />
        </>
    );
}

export default simulation