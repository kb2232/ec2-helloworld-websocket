const ws = new WebSocket(`ws://18.206.174.170:9128/websocket`);
ws.onopen = ()=> {
    console.log("server is open");
}
ws.onmessage = (event) => {
    const {data} = event;
    console.log("data from server - ", data);
    const span = document.getElementById("totalreloads");
    span.innerText = data;
}
