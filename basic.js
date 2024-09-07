import ollama from "ollama";

const schema =  {
    location: 'name of the location provided',
    description: 'information of the location provided'
  }
  
const examples = [
  {location: "Paris", description: 'Paris, home to the Eiffel Tower and Notre-Dame cathedral, is one of the most visited cities in the world.'},
  {location:"Lagos", description: "Nigeria's capital city, is a major economic hub on the coast of West Africa. It is also known for its vibrant culture and cosmopolitan lifestyle."}
]

const systemPrompt = `
You are a helpful AI agent, you need to output information of a location that the user provides strictly 
using the following schema: \n ${JSON.stringify(schema)} \n some output examples for reference are: \n ${JSON.stringify(examples)}`

const response = await ollama.chat({
  model: "qwen2:1.5b",
  // format: "json",
  messages: [
    { role: "system", content: systemPrompt },
    { role: "user", content: "India" },
  ],
});

console.log(response.message.content);
