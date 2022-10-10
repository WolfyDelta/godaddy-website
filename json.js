var jData = '[{"Group":"A", "Team":"Natus Vincere", "Win":"7", "Loss":"3"},' +
  '{"Group":"A", "Team":"Vici Gaming", "Win":"6", "Loss":"4"},' +
  '{"Group":"A", "Team":"Team Secret", "Win":"6", "Loss":"4"},' +
  '{"Group":"A", "Team":"Polaris Esports", "Win":"6", "Loss":"4"},' +
  '{"Group":"A", "Team":"Nouns", "Win":"4", "Loss":"6"},' +
  '{"Group":"A", "Team":"Tempest", "Win":"1", "Loss":"9"},' +
  '{"Group":"B", "Team":"Team Liquid", "Win":"8", "Loss":"2"},' +
  '{"Group":"B", "Team":"Extreme Gaming", "Win":"6", "Loss":"4"},' +
  '{"Group":"B", "Team":"Virtus.pro", "Win":"5", "Loss":"5"},' +
  '{"Group":"B", "Team":"T1", "Win":"5", "Loss":"5"},' +
  '{"Group":"B", "Team":"Infamous", "Win":"3", "Loss":"7"},' +
  '{"Group":"B", "Team":"Wildcard Gaming", "Win":"3", "Loss":"7"}]';
  

var seperator = ',';
$('#json').html(jData);
$('#btnConvert').click(function() {
    console.log("hello");
  ConvertToTable(jData);
});

function ConvertToTable(jData) {
  var arrJSON = typeof jData != 'object' ? JSON.parse(jData) : jData;
  var $table = $('<table/>');
  var $headerTr = $('<tr/>');
  
  for (var index in arrJSON[0]) {
    $headerTr.append($('<th/>').html(index));
  }
  $table.append($headerTr);
  for (var i = 0; i < arrJSON.length; i++) {
   var $tableTr = $('<tr/>');
    for (var index in arrJSON[i]) {
      $tableTr.append($('<td/>').html(arrJSON[i][index]));
    }
    $table.append($tableTr);
  }
  $('body').append($table);
  
  console.log(jData);
}
