const data = [
    {
      "id": 1,
      "name": "John",
      "age": 25,
      "isVoterId": true,
      "isMatriculationComplete": true,
      "isIntermediateComplete": true,
      "accessibility": true
    },
    {
      "id": 2,
      "name": "Alice",
      "age": 22,
      "isVoterId": false,
      "isMatriculationComplete": true,
      "isIntermediateComplete": true,
      "accessibility": false
    },
    {
      "id": 3,
      "name": "Bob",
      "age": 30,
      "isVoterId": true,
      "isMatriculationComplete": false,
      "isIntermediateComplete": true,
      "accessibility": true
    },
    {
      "id": 4,
      "name": "Emily",
      "age": 28,
      "isVoterId": true,
      "isMatriculationComplete": true,
      "isIntermediateComplete": false,
      "accessibility": false
    },
    {
      "id": 5,
      "name": "Michael",
      "age": 26,
      "isVoterId": false,
      "isMatriculationComplete": true,
      "isIntermediateComplete": false,
      "accessibility": true
    },
    {
      "id": 6,
      "name": "Sophia",
      "age": 24,
      "isVoterId": true,
      "isMatriculationComplete": false,
      "isIntermediateComplete": false,
      "accessibility": false
    },
    {
      "id": 7,
      "name": "William",
      "age": 29,
      "isVoterId": false,
      "isMatriculationComplete": true,
      "isIntermediateComplete": true,
      "accessibility": true
    },
    {
      "id": 8,
      "name": "Olivia",
      "age": 23,
      "isVoterId": true,
      "isMatriculationComplete": false,
      "isIntermediateComplete": true,
      "accessibility": false
    },
    {
      "id": 9,
      "name": "James",
      "age": 27,
      "isVoterId": true,
      "isMatriculationComplete": true,
      "isIntermediateComplete": false,
      "accessibility": true
    },
    {
      "id": 10,
      "name": "Emma",
      "age": 21,
      "isVoterId": false,
      "isMatriculationComplete": true,
      "isIntermediateComplete": false,
      "accessibility": false
    },
    {
      "id": 11,
      "name": "Alexander",
      "age": 31,
      "isVoterId": true,
      "isMatriculationComplete": false,
      "isIntermediateComplete": false,
      "accessibility": true
    },
    {
      "id": 12,
      "name": "Ava",
      "age": 20,
      "isVoterId": true,
      "isMatriculationComplete": true,
      "isIntermediateComplete": true,
      "accessibility": false
    },
    {
      "id": 13,
      "name": "Daniel",
      "age": 32,
      "isVoterId": false,
      "isMatriculationComplete": true,
      "isIntermediateComplete": true,
      "accessibility": true
    },
    {
      "id": 14,
      "name": "Mia",
      "age": 19,
      "isVoterId": true,
      "isMatriculationComplete": false,
      "isIntermediateComplete": true,
      "accessibility": false
    },
    {
      "id": 15,
      "name": "Matthew",
      "age": 33,
      "isVoterId": true,
      "isMatriculationComplete": true,
      "isIntermediateComplete": false,
      "accessibility": true
    }
  ]
  

function nameOfStudentForMatriculation() {
    let name = [];
     let da = data.filter(i => i.isMatriculationComplete == false && i.isIntermediateComplete == false)
 
     da.forEach(i => name.push(i.name))
     return name;
   }
   
   function nameOfStudentForIntermediate() {
     let name = [];
     let da = data.filter(i => i.isMatriculationComplete == true && i.isIntermediateComplete == false)
 
     da.forEach(i => name.push(i.name))
     return name;
   
   }
   
   function nameOfStudentForColledge() {
     let name = [];
     let da = data.filter(i => i.isMatriculationComplete == true && i.isIntermediateComplete == true)
 
     da.forEach(i => name.push(i.name))
     return name;
   
   }
   

  function  averageAge() {
      let averageAge = 0;
      data.forEach(i => averageAge += i.age)
      return averageAge/data.length;
  }

  function CallList() {
    console.log(nameOfStudentForMatriculation());
  }