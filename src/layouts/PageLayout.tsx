import React, { useEffect } from 'react';
import PageHeader from '@/components/PageHeader';
import ScrollToTopButton from '@/components/ScrollToTopButton';
// import './PageLayout.less'


const PageLayout: React.FC<{ props: any }> = (props) => {

  useEffect(() => {
    const handleScroll =(e)=>{

      var header = document.getElementById('header'); //定义一个dom节点为'header'的header变量
      
      if (header) {
        if(window.pageYOffset >= 80){  //if语句判断window页面Y方向的位移是否大于或者等于导航栏的height像素值
          header.classList.add('header_bg');  //当Y方向位移大于80px时，定义的变量增加一个新的样式'header_bg'
        } else {
          header.classList.remove('header_bg'); //否则就移除'header_bg'样式
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
  }, []);

  const { children } = props;

  return (
    <>
      <PageHeader />
      {children}
      <ScrollToTopButton />
    </>
  )
}
export default PageLayout