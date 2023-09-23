document.addEventListener('DOMContentLoaded', function () {
    // 在文档加载后执行
    var nodeList = document.querySelectorAll('pre>code');
    for (var i = 0; i < nodeList.length; i++) {
        var node = nodeList[i];
        var copyButton = document.createElement('button');
        copyButton.className = 'copy-code-button';
        copyButton.textContent = '复制';
        copyButton.setAttribute('data-clipboard-target', 'code-' + i);
        var prevText = document.createElement('span');
        prevText.className = 'copy-code-tooltip';
        prevText.textContent = '';
        copyButton.appendChild(prevText);
        node.parentNode.insertBefore(copyButton, node);
        node.setAttribute('id', 'code-' + i);
    }

    var clipboard = new ClipboardJS('.copy-code-button');

    clipboard.on('success', function (e) {
        var tooltip = e.trigger.querySelector('.copy-code-tooltip');
        tooltip.textContent = '复制成功！';
        setTimeout(function () {
            tooltip.textContent = '';
        }, 2000);
        e.clearSelection();
    });

    clipboard.on('error', function (e) {
        var tooltip = e.trigger.querySelector('.copy-code-tooltip');
        tooltip.textContent = '复制失败';
        setTimeout(function () {
            tooltip.textContent = '';
        }, 2000);
    });
});
