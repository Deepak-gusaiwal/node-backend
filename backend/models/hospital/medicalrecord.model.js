import mongoose from "mongoose";

const medicalRecordShcema = new mongoose.Schema({}, { timestamps: true });

export const MedicalRecord = mongoose.model( "MedicalRecord", medicalRecordShcema);
