
/*jshint node:true, esversion: 6, maxlen: false*/

module.exports = function (grunt) {

  grunt.config.init({

    dictionary: {
      troubleMarker: ' shortened versions of the text were used in two television commercials, known as "Crazy Ones", directed by Chiat Day\'s Jennifer Golub who also shared the art director credit with Jessica Schulman Edelstein and Yvonne Smith.',
      apple: 'When you grow up you tend to get told the world is the way it is and your job is just to live your life inside the world. Try not to bash into the walls too much. Try to have a nice family life, have fun, save a little money.'
    }
  });

  grunt.registerMultiTask('dictionary', 'Dictionary word', function () {

    const http = require('http'),
      querystring = require('querystring');

    var data = this.data,
      target = this.target,
      queryData = {
        keyfrom: 'FuDesign2008',
        key: '1676087853',
        type: 'data',
        doctype: 'json',
        version: '1.1',
        q: data
      },
      queryStr = querystring.stringify(queryData),
      done = this.async(),
      request;

    //console.log('http://fanyi.youdao.com/openapi.do?' + queryStr);

    request = http.request({
      host: 'fanyi.youdao.com',
      port: 80,
      path: '/openapi.do?' + queryStr,
      method: 'GET'
    }, function (response) {
      var buffer = [];

      response.on('data', function (data) {
        buffer.push(data);
      });

      response.on('end', function () {
        var responseData = JSON.parse(buffer.join(''));
        grunt.log.writeln(responseData.query);
        grunt.log.writeln(responseData.translation);
        done();
      });

    });

    request.on('error', function () {
      console.log('request error');
    });


    request.end();

  });

};
