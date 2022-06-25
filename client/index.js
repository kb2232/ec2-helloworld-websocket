console.log({env: process.env.NODE_ENV})
const ws = new WebSocket(`ws://localhost:9128/websocket`);
ws.onopen = ()=> {
    console.log("server is open");
}
ws.onmessage = (event) => {
    const {data} = event;
    console.log("data from server - ", data);
    const span = document.getElementById("totalreloads");
    span.innerText = data;
}
