// iframe 根据内容自动适应宽高（ 同域）
< iframe
id = "frame_content"
src = "/account/login"
width = "390"
height = "350"
allowtransparency = "0"
frameborder = "0"
marginwidth = "0"
marginheight = "0" > 
< /iframe>

  <
  script type = "text/javascript" >
  function reinitIframe() {
    var iframe = document.getElementById("frame_content");
    var iframeWin = (iframe.contentWindow || iframe.contentDocument);
    var winDoc = (iframeWin.document || iframeWin);
    try {
      iframe.width = Math.max(winDoc.body.scrollWidth, winDoc.documentElement.scrollWidth);
      iframe.height = Math.max(winDoc.body.scrollHeight, winDoc.documentElement.scrollHeight);
    } catch (ex) {}
  }
// Vue 可在 mounted 钩子中调用
$(function () {
  window.setInterval("reinitIframe()", 200);
}); <
/script>