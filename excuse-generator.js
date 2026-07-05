const who = ['Mi perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
const action = ['se comió', 'orinó en', 'aplastó', 'rompió'];
const what = ['mi tarea', 'mi teléfono', 'el auto', 'mi mochila', 'el informe final'];
const when = ['hoy', 'ayer', 'esta mañana', 'anoche'];

function generateExcuse() {
  const randomWho = who[Math.floor(Math.random() * who.length)];
  const randomAction = action[Math.floor(Math.random() * action.length)];
  const randomWhat = what[Math.floor(Math.random() * what.length)];
  const randomWhen = when[Math.floor(Math.random() * when.length)];
  const excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
  console.log(excuse);

  return excuse;
}

if (typeof module !== 'undefined') {
  module.exports = { generateExcuse };
}

generateExcuse();
