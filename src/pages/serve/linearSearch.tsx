import React, { useEffect } from 'react'
import { history } from 'umi';
import PageFooter from '@/components/PageFooter';
import Slider from "react-slick";

const onlineExperience: React.FC<{}> = () => {
    
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptiveHeight: true,
        variableWidth: true,
        autoplay:true,
    };

    return (
        <>
            <div className="text-left iq-breadcrumb-one iq-bg-over black ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8 text-left align-self-center">
                            <nav aria-label="breadcrumb" className="text-left">
                                <h2 className="title" style={{ fontWeight: "bold", fontSize: "40px" }}>垂直搜索</h2>
                                <ol className="breadcrumb main-bg" style={{ color: "#437eeb", fontFamily: "Karla" }}>
                                    <li className="breadcrumb-item"><a onClick={() => { history.push('/') }}>首页</a></li>
                                    <li className="breadcrumb-item active">垂直搜索</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 text-right wow fadeInRight"> <img alt="banner"
                            className="img-fluid float-right" src="/images/about-us/06.png" /> </div>
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
                                    <a className="nav-link current-menu-item" onClick={() => { history.push('/serve/linearSearch') }}>垂直搜索</a>
                                    <a className="nav-link" onClick={() => { history.push('/serve/dataVisual') }}>数据可视化</a>
                                    <a className="nav-link" onClick={() => { history.push('/serve/dataManagement') }}>数据治理</a>
                                    <a className="nav-link" onClick={() => { history.push('/serve/simulation') }}>化学模拟</a>
                                </div>
                            </div>
                            <div className="col-lg-8 col-sm-12">
                                <h3 className="text-left mb-2">多源数据采集</h3>
                                <p>自动采集信息数据，基于docker技术保证数据采集引擎良好的扩展性，并具备高性能，低负载的特点。</p>
                                <p className="mb-5">引擎管理后台实时监控引擎运行状态，并提供数据采集统计分析数据。支持多种采集数据引用方式，包括Restful API，文本格式等</p>


                                <div className="owl-carousel owl-services owl-loaded owl-drag">
                                    <Slider {...settings}>
                                            <div className="Consulting-box service-slider" style={{width:"340px",opacity: 1}}>
                                                <img src="/images/about-us/03.png" alt="slider" />
                                                <div className="details-box clearfix">
                                                    <div className="consult-details">
                                                        <h5>Apache Hadoop</h5>
                                                        <p className="mb-0">It is a long established.</p>
                                                    </div>
                                                    <a href=""><i aria-hidden="true" className="ion ion-plus"></i></a>
                                                </div>
                                            </div>
                                            <div className="Consulting-box service-slider" style={{width:"340px",opacity: 1}}>
                                                <img src="/images/about-us/04.png" alt="slider" />
                                                <div className="details-box clearfix">
                                                    <div className="consult-details">
                                                        <h5>Apache Spark</h5>
                                                        <p className="mb-0">It is a long established.</p>
                                                    </div>
                                                    <a href=""><i aria-hidden="true" className="ion ion-plus"></i></a>
                                                </div>
                                            </div>
                                            <div className="Consulting-box service-slider" style={{width:"340px",opacity: 1}}>
                                                <img src="/images/about-us/05.png" alt="slider" />
                                                <div className="details-box clearfix">
                                                    <div className="consult-details">
                                                        <h5>Apache Cassandra</h5>
                                                        <p className="mb-0">It is a long established.</p>
                                                    </div>
                                                    <a href=""><i aria-hidden="true" className="ion ion-plus"></i></a>
                                                </div>
                                            </div>
                                            <div className="Consulting-box service-slider" style={{width:"340px",opacity: 1}}>
                                                <img src="/images/about-us/04.png" alt="slider" />
                                                <div className="details-box clearfix">
                                                    <div className="consult-details">
                                                        <h5>Big Data Consulting</h5>
                                                        <p className="mb-0">It is a long established.</p>
                                                    </div>
                                                    <a href=""><i aria-hidden="true" className="ion ion-plus"></i></a>
                                                </div>
                                            </div>
                                    </Slider>
                                </div>



                                <div style={{ margin: "60px" }} />
                                <div className="row">
                                    <div className="col-sm-12" style={{ fontSize: "14px" }}>
                                        <h3 className="text-left" >基于语义分析的垂直搜索</h3>
                                        <p>基于语义分析技术，采用知识图谱数据库Neo4j，搭建高效精准的智能搜索系统。</p>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="text-left mb-2 mb-lg-0 mb-md-0">
                                                    <h4 className="text-left mb-4">产品特点</h4>
                                                    <ul className="iq-list">
                                                        <li> <i className="fa fa-check-square-o"></i> <span>根据需求构建搜索推荐算法</span> </li>
                                                        <li> <i className="fa fa-check-square-o"></i> <span>智能推荐与提示</span> </li>
                                                        <li> <i className="fa fa-check-square-o"></i><span>搜索结果高亮展示</span> </li>
                                                        <li> <i className="fa fa-check-square-o"></i><span>毫秒级搜索响应</span> </li>
                                                        <li> <i className="fa fa-check-square-o"></i><span>采用docker保证系统的负载均衡及高可扩展性</span> </li>
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

export default onlineExperience