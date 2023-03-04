type TCookieProps = {
  path?: string;
  expires?: Date|string|null|number;
};

export function getCookie(name:string):string {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : "";
}

export function setCookie(name:string, value:string|null, props?:TCookieProps) {
  props = {
    path: "/",
    ...props,
  };

  let exp = props.expires;
  if (typeof exp == "number" && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  } 
  if (exp && exp instanceof Date && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }

  value = value?encodeURIComponent(value):value;
  let updatedCookie = name + "=" + value;
  for (const propName in props) {
    updatedCookie += "; " + propName;
    const propValue = props[propName as keyof TCookieProps]; 
      updatedCookie += "=" + propValue;
  }
  document.cookie = updatedCookie;
}

export function deleteCookie(name:string):void {
  setCookie(name, null, { expires: -1 });
}
