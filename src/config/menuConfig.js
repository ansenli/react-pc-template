const menuList = [{
    title: '首页信息',
    key: '/home',
    icon:'home'
  },
  {
    title: '表单',
    key: '/form',
    icon:'form',
    children: [{
        title: '普通表单',
        key: '/form/norlist',
        icon:'database',
      }
    ]
  },
  {
    title: '表格',
    key: '/table',
    icon:'table',
    children: [{
        title: '基础表格',
        key: '/table/norlist',
        icon:'bars',
      },
      {
        title: '高级表格',
        key: '/table/speciallist',
        icon:'solution',
      }
    ]
  }
];
export default menuList;