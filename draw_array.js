function draw_array(array){
    let w = width   / array.length   ;
    let h = height / array[0].length ;
    
    for(var y = 0 ; y < array.length; y += 1){
        for(var x = 0 ; x < array[0].length; x += 1 ){
            if(array[y][x] == 16)
                fill(0);
            else 
                fill(139,0,0);
            
            rect(x*w + w/2 , y * h + h/2 ,w -5, h - 5,10);

            if(array[y][x] != 16){
                fill(255, 215, 0);
                text(array[y][x],(x*w) +w/2 - 10 , (y*h) + h/2 + 10);
            }
        }
    }
}
