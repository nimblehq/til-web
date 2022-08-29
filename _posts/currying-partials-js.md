---
title: 'Currying in JavaScript'
excerpt: 'Currying in JavaScript from https://javascript.info/currying-partials, one of the use cases is to return a new function with some default values. This site also provides other JavaScript topics with nice examples and use cases. :sparkles:'
date: '2022-06-13T15:00:00+07:00'
author:
  username: hanam1ni
tags: ['web', 'javascript']
---

Currying in JavaScript from https://javascript.info/currying-partials, one of the use cases is to return a new function with some default values. This site also provides other JavaScript topics with nice examples and use cases. :sparkles:

Here example that I mentioned about return a function with default values:

```js
function log(date, importance, message) {
  alert(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

# Curry function provided by lodash
const log = _.curry(log);

let logNow = log(new Date());
logNow("INFO", "message"); // [HH:mm] INFO message
```
