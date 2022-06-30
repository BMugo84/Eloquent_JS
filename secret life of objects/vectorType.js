class Vector {
    //vector constructor that runs when Vector is calles with the new keyword
    constructor(width,height, element = (x,y) => undefined) {//set initial values of element(x,y) as undefined if given no parameters
        //sets instance properties for new matrix instance
         this.width = width; //number of vector columns
         this.height = height;//number of vector rows
         this.content = [];//vector element values
     }
}