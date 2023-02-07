import React from 'react';
import styles from '../index.less'
import { history } from 'umi';
import VideoSection from './VideoSection';

const BannerSection: React.FC<{}> = () => {

    return (
        <>
            <div className="iq-banner">
                <p className="rs-p-wp-fix"></p>
                <div id="rev_slider_1_1_wrapper" className={styles.rs_module_wrap}>
                    <div id="rev_slider_1_1" className="rs-ov-hidden">
                        <img src="/revslider/assets/dummy.png" className="rev-slidebg" />
                        <video autoPlay loop muted className={styles.banner_video}>
                            <source src="https://gzecloud.oss-cn-guangzhou.aliyuncs.com/泷铧官网资源/Comp-1_1-converted-with-Clipchamp.mp4?versionId=CAEQCRiBgICB.7ChyBciIDI1OTU0N2VlZGEwNzQyNTJiNmNhNGY2ZmU2N2QyYmYw" type="video/mp4" />
                        </video>
                        {/* <VideoSection/> */}

                        <div title="Slide" className={styles.banner_slide}>
                            <h2 id="slider-4-slide-6-layer-1" className={`rs-layer ${styles.banner_title}`}>
                                广州泷铧
                                <br/>信息科技有限公司
                            </h2>

                            <div id="slider-1-slide-1-layer-2" className={styles.banner_content1}>
                                泷铧信息致力于提供基于AI技术的数据科学服务，包括 <br /> RPA工具及大数据的智能化分析及应用。
                            </div>

                            <a onClick={() => { history.push('/about') }}>
                            <div id="slider-1-slide-1-layer-3" className={`blue-btn button ${styles.banner_button}`}>
                                了解更多
                            </div>
                            </a>

                            {/* <div id="slider-1-slide-1-layer-7" className={styles.banner_content_title1}>
                                生成报告
                            </div>

                            <div id="slider-1-slide-1-layer-8" className={styles.banner_content2}>
                                12600
                            </div>

                            <div id="slider-1-slide-1-layer-9" className={styles.banner_content_title2}>
                                小时
                            </div>

                            <div id="slider-1-slide-1-layer-10" className={styles.banner_content3}>
                                18:00
                            </div>

                            <div id="slider-1-slide-1-layer-11" className={styles.banner_content_title3}>
                                届会
                            </div>

                            <div id="slider-1-slide-1-layer-12" className={styles.banner_content4}>
                                5886
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerSection