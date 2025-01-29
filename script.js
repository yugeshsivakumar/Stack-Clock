function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    function createStack(number, count) {
        return Array(count).fill(number).map(n => `<div>${n}</div>`).join('');
    }
    
    document.getElementById("hour").innerHTML = createStack(hours, 3);
    document.getElementById("minute").innerHTML = createStack(minutes, 5);
    document.getElementById("second").innerHTML = createStack(seconds, 7);
    
    document.getElementById("hour").style.transform = `rotate(${hours * 30}deg)`;
    document.getElementById("minute").style.transform = `rotate(${minutes * 6}deg)`;
    document.getElementById("second").style.transform = `rotate(${seconds * 6}deg)`;
}

setInterval(updateClock, 1000);
updateClock();