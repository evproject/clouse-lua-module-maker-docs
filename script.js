const canvas = document.getElementById("studioCanvas");
const ctx = canvas.getContext("2d");

function roundedRect(x, y, w, h, r) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + w - radius, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
  ctx.lineTo(x + w, y + h - radius);
  ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
  ctx.lineTo(x + radius, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function text(label, x, y, size, color, weight = "700") {
  ctx.fillStyle = color;
  ctx.font = `${weight} ${size}px Inter, Segoe UI, sans-serif`;
  ctx.fillText(label, x, y);
}

function pill(label, x, y, w, color) {
  roundedRect(x, y, w, 30, 7);
  ctx.fillStyle = color;
  ctx.fill();
  text(label, x + 13, y + 20, 12, "#071014", "900");
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#10161c";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#172029";
  roundedRect(24, 28, 188, 284, 8);
  ctx.fill();
  text("Project", 42, 58, 13, "#a8b4ba", "800");
  pill("quick_start", 42, 75, 128, "#5bd6c8");
  text("Template", 42, 124, 13, "#a8b4ba", "800");
  pill("HUD", 42, 141, 70, "#f0c96a");
  text("Actions", 42, 192, 13, "#a8b4ba", "800");
  ["Create", "Validate", "Export", "Import"].forEach((label, index) => {
    const y = 210 + index * 34;
    roundedRect(42, y, 124, 24, 6);
    ctx.fillStyle = index === 1 ? "#26323b" : "#202a32";
    ctx.fill();
    text(label, 55, y + 17, 12, "#eef3f5", "800");
  });

  ctx.strokeStyle = "#3a4650";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(232, 170);
  ctx.bezierCurveTo(280, 170, 284, 70, 334, 70);
  ctx.moveTo(232, 170);
  ctx.bezierCurveTo(288, 170, 294, 170, 344, 170);
  ctx.moveTo(232, 170);
  ctx.bezierCurveTo(280, 170, 286, 270, 336, 270);
  ctx.stroke();

  const cards = [
    ["module.json", "manifest, events, settings", 342, 42, "#5bd6c8"],
    ["main.lua", "entry hooks and module code", 356, 142, "#f0c96a"],
    ["export.zip", "portable package", 342, 242, "#e87878"]
  ];

  cards.forEach(([title, subtitle, x, y, color]) => {
    roundedRect(x, y, 202, 64, 8);
    ctx.fillStyle = "#1b242d";
    ctx.fill();
    ctx.strokeStyle = "#2f3c45";
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 6, 64);
    text(title, x + 18, y + 26, 15, "#eef3f5", "900");
    text(subtitle, x + 18, y + 47, 11, "#a8b4ba", "700");
  });
}

draw();
window.addEventListener("resize", draw);
