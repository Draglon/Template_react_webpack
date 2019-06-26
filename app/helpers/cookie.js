const time = new Date();
time.setTime(time.getTime() + 24 * 3600 * 1000);

export const getCookie = name => {
  const cookie = ` ${document.cookie}`;
  const search = ` ${name}=`;
  let setStr = null;
  let offset = 0;
  let end = 0;
  if (cookie.length > 0) {
    offset = cookie.indexOf(search);
    if (offset !== -1) {
      offset += search.length;
      end = cookie.indexOf(';', offset);
      if (end === -1) {
        end = cookie.length;
      }
      setStr = unescape(cookie.substring(offset, end));
    }
  }
  return setStr;
};

export const setCookie = (name, value, expires = time.toUTCString(), path, domain, secure) => {
  document.cookie = `${name}=${escape(value)}${expires ? `; expires=${expires}` : ''}${
    path ? `; path=${path}` : ''
  }${domain ? `; domain=${domain}` : ''}${secure ? '; secure' : ''}`;
};
