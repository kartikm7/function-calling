# Function Calling
Just documenmting me learning function calling.
---
Function calling better coined as Tool calling, is a way to call functions using LLM's. That's rather misleading if you ask me.
Because we do not call the function using with the help rather we take help from the LLM to generate an input that fits the arguments of a defined function.

## Basic approach
The `basic.js` focuses on just getting the llm to output in JSON format and in a consistent format. Ollama provides a formatting parameter where in we can force an LLM to output in JSON. But in reality when we do the following we do not even need to Ollama to force the LLM to output JSON. Let me explain:

 We create an output schema:
```javascript
const schema =  {
    location: 'name of the location provided',
    description: 'information of the location provided'
  }
```

Now, we make some example outputs:
```javascript
const examples = [
  {location: "Paris", description: 'Paris, home to the Eiffel Tower and Notre-Dame cathedral, is one of the most visited cities in the world.'},
  {location:"Lagos", description: "Nigeria's capital city, is a major economic hub on the coast of West Africa. It is also known for its vibrant culture and cosmopolitan lifestyle."}
]
```

Finally with some prompt engineering we make a system prompt:
```javascript

const systemPrompt = `
You are a helpful AI agent, you need to output information of a location that the user provides strictly 
using the following schema: \n ${JSON.stringify(schema)} \n some output examples for reference are: \n ${JSON.stringify(examples)}`

```

This is so neat, and it works like a damn charm.