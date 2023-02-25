import { Grapher } from "./Source/Grapher.js";
window.onload = () => {
  const grapher = new Grapher();
  grapher.BuildGraph(grapher.sin(100, 4, 360, 5), false);
};
