import React, { useEffect, useState } from 'react'
import { history } from 'umi';
import PageFooter from '@/components/PageFooter';
import { Affix } from 'antd';
import './index.less'

const simulationExperience: React.FC<{}> = () => {

    const [modalIndex, setModalIndex] = useState<number>(1);

    useEffect(() => {
        const handleScroll = (e) => {

            var header = document.getElementById('header'); //定义一个dom节点为'header'的header变量

            if (header) {
                if (window.pageYOffset >= 80) {  //if语句判断window页面Y方向的位移是否大于或者等于导航栏的height像素值
                    header.classList.add('header_bg');  //当Y方向位移大于80px时，定义的变量增加一个新的样式'header_bg'
                } else {
                    header.classList.remove('header_bg'); //否则就移除'header_bg'样式
                }
            }
        }
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className="style-one position-relative" id="main-header">
                <div className="container-fluid sub-header">
                    <div className="row">
                        <div className="col-auto">
                            <div className="number-info">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><a
                                        href="/cdn-cgi/l/email-protection#1b686e6b6b74696f5b726a75747572786f737e767e6835787476"> <i
                                            className="fa fa-envelope"></i><span className="__cf_email__"
                                                data-cfemail="8efdfbfefee1fcfacee7ffe0e1e0e7edfae6ebe3ebfda0ede1e3">Service@gzecloud.com</span></a>
                                    </li>
                                    <li className="list-inline-item"><a href="tel:+0123456789"> <i className="fa fa-phone"></i>(+86)13435678401</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Affix offsetTop={0}>
                    <div className="container-fluid main-header" id="header">
                        <div className="row" >
                            <div className="col-sm-12">
                                <nav className="navbar navbar-expand-lg navbar-light">
                                    <a className="navbar-brand" onClick={() => { history.push('/') }}> <img className="img-fluid" src="/images/logo-blue.png"
                                        width="250" /> </a> <button className="navbar-toggler" type="button" data-toggle="collapse"
                                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                            aria-label="Toggle navigation"> <span className="navbar-toggler-icon"><i
                                                className="ion-navicon"></i></span> </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <div className="menu-main-menu-container">
                                            <ul id="top-menu" className="navbar-nav ml-auto">
                                                <li className="menu-item">
                                                    <a href="/" style={{ fontSize: "16px" }}>首页</a> <i className="fa toggledrop"
                                                        aria-hidden="true"></i>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="/about" className="isubmenu" style={{ fontSize: "16px" }}>关于我们</a> <i className="fa toggledrop"></i>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="#" onClick={() => { return false }} className="isubmenu" style={{ fontSize: "16px" }}>产品服务</a> <i
                                                        className="fa fa-angle-down toggledrop" aria-hidden="true"></i>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item" > <a onClick={() => { history.push('/serve/rpaTool') }}>RPA工具</a>
                                                        </li>
                                                        <li className="menu-item" > <a onClick={() => { history.push('/serve/textMining') }}>文本挖掘</a>
                                                        </li>
                                                        <li className="menu-item" > <a onClick={() => { history.push('/serve/linearSearch') }}>垂直搜索</a>
                                                        </li>
                                                        <li className="menu-item" > <a onClick={() => { history.push('/serve/dataVisual') }}>数据可视化</a>
                                                        </li>
                                                        <li className="menu-item" > <a onClick={() => { history.push('/serve/dataManagement') }}>数据治理</a>
                                                        </li>
                                                        <li className="menu-item" > <a onClick={() => { history.push('/serve/simulation') }}>化学模拟</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sub-main">
                                        <nav aria-label="breadcrumb">
                                            <div className="blue-btn button"> <a onClick={() => { history.push('/apply') }} style={{ fontSize: "16px" }}>申请试用</a> </div>
                                        </nav>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </Affix>
            </header>

            <div className="iq-banner">
                <p className="rs-p-wp-fix"></p>
                <div id="rev_slider_12_1_wrapper" data-alias="data-science-course" data-source="gallery"
                    style={{ background: "transparent", padding: "0", margin: "0px auto", marginTop: "0", marginBottom: "0" }}>
                    <div id="rev_slider_12_1" data-version="6.1.0">
                        <div>
                            <div data-key="rs-16" data-title="Slide">

                                <div id="slider-12-slide-16-layer-33" style={{ zIndex: 9, fontFamily: "Roboto" }}>

                                    <div style={{ position: "absolute", top: "220px", left: "310px", zIndex: 4 }}>

                                        <div className="col-lg-8 col-md-8 text-left align-self-center">
                                            <nav aria-label="breadcrumb" className="text-left">
                                                <h2 className="title" style={{ fontWeight: "bold", fontSize: "40px", color: "white" }}>在线试用</h2>
                                                <ol className="breadcrumb main-bg" style={{ color: "white", fontFamily: "Karla", backgroundColor: "black" }}>
                                                    <li className="breadcrumb-item"><a onClick={() => { history.push('/') }}>首页</a></li>
                                                    <li className="breadcrumb-item active" style={{ color: "white" }}>文本挖掘</li>
                                                    <li className="breadcrumb-item active" style={{ color: "white" }}>在线试用</li>
                                                </ol>
                                            </nav>
                                        </div>

                                        <svg className="hidden">
                                            <defs><path id="tabshape" d="M80,60C34,53.5,64.417,0,0,0v60H80z"></path></defs>
                                        </svg>


                                        <section style={{ padding: "20px 0" }}>
                                            <div className="analyze_tabs analyze_tabs-style-shape">
                                                <nav>
                                                    <ul>
                                                        <li id="s1" className={modalIndex === 1 ? 'tab-current' : ''}><a onClick={() => { setModalIndex(1); history.push('#/analyze/analyze_upload01') }}><svg viewBox="0 0 80 60" preserveAspectRatio="none"><use href="#tabshape"></use></svg><span>文件解析</span></a></li>
                                                        <li id="s2" className={modalIndex === 2 ? 'tab-current' : ''}><a onClick={() => { setModalIndex(2); history.push('#/analyze/analyze_upload02') }}><svg viewBox="0 0 80 60" preserveAspectRatio="none"><use href="#tabshape"></use></svg><svg viewBox="0 0 80 60" preserveAspectRatio="none"><use href="#tabshape"></use></svg><span>文本解析</span></a></li>
                                                        <li id="s3" className={modalIndex === 3 ? 'tab-current' : ''}><a onClick={() => { setModalIndex(3); history.push('#/analyze/analyze_upload03') }}><svg viewBox="0 0 80 60" preserveAspectRatio="none"><use href="#tabshape"></use></svg><svg viewBox="0 0 80 60" preserveAspectRatio="none"><use href="#tabshape"></use></svg><span>列表解析</span></a></li>
                                                    </ul>
                                                </nav>

                                                <div className="analyze_content-wrap" style={modalIndex === 1 ? { display: "block" } : { display: "none" }}>
                                                    <span>
                                                        <div className="ant-upload ant-upload-drag">
                                                            <span className="ant-upload ant-upload-btn" role="button">
                                                                <input type="file" accept="" style={{ display: "none" }} />
                                                                <div className="ant-upload-drag-container">
                                                                    <p className="ant-upload-drag-icon">
                                                                        <span role="img" className="anticon">
                                                                            <img src="https://ucpin.oss-cn-shenzhen.aliyuncs.com/AI-static/upload.png" alt="icon" style={{ width: "7rem", height: "5.8rem" }} />
                                                                        </span>
                                                                    </p>
                                                                    <p className="ant-upload-text">点击或者拖动文件至框内</p>
                                                                </div>
                                                            </span>
                                                        </div>

                                                        <div className="ant-upload-list ant-upload-list-text"></div>
                                                    </span>
                                                    <button type="button" className="ant-btn analyze_content-btn ant-btn-primary">
                                                        <a href="#/analyze_result">开始解析</a>
                                                    </button>
                                                </div>

                                                <div className="analyze_content-wrap " style={modalIndex === 2 ? { display: "block" } : { display: "none" }}>
                                                    <textarea className="ant-input analyze_content_input" placeholder="支持中文文本, 暂不支持图片, 最多5000字" rows="12" maxlength="5000"></textarea>
                                                    <span className="analyze_content-count">0/5000</span>
                                                    <button type="button" className="ant-btn analyze_content-btn2 ant-btn-primary">
                                                        <span>开始解析</span>
                                                    </button>
                                                </div>

                                                <div className="analyze_content-wrap" style={modalIndex === 3 ? { display: "block" } : { display: "none" }}>
                                                    <img className="analyze_content-wrap-img" src="https://ucpin.oss-cn-shenzhen.aliyuncs.com/AI-static/developing.png" alt="开发中图片" />
                                                    <p>施工中, 敬请期待~</p>
                                                </div>
                                            </div>
                                        </section>

                                    </div>
                                </div>

                                <div>
                                    <img alt="#" src="/revslider/assets/blackbg.png" style={{ zIndex: 2, position: "relative", height: "815px" }} data-no-retina />
                                    <video autoPlay loop muted className="rs-nolc rs-layer-video" id="slider-12-slide-16-layer-38"
                                        style={{
                                            position: "absolute",
                                            top: "145px",
                                            left: "35vw",
                                            display: "block",
                                            padding: "0px",
                                            margin: "0px",
                                            width: "1430px",
                                            height: "858px",
                                            zIndex: 3
                                        }}
                                    >
                                        <source src="https://gzecloud.oss-cn-guangzhou.aliyuncs.com/泷铧官网资源/Earth-17235.mp4?versionId=CAEQCRiBgICO.7ChyBciIGFlZmQzZjYzYWJjNjRhYWZhMmViY2M5OWE3ZmE2NTMz" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PageFooter />
        </>
    );
}

export default simulationExperience