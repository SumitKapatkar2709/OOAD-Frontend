// doctor.model.ts

export class Student {
    studentId: number;
    studentName: string;
    studentAge: number;
    contactNumber: string;
    email: string;

    constructor(
        studentId: number,
        studentName: string,
        studentAge: number,
        contactNumber: string,
        email: string
    ) {
        this.studentId = studentId;
        this.studentName = studentName;
        this.studentAge = studentAge;
        this.contactNumber = contactNumber;
        this.email = email;
    }
}

export class Appointment {
    appointmentId: number;
    appointmentStartTime: string;
    appointmentEndTime: string;
    student: Student;
    available: boolean;

    constructor(
        appointmentId: number,
        appointmentStartTime: string,
        appointmentEndTime: string,
        student: Student,
        available: boolean
    ) {
        this.appointmentId = appointmentId;
        this.appointmentStartTime = appointmentStartTime;
        this.appointmentEndTime = appointmentEndTime;
        this.student = student;
        this.available = available;
    }
}

export class ADoctor {
    doctorId?: number;
    doctorName: string;
    doctorAge: number;
    specialization: string;
    doctorAddress: string;
    yearsOfExperience: number;
    holiday: string;
    isVerified: boolean;
    breakStartTime: string;
    breakEndTime: string;
    dutyStartTime: string;
    dutyEndTime: string;
    appointment: Appointment[];

    constructor(
        doctorId: number | undefined = undefined, // Default ID
        doctorName: string = '', // Default Name
        doctorAge: number = 0, // Default Age
        specialization: string = '', // Default Specialization
        doctorAddress: string = '', // Default Address
        yearsOfExperience: number = 0, // Default Years of Experience
        holiday: string = '', // Default Holiday
        isVerified: boolean = false, // Default Verified status
        breakStartTime: string = '', // Default Break Start Time
        breakEndTime: string = '', // Default Break End Time
        dutyStartTime: string = '', // Default Duty Start Time
        dutyEndTime: string = '', // Default Duty End Time
        appointment: Appointment[] = [] // Default Empty Array for Appointments
    ) {
        this.doctorId = doctorId;
        this.doctorName = doctorName;
        this.doctorAge = doctorAge;
        this.specialization = specialization;
        this.doctorAddress = doctorAddress;
        this.yearsOfExperience = yearsOfExperience;
        this.holiday = holiday;
        this.isVerified = isVerified;
        this.breakStartTime = breakStartTime;
        this.breakEndTime = breakEndTime;
        this.dutyStartTime = dutyStartTime;
        this.dutyEndTime = dutyEndTime;
        this.appointment = appointment;
    }
}

export class ALDoctor {
    doctorId?: number;
    doctorEmail: string

    constructor(
        doctorId: number | undefined = undefined, // Default ID
        doctorEmail: string = '', // Default Name
    ) {
        this.doctorId = doctorId;
        this.doctorEmail = doctorEmail;
    }
}

export class PatientDetails {
    details: string;
    diagnosis: string;
    prescription: string;

    constructor(
        details: string = '',
        diagnosis: string = '',
        prescription: string = '',
    ) {
        this.details = details;
        this.diagnosis = diagnosis;
        this.prescription = prescription;
    }
}
