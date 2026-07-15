(function(window, document) {
  var BASE_COUNT = 128;
  var EXTRA_KEY = 'hj_diagnosis_completed_extra';
  var LEGACY_EXTRA_KEY = 'diagnosis_user_extra';
  var COMPLETED_KEY = 'hj_diagnosis_completed_sessions';

  function readInt(key) {
    var value = parseInt(window.localStorage.getItem(key) || '0', 10);
    return Number.isFinite(value) && value > 0 ? value : 0;
  }

  function getExtra() {
    var extra = readInt(EXTRA_KEY);
    var legacy = readInt(LEGACY_EXTRA_KEY);
    if (legacy > extra) {
      window.localStorage.setItem(EXTRA_KEY, String(legacy));
      extra = legacy;
    }
    return extra;
  }

  function getCount() {
    return BASE_COUNT + getExtra();
  }

  function formatCount() {
    return getCount() + '+';
  }

  function render() {
    var text = formatCount();
    var targets = document.querySelectorAll('[data-diagnosis-count], #diagnosis-count');
    targets.forEach(function(el) {
      el.textContent = text;
    });
  }

  function readCompletedSessions() {
    try {
      var raw = window.localStorage.getItem(COMPLETED_KEY);
      var parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  }

  function recordCompletion(sessionId) {
    var completed = readCompletedSessions();
    if (sessionId && completed.indexOf(sessionId) !== -1) {
      render();
      return getCount();
    }

    var extra = getExtra() + 1;
    window.localStorage.setItem(EXTRA_KEY, String(extra));
    window.localStorage.setItem(LEGACY_EXTRA_KEY, String(extra));

    if (sessionId) {
      completed.push(sessionId);
      window.localStorage.setItem(COMPLETED_KEY, JSON.stringify(completed.slice(-100)));
    }

    render();
    return BASE_COUNT + extra;
  }

  window.HJDiagnosisCounter = {
    base: BASE_COUNT,
    getCount: getCount,
    formatCount: formatCount,
    render: render,
    recordCompletion: recordCompletion
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }

  window.addEventListener('storage', function(event) {
    if ([EXTRA_KEY, LEGACY_EXTRA_KEY, COMPLETED_KEY].indexOf(event.key) !== -1) render();
  });
})(window, document);
