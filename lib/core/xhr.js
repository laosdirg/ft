/**
 * A low-level XHR library for ajax requests
 *
 * I would like to build a higher level wrapper around this,
 * that keeps track of performed requests (progressbar?)
 */

export function request( url, options = {} ) {
  if ( !options.method ) {
    options.method = 'GET';
  }

  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener('error', error => {
      reject({ type: 'network', status: error.target.status });
    });
    xhr.addEventListener('load', function(){
      var status = xhr.status;
      let response = xhr.response

      if (!xhr.responseType || xhr.responseType !== 'json') {
        response = JSON.parse( response )
      }
      if (status === 200) {
        resolve(response);
      } else {
        reject({ type: 'application', status });
      }
    });

    xhr.open(options.method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    for (var header in options.headers) {
        xhr.setRequestHeader(header, options.headers[header]);
    }
    xhr.responseType = 'json';
    var data = options.payload ? JSON.stringify(options.payload) : undefined;

    xhr.send( data );
  });
}

export default { request };
