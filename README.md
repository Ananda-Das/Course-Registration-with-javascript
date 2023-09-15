# Course Regstration

##  Questions

## 1. Add at least 3 Project features 

- User can see all the course information at a glance. Like: Course name, Course Credit, Course Price, Course Description & user can enroll their desire course.
- User can see their enroll course name in the side bar.
- User cann't take same course twice.
- User can take upto 20hr credit course.
- If user try to enroll one course twice or enroll over 20hr credit then some toast (alert) will show the user.
- When enroll course user can see how many course & how many credit hours he/she enroll & how many he/she left to enroll.


## 2. Discuss how you managed the state in your assignment project.

For state management, I have used the useState hook. One variable is used to store the value of the current state in the usesState hook, and one function is used to update the state. There are a total of Four states defined in this React Project. One state was in the Courses.jsx component and three states were in the App.jsx component.

## In App.jsx Component

I have used three states. They are enrolls, totalCredits, remainingCredit. They are passed as props in the courses component. Each state are controlled by the useSate hook. For Object I used empty array & for number I used zero (0). The functions of these states were used to set the value. 
- In enrolls state I used it to enroll the subject after a user use the select button. The setEnrolls function is used to create a array list of a user enrolls list. 
- In totalCredits state I used it to calculate the total Credit of user enrolled Course. The setTotalCredits function is used to update the totalCredit as a user enroll more course. In this project a user can enroll upto 20hr total credit.
- In remaingCredit state I used it to calculate the remaining credit of the user enrolled course. As in this project a user can take upto 20hr credit so I need to calucate how many credit left after a user enroll a course & show it to the user. The setRemainingCredit function is used to update the remainingCredit state as user enroll more course & show him/her how many credit hour he/she left.


## In Courses.jsx Component

In Courses.jsx I used the courses state to read the data from API. The API is made with 'Fake data generator' & it was store in 'courses.json' file. To update the courses state value I used the setCourses function. The useState hook initial value was an empty array. 