export class Doctor {
    doctorId?: number;
    doctorName: string;
    age: number;
    specialization: string;
    yearsOfExperience: number;
    doctorAddress: string;
    holiday: string;
    breakStartTime: string;
    breakEndTime: string;
    dutyStartTime: string;
    dutyEndTime: string;
    isVerified: boolean;

    constructor(
      doctorId: number | undefined = undefined, // Optional with default value
      doctorName: string = '', // Default empty string
      age: number = 0, // Default value 0
      specialization: string = '',
      yearsOfExperience: number = 0,
      doctorAddress: string = '',
      holiday: string = '',
      breakStartTime: string = '',
      breakEndTime: string = '',
      dutyStartTime: string = '',
      dutyEndTime: string = '',
      isVerified: boolean = false
    ) {
      this.doctorId = doctorId;
      this.doctorName = doctorName;
      this.age = age;
      this.specialization = specialization;
      this.yearsOfExperience = yearsOfExperience;
      this.doctorAddress = doctorAddress;
      this.holiday = holiday;
      this.breakStartTime = breakStartTime;
      this.breakEndTime = breakEndTime;
      this.dutyStartTime = dutyStartTime;
      this.dutyEndTime = dutyEndTime;
      this.isVerified = isVerified;
    }
}
