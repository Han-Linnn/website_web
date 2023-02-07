import React, { useEffect } from 'react'
import { history } from 'umi';
import PageFooter from '@/components/PageFooter';
import ReactPlayer from 'react-player';
import Slider from "react-slick";

const rpaTool: React.FC<{}> = () => {

    return (
        <>
            <div className="text-left iq-breadcrumb-one iq-bg-over black ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8 text-left align-self-center">
                            <nav aria-label="breadcrumb" className="text-left">
                                <h2 className="title" style={{ fontWeight: "bold", fontSize: "40px" }}>RPA工具</h2>
                                <ol className="breadcrumb main-bg" style={{ color: "#437eeb", fontFamily: "Karla" }}>
                                    <li className="breadcrumb-item"><a onClick={() => { history.push('/') }} >首页</a></li>
                                    <li className="breadcrumb-item active">RPA工具</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 text-right wow fadeInRight start_animation animated"> <img
                            alt="banner" className="img-fluid float-right" src="/images/about-us/04.png" /> </div>
                    </div>
                </div>
            </div>

            <div className="main-content">
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 sidebar-service-left">
                                <div className="nav flex-column nav-pills mb-5 widget widget_nav_menu" style={{ fontSize: "17px" }}>
                                    <a className="nav-link current-menu-item" onClick={() => { history.push('/serve/rpaTool') }}>RPA工具</a>
                                    <a className="nav-link" onClick={() => { history.push('/serve/textMining') }}>文本挖掘</a>
                                    <a className="nav-link" onClick={() => { history.push('/serve/linearSearch') }}>垂直搜索</a>
                                    <a className="nav-link" onClick={() => { history.push('/serve/dataVisual') }}>数据可视化</a>
                                    <a className="nav-link" onClick={() => { history.push('/serve/dataManagement') }}>数据治理</a>
                                    <a className="nav-link" onClick={() => { history.push('/serve/simulation') }}>化学模拟</a>
                                </div>
                                <div className="testimonial-widget-menu widget">
                                    <h3>产品特色</h3>
                                    <div className="owl-carousel owl-loaded owl-drag" >
                                        <Slider
                                            arrows={false}
                                            autoplay
                                            fade={true}
                                            style={{ left: "-25px" }}
                                        >
                                            <div className="item">
                                                <div className="testimonial-info" style={{ textAlign: "center" }}>
                                                    <div className="testimonial-name">
                                                        <h5 style={{ fontWeight: "bold" }}>工作效率提升</h5>
                                                    </div>
                                                    <p>自动模拟人工操作，减少流程操作时间，可以实现007的工作方式，执行流程精准高效。</p>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="testimonial-info" style={{ position: "absolute", left: "-40px", top: "-1px", width: "100%", textAlign: "center" }}>
                                                    <div className="testimonial-name">
                                                        <h5 style={{ fontWeight: "bold" }}>无错操作</h5>
                                                    </div>
                                                    <p>机器替代人工，实现信息采集和填写的零出错率表现。</p>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="testimonial-info" style={{ position: "absolute", left: "-80px", top: "-1px", width: "100%", textAlign: "center" }}>
                                                    <div className="testimonial-name">
                                                        <h5 style={{ fontWeight: "bold" }}>历史回溯</h5>
                                                    </div>
                                                    <p>系统日志记录每项业务流程操作，可以基于日志查询操作历史。</p>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-sm-12 iq-sm-mt-30">
                                <div className="row iq-pb-45">
                                    <div className="col-sm-12 col-lg-6 col-md-6">
                                        <div className="services-finance-img text-center"> <img width="400" height="400"
                                            src="/images/about-us/05.png" className="attachment-full" alt="" /> </div>
                                    </div>
                                    <div className="mt-5 mt-lg-0 mt-md-0 col-sm-12 col-lg-6 col-md-6" style={{ fontSize: "15px" }}>
                                        <h3 className="text-left">自动执行预定流程</h3>
                                        <div className="mb-3">
                                            <p className="mb-0" >针对不同行业中高重复性、标准化、规则明确、大批量的日常事务，设定RPA操作，自动执行预定业务流程</p>
                                        </div>
                                        <div className="text-left " >
                                            <ul className="iq-list">
                                                <li> <i className="fa fa-check-square-o"></i> <span>替代重复繁琐的日常业务工作</span> </li>
                                                <li> <i className="fa fa-check-square-o"></i> <span>规避人工操作遗漏和错误的风险</span> </li>
                                                <li> <i className="fa fa-check-square-o"></i> <span>跨系统协同，实现不同系统的数据无缝对接</span> </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div style={{ margin: "40px 0px 20px", fontSize: "15px" }}>
                                            <p>Facebook自动登录采集用户数据及自动加友，发布信息案例演示：</p>
                                        </div>
                                    </div>
                                </div>

                                <ReactPlayer url="https://gzecloud.oss-cn-guangzhou.aliyuncs.com/泷铧官网资源/rpa.mp4?versionId=CAEQCRiBgMCU.7ChyBciIDMzZDI2MmJiYjc0MjRmMmJiOTU2ZDY0ZTE0YjgwNWVj" playing={true} controls={true} light={"/images/about-us/09.jpg"} />

                                <div style={{ margin: "60px" }} />
                                <div className="row">
                                    <div className="col-sm-12" style={{ fontSize: "15px" }}>
                                        <h2 className="text-left">跨系统协同</h2>
                                        <p>基于NLP然语言处理，自动查询进行系统信息查询及采集，生成报表，或录入关联系统，实现多系统的数据无缝对接。</p>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="text-left mb-2 mb-lg-0 mb-md-0">
                                                    <ul className="iq-list">
                                                        <li> <i className="fa fa-check-square-o"></i> <span>自动从业务系统识别提取文本信息</span> </li>
                                                        <li> <i className="fa fa-check-square-o"></i> <span>自动依据业务系统表单填写数据</span> </li>
                                                        <li> <i className="fa fa-check-square-o"></i><span>不同业务系统无需调整，无缝对接</span> </li>
                                                    </ul>
                                                </div>
                                            </div>
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

export default rpaTool