(function () {
  const QR_SRC = 'images/wechat-qrcode.jpg';
  const OFFICIAL_QR_SRC = 'images/wechat-official-qr.jpg';
  const WECHAT_ID = 'igrape';

  function ensureWechatStyles() {
    if (document.getElementById('wechat-contact-inline-style')) return;
    const style = document.createElement('style');
    style.id = 'wechat-contact-inline-style';
    style.textContent =
      '.wechat-overlay{position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:1000;display:flex;align-items:center;justify-content:center;padding:24px}' +
      '.wechat-overlay.hidden{display:none!important}.wechat-overlay.show{display:flex!important}' +
      '.wechat-popover-fixed{background:#fff;border-radius:16px;padding:28px 24px;box-shadow:0 16px 48px rgba(0,0,0,.3);text-align:center;position:relative;max-width:320px;width:90%;box-sizing:border-box}' +
      '.wechat-popover-fixed img{width:220px;height:220px;display:block;border-radius:8px;margin:0 auto;object-fit:contain;pointer-events:auto!important;-webkit-touch-callout:default!important;-webkit-user-select:auto!important;user-select:auto!important;touch-action:auto!important;-webkit-user-drag:auto!important}' +
      '.wechat-popover-fixed .official-wechat-qr{width:240px;height:240px}' +
      '.wechat-popover-fixed .wechat-popover-label{display:block;text-align:center;font-size:13px;color:#6b7280;margin-top:12px;line-height:1.6}' +
      '.wechat-popover-fixed .wechat-qr-direct{display:inline-block;margin-top:10px;font-size:13px;color:#AB1942;font-weight:700;text-decoration:none}' +
      '.wechat-close{position:absolute;top:8px;right:8px;font-size:22px;color:#9ca3af;background:none;border:none;cursor:pointer;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:50%;line-height:1;transition:all .2s}' +
      '.footer-wechat,.footer-wechat-qr{cursor:pointer}.footer-wechat-qr{pointer-events:auto!important;-webkit-touch-callout:default!important;-webkit-user-select:auto!important;user-select:auto!important;touch-action:auto!important;-webkit-user-drag:auto!important}';
    document.head.appendChild(style);
  }

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

  function closeOfficialWechat() {
    const overlay = document.getElementById('official-wechat-overlay');
    if (!overlay) return;
    overlay.classList.add('hidden');
    overlay.classList.remove('show');
  }

  function bindOfficialWechatOverlay(overlay) {
    if (!overlay || overlay.dataset.officialWechatBound === 'true') return;
    overlay.dataset.officialWechatBound = 'true';

    overlay.addEventListener('click', function (event) {
      if (event.target === overlay || event.target.closest('.wechat-close')) {
        closeOfficialWechat();
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

  function ensureOfficialWechatOverlay() {
    ensureWechatStyles();
    let overlay = document.getElementById('official-wechat-overlay');
    if (overlay) {
      bindOfficialWechatOverlay(overlay);
      return overlay;
    }

    overlay = document.createElement('div');
    overlay.id = 'official-wechat-overlay';
    overlay.className = 'wechat-overlay hidden';
    overlay.innerHTML =
      '<div class="wechat-popover-fixed">' +
        '<button type="button" class="wechat-close" aria-label="关闭">&times;</button>' +
        '<a href="' + OFFICIAL_QR_SRC + '" target="_blank" rel="noopener">' +
          '<img class="official-wechat-qr" src="' + OFFICIAL_QR_SRC + '" alt="灰金重组公众号二维码">' +
        '</a>' +
        '<span class="wechat-popover-label">长按识别/扫码关注灰金重组公众号</span>' +
        '<span style="display:block;text-align:center;font-size:11px;color:#9ca3af;margin-top:4px">如果微信只显示“保存图片”，点二维码打开原图后再长按</span>' +
        '<a class="wechat-qr-direct" href="' + OFFICIAL_QR_SRC + '" target="_blank" rel="noopener">打开二维码原图</a>' +
      '</div>';

    document.body.appendChild(overlay);
    bindOfficialWechatOverlay(overlay);
    return overlay;
  }

  window.openWechatContact = function (event) {
    if (event) event.preventDefault();
    ensureWechatStyles();
    const overlay = ensureWechatOverlay();
    overlay.classList.remove('hidden');
    overlay.classList.add('show');
  };

  window.openOfficialWechat = function (event) {
    if (event) event.preventDefault();
    const overlay = ensureOfficialWechatOverlay();
    overlay.classList.remove('hidden');
    overlay.classList.add('show');
  };

  window.closeWechatContact = closeWechatContact;
  window.closeOfficialWechat = closeOfficialWechat;

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeWechatContact();
      closeOfficialWechat();
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    ensureWechatStyles();
    document.querySelectorAll('.footer-wechat').forEach(function (block) {
      if (block.dataset.officialWechatTrigger === 'true') return;
      block.dataset.officialWechatTrigger = 'true';
      block.setAttribute('role', 'button');
      block.setAttribute('tabindex', '0');
      block.setAttribute('aria-label', '打开灰金重组公众号二维码');
      block.addEventListener('click', window.openOfficialWechat);
      block.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') window.openOfficialWechat(event);
      });
    });
  });
})();
