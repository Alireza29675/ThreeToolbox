import ThreeComponent from "./ThreeComponent";

export default function (component, props, ...children) {
  props = props || {}
  const element = new component({ ...props, children })
  for (const child of children) {
    if (child.prototype instanceof ThreeComponent) element.append(child);
  }
  return element;
}
