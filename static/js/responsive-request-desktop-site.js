(function (doc) {
  function C(str) {
    return (doc.cookie.match(`(^|; )${str}=([^;]*)`) || 0)[2];
  }
  const ua = navigator.userAgent;
  const ismobile = / mobile/i.test(ua);
  const mgecko = !!(/ gecko/i.test(ua) && / firefox\//i.test(ua));
  const wasmobile = C('wasmobile') === 'was';
  const desktopvp = 'user-scalable=yes, maximum-scale=2';
  let el;

  if (ismobile && !wasmobile) {
    doc.cookie = 'wasmobile=was';
  } else if (!ismobile && wasmobile) {
    if (mgecko) {
      el = doc.createElement('meta');
      el.setAttribute('content', desktopvp);
      el.setAttribute('name', 'viewport');
      doc.getElementsByTagName('head')[0].appendChild(el);
    } else {
      doc.getElementsByName('viewport')[0].setAttribute('content', desktopvp);
    }
  }
})(document);
