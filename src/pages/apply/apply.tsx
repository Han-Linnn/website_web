import React, { useEffect, useState } from 'react'
import { history } from 'umi';
import PageFooter from '@/components/PageFooter';
import { createContact } from '@/services/api';
import { message } from 'antd';

const apply: React.FC<{}> = () => {

    const [name, setName] = useState<any>(null);
    const [phone, setPhone] = useState<any>(null);
    const [email, setEmail] = useState<any>(null);
    const [subject, setSubject] = useState<any>(null);
    const [company, setCompany] = useState<any>(null);
    const [position, setPosition] = useState<any>(null);
    const [intro, setIntro] = useState<any>(null);

    const submitForm = async () => {
        const tempData = {};
        tempData.name = name;
        tempData.phone = phone;
        tempData.email = email;
        tempData.subject = subject;
        tempData.company = company;
        tempData.position = position;
        tempData.intro = intro;

        console.log(tempData);
        const response = await createContact(tempData);
        if (response.code === 201) {
            message.success('提交成功');
        }
    };

    return (
        <>
            <div className="text-left iq-breadcrumb-one iq-bg-over black ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8 text-left align-self-center">
                            <nav aria-label="breadcrumb" className="text-left">
                                <h2 className="title" style={{ fontWeight: "bold", fontSize: "40px" }}>申请试用</h2>
                                <ol className="breadcrumb main-bg" style={{ color: "#437eeb", fontFamily: "Karla" }}>
                                    <li className="breadcrumb-item"><a onClick={() => { history.push('/') }}>首页</a></li>
                                    <li className="breadcrumb-item active">申请试用</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 text-right wow fadeInRight"> <img alt="banner"
                            className="img-fluid float-right" src="/images/about-us/04.png" /> </div>
                    </div>
                </div>
            </div>
            <div className="main-content">
                <section className="pt-0">
                    <div className="container">
                        <div className="row  align-items-center ">
                            <div className="col-sm-6">
                                <div style={{ margin: "60px" }}></div>
                                <h2 className="text-left mb-4">请留下您的联系方式，<br /> 我们的客服人员会尽快联系您</h2>
                                <div className="response-output "></div>
                                <form action="#" method="post" className="">
                                    <div className="contact-form">
                                        <div className=""> <input type="text" value={name} className="form-control text "
                                            placeholder="名字" onChange={(e: any) => {setName(e.target.value)}}/> </div>
                                        <div className=""> <input type="text" value={email} className="form-control text "
                                            placeholder="电邮地址" onChange={(e: any) => setEmail(e.target.value)}/> </div>
                                        <div className=""> <input type="text" value={subject} className="form-control text "
                                            placeholder="主题" onChange={(e: any) => setSubject(e.target.value)}/> </div>
                                        <div className=""> <textarea value={intro} cols="40" rows="10" className="form-control textarea "
                                            placeholder="请填写你要试用的产品及需求，谢谢。" onChange={(e: any) => setIntro(e.target.value)}></textarea> </div>
                                        <div>
                                            <button id="submit-4" name="submit" type="button" className="button d-block w-100" onClick={() => {
                                                submitForm()
                                            }}>
                                                发送信息
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="mt-5 col-sm-6 offset-lg-1 col-lg-5 offset-md-1 col-md-5">
                                <div className="wrapper">
                                    <div className="contact-box d-flex">
                                        <i aria-hidden="true" className="ion ion-android-call"></i>
                                        <div className="service-detail">
                                            <h4 className="mb-2">Phone support</h4>
                                            <ul className="list-inline mb-0">
                                                <li> <a href="tel:+0123456789"> (+86)13435678401</a> </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="contact-box d-flex   ">
                                        <i aria-hidden="true" className="fa fa-envelope-o"></i>
                                        <div className="service-detail">
                                            <h4 className="mb-2">Email us</h4>
                                            <ul className="list-inline mb-0">
                                                <li><a
                                                    href="/cdn-cgi/l/email-protection#1c6f696c6c736e685c756d727372757f68747971796f327f7371">
                                                    <span className="__cf_email__"
                                                        data-cfemail="bdcec8cdcdd2cfc9fdd4ccd3d2d3d4dec9d5d8d0d8ce93ded2d0">cs@gzecloud.com</span></a>
                                                </li>
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

export default apply