
Generate a flyd stream for document size, in streams of pairs of [document.body.offsetWidth, document.body.offsetHeight]. Each pair is pushed to the stream whenever the user resizes their window.

```js
import windowStream from 'flyd-windowresize'

windowStream() // [100, 200]
// user resizes window...
windowStream() // [400, 500]

halfSize$ = flyd.map(
  (pair) => [pair[0] / 2, pair[1] / 2]
, windowStream )

```
