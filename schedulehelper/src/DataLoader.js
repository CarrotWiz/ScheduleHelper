const s =
    `CSE 1110,3
CSE 1111,3
CSE 1112,3
CSE 1113,1, MATH 1130
CSE 1114,2,
CSE 1211,3
CSE 1213,4
CSE 1222,3, MATH 1151, MATH 1154 or MATH 1161
CSE 1223,3, MATH 1130, MATH 1140, MATH 1149 or MATH 1150
CSE 1224,3, MATH 1130, MATH 1140, MATH 1149 or MATH 1150
CSE 2021,3, Math 1151, PHYSICS 1250
CSE 2111,3, MATH 1130
CSE 2112,3, CSE 1222, CSE 1223, ENGR 1281.01H or ENGR 1281.02H, *MATH 1151, *MATH 1161.01 or *MATH 1161.02
CSE 2122,3, CSE 1222
CSE 2123,3, CSE 1223
CSE 2133,3, CSE 2123
CSE 2193,1
CSE 2221,4, CSE 1212, CSE 1221, CSE 1222, CSE 1223, ENGR 1221, ENGR 1281.01H, ENGR 1281.02H, *MATH 1151, *MATH 1161.01 or *MATH 1161.02
CSE 2231,4, CSE 2221, * CSE 2321
CSE 2321,3, CSE 2122 or CSE 2123 or CSE 2221, MATH 1151 or MATH 1161, *CSE 2231
CSE 2331,3, CSE 2231, CSE 2321, STAT 3460 or 3470
CSE 2421,4, CSE 2122 or CSE 2123 or CSE 2231, CSE 2321 or MATH 2566
CSE 2431,3, CSE 2421 or CSE 2451, ECE 2560
CSE 2451,2, CSE 2221, *CSE 2231
CSE 2501,1, CSE 2122 or CSE 2123 or CSE 2231
CSE 3231,3, CSE 3901 or CSE 3902 or CSE 3903
CSE 3232,3, CSE 3241 or CSE 3901 or CSE 3902 or CSE 3903 or CSE 5241
CSE 3241,3, CSE 2133 or CSE 2231, CSE 2321 or MATH 2366
CSE 3244,3, CSE 3241 or CSE 5241, CSE 2421 or CSE 3430
CSE 3321,3, CSE 2231, CSE 2421, CSE 2331, MATH 3345
CSE 3341,3, CSE 2231,CSE 2331,CSE 2421,CES 3901 or CSE 3902 or CSE 3903
CSE 3421,3,CSE 2231, ECE 2060
CSE 3430,4, CSE 2122 or CSE 2123 or CSE 2231,CSE 2321
CSE 3461,3, CSE 2421 or CSE 3430
CSE 3521,3,CSE 2331 or CSE 5331
CSE 3541,3,CSE 3901 or CSE 3902 or 3903
CSE 3901,4,CSE 2231,CSE 2321
CSE 3902,4,CSE 2231,CSE 2321
CSE 3903,4,CSE 2231,CSE 2321
CSE 5911,4, CSE 3231 or CSE 5231, CSE 2501 or Philos 1338,CSE 3901 or CSE 3902 or CSE 3903
CSE 5912,4, CSE 3541 or CSE 5541, CSE 2501 or Philos 1338,CSE 3901 or CSE 3902 or CSE 3903
CSE 5913,4, CSE 3541 or CSE 5541, CSE 2501 or Philos 1338,CSE 3901 or CSE 3902 or CSE 3903
CSE 5914,4, CSE 3521 or CSE 5521, CSE 2501 or Philos 1338,CSE 3901 or CSE 3902 or CSE 3903
CSE 5915,4, CSE 3241 or CSE 5241, CSE 2501 or Philos 1338,CSE 3901 or CSE 3902 or CSE 3903`;

// Given a file(txt) parse it's data into a list of course objects
function parseFile(filename) {
    var lines = s.split('\n');
    var courses = [];
    for (var line = 0; line < lines.length; line++) {
        let holder = lines[line].split(",");
        let pre_reqs = [];
        if (holder.length > 2) {
            pre_reqs = parsePrereqs(holder.splice(2, holder.length));
        }
        courses[line] = createCourse(holder[0], holder[1], pre_reqs);
    }

    return courses;
}

// Given a prereq option; append into a list and return; list length >1 indicates "or" options
function parsePrereqs(input_prereqs) {
    var prereq_list = [];
    for (var line = 0; line < input_prereqs.length; line++) {
        let options = input_prereqs[line].split("or");
        prereq_list[line] = createPrerequisite(options);
    }
    return prereq_list;
}

// create an object "Prerequisite" with an attribute = list of list of options
const createPrerequisite = (in_prereq_option) => {
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

function on_load() {
    let a = parseFile('./TestCSEClasses.txt');
    return a;
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

export { on_load };

