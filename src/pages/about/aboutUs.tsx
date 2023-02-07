import React, { useEffect, useState } from 'react'
import { history } from 'umi';
import PageFooter from '@/components/PageFooter';
import { getPost } from '@/services/api';

const aboutUs: React.FC<{}> = () => {

    const [historyData, setHistoryData] = useState<any>(null);

    const getHistoryData = async () => {
        const response = await getPost({ category_id: 14 });
        if (response.code === 200) {
            if ('data' in response) {
                const { data } = response;
                if ('items' in data) {
                    const { items } = data;
                    setHistoryData(items);
                }
            }
        }
    };

    useEffect(() => {
        getHistoryData()
    }, [])

    const sortNum = (a: any,b: any) => {
        return a.id-b.id;
    }

    const renderHistory = () => {
        if (historyData && historyData.length > 0) {
            return [].concat(historyData).sort(sortNum).map((item: any, index: number) => {
            // return historyData.map((item: any, index: number) => {
                return (
                    <>
                        <div className="col-sm-12 mb-5">
                            <div className={index===1 ? `border` : `bg-gray`}>
                                <div className="xamin-history row row-eq-height align-items-center wow fadeInUp ">
                                    <div className="col-sm-4 col-lg-2 col-md-2"> <img alt="" className="single_image-img attachment-full"
                                        height="360" src={item.title_pic} width="550" /> </div>
                                    <div className="text-lg-center text-left col-sm-12 col-lg-2 col-md-3">
                                        <h4 className="pt-3 pb-1 pt-lg-0 pb-lg-0">{item.title}</h4>
                                    </div>
                                    <div className="col-sm-12 col-lg-8 col-md-7">
                                        <p className="mb-0" dangerouslySetInnerHTML={{
                                            __html: item.body,
                                        }}>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-sm-12 mb-5">
                            <div className="border">
                                <div className="xamin-history row row-eq-height align-items-center">
                                    <div className="col-sm-4 col-lg-2 col-md-2"> <img alt="" className="single_image-img attachment-full"
                                        height="360" src="/images/about-us/07.png" width="550" /> </div>
                                    <div className="text-lg-center text-left col-sm-12 col-lg-2 col-md-3">
                                        <h4 className="pt-3 pb-1 pt-lg-0 pb-lg-0">2016 – 2018</h4>
                                    </div>
                                    <div className="col-sm-12 col-lg-8 col-md-7">
                                        <p className="mb-0">
                                            泷铧引入tensorflow机器深度学习、NLP自然语言识别、知识图谱等技术，推
                                            出简历自动识别服务，社交媒体自动登录管理服务。
                                            </p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </>
                );
            })
        }
    }

    return (
        <>
            <div className="text-left iq-breadcrumb-one iq-bg-over black ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8 text-left align-self-center">
                            <nav aria-label="breadcrumb" className="text-left">
                                <h2 className="title" style={{ fontWeight: "bold", fontSize: "30px" }}>关于我们</h2>
                                <ol className="breadcrumb main-bg" style={{ color: "#437eeb", fontFamily: "Karla" }}>
                                    <li className="breadcrumb-item"><a onClick={() => { history.push('/') }}>首页</a></li>
                                    <li className="breadcrumb-item active">关于我们</li>
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
                        <div className="row iq-how-it-works">
                            <div className="iq-mb-30 fadeInUp col-sm-12 col-lg-6 col-md-6 wow align-items-center">
                                <div className="title-box wow fadeInUp text-left">
                                    <span className="title-design">关于我们</span>
                                    <h2>数据科学，企业发展驱动力</h2>
                                    <p>泷铧信息立足于向用户提供数据科学服务，利用先进的机器深度学习、NLP自然语言处理和知识图谱等技术，
                                    我们为企业提供了包括RPA智能工具、文本语义挖掘及检索、数据可视化、计算机模拟运算等服务产品，让
                                        计算机替代各种人工工作，提成工作效率，降低业务成本。</p>
                                </div>
                                <div className="text-left">
                                    <ul className="iq-list">
                                        <li> <i className="fa fa-check-square-o"></i> <span>专业的大数据技术团队</span> </li>
                                        <li> <i className="fa fa-check-square-o"></i> <span>资深的业务专家顾问组</span> </li>
                                        <li> <i className="fa fa-check-square-o"></i> <span>24/7 帮助中心</span> </li>
                                        <li> <i className="fa fa-check-square-o"></i> <span>客户优先的服务理念</span> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="fadeInUp col-sm-12 col-lg-6 col-md-6 wow"> <img alt=""
                                className="single_image-img attachment-full" height="954" src="/images/about-us/06.png" width="1260" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="xamin-services  mb-0 wow fadeInUp text-left" style={{ lineHeight: "30px" }}>
                                    <div className="services-detail">
                                        <h4 className="mb-1" style={{ lineHeight: "60px" }}>扎根于业务的数据科学服务</h4>
                                        <p className="mb-0">
                                            泷铧信息认为，所有数据科学服务都应该基于实际业务需要，
                                            基于我们资深的业务专家团队和专业的大数据技术团队，我们
                                            向用户提供依托于实际业务场景的智能化大数据相关服务产品
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="xamin-services mb-0 wow fadeInUp text-left " style={{ lineHeight: "30px" }}>
                                    <div className="services-detail">
                                        <h4 className="mb-1" style={{ lineHeight: "60px" }}>领先的AI技术</h4>
                                        <p className="mb-0">
                                            泷铧信息有多年大数据采集及分析经验，引入机器深度学习、NLP、
                                            知识图谱等技术，为客户提供最新最领先的AI技术服务产品
                                            <br />
                                            <br />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="xamin-services mb-0 wow fadeInUp text-left" style={{ lineHeight: "30px" }}>
                                    <div className="services-detail">
                                        <h4 className="mb-1" style={{ lineHeight: "60px" }}>全面的解决方案</h4>
                                        <p className="mb-0">
                                            泷铧信息提供从数据采集、数据提取、数据分析、数据应用的全面
                                            数据科学服务产品，可以全面服务客户数字化运营的需要
                                            <br />
                                            <br />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-0">
                    <div className="container">
                        <div className="row xamin-bg">
                            <div className="col-sm-12">
                                <div className="title-box wow fadeInUp text-center">
                                    <span className="title-design">我们的历史</span>
                                    <h2>泷铧信息的里程碑</h2>
                                </div>
                            </div>
                            {historyData && historyData.length > 0 && <div className="row">
                                {renderHistory()}
                            </div>}
                        </div>
                    </div>
                </section>
            </div>
            <PageFooter />
        </>
    );
}

export default aboutUs