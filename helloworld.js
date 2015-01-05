// 1
//console.log("HELLO WORLD");


// 2
//var args = process.argv;
//var sliced = args.slice(2);

//var sum = function(ary){
  //var sum = 0;

  //for (var i = 0; i < ary.length; i++) {
    //sum += Number(ary[i]);
  //}
  //return sum;
//}

//console.log(sum(sliced));

// 3
//var fs = require('fs');

//var args = process.argv.slice(2);
//var buffer = fs.readFileSync(args[0]);
//var split = buffer.toString().split(/\n/);
//console.log(split.length-1);

// 4
//var fs = require('fs');
//var args = process.argv.slice(2);
//var buffer = fs.readFile(args[0], 'utf-8', function(err,data){
  //if(err) throw err;
  //var lines = data.split(/\n/).length-1;
  //console.log(lines);
//});

//5
var fs = require('fs');
var args = process.argv.slice(2);
var files = fs.readdir(args[0], function(err,list){
  if(err) throw err;
  collect(args, list);
});

var collect = function(args, list){
  for (file in list) {
    var re = RegExp('\.' + args[1]);

    if(list[file].match(re) != null) {
      console.log(list[file]);
    }
  }
}
