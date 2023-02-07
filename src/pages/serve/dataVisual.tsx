import React, { useEffect } from 'react'
import { history } from 'umi';
import PageFooter from '@/components/PageFooter';

const dataVisual: React.FC<{}> = () => {

    return (
        <>
            <div className="text-left iq-breadcrumb-one iq-bg-over black ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8 text-left align-self-center">
                            <nav aria-label="breadcrumb" className="text-left">
                                <h2 className="title" style={{ fontWeight: "bold", fontSize: "40px" }}>数据可视化</h2>
                                <ol className="breadcrumb main-bg" style={{ color: "#437eeb", fontFamily: "Karla" }}>
                                    <li className="breadcrumb-item"><a onClick={() => { history.push('/') }} >首页</a></li>
                                    <li className="breadcrumb-item active">数据可视化</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 text-right wow fadeInRight start_animation animated"> 
                            <img alt="banner" className="img-fluid float-right" src="/images/about-us/03.png" /> 
                        </div>
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
                                    <a className="nav-link current-menu-item" onClick={() => { history.push('/serve/dataVisual') }}>数据可视化</a>
                                    <a className="nav-link" onClick={() => { history.push('/serve/dataManagement') }}>数据治理</a>
                                    <a className="nav-link" onClick={() => { history.push('/serve/simulation') }}>化学模拟</a>
                                </div>
                                <div className="widget get-file">
                                    <h2 className="widget-title">案例</h2>
                                    <a onClick={() => { history.push('/serve/dataVisual/caseExample') }}>
                                        <ul className="list-inline download-item">
                                            <li className="list-inline-item"> <i className="fa fa-file-pdf-o"></i>
                                                <span className="ml-3">案例演示</span>
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-8 col-sm-12">
                                <div className="row iq-pb-45">
                                    <div className="col-sm-12 col-lg-6 col-md-6">
                                        <div className="services-finance-img text-center"> <img width="400" height="400"
                                            src="/images/about-us/04.png" className="attachment-full" alt="" /> </div>
                                    </div>
                                    <div className="mt-5 mt-lg-0 mt-md-0 col-sm-12 col-lg-6 col-md-6" style={{ fontSize: "15px", fontFamily: 'Karla'}}>
                                        <h3 className="text-left" style={{lineHeight:"50px"}}>数据处理</h3>
                                        <div className="mb-3">
                                            <p className="mb-0">
                                                构建数据中台，实现多源数据的智能数据准备，
                                                快速完成清洗与整理，实时监控业务数据，实现
                                                智能高效决策。
                                            </p>
                                        </div>
                                        <div className="text-left ">
                                            <ul className="iq-list">
                                                <li> <i className="fa fa-check-square-o"></i>
                                                    <span>高效管理和分析业务流程</span>
                                                </li>
                                                <li> <i className="fa fa-check-square-o"></i>
                                                    <span>有效直接的洞察业务运营本质</span>
                                                </li>
                                                <li> <i className="fa fa-check-square-o"></i>
                                                    <span>可视化数据展示，赋能直观分析思维</span>
                                                </li>
                                                <li> <i className="fa fa-check-square-o"></i>
                                                    <span>全渠道数据吃，实现经营指标全面监控</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="service-box my-3 wow fadeInUp  text-left">
                                            <i aria-hidden="true" className="flaticon flaticon-growth"></i>
                                            <div className="service-detail align-self-center">
                                                <h4 className="mb-2">全渠道数据池</h4>
                                                <p>快速接入本地和云端的内外部数据，搭建一站式大数据自助分析平台。</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="service-box my-3 wow fadeInUp  text-left">
                                            <i aria-hidden="true" className="flaticon flaticon-grouping"></i>
                                            <div className="service-detail align-self-center">
                                                <h4 className="mb-2">可视化数据分析</h4>
                                                <p>可视化分析方式，赋能分析思维，让业务人员专注业务本身</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row iq-pb-30">
                                    <div className="col-md-6">
                                        <div className="service-box my-3 wow fadeInUp  text-left">
                                            <i aria-hidden="true" className="flaticon flaticon-cloud-1"></i>
                                            <div className="service-detail align-self-center">
                                                <h4 className="mb-2">直观决策场景</h4>
                                                <p>让数据化决策融入组织的运作，无缝集成企业各个业务系统数据，通过可视化大屏实现直观展示</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="service-box my-3 wow fadeInUp  text-left">
                                            <i aria-hidden="true" className="flaticon flaticon-box"></i>
                                            <div className="service-detail align-self-center">
                                                <h4 className="mb-2">AI预测</h4>
                                                <p>面向业务的增强化智能分析，依托机器学习算法，打造业务预测数据展示场景</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-sm-12" style={{ fontSize: "15px" }}>
                                    <h3 className="text-left">数据可视化是企业科学决策的依托</h3>
                                    <p>通过对政企业务数据进行加工处理、分析挖掘与可视化展现；
                                        满足各种数据分析应用需求，如大数据分析、自助探索分析、
                                        地图可视化、 移动管理驾驶舱 、指挥大屏幕、企业报表平
                                        台、数据挖掘等。</p>
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

export default dataVisual