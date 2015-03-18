export function autobind( instance ){
  getAllMethods( instance.constructor.prototype )
    .forEach( method => instance[ method ] = instance[ method ].bind( instance ))
}

function getAllMethods( instance ) {
  return Object.getOwnPropertyNames( instance )
    .filter( key => typeof instance[key] === 'function' && key !== 'constructor' )
}
