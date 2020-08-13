function check_equal(arr1,arr2){
    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 4 ; j++){
            if(arr1[i][j] != arr2[i][j])
                return false;
        }
    }
    return true;
}

function copy_arr(position){
    var new_array = [[0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0]];

    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 4 ; j++){
            new_array[i][j] = position[i][j];
        }
    }

    return new_array;
}

function where_16(array){
    var row_num, col_num;
  for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
          if (array[i][j] === 16) {
              row_num = i;
              col_num = j;
              break;
          }
      }
  }
  return [row_num,col_num];
}

let end_positions = [];
function final_position(){
    for(var i = 0; i < 4;i++){
        for(var j = 0; j < 4; j++){
            end_positions.push([0,0]);
        }
    }

    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 4; j++){
            end_positions[final[i][j]] = [i,j];
        }
    }
}

function heuristic(array){
    var sum = 0;
    for(var i = 0; i < 4;i++){
        for(var j = 0; j < 4; j++){
            sum += (Math.abs(end_positions[array[i][j]][0] - i) + Math.abs(end_positions[array[i][j]][1] - j));
        }
    }

    return sum;
}

function convert_to_string(array){
    let s = "";
    for(var y = 0; y < 4; y++){
        for(var x = 0; x < 4; x++){
            s += array[y][x].toString();
        }
    }
    return s;
}

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
