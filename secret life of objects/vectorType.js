class Vector {
    constructor(width,height, element = (x,y) => undefined) {
         this.width = width; 
         this.height = height;
         this.content = [];

         for (let y = 0; y < 3 ; y++) {
            for (let x = 0; x < 2; x++) {
                this.content[y * width + x] = element(x,y);
            }   
         }
     }
}