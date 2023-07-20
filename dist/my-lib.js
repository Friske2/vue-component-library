import { openBlock as e, createElementBlock as o, renderSlot as n } from "vue";
const p = {
  __name: "Button",
  props: {
    msg: String
  },
  setup(r) {
    return (t, s) => (e(), o("button", null, [
      n(t.$slots, "default")
    ]));
  }
};
export {
  p as Button
};
