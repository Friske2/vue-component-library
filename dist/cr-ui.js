import { ref as l, onMounted as c, openBlock as o, createElementBlock as d, createElementVNode as u, normalizeClass as r, renderSlot as i } from "vue";
const f = (e, n) => {
  const s = e.__vccOpts || e;
  for (const [t, a] of n)
    s[t] = a;
  return s;
}, m = {
  props: {
    type: {
      type: String,
      default: "primary",
      validator(e) {
        return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].includes(e);
      }
    },
    isOutline: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: "md",
      validator(e) {
        return ["sm", "md", "lg"].includes(e);
      }
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    isBlock: {
      type: Boolean,
      default: !1
    }
  },
  setup({ type: e, isOutline: n, size: s }) {
    const t = l(""), a = l("");
    return c(() => {
      t.value = `${n ? "btn-outline-" + e : "btn-" + e}`, a.value = `btn-${s}`;
    }), {
      className: t,
      sizeName: a
    };
  }
}, b = {
  key: 0,
  class: "d-grid gap-2"
}, _ = ["disabled"], y = ["disabled"];
function p(e, n, s, t, a, g) {
  return s.isBlock ? (o(), d("div", b, [
    u("button", {
      disabled: s.disabled,
      class: r(`btn ${t.className} ${t.sizeName}`)
    }, [
      i(e.$slots, "default")
    ], 10, _)
  ])) : (o(), d("button", {
    key: 1,
    disabled: s.disabled,
    class: r(`btn ${t.className} ${t.sizeName}`)
  }, [
    i(e.$slots, "default")
  ], 10, y));
}
const B = /* @__PURE__ */ f(m, [["render", p]]);
export {
  B as Button
};
