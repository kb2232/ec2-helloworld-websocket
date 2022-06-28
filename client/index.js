const ws = new WebSocket(`ws://54.235.31.139:9128/websocket`);
ws.onopen = ()=> {
    console.log("server is open");
}
ws.onmessage = (event) => {
    const {data} = event;
    console.log("data from server - ", JSON.parse(data));
    const span = document.getElementById("totalreloads");
    span.innerText = JSON.parse(data).counter;
    document.getElementById("user").innerText = JSON.parse(data).user
}
