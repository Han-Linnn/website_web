export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    layout: false,
    routes: [
      {
        path: '/home',
        component: './home/index',
      },
    ]
  },
  {
    path: '/resume',
    layout: false,
    routes: [
      {
        path: '/resume/experience',
        component: './serve/resumeExperience'
      },
    ]
  },
  {
    path: '/serve',
    layout: false,
    component: '../layouts/PageLayout',
    routes: [
      {
        path: '/serve/rpaTool',
        component: './serve/rpaTool'
      },
      {
        path: '/serve/textMining',
        component: './serve/textMining'
      },
      {
        path: '/serve/linearSearch',
        component: './serve/linearSearch'
      },
      {
        path: '/serve/dataVisual',
        component: './serve/dataVisual'
      },
      {
        path: '/serve/dataVisual/caseExample',
        component: './serve/caseExample'
      },
      {
        path: '/serve/dataManagement',
        component: './serve/dataManagement'
      },
      {
        path: '/serve/simulation',
        component: './serve/simulation'
      },
      {
        path: '/serve/simulation/simulationExperience',
        component: './serve/simulationExperience'
      }
    ]
  },
  {
    path: '/about',
    layout: false,
    component: '../layouts/PageLayout',
    routes: [
      {
        path: '/about',
        component: './about/aboutUs'
      },
    ]
  },
  {
    path: '/apply',
    layout: false,
    component: '../layouts/PageLayout',
    routes: [
      {
        path: '/apply',
        component: './apply/apply'
      }
    ]
  },
  {
    component: './404',
  },
];
