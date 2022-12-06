var x = (t, e, o) => {
  if (!e.has(t))
    throw TypeError("Cannot " + o);
};
var i = (t, e, o) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, o);
};
var s = (t, e, o) => (x(t, e, "access private method"), o);
const defaultPropsApp = {
  text: "",
  badge: "",
  direction: "",
  buttonRemove: !1,
  delay: 5e3,
  autoHide: !0,
  type: "snowball",
  sound: !1,
  buttonRemoveText: "x",
  status: "success",
  position: "right-top",
  icons: {
    error: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 16 16">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg>`,
    warning: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 16 16">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg>`,
    success: `<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
      </svg>`
  }
};
var h, c;
class ParamsSmoothAlert {
  constructor(e, o) {
    i(this, h);
    e = { ...defaultPropsApp, ...e }, this.node = o, this.text = e.text, this.direction = e.direction, this.delay = e.delay, this.buttonRemove = e.buttonRemove, this.buttonRemoveText = e.buttonRemove, this.autoHide = e.autoHide;
  }
  setParams() {
    this.node.style.direction = this.direction, this.autoHide && s(this, h, c).call(this);
  }
}
h = new WeakSet(), c = function() {
  setInterval(() => {
    this.node.classList.add("vue-smoothalert__pop-bye");
  }, this.delay), setInterval(() => {
    this.node.remove();
  }, this.delay + 1200);
};
const Templates = {
  blurry: (t) => `<div class="test-template">
                </div>`,
  mushy: (t) => {
    let e = `<button class="">
        <svg xmlns="http://www.w3.org/2000/svg" class="vue-smoothalert__w-6" fill="currentColor" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>`;
    return `
        <div class="smoothalert-mushy smoothalert__smoothalert">
            <span>${t.text}</span>
            ${t.buttonRemove ? e : ""}
        </div>`;
  },
  note: (t) => `<div class="inline-flex items-center bg-white leading-none rounded-full p-2 shadow text-teal text-sm">
        <span class="inline-flex bg-pink-600 text-white rounded-full h-6 px-3 justify-center items-center">
            ${t.badge}
        </span>
        <span class="inline-flex px-2 text-pink-600">
            ${t.text}
        </span>
      </div>`,
  testName: (t) => `<div class="smoothalert__testName smoothalert__smoothalert">
                        <div class="smoothalert__testName-badge" >
                          ${t.icon}
                        </div>
                        <div class="smoothalert__testName-text">
                          ${t.text}
                        </div>
                      </div>
`
}, types = ["simple", "notSimple", "snowball", "testTemplate", "mushy", "note", "testName"], position = ["left-top", "left-bottom", "right-top", "right-bottom", "bottom", "top"], prefix = "smoothalert__";
var m, u, d, v, r, a, l, p;
class SmoothAlert {
  constructor(props) {
    i(this, m);
    i(this, d);
    i(this, r);
    i(this, l);
    typeof props == "string" ? props = { ...defaultPropsApp, text: props } : props = { ...defaultPropsApp, ...props }, this.typeSmoothAlert = props == null ? void 0 : props.type, this.props = props, this.props.icon = eval(`this.props.icons.${this.props.status}`), this.html, this.area, s(this, m, u).call(this);
  }
  static pop(t) {
    return new this(t);
  }
  simple() {
    const t = document.createElement("div");
    return t.innerHTML = this.props.text, t.classList.add("smoothalert__smoothalert-simple"), t;
  }
  snowball() {
    var o;
    const t = document.createElement("div");
    t.setAttribute("class", "smoothalert__smoothalert smoothalert__smoothalert-blurry");
    const e = document.createElement("span");
    if (e.innerHTML = this.props.text, this.props.buttonRemove) {
      const n = document.createElement("button");
      n.classList.add("smoothalert__smoothalert-blurry-close"), n.type = "button", n.innerHTML = (o = this.props) == null ? void 0 : o.buttonRemoveText, t.appendChild(n);
    } else
      t.style.paddingTop = "10px", t.style.paddingBottom = "10px";
    return t.appendChild(e), t;
  }
  mushy() {
    return s(this, r, a).call(this, Templates.mushy(this.props));
  }
  testTemplate() {
    let t = Templates.blurry(this.props);
    return t = s(this, r, a).call(this, t), document.createElement("div"), document.classList.add(), t;
  }
  notSimple() {
    return "<div>Is not simple</div>";
  }
  note() {
    s(this, r, a).call(this, Templates.note(this.props));
  }
  testName() {
    const t = s(this, r, a).call(this, Templates.testName(this.props));
    return t.dataset.type = this.props.status, console.log(t), t;
  }
  dark() {
    return this.html.classList.add("smoothalert__smoothalert-dark"), this;
  }
  bottom() {
    return this.props.position = "bottom", this;
  }
  destructor() {
    this.area.appendChild(this.html);
  }
}
m = new WeakSet(), u = function() {
  if (document.querySelector(`.smoothalert__area.${s(this, l, p).call(this)}`) === null) {
    const e = document.createElement("div");
    e.setAttribute("class", `${prefix}area ${s(this, l, p).call(this)}`), document.querySelector("body").appendChild(e);
  }
  this.area = document.querySelector(`.smoothalert__area.${s(this, l, p).call(this)}`), s(this, d, v).call(this);
}, d = new WeakSet(), v = function() {
  if (!types.includes(this.typeSmoothAlert))
    throw new Error("Smoothalert type " + this.typeSmoothAlert + " not found");
  return console.log(this.typeSmoothAlert), this.html = eval(`this.${this.typeSmoothAlert}()`), new ParamsSmoothAlert(this.props, this.html).setParams(), this.area.appendChild(this.html), this;
}, r = new WeakSet(), a = function(t) {
  var e = document.createElement("div");
  return console.log(t), e.innerHTML = t.trim(), e.firstChild;
}, l = new WeakSet(), p = function() {
  return position.includes(this.props.position) ? `${prefix}${this.props.position}` : `${prefix}${defaultPropsApp.position}`;
};
const Smooth = SmoothAlert, defaultProps = defaultPropsApp;
export {
  Smooth as default,
  defaultProps
};
