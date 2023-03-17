function increment(id, type) {
    input = document.getElementById(id);

    if(type == '-' && input.value > 1) {
        input.value = parseInt(input.value) - 1;   
    } 

    if(type == '+') {
        input.value = parseInt(input.value) + 1;   
    }
}