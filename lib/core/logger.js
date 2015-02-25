export function log( format, ...args ){
  let message = format.replace( /%s/g, () => args.shift())
  console.log( message, ...args )
}
export function warn(args){
  console.warn(args)
}
export default { log, warn }
