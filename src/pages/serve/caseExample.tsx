import React, { useEffect } from 'react'
import { history } from 'umi';
import PageFooter from '@/components/PageFooter';

const caseExample: React.FC<{}> = () => {

    useEffect(() => {
        
        const reSetSize =()=>{
            var windowsHeight = window.innerHeight;
            var height = document.getElementById("content");
            if (height) {
                height.style.height= (windowsHeight) + "px";
            }
        }

        window.onresize=reSetSize;
      }, []);

    return (
        <>
            <div className="text-left iq-breadcrumb-one iq-bg-over black ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8 text-left align-self-center">
                            <nav aria-label="breadcrumb" className="text-left">
                                <h2 className="title" style={{ fontWeight: "bold", fontSize: "40px" }}>数据可视化案例</h2>
                                <ol className="breadcrumb main-bg" style={{ color: "#437eeb", fontFamily: "Karla" }}>
                                    <li className="breadcrumb-item"><a onClick={() => { history.push('/') }} >首页</a></li>
                                    <li className="breadcrumb-item active">数据可视化</li>
                                    <li className="breadcrumb-item active">数据可视化案例</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 text-right wow fadeInRight start_animation animated"> 
                            <img alt="banner" className="img-fluid float-right" src="/images/about-us/03.png" /> 
                        </div>
                    </div>
                </div>
            </div>
            <div style={{background:"#F2F3F9"}}>
                    <div style={{textAlign:"center"}}>
                        <iframe 
                            id="content"
                            src="http://ap.datains.cn/finance-admin/#/auth?redirect=%2Fadmin%2FskyThroughWithNav%2Fdetail%2F16b9ccebbe194be29920b49441a1616c%2F%7B%22target%22:%22_blank%22,%22filterParams%22:%22%22%7D" 
                            style={{width:"100vw",height:"45vw"}}
                        ></iframe>  
                    </div>
            </div>
            <PageFooter />
        </>
    );
}

export default caseExample