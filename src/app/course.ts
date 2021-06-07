export class Course {
  constructor(
    public id: number,
    public name: string,
    public startDate: number,
    public lecturer: string,
    public classId: string,
    public content: string
  ) { }

}
