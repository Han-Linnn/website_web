import React, { useEffect } from 'react'
import { history } from 'umi';
import PageFooter from '@/components/PageFooter';

const simulationExperience: React.FC<{}> = () => {

    return (
        <>
            <div className="text-left iq-breadcrumb-one iq-bg-over black ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8 text-left align-self-center">
                            <nav aria-label="breadcrumb" className="text-left">
                                <h2 className="title" style={{ fontWeight: "bold", fontSize: "40px" }}>化学反应模拟在线试用</h2>
                                <ol className="breadcrumb main-bg" style={{ color: "#437eeb", fontFamily: "Karla" }}>
                                    <li className="breadcrumb-item"><a onClick={() => { history.push('/') }}>首页</a></li>
                                    <li className="breadcrumb-item active">化学模拟</li>
                                    <li className="breadcrumb-item active">化学反应模拟在线试用</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 text-right wow fadeInRight"> <img alt="banner"
                            className="img-fluid float-right" src="/images/about-us/02.png" /> </div>
                    </div>
                </div>
            </div>
            <div style={{background:"#F2F3F9"}}>
                    <div style={{textAlign:"center"}}>
                        <iframe 
                            id="content"
                            src="http://lab.gzecloud.com/simulation/setting?id=175" 
                            style={{width:"100%",height:"950px"}}
                        ></iframe>
                    </div>
            </div>
            <PageFooter />
        </>
    );
}

export default simulationExperience