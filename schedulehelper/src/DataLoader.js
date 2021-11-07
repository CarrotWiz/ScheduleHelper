
// Given a file(txt) parse it's data into a list of course objects
function parseFile(filename){
    var file = this.files[0];
    var courses = [];

    var reader = new FileReader();
    reader.onload = function(progressEvent){
        // Entire file
        console.log(this.result);

        // By lines
        var lines = this.result.split('\n');
        for(var line = 0; line < lines.length; line++){
            let holder = lines[line].split(",");
            let pre_reqs = [];
            if (holder.length() > 2){
                pre_reqs = parsePrereqs(holder.splice(2,holder.length()));
            }
            
        

            courses.append(createCourse(holder[0].strip(),holder[1].strip(),pre_reqs))
        }
    };
    reader.readAsText(file);

    return courses;
}

// Given a prereq option; append into a list and return; list length >1 indicates "or" options
function parsePrereqs(input_prereqs){
    var prereq_list = [];
    
    for (var lines in input_prereqs) {
        let options = lines.split("or");
        prereq_list.append(createPrerequisite(options));

    }

    return prereq_list
}

// create an object "Prerequisite" with an attribute = list of list of options
const createPrerequisite = (in_prereq_options) => {
    const obj = {
        prereq_options: in_prereq_option,
    
    }
    return obj;
}

// creat an object "Course" with attributes, name, creditHours, prerequ(of type object "Prerequsite")
const createCourse = (namea, cH, prereq) => {
    const obj = {
        name: namea,
        creditHours: cH,
        prerequ: prereq
    }
    return obj;
}

function on_load(){
    return parseFile("TestCSEClasses.txt");
}

// if given a class return it's prereqs; checked against a list of course objects
function findPreReqs(courses, targetCourse) {
    var prereqs;

    for (let course in courses) {
        if (course.name() == targetCourse) {
            prereqs = course.prereqs;
        }
    }

    return prereqs;
}



