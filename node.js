class node {
    constructor(state, steps) {
        this.position = state;
        this.steps = steps;
    }

    reached() {
        let final =  [[1, 2, 3, 4],
                      [5, 7, 16, 8],
                      [9, 6, 11, 12],
                      [13, 10, 14, 15]];

        return check_equal(final,this.position);
        
    }

    next() {
        var next_nodes = [];
        var row_num, col_num;
        
        let arr_16 = where_16(this.position);
        row_num  = arr_16[0];
        col_num = arr_16[1];

       
        if (col_num != 3) {
            var temp_steps = this.steps.concat();
            temp_steps.push("RIGHT");
            var new_node = new node(next_state("RIGHT",this.position), temp_steps);
            next_nodes.push(new_node);
        }
        
        if (col_num != 0) {
            var temp_steps = this.steps.concat();
            temp_steps.push("LEFT")
            var new_node = new node(next_state("LEFT",this.position), temp_steps);
            next_nodes.push(new_node);
        }
        if (row_num != 0) {
            var temp_steps = this.steps.concat();
            temp_steps.push("UP")
            var new_node = new node(next_state("UP",this.position), temp_steps);
            next_nodes.push(new_node);
        }
        if (row_num != 3) {
            var temp_steps = this.steps.concat();
            temp_steps.push("DOWN")
            var new_node = new node(next_state("DOWN",this.position), temp_steps);
            next_nodes.push(new_node);
        }
   
        return next_nodes;
    }
}


