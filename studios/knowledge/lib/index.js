// <define:STUDIO_PROJECT>
var define_STUDIO_PROJECT_default = { name: "AI\u5B66\u4E60\u8DEF\u7EBF", icon: "\u{1F9E0}", description: "\u7528\u6237\u81EA\u5B9A\u4E49\u5B66\u4E60\u8DEF\u7EBF\u3001\u539F\u521B\u793A\u4F8B\u53CA\u672C\u673A\u5B66\u4E60\u8FDB\u5EA6" };

// packages/sdk/entry.ts
import { fileURLToPath } from "node:url";
var name = "dsh-studio-knowledge";
var inject = ["studioProjects"];
function apply(ctx) {
  ctx.effect(() => ctx.studioProjects.register({ id: "knowledge", ...define_STUDIO_PROJECT_default, root: fileURLToPath(new URL("../static/", import.meta.url)) }), "\u5DE5\u4F5C\u5BA4\uFF1Aknowledge");
}
export {
  apply,
  inject,
  name
};
