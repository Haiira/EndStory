// 自定义通过id获取元素
function my$(id){
    const res = document.getElementById(id)
    return res;
}

// 加载完成后关闭加载界面
window.onload = function() {
    my$("loading").style.display = 'none';
}