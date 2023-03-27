var javascript = {
    name: 'Javascript',
    libraries: ['React', 'NextJs', 'Vue'],
    printLibraries: function () {
        console.log(this)
        this.libraries.forEach(function (item) {
          //  console.log(this)
            console.log(`${this.name} loves ${item}`)
        })
    }
}



javascript.printLibraries()

/*
output:
undefined loves React
undefined loves NextJs
undefined loves Vue

 */
/*
Note: Outside 'this' ,and forEach er Normal Function er 'this' completely different,
outside er this forEach er normal function er moddey change hoye jassey.

 */


var javascript2 = {
    name: 'Javascript',
    libraries: ['React', 'NextJs', 'Vue'],
    printLibraries: function () {
        console.log(this)
        var _self=this
        this.libraries.forEach(function (item) {
            //  console.log(this)
            console.log(`${_self.name} loves ${item}`)
        })
    }
}
javascript2.printLibraries()

/*
Javascript loves React
Javascript loves NextJs
Javascript loves Vue
 */



var javascript3 = {
    name: 'Javascript',
    libraries: ['React', 'NextJs', 'Vue'],
    printLibraries: function () {
        console.log(this)
        this.libraries.forEach( (item)=> {
            //  console.log(this)
            console.log(`${this.name} loves ${item}`)
        })
    }
}
javascript3.printLibraries()

/*
/*
Javascript loves React
Javascript loves NextJs
Javascript loves Vue


 Arrow function e,outter this er value, Arrow Fun er inside this er reference or value same takbey
*/