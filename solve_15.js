function solve_15(starting_node){
  
    let visited = [];
    let current = [];
   
   current.push(starting_node);

   while(current.length != 0){
       let current_node = current[0];
       if(current_node.reached())
            return current_node;
       
       visited.push([current_node.position]);
       
       current.shift();
       var next_moves  = current_node.next();

       for(var i = 0; i < next_moves.length; i++ ){
            if(!incl(visited,next_moves[i].position)){
                current.push(next_moves[i]);
            }
       }
   }
}

