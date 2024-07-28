// models/TrainingCenter.ts
import mongoose from "mongoose";

const FAQSchema = new mongoose.Schema({
  VTP_NUMBER: { type: String, required: true },
  VTP_NAME: { type: String, required: true },
  DISTRICT_NAME: { type: String, required: true },
  CAAF_NUMBER: { type: String, required: true },
  TRAINING_CENTER_NAME: { type: String, required: true },
  ADDRESS1: { type: String, required: true },
  ADDRESS2: { type: String, required: true },
  JOB_ROLE_NAME: { type: String, required: true },
});

export default mongoose.models.FAQ || mongoose.model("FAQ", FAQSchema, "faq");
