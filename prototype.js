let myheros=['thor','spiderman']

let heropower={
    thor:"hammer",
    spiderman:"web"
}
                                        //in js everything is a object
Object.prototype.clash=function () {           //custom obja prototype
    console.log('clash is present in all object');
}

heropower.clash()
myheros.clash()

Array.prototype.hehe=function () {
    console.log('hehe');
}

myheros.hehe()