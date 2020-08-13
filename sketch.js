var starting_state = [[1, 2, 3, 4],
                      [5, 6, 7, 8],
                      [9, 10, 11, 12],
                      [13, 14, 15, 16]];

let moves = [];
let state;


function setup() {
    createCanvas(600, 600);
    background(220);noStroke();textSize(36);rectMode(CENTER);
    final_position();
    
    starting_node = new node(starting_state, []);

    let ans = solve_15(starting_node);
    moves = ans.steps;
    state = starting_state;
    frameRate(10);
  }
  
  function draw() {
    if(moves.length != 0){
      state = next_state(moves[0],state);
      moves.shift();
      draw_array(state);
    }
  }
