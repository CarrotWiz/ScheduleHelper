"""""
Given a class

display that class's prereqs

**display what the class is a prereq for

------

User inputs their completed classes & chosen class to search

display what prereqs they already have & what they still need

display what that class will open up

------

If a prereq itself has a prereq, list those as well

"""""
## File Processor-----------------------------------------------------------------

def parseFile(filename):
    
    file = open(filename, 'r')
    courses = []

    lines = file.readlines()

    for index, line in enumerate(lines):
        holder = line.split(",")
        pre_reqs = []
        if len(holder) > 2:
            pre_reqs = parsePrereqs(holder[2:])
            
        

        courses.append(Course(holder[0].strip(),holder[1].strip(),pre_reqs))


    
    file.close()
    return courses


## Parese the input_prereqs[] set of the data into Prerequisite objects; return, prereqs[], a list of Prerequisite objects
def parsePrereqs(input_prereqs):
    prereq_list = []
    
    for lines in input_prereqs:
        options = lines.split("or")
        prereq_list.append(Prerequisite(options))

    return prereq_list

## Course Objects------------------------------------------------------------------

## Definition of the Prerequisite object
class Prerequisite:
    def __init__(self, pre_reqs):
        self.prereq_options = pre_reqs              ##list of possible courses that satisfy pre-req
        pass

    def getReqs(self):
        return self.prereq_options

    pass

## Definition of the Course object
class Course:
    def __init__(self, name, creditHrs, pre_reqs):
        self.name = name
        self.creditHrs = creditHrs
        self.pre_reqs  = pre_reqs
        pass
        
    
    def getName(self):
        return self.name

    def getCH(self):
        return self.creditHrs

    def getPre_Reqs(self):
        return self.pre_reqs

    pass

## Accessory Functionss -----------------------------------------------------------

# Given course data and a target course, returns the pre reqs of that course
def Find_Course_Pre_Reqs(courses, target_course):
    
    pre_reqs = []
    
    for course in courses:
        if course.getName == target_course:
            pre_reqs = course.getPre_Reqs

    return pre_reqs

# checks a list of prereqs against a list of courses and returns the overlap
# def Pre_Req_Overlap(userCourses, pre_reqs):
#     completed_prereqs = []
    
#     for req in pre_reqs:
#         for course in userCourses:
#             if req.getName == course.getName:
#                 course = Course(req.getName, req.getCH, req.getPre_Reqs)
#                 completed_prereqs.append(course)
            
#     return completed_prereqs


## MAIN ----------------------------------------------------------------------------

def main():

# get school course data
    filename = "TestCSEClasses.txt"

    # parse data files into course objects in a list
    courses = []
    courses = parseFile(filename)

    ##print("courses from file\n")
    
    # for course in courses:
    #     print(course.getName() + " " + course.getCH() + " \n" )
    #     print("Prereqs, " )
    #     reqs = course.getPre_Reqs()
    #     for prereq in reqs :
    #         print(prereq.getReqs())
    #         print(", ")
    #     print("\n")

#-----------------------------------
    
    #given a course display it's prereqs

    ##userInput = input("enter desired course for search (CSE ####)")

    # finds matching course and prints its prereqs
    ##print(Find_Course_Pre_Reqs(courses, userInput)) ##- RETURNS LIST OF PREREQS

#-------------------------------------
    
    #given user info and a course, display prereq overlap

    # userCourses = []

    # pre_reqs = []

    # filename = input("enter file name of user course data")

    # userCourses = parseFile(filename)
    
    # userInput = input("enter desired course for search (CSE ####)")

    # pre_reqs = Find_Course_Pre_Reqs(courses, userInput)
    
    

    pass

if __name__ == "__main__": main()
