// router.js
// 鉴权 配置路由时，可以在 meta 里定义一些信息，然后在 router.beforeEach 钩子内做鉴权判断。
const routers = [{
  path: '/admin/user',
  meta: {
    type: 'admin'
  },
  component: (resolve) => require(['./views/admin/user.vue'], resolve)
}];

// main.js

router.beforeEach((to, from, next) => {
  // 判断该跳哪
  let path = '';

  // 获取用户身份，比如从本地存储读取
  const status = localStorage.getItem('status');

  const type = to.meta.type;

  if (type === 'admin') {
    // 假设 status 1 才是管理员，不是都指向首页
    if (status !== 1) path = '/';
  }

  if (path) {
    next(path);
  } else {
    next();
  }
});