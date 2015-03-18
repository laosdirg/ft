## Application lifecycle overview
```
REQUEST PIPELINE:

  server                    |   client
                            |
  c = new DataContext()     <-- REQUEST path
  c.navigate(path)          |
  html = rendertoString(c)  |
  state = c.serialize()     |
  SEND html, state          --> DISPLAY html
  ...                       |   c = new DataContext( state )
                            |   renderToDom( c )
                            |   c.navigate(path)
                            |
                            |   ...
  push update from server   --> c.action( X )
```

## Overall architecture

A Laosdirg webapp consists of two parts, the data layer and the controller view.

Right now, we implement controller views using react, and the data layer using flux.

### Data interface
 * `constructor([state])` instantiate new context (optionally from given state, see serialize)
 * `serialize()` serializes entire state into an object that can be used on constructor
 * `getStore(Store)` return instance of given storeclass

### UI architecture
The UI should be renderable from a valid data context
 * `renderToString(context)`
 * `renderToDOM(context, container)`

## Misc
Server:
  * markup
  * javascript: server should only provide a simple bootstrap js file which
      detects browser capabilities and requests the actual file.
      it should detect both es6 support (and request either clean or compiled
      source), but also which polyfills to request.

Shared:
  * flux: the flux layer is separate from the rendering logic



A laosdirg react ui component is renderable using a context prop that implements
 * getStore(Store)
 * listen(Store)

 * dispatcher:
   * dispatch(action)
   * waitFor(Store)

 * executeAction
