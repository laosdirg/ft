Overall architecture
====================

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



Flux implementation
===================

Should not depend on React
