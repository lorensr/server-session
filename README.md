Meteor package for server-side per-connection Session storage (not stored in Mongo)

When a client loads your webpage, a websocket connection is established. On the client, the handle for this connection is `Meteor.connection()`, and on the server, it's either `this.connection` in a Method context or `DDP._CurrentInvocation.get().connection`.

This package stores data on the server-side `connection` object, and is not reactive. Once the connection is broken (for instance, if the client were to reload the page or call `Meteor.disconnect()`), the data is gone.

- `Session.set(key, value)`
- `Session.get(key)`
- `Session.equals(key, testValue)`
- `Session.store`

```javascript
Session.set('foo', 1)
Session.set('bar', 2)

Session.get('foo')       // 1
Session.equals('foo', 1) // true
Session.store            // {foo: 1, bar: 2}
```

To test: 

```bash
cd server-session
meteor test-packages ./
open localhost:3000
```
