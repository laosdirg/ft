/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

export function invariant(condition, format, ...rest) {
  if (__DEV__) {
    if ( !format ) {
      throw new Error( 'invariant requires an error message argument' )
    }
  }

  if ( !condition ) {
    var error
    if ( !format ) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      )
    } else {
      var argIndex = 0
      error = new Error(
        'Invariant Violation: ' +
        format.replace(/%s/g, function() { return rest[argIndex++]; })
      )
    }

    throw error
  }
}
export default invariant
