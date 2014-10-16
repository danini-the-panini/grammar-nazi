function capitaliseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function swap(a, b, text) {
  a = a.replace("'", "['’]");
  var small = new RegExp("\\s"+a+"\\s");
  var end = new RegExp("\\s"+a+"\\.");
  var comma = new RegExp("\\s"+a+",");
  var big = new RegExp(capitaliseFirstLetter(a)+"\\s");

  return text.replace(small, " " + b + " ")
    .replace(big, capitaliseFirstLetter(b) + " ")
    .replace(end, " " + b + ".")
    .replace(comma, " " + b + ",");
}

var pairs = [
  ["your","you're"],
  ["their","they're"],
  ["its","it's"],
  ["affect","effect"],
  ["we're","were"],
  ["build","built"],
  ["accept","except"],
  ["is","are"],
  ["am","are"],
  ["right","write"],
  ["has","have"],
  ["an","a"],
  ["no","know"],
  ["we've","weave"],
  ["by","buy"],
  ["than","then"],
  ["thought","fought"],
  ["would","wood"],
  ["spend","spent"],
  ["too","to"]
]

$(function() {
  x = $('*').contents().filter(function() {
    return this.nodeType == 3;
  }).each(function() {
    for (var i = 0; i < pairs.length; i++) {
      this.textContent = swap(pairs[i][0], pairs[i][1], this.textContent);
    }
  });

  alert("You've been confuckulated!");
});
