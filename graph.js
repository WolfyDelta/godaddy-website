var f = 0.06;
var b = 1;
var r;
var health;
var damageMultiplier;
var value;
var y = new Array();
var x = new Array();

var text = "";


function calculate() {
    var demo = document.getElementById("demo");
	health = document.getElementById("health").value;
  r = -40;
 	var round;
  text = "";
  for(i = -4; i < 5; i++) {
  	damageMultiplier = 1 - ((f * r) / (b + f * Math.abs(r)));
    y[i+4] =  health / damageMultiplier;
    round = parseFloat(y[i+4]);
    round = Math.round(round); 
    text += "Armor : " +r +" Effective HP: " +round +"<br>";
    round = parseInt(round);
    x[i+4] = [r, round];
    r = r + 10;
  }
  demo.innerHTML = text;
}

function plot(){
	calculate();
  chart = new Highcharts.Chart({
  							chart: {
                	renderTo: 'container',
                	type: 'line',
                	marginRight: 130,
                	marginBottom: 25
                }, title: {
                	text: "Effective Health based on Armor",
                  x: -20 
                }, xAxis: {
                	title: {
                  	text: "Armor"
                  }
                }, yAxis: {
                	title: {
                  	text: "Effective Health"
                  }
                }, plotOptions: {
                	scatter: {
                  	marker: {
                    	radius: 5,
                      states: {
                      	hover: {
                        	enabled: true,
                          lineColor: "rgb(100,100,100)"
                        }
                      }
                    }, states: {
                    	hover: {
                      	marker: {
                        	enabled: false
                        }
                      }
                    }
                  }
                }, series: [{
                	name: "Effective Health",
                  color: "rgba(223,83,83,.5)",
                  data: x
                }]
  })
}
