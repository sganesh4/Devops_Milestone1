var express = require('express');
var needle = require("needle");

var app = express();

app.get('/', function (req, res) {

needle.get('http://104.236.26.43:8080/job/HelloWorld/api/json?tree=builds[number,timestamp,result]', function(error, response){
	if (!error && response.statusCode == 200){
    		//console.log(response.body);
                var builds = response.body.builds;
                var str = '<h2>Master Branch Build History</h2><table><tr><th>Build Number</th><th>Result</th></tr>';
                for(var i=builds.length-1; i>=0; i--){
		    str+='<tr>'
                    str+=('<td>'+builds[i].number+'</td>')
                    str+=('<td>'+builds[i].result+'</td>')
                    
		    str+='</tr>'
		}
                str+='</table>'
                res.send(str);
	}

});

});

app.listen(process.env.PORT || 5000);

module.exports = app;
//as
