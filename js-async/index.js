import { Signal } from './node_modules/signal-polyfill/dist/index.js';

const counter = new Signal.State(0);
const counter2 = new Signal.State(0);

const w = new Signal.subtle.Watcher(function() {
  queueMicrotask(() => {
    for (const c of w.getPending()) {
      c.get();
    }

    w.watch();
  });
});

function effect(fn) {
  const computed = new Signal.Computed(() => fn());

  w.watch(computed);
  computed.get();
}

effect(() => document.getElementById('counter').innerText = counter.get());
effect(() => document.getElementById('counter2').innerText = counter2.get());

document.getElementById('minus').addEventListener('click', function () {
  if (counter.get() > 0) {
    counter.set(counter.get() - 1);
  }
});

document.getElementById('plus').addEventListener('click', function () {
  counter.set(counter.get() + 1);
});

document.getElementById('minus2').addEventListener('click', function () {
  if (counter2.get() > 0) {
    counter2.set(counter2.get() - 1);
  }
});

document.getElementById('plus2').addEventListener('click', function () {
  counter2.set(counter2.get() + 1);
});
