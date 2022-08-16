/* function solve(times) {

    let index = 0;
    let allQuestion = Number(times.pop());
    let firstGroup = Number(times[index]);
    index++;
    let secondGroup = Number(times[index]);
    index++;
    let thirdGroup = Number(times[index]);

    let totalQuestion = firstGroup + secondGroup + thirdGroup;
    let hoursNeeded = 1
    let studentsLeft = 0

    for(i = totalQuestion; totalQuestion <= allQuestion; i++) {
        hoursNeeded++;
        if(hoursNeeded % 4 == 0 && hoursNeeded != 0) {
            hoursNeeded++;
        }   
        allQuestion -= totalQuestion;
        if(allQuestion < 0) {
            break;
        }
    }
    console.log(`Time needed: ${hoursNeeded}h.`)
} */

function solve(times) {

    const firstGroup = Number(times[0]);
    const secondGroup = Number(times[1]);
    const thirdGroup = Number(times[2]);
    let totalStudents = Number(times[3]);
    const totalStudentsPerHours = firstGroup + secondGroup + thirdGroup;
  
    let hours = 1;
    while (totalStudents > 0) {
      if (hours % 4 !== 0 && hours > 0) {
        totalStudents -= totalStudentsPerHours;
      } else if (hours === 0) {
        totalStudents -= totalStudentsPerHours;
      }
      hours++;
    }
    hours--;
    console.log(`Time needed: ${hours}h.`);
  
  }

solve(['3','2','5','40'])
//solve(['1','2','3','45'])