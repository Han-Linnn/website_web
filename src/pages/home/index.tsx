import React, { useEffect, useState } from 'react'
import PageFooter from '@/components/PageFooter';
import BannerSection from './components/BannerSection';
import HeaderSection from './components/HeaderSection';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { getPost } from '@/services/api';

const Home: React.FC<{}> = () => {

    const [postData, setPostData] = useState<any>(null);

    const getServiceData = async () => {
        const response = await getPost({ category_id: 13 });
        if (response.code === 200) {
            if ('data' in response) {
                const { data } = response;
                if ('items' in data) {
                    const { items } = data;
                    setPostData(items);
                }
            }
        }
    };

    useEffect(() => {
        getServiceData()
    }, [])

    const renderPost = () => {
        if (postData && postData.length > 0) {
            // const tempPostList = {};
            return postData.map((item: any, index: number) => {
                return (
                    
                        <div className="col-lg-4 col-md-6">
                            <div className="service-box d-inherit p-4 my-3 wow fadeInUp text-left">
                                <img className="fancy-list-img" src={item.title_pic} alt="fancy-list" />
                                <div className="service-detail align-self-center">
                                    <h4 className="mb-2">{item.title}{item.title_sub}</h4>
                                    <span dangerouslySetInnerHTML={{
                                        __html: item.body,
                                    }}>
                                    </span>
                                </div>
                            </div>
                        </div>
                    
                );
            })
        }
    }

    return (
        <>
            <HeaderSection />
            <BannerSection />
            <div id="main" className="main-content">
                <section className="aboutus-two-service">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title-box wow fadeInUp text-center">
                                    <span className="title-design">???????????????</span>
                                    <h2>LHAI??????????????????</h2>
                                </div>
                            </div>
                        </div>
                        {postData && postData.length > 0 && <div className="row">
                            {renderPost()}
                        </div>}
                    </div>
                </section>
                <section className="pt-0">
                    <div className="container">
                        <div className="row iq-how-it-works">
                            <div className="fadeInUp col-sm-12 col-lg-6 col-md-6 wow"> <img alt=""
                                className="single_image-img attachment-full" height="954" src="/images/about-us/03.png"
                                width="1260" /> </div>
                            <div className=" fadeInUp  col-sm-12 col-lg-6 col-md-6 wow align-items-center">
                                <div className="title-box wow fadeInUp text-left">
                                    <span className="title-design">???????????????</span>
                                    <h2>????????????????????????????????????</h2>
                                    <p> ????????????????????????????????????????????????????????????????????????????????? </p>
                                </div>
                                <div className="text-left">
                                    <ul className="iq-list">
                                        <li> <i className="fa fa-check-square-o"></i> <span>??????????????????</span> </li>
                                        <li> <i className="fa fa-check-square-o"></i> <span>???????????????????????????</span>
                                        </li>
                                        <li> <i className="fa fa-check-square-o"></i> <span> ??????????????????</span> </li>
                                        <li> <i className="fa fa-check-square-o"></i> <span>??????????????????</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className=" text-left mt-5">
                                    <a className="button button-icon" href="/serve/textMining">
                                        <span className="btn-effect"> ????????????</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="iq-bg-over iq-pb-70">
                    <div className="container">
                        <div className="row row-fluid row-has-fill iq-how-it-works">
                            <div className="iq-mb-30 fadeInUp wow col-sm-12 col-lg-5 col-md-12 align-items-center">
                                <div className="title-box wow fadeInUp text-left">
                                    <span className="title-design">???????????????</span>
                                    <h2>???AI???????????????????????????????????????????????????</h2>
                                    <p>????????????AI???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
                                </div>
                                <div className="services-content wow fadeInUp progress-style text-left">
                                    <div className="progress-content">
                                        <div className="progress-value">70%</div>
                                        <div className="progress-title">
                                            <div className="progress-main">
                                                <h6>Big Data Services</h6>
                                            </div>
                                            <div className="iq-progress-bar">
                                                <span className="position-relative" data-percent="70"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress-content">
                                        <div className="progress-value">50%</div>
                                        <div className="progress-title">
                                            <div className="progress-main">
                                                <h6>Data Science Consulting</h6>
                                            </div>
                                            <div className="iq-progress-bar">
                                                <span className="position-relative" data-percent="50"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress-content">
                                        <div className="progress-value">80%</div>
                                        <div className="progress-title">
                                            <div className="progress-main">
                                                <h6>Data Analytics Consulting</h6>
                                            </div>
                                            <div className="iq-progress-bar">
                                                <span className="position-relative" data-percent="80"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 offset-lg-1 col-lg-6 col-md-12">
                                <div className="row">
                                    <div className="col-sm-6 col-lg-6" style={{ top: "-30px" }}>
                                        <div className="tec_box">
                                            <div className="tec_icons clerfix">
                                                <div className="img_icon_one">
                                                    <div className="tec_icon"><img src="/images/services/services-small-1.png"
                                                        alt="tecbox" /></div>
                                                </div>
                                                <div className="img_icon_two">
                                                    <div className="tec_icon"><img src="/images/services/services-small-2.png"
                                                        alt="tecbox" /></div>
                                                </div>
                                            </div>
                                            <div className="img_icon_three">
                                                <div className="tec_icon"><img src="/images/services/services-small-3.png"
                                                    alt="tecbox" /></div>
                                            </div>
                                            <h5>????????????</h5>
                                        </div>
                                        <div className="tec_box">
                                            <div className="tec_icons clerfix">
                                                <div className="img_icon_one">
                                                    <div className="tec_icon"><img src="/images/services/services-small-1.png"
                                                        alt="tecbox" /></div>
                                                </div>
                                                <div className="img_icon_two">
                                                    <div className="tec_icon"><img src="/images/services/services-small-2.png"
                                                        alt="tecbox" /></div>
                                                </div>
                                            </div>
                                            <div className="img_icon_three">
                                                <div className="tec_icon"><img src="/images/services/services-small-3.png"
                                                    alt="tecbox" /></div>
                                            </div>
                                            <h5>????????????????????????</h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-6" style={{ top: "30px" }}>
                                        <div className="tec_box">
                                            <div className="tec_icons clerfix">
                                                <div className="img_icon_one">
                                                    <div className="tec_icon"><img src="/images/services/services-small-1.png"
                                                        alt="tecbox" /></div>
                                                </div>
                                                <div className="img_icon_two">
                                                    <div className="tec_icon"><img src="/images/services/services-small-2.png"
                                                        alt="tecbox" /></div>
                                                </div>
                                            </div>
                                            <div className="img_icon_three">
                                                <div className="tec_icon"><img src="/images/services/services-small-3.png"
                                                    alt="tecbox" /></div>
                                            </div>
                                            <h5>RPA??????</h5>
                                        </div>
                                        <div className="tec_box">
                                            <div className="tec_icons clerfix">
                                                <div className="img_icon_one">
                                                    <div className="tec_icon"><img src="/images/services/services-small-1.png"
                                                        alt="tecbox" /></div>
                                                </div>
                                                <div className="img_icon_two">
                                                    <div className="tec_icon"><img src="/images/services/services-small-2.png"
                                                        alt="tecbox" /></div>
                                                </div>
                                            </div>
                                            <div className="img_icon_three">
                                                <div className="tec_icon"><img src="/images/services/services-small-3.png"
                                                    alt="tecbox" /></div>
                                            </div>
                                            <h5>????????????</h5>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="xamin-blue-bg py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 mb-3 mb-md-0">
                                <div className="iq-timer style1 text-center">
                                    <div className="timer-details">
                                        <span className="timer" data-to="820" data-speed="15000">820</span>
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                        <p> Data Analytics</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-3 mb-md-0">
                                <div className="iq-timer style1 text-center">
                                    <div className="timer-details">
                                        <span className="timer" data-to="150" data-speed="15000">150</span>
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                        <p> Data Management</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-3 mb-md-0">
                                <div className="iq-timer style1 text-center">
                                    <div className="timer-details">
                                        <span className="timer" data-to="30" data-speed="15000">30</span>
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                        <p> Managed Analytics</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-3 mb-md-0">
                                <div className="iq-timer style1 text-center">
                                    <div className="timer-details">
                                        <span className="timer" data-to="100" data-speed="15000">100</span>
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                        <p> Big Data</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PageFooter />
            <ScrollToTopButton />
        </>
    );
}

export default Home