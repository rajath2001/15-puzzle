function solve_15(starting_node){
  
    let visited = new Set();
    let current = new PriorityQueue();
   
   current.push(starting_node,0);

   while(current.size() < 100000){
       let current_node = current.pop();
      
       if(current_node.reached())
            return current_node;
        
        visited.add(convert_to_string(current_node.position));
  
       var next_moves  = current_node.next();
       var heuristic_current = heuristic(current_node.position);

       for(var i = 0; i < next_moves.length; i++ ){
             if(!visited.has(convert_to_string(next_moves[i].position))){
                current.push(next_moves[i],next_moves[i].steps.length + heuristic(next_moves[i].position) - heuristic_current);
             }
       }
   }
   console.log(current.pop());
   return current.pop();
}

