function loadConfiguredWorkout() {
    checkboxes = Array.from(muscle_groups.keys());
    exercises_to_generate = [];

    // Build list of selected exercises
    for(let i = 0; i < checkboxes.length; i++) {
        if(document.getElementById(checkboxes[i]).checked) {
            exercises_to_generate.push(checkboxes[i]);
        }
    }
    
    // Clear the current list
    element_list = document.getElementById("list");
    removeAllChildNodes(element_list);
    
    // Append a random list of 3 exercises per selected muscle groups
    for(let i = 0; i < exercises_to_generate.length; i++) {
        console.log("trying to append: " + muscle_groups.get(exercises_to_generate[i])[0]);
        appendToExerciseList(muscle_groups.get(exercises_to_generate[i]));
    }
}


function appendToExerciseList(list) {
    selected_exercises = getRandomFromList(list); 

    element_list = document.getElementById("list");

    for(let i = 0; i < selected_exercises.length; i++) {
        new_list_item = document.createElement("li");
        new_list_item.innerText = selected_exercises[i];
    
        element_list.appendChild(new_list_item);
    }
}

function getRandomFromList(list) {
    random_list = [];

    exercises_per_muscle_group = 
        Math.min(document.getElementById("exercises_per_muscle_group").value, list.length);

    while (random_list.length < exercises_per_muscle_group) {
        rand_int = Math.floor(Math.random() * list.length);

        if(!random_list.includes(rand_int)) {
            random_list.push(rand_int);
        }
    }

    for(let i = 0; i < random_list.length; i++) {
        random_list[i] = list[random_list[i]];
    }

    console.log(random_list);
    return random_list;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}