import React, { useEffect } from 'react'
import { history } from 'umi';
import PageFooter from '@/components/PageFooter';

const textMining: React.FC<{}> = () => {

    return (
        <>
            <div className="text-left iq-breadcrumb-one iq-bg-over black ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8 text-left align-self-center">
                            <nav aria-label="breadcrumb" className="text-left">
                                <h2 className="title" style={{ fontWeight: "bold", fontSize: "40px" }}>文本挖掘</h2>
                                <ol className="breadcrumb main-bg" style={{ color: "#437eeb", fontFamily: "Karla" }}>
                                    <li className="breadcrumb-item"><a onClick={() => { history.push('/') }} >首页</a></li>
                                    <li className="breadcrumb-item active">文本挖掘</li>
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
                                    <a className="nav-link current-menu-item" onClick={() => { history.push('/serve/textMining') }}>文本挖掘</a>
                                    <a className="nav-link" onClick={() => { history.push('/serve/linearSearch') }}>垂直搜索</a>
                                    <a className="nav-link" onClick={() => { history.push('/serve/dataVisual') }}>数据可视化</a>
                                    <a className="nav-link" onClick={() => { history.push('/serve/dataManagement') }}>数据治理</a>
                                    <a className="nav-link" onClick={() => { history.push('/serve/simulation') }}>化学模拟</a>
                                </div>
                                <div className="widget get-file">
                                    <h2 className="widget-title">简历识别</h2>
                                    <a href="/resume/experience">
                                        <ul className="list-inline download-item">
                                            <li className="list-inline-item"> <i className="fa fa-file-pdf-o"></i>
                                                <span className="ml-3">在线试用</span>
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
                                        <h3 className="text-left" style={{lineHeight:"50px"}}>文本挖掘解决方案</h3>
                                        <div className="mb-3">
                                            <p className="mb-0">
                                                利用NLP自然语言处理（Natural Language Process）技术，
                                                分析提取文本信息，计算机替代人工自动进行海量文档的信息提
                                                取，提升文本挖掘处理效率。
                                            </p>
                                        </div>
                                        <div className="text-left ">
                                            <ul className="iq-list">
                                                <li> <i className="fa fa-check-square-o"></i>
                                                    <span>基于Tensorflow机器深度学习技术，进行语义识别</span>
                                                </li>
                                                <li> <i className="fa fa-check-square-o"></i>
                                                    <span>强化语句结构分析，文本挖掘效果精准</span>
                                                </li>
                                                <li> <i className="fa fa-check-square-o"></i>
                                                    <span>利用知识图谱技术，构建语义关联，实现智能语义搜索</span>
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
                                                <h4 className="mb-2">精准</h4>
                                                <p>精准理解语义，排除歧义</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="service-box my-3 wow fadeInUp  text-left">
                                            <i aria-hidden="true" className="flaticon flaticon-grouping"></i>
                                            <div className="service-detail align-self-center">
                                                <h4 className="mb-2">全面</h4>
                                                <p>全信源覆盖，云采集技术，知识自动发现</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row iq-pb-30">
                                    <div className="col-md-6">
                                        <div className="service-box my-3 wow fadeInUp  text-left">
                                            <i aria-hidden="true" className="flaticon flaticon-cloud-1"></i>
                                            <div className="service-detail align-self-center">
                                                <h4 className="mb-2">快速</h4>
                                                <p>成熟的机器学习，实现快速建模并准确处理</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="service-box my-3 wow fadeInUp  text-left">
                                            <i aria-hidden="true" className="flaticon flaticon-box"></i>
                                            <div className="service-detail align-self-center">
                                                <h4 className="mb-2">干净</h4>
                                                <p>超强的信息识别能力，过滤干扰信息，保证数据的精确度</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <h3 style={{textAlign:"center"}}>Bi-LSTM训练模型</h3>
                                <div className="services-finance-img text-center">
                                         <img width="1200px"
                                            src="/images/u319.png" className="attachment-full" alt="" />
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

export default textMining