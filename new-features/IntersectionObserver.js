var io = new IntersectionObserver(callback, option);




// 开始观察
io.observe(document.getElementById('example'));

// 停止观察
io.unobserve(element);

// 关闭观察器
io.disconnect();





// IntersectionObserverEntry
// time： 可见性发生变化的时间， 是一个高精度时间戳， 单位为毫秒
// target： 被观察的目标元素， 是一个 DOM 节点对象
// rootBounds： 根元素的矩形区域的信息， getBoundingClientRect() 方法的返回值， 如果没有根元素（ 即直接相对于视口滚动）， 则返回null
// boundingClientRect： 目标元素的矩形区域的信息
// intersectionRect： 目标元素与视口（ 或根元素） 的交叉区域的信息
// intersectionRatio： 目标元素的可见比例， 即intersectionRect占boundingClientRect的比例， 完全可见时为1， 完全不可见时小于等于0
var io = new IntersectionObserver(
  entries => {
    entries.forEach(i => {
      console.log('Time: ' + i.time);
      console.log('Target: ' + i.target);
      console.log('IntersectionRatio: ' + i.intersectionRatio);
      console.log('rootBounds: ' + i.rootBounds);
      console.log(i.boundingClientRect);
      console.log(i.intersectionRect);
      console.log('================');
    });
  }, {
    /* Using default options. Details below */
  }
);
// Start observing an element
io.observe(document.querySelector('#a'));
io.observe(document.querySelector('#b'));


// lazy load 懒性加载
function query(selector) {
  return Array.from(document.querySelectorAll(selector));
}

var observer = new IntersectionObserver(
  function (changes) {
    changes.forEach(function (change) {
      var container = change.target;
      var content = container.querySelector('template').content;
      container.appendChild(content);
      observer.unobserve(container);
    });
  }
);

query('.lazy-loaded').forEach(function (item) {
  observer.observe(item);
});

let set = new Set();
let a = NaN;
let b = NaN;
set.add(a);
set.add(b);
// set // Set {NaN}