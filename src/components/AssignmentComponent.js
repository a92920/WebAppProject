import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Assignment extends Component {
    constructor(props){
      super(props);
      this.state ={
        students: [
            {
              id: 1,
              name: 'Salim Huneidi',
              Credits:'100',
              registeredcourses: [
                {
                    courseID: "CS3084",
                    name:"Web apps",
                    Teacher: 'Tomer Libal',
                    assignments: [
                    {
                        Title:'assignment 1',
                        grade: '40/50',
                        description: 'C.V Assignment'
                    },
                    {
                        Title:'assignment 2',
                        grade: '40/50',
                        description: 'C.V Assignment'
                    },
                    {
                        Title:'assignment 3',
                        grade: '40/50',
                        description: 'C.V Assignment'
                    }
                    ]
                }
              ]
            },
            {
                id: 2,
                name: 'Student 2',
                Credits:'100',
                registeredcourses: [
                  {
                      courseID: "CS3084",
                      name:"Web apps",
                      Teacher: 'Tomer Libal',
                      assignments: [
                      {
                          Title:'',
                          grade: '',
                          description: ''
                      }
                      ]
                  }
                ]
              }
        ]
      }
    }
    render(){
        const student = this.state.students.map((student) => {
            return(
                <div key={student.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            {student.name}
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{student.id}</Media>
                            
                            <Media className= "">{student.registeredcourses}</Media>
                        </Media>
                    </Media>
                </div>
            );
        });
        return(
            <div className="Container">
                <div className="row">
                    <div className = "col-6 mt-5">
                        <Media list>
                            {student}
                        </Media>
                    </div>
                </div>
            </div>
        );
    }
}

export default Assignment; 