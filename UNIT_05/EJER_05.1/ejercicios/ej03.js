const textos = [
  '{"nombre":"Ana","edad":19}',
  "{'nombre':'Luis'}",
  '{"activo":true,}',
  '[1, 2, 3]',
  '{nombre:"Marta"}',
  '{"curso":"2DAW"',
];

const textos2 = [
  '{"nombre":"Ana","edad":19}',
  '{"nombre":"Luis"}',
  '{"activo":true}',
  '[1, 2, 3]',
  '{"nombre":"Marta"}',
  '{"curso":"2DAW"}',
];

for (const json of textos){
    try {
        JSON.parse(json);
        console.log(`✔ ${json} → ${typeof(json)}`);
    } catch (error) {
        console.log(`✘ ${json} → ${error}`);
    }
}

console.log("");
for (const json of textos2){
    try {
        JSON.parse(json);
        console.log(`✔ ${json} → ${typeof(json)}`);
    } catch (error) {
        console.log(`✘ ${json} → ${error}`);
    }
}