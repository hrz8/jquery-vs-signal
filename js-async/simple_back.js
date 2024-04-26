import { Signal } from './node_modules/signal-polyfill/dist/index.js';

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}  

const counter = new Signal.State(0);
const counter2 = new Signal.State(0);

const w = new Signal.subtle.Watcher(() => {
    queueMicrotask(() => {
        document.getElementById('counter').innerText = counter.get();
        document.getElementById('counter2').innerText = counter2.get();
        console.log('ketrigger');
        w.watch();
    });
});

w.watch(counter);
w.watch(counter2);

document.getElementById('minus').addEventListener('click', function() {
    counter.set(counter.get() - 1);
});

document.getElementById('plus').addEventListener('click', function() {
    counter.set(counter.get() + 1);
});

document.getElementById('minus2').addEventListener('click', function() {
    counter2.set(counter2.get() - 1);
});

document.getElementById('plus2').addEventListener('click', function() {
    counter2.set(counter2.get() + 1);
});
