// 定义要监听的元素
var targetNode = document.getElementById('some-id');

// 监听的配置项
var config = {
  attributes: true,
  childList: true,
  subtree: true
};

// 当监听到变化时执行的回调函数
var callback = function (mutationsList) {
  for (var mutation of mutationsList) {
    if (mutation.type == 'childList') {
      console.log('A child node has been added or removed.');
    } else if (mutation.type == 'attributes') {
      console.log('The ' + mutation.attributeName + ' attribute was modified.');
    }
  }
};

// 创建监听实例
var observer = new MutationObserver(callback);

// 开始监听
observer.observe(targetNode, config);

// 结束监听
observer.disconnect();