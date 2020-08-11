class node {
    constructor(state, steps) {
        this.state = state
        this.steps = steps
    }

    reached() {
        if (this.state === [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12],
                [13, 14, 15, 16]
            ]) {
            return true;
        }
    }

    next() {
        var next_nodes;
        var row_num, col_num;
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (this.state[i][j] === 16) {
                    row_num = i;
                    col_num = j;
                    break;
                }
            }
        }
        if (col_num != 3) {
            var temp_state = this.state.concat();
            var temp_steps = this.steps.concat();
            temp_steps.push("RIGHT")
            temp_state[row_num][col_num + 1] = 16;
            temp_state[row_num][col_num] = this.state[row_num][col_num + 1];
            new_node = new node(temp_state, temp_steps);
            next_nodes.push(new_node);
        }
        if (col_num != 0) {
            var temp_state = this.state.concat();
            var temp_steps = this.steps.concat();
            temp_steps.push("LEFT")
            temp_state[row_num][col_num - 1] = 16;
            temp_state[row_num][col_num] = this.state[row_num][col_num - 1];
            new_node = new node(temp_state, temp_steps);
            next_nodes.push(new_node);
        }
        if (row_num != 0) {
            var temp_state = this.state.concat();
            var temp_steps = this.steps.concat();
            temp_steps.push("UP")
            temp_state[row_num - 1][col_num] = 16;
            temp_state[row_num][col_num] = this.state[row_num - 1][col_num];
            new_node = new node(temp_state, temp_steps);
            next_nodes.push(new_node);
        }
        if (row_num != 3) {
            var temp_state = this.state.concat();
            var temp_steps = this.steps.concat();
            temp_steps.push("DOWN")
            temp_state[row_num + 1][col_num] = 16;
            temp_state[row_num][col_num] = this.state[row_num + 1][col_num];
            new_node = new node(temp_state, temp_steps);
            next_nodes.push(new_node);
        }
        return next_nodes;
    }
}

//input
var starting_state = [
    [1, 3, 4, 8],
    [16, 13, 2, 7],
    [9, 6, 5, 12],
    [10, 14, 11, 15]
]
starting_node = new node(starting_state, [])