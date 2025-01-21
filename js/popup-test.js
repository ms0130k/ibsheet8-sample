'use strict';

const popupManager = (() => {
  const map = new Map();
  const openPopup = (name, func) => {
    map.set(name, func);
    window.open('index-popup.html', name, 'width=400,height=400');
  };
  window.addEventListener('message', (e) => {
    map.get(e.source.name).call(null, e.data);
  });
  return {
    openPopup,
  };
})();
