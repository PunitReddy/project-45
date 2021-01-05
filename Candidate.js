class Candidate{

constructor(){

    this.name = null
    this.score = 0
    this.time = 0
    this.index = null

}

update(){

    var canIndex = "candidates/candidate" + this.index
    database.ref(canIndex).set({

        name: this.name
    })
}
}