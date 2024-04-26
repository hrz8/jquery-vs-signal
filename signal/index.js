import { Signal } from './node_modules/signal-polyfill/dist/index.js';
import { effect } from "./effect.js";

const counter = new Signal.State(0);

effect(() => {
  document.getElementById('counter').innerText = counter.get();
});

document.getElementById('minus').addEventListener('click', function() {
  counter.set(counter.get() - 1);
});

document.getElementById('plus').addEventListener('click', function() {
  counter.set(counter.get() + 1);
});
