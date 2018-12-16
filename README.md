# terminal-flooder

Hate what's in your terminal?

You can use this package to flood your terminal with empty lines to make them COMPLETELY BEGONE!

Here's how you use it:

```js
const flooder = require("terminal-flooder")

// Flood infinitely
flooder.start()

// Stop it 
flooder.stop()

// Flood 1000 times
flooder.start(1000)```

Each flood is the equivalent of doing `console.log("\n")` over and over.