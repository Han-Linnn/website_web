import React, { useEffect } from 'react'
import { history } from 'umi';
import PageFooter from '@/components/PageFooter';
import Slider from "react-slick";

const dataManagement: React.FC<{}> = () => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        variableWidth: true,
        autoplay: true
    };

    return (
        <>
            <div className="text-left iq-breadcrumb-one iq-bg-over black ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8 text-left align-self-center">
                            <nav aria-label="breadcrumb" className="text-left">
                                <h2 className="title" style={{ fontWeight: "bold", fontSize: "40px" }}>数据治理</h2>
                                <ol className="breadcrumb main-bg" style={{ color: "#437eeb", fontFamily: "Karla" }}>
                                    <li className="breadcrumb-item"><a onClick={() => { history.push('/') }}>首页</a></li>
                                    <li className="breadcrumb-item active">数据治理</li>
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
                                    <a className="nav-link current-menu-item" onClick={() => { history.push('/serve/dataManagement') }}>数据治理</a>
                                    <a className="nav-link" onClick={() => { history.push('/serve/simulation') }}>化学模拟</a>
                                </div>
                            </div>
                            <div className="col-lg-8 col-sm-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        <Slider {...settings}>
                                            <div className="consulting-img  text-left" style={{width:"750px"}}> 
                                                <img src="/images/about-us/03.png"/>
                                            </div>
                                            <div className="consulting-img  text-left" style={{width:"750px"}}> 
                                                <img src="/images/about-us/04.png"/>
                                            </div>
                                            <div className="consulting-img  text-left" style={{width:"750px"}}> 
                                                <img src="/images/about-us/05.png"/>
                                            </div>
                                        </Slider>
                                        <div className="mb-0" style={{fontSize:"16px",margin:"50px 0 0"}}>
                                            <p>通过泷铧专业的数据治理顾问团队，基于数据治理方法论，
                                            协助客户整理多源数据，形成高质量的数据资产，确保企
                                                业数据价值回报的实现。</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div style={{ margin: "40px" }} />
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h3 className="text-left mb-3">数据管理痛点</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="text-left mb-2 mb-lg-0 mb-md-0 ">
                                            <ul className="iq-list">
                                                <li><i className="fa fa-check-square-o"></i><span>更新不及时</span></li>
                                                <li><i className="fa fa-check-square-o"></i><span>数据不安全</span></li>
                                                <li><i className="fa fa-check-square-o"></i><span>数据不准确</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="text-left mb-2 mb-lg-0 mb-md-0 ">
                                            <ul className="iq-list">
                                                <li><i className="fa fa-check-square-o"></i><span>数据难溯源</span></li>
                                                <li><i className="fa fa-check-square-o"></i><span>数据难整合</span></li>
                                                <li><i className="fa fa-check-square-o"></i><span>数据跨多系统，多数据库</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ margin: "40px" }} />
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h3 className="text-left mb-3">泷铧数据管理业务</h3>
                                        <div className="iq-mb-35">
                                            <p className="mb-0">
                                                聚焦数据采集、交换、处理、存储、分析、挖掘、
                                                管控和应用等数据处理及数据应用全环节，通过5
                                                方面协助客户实现数据治理，保证企业数据管理的
                                                有效性。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row iq-pb-45">
                                    <div className="mt-5 mt-lg-0 mt-md-0 col-sm-6">
                                        <div className="text-left">
                                            <ul className="iq-list">
                                                <li><i className="fa fa-check-square-o"></i><span>构建企业数据分布地图、完整描述数据信息</span></li>
                                                <li><i className="fa fa-check-square-o"></i><span>制定全面统一的数据标准</span></li>
                                                <li><i className="fa fa-check-square-o"></i><span>进行数据质量校验、解决脏数据</span></li>
                                                <li><i className="fa fa-check-square-o"></i><span>保证数据集成平台的负载均衡和扩展性</span>
                                                </li>
                                                <li><i className="fa fa-check-square-o"></i><span>对数据进行合理分级授权和加密脱敏处理，保证数据安全</span></li>
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

export default dataManagement