import React, { useEffect, useState } from 'react';
import './ScrollToTopButton.less'

const ScrollToTopButton: React.FC<{}> = () => {

    const [show, switchShow] = useState(false);

    useEffect(() => {
      const handleScroll =(e)=>{
  
          if(window.pageYOffset >= 240){
            switchShow(true);
          } else {
            switchShow(false);
          }
      }
  
      window.addEventListener('scroll', handleScroll)
    }, []);

    const gotoContainer = (anchorName: string) => {
        if (anchorName) {
            const anchorElement = document.getElementById(anchorName);
            if (anchorElement) {
                anchorElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    return (
        <>
            <div id="back-to-top" className={show ? 'fadeIn' : 'fadeOut'}>
                <a className="top" onClick={() => {gotoContainer('main-header')}}> 
                    <i className="ion-ios-arrow-up"/> 
                </a>
            </div>
        </>
    );
};

export default ScrollToTopButton