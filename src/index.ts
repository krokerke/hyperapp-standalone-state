import { app } from './lib.js';
import hyperHTML from 'hyperhtml/esm';

const state = {
  count: 0
}

const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value }),
}

const view = (state, actions) => {
  return hyperHTML.bind(document.getElementById('root'))`
    <div>
      <h1>${state.count}</h1>
      <button onclick=${() => actions.down(1)}>-</button>
      <button onclick=${() => actions.up(1)}>+</button>
    </div>
  `;
}

const logger = state => {
  console.log(`
    Count: ${state.count}
    =====================================
    'actions.down(val)' to decrease Count
    'actions.up(val)' to increase Count
  `);
  return;
}

const main = app(state, actions, view);
window['main'] = main;

window['actions'] = app(state, actions, logger);
