export interface IProfile {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  languageId: number;
  averageNumberOfHoursPerDay: number;
  error?: Error;
}
