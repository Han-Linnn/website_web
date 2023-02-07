import { history } from "umi";
import React from 'react';

const PageBreadcrumb: React.FC<{
    props: {
        routes: any
    }
}> = (props) => {
    const { routes } = props;

    return (
        <div className="text-left iq-breadcrumb-one iq-bg-over black">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-8 text-left align-self-center">
                        <nav aria-label="breadcrumb" className="text-left">
                            <ol className="breadcrumb main-bg">
                                <li className="breadcrumb-item"><a onClick={() => history.push('/')}>首页</a></li>
                                {routes.map((item: any, index: number) => {
                                    if (index === routes.length - 1) {
                                        return (
                                            <li key={item.name}>
                                                <span>{item.name}</span>
                                            </li>
                                        )
                                    }
                                    return (
                                        <li key={item.name}>
                                            <a
                                                onClick={() => item.path ? history.push(item.path) : null}
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ol>
                        </nav>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 text-right wow fadeInRight start_animation animated">
                        <img src="./images/about-us/04.png" alt="banner" className="img-fluid float-right" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageBreadcrumb;