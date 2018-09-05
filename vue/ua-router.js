// router.js
const ua = window.navigator.userAgent;
let isMobile = false;
if (ua.indexOf('iPhone') >= 0) isMobile = true;
if (ua.indexOf('Android') >= 0) isMobile = true;
if (ua.indexOf('iPad') >= 0) isMobile = true;

// 如果是移动端，给 .vue 的命名特殊处理，这里多了一级目录 mobile/
const path = isMobile ? 'mobile/' : '';

const routers = [{
  path: '/issues/:id',
  meta: {
    title: '问题'
  },
  // 这里用 path 来加载不同的 .vue 文件
  component: (resolve) => require([`./views/${path}issues.vue`], resolve)
}];

export default routers;