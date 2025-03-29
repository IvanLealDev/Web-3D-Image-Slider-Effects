const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.width = "100vw";
canvas.style.height = "100vh";
canvas.style.zIndex = "-1";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lights = [];

for (let i = 0; i < 6; i++) {
    lights.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 150 + 100,
        opacity: Math.random() * 0.5 + 0.2,
        dx: Math.random() * 1 - 0.5,
        dy: Math.random() * 1 - 0.5
    });
}

function drawLights() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    lights.forEach(light => {
        ctx.beginPath();
        ctx.arc(light.x, light.y, light.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${light.opacity})`;
        ctx.fill();

        light.x += light.dx;
        light.y += light.dy;

        if (light.x < -light.radius || light.x > canvas.width + light.radius) light.dx *= -1;
        if (light.y < -light.radius || light.y > canvas.height + light.radius) light.dy *= -1;
    });

    requestAnimationFrame(drawLights);
}

drawLights();