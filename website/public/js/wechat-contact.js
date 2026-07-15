(function () {
  const QR_SRC = 'images/wechat-qrcode.jpg';
  const WECHAT_ID = 'igrape';

  function closeWechatContact() {
    const overlay = document.getElementById('wechat-overlay');
    if (!overlay) return;
    overlay.classList.add('hidden');
    overlay.classList.remove('show');
  }

  function bindWechatOverlay(overlay) {
    if (!overlay || overlay.dataset.wechatBound === 'true') return;
    overlay.dataset.wechatBound = 'true';

    overlay.addEventListener('click', function (event) {
      if (event.target === overlay || event.target.closest('.wechat-close')) {
        closeWechatContact();
      }
    });

    const card = overlay.querySelector('.wechat-popover-fixed');
    if (card) {
      card.addEventListener('click', function (event) {
        event.stopPropagation();
      });
      card.addEventListener('touchend', function (event) {
        event.stopPropagation();
      });
    }
  }

  function ensureWechatOverlay() {
    let overlay = document.getElementById('wechat-overlay');
    if (overlay) {
      bindWechatOverlay(overlay);
      return overlay;
    }

    overlay = document.createElement('div');
    overlay.id = 'wechat-overlay';
    overlay.className = 'wechat-overlay hidden';
    overlay.innerHTML =
      '<div class="wechat-popover-fixed">' +
        '<button type="button" class="wechat-close" aria-label="关闭">&times;</button>' +
        '<img src="' + QR_SRC + '" alt="微信二维码">' +
        '<span class="wechat-popover-label">长按/扫码添加微信，预约咨询</span>' +
        '<span style="display:block;text-align:center;font-size:11px;color:#9ca3af;margin-top:4px">如扫码不成功，可搜索微信号：' + WECHAT_ID + ' 添加</span>' +
      '</div>';

    document.body.appendChild(overlay);
    bindWechatOverlay(overlay);
    return overlay;
  }

  window.openWechatContact = function (event) {
    if (event) event.preventDefault();
    const overlay = ensureWechatOverlay();
    overlay.classList.remove('hidden');
    overlay.classList.add('show');
  };

  window.closeWechatContact = closeWechatContact;

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeWechatContact();
  });
})();
