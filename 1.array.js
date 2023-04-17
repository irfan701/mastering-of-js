//0	1	2	<-index <- []

const languages=['javascript','python','laravel']
console.log(languages.length) //3
console.log(languages[1]) //python

languages.push('dart');
console.log(languages) // Array last e add hobey

languages.unshift('Flutter');
console.log(languages) // Array first e add hobey


languages.pop();
console.log(languages) // Array tekey last item bahir korbey and return korbey


languages.shift();
console.log(languages) // Array tekey first item bahir korbey and return korbey
