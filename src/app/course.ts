export class Course {
  constructor(
    public id: string,
    public name: string,
    public startDate: Date,
    public lecturer: string,
    public classId: string,
    public content: string
  ) { }

}
