var argv = require('minimist')(process.argv.slice(2));

console.log('argv', argv)
console.log('__dirname', __dirname);

var cluster = require('cluster');
var numCPUs = require('os').cpus().length;
 
if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    // 其它代码
    
} else {
    require(argv._[0]);
}
