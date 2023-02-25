export class Grapher {
  BuildGraph(coords) {
    const graphWrapper = document.getElementById("graph");
    let xCoords = coords.x;
    let yCoords = coords.y;
    const maxYVal = Math.max(...yCoords);
    let path = `M 0 ${maxYVal} L `;
    let cx,
      cy = 0;
    let val = "";
    xCoords.forEach((x, i) => {
      path += `${x} ${maxYVal - yCoords[i]} `;
      cx = x;
      cy = maxYVal - yCoords[i];
      val += `<line x1="${x}" y1="${maxYVal}" x2="${x}" y2="${
        maxYVal - yCoords[i]
      }"" stroke="yellow"/>
      <circle title="X:${cx} Y:${cy}" cx="${cx}" cy="${cy}" r="4" fill="yellow"/>`;
    });
    graphWrapper.setAttribute("d", path.trim());
    document.getElementById("graphWrapper").innerHTML += val;
    document.getElementById("graphWrapper").innerHTML += `<line x1="${Math.min(
      ...xCoords
    )}" x2="${Math.max(...xCoords)}" y1="${Math.max(
      ...yCoords
    )}" y2="${Math.max(...yCoords)}" stroke="red"/>`;
  }

  sin(amplitude, frequency, xRange, offsetX) {
    let x = [];
    let y = [];
    if (offsetX === null || offsetX === 0) {
      offsetX = 1;
    }
    for (let i = 0; i <= frequency * xRange; i += offsetX) {
      x.push(i / frequency);
      y.push(amplitude * Math.sin((i * Math.PI) / 180));
    }
    return { x: x, y: y };
  }

  cos(amplitude, frequency, xRange, offsetX) {
    let x = [];
    let y = [];
    if (offsetX === null || offsetX === 0) {
      offsetX = 1;
    }
    for (let i = 0; i < frequency * xRange; i += offsetX) {
      x.push(i / frequency);
      y.push(amplitude * Math.cos((i * Math.PI) / 180));
    }
    return { x: x, y: y };
  }

  tan(amplitude, frequency, xRange, offsetX) {
    let x = [];
    let y = [];
    if (offsetX === null || offsetX === 0) {
      offsetX = 1;
    }
    for (let i = 0; i < frequency * xRange; i += offsetX) {
      x.push(i / frequency);
      y.push(amplitude * Math.tan((i * Math.PI) / 180));
    }
    return { x: x, y: y };
  }

  modifyCoords(coords, xScale, yScale) {
    let x = [];
    let y = [];

    if (yScale === 0) {
      yScale = 1;
    }
    if (xScale === 0) {
      xScale = 1;
    }
    for (let i = 0; i < coords.x.length; i++) {
      x.push(coords.x[i] * xScale);
      y.push(coords.y[i] * yScale);
    }

    return { x: x, y: y };
  }
}
