export class HrCandidateModel {
  constructor(
    public id: number,
    public CandidateName: string,
    public CandidateSurname: string,
    public CandidateMobile: string,
    public CandidateEmail: string,
    public CandidateCv:  string,
    public Position: string,
    public datecreated : Date
  ) {
  }
}
