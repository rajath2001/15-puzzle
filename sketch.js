var starting_state = [[1, 2, 3, 4],
                      [5, 6, 7, 8],
                      [9, 10, 11, 12],
                      [13, 14, 15, 16]];

let moves = [];
let state;

function next_state(direction,array){
  var row_num, col_num;
  let arr_16 = where_16(array);
  row_num  = arr_16[0];
  col_num = arr_16[1];
  var temp_state = copy_arr(array);

  if(direction == "RIGHT"){
    var temp =  temp_state[row_num][col_num + 1];
    temp_state[row_num][col_num + 1] = 16;
    temp_state[row_num][col_num] = temp;
  }

  if(direction == "LEFT"){
    var temp =  temp_state[row_num][col_num - 1];
    temp_state[row_num][col_num - 1] = 16;
    temp_state[row_num][col_num] = temp;
  }

  if(direction == "UP"){
    var temp =  temp_state[row_num - 1][col_num];
    temp_state[row_num - 1][col_num] = 16;
    temp_state[row_num][col_num] = temp;
  }

  if(direction == "DOWN"){
    var temp =  temp_state[row_num + 1][col_num];
    temp_state[row_num + 1][col_num] = 16;
    temp_state[row_num][col_num] = temp;
  }

  return temp_state;

}
function setup() {
    createCanvas(400, 400);
    background(220);noStroke();textSize(20);rectMode(CENTER);

  
  starting_node = new node(starting_state, []);

  let ans = solve_15(starting_node);
  moves = ans.steps;
  console.log(moves);
  console.log( ans);
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