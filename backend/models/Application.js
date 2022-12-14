const mongoose = require('mongoose');
const { Schema } = mongoose;

const addressSchema = new Schema({
    address: {type: String},
    pin: {type: Number},
    state: {type: String},
    district: {type: String}
})

const generalInformationSchema = new Schema({
    correspondence_address: addressSchema,
    permanent_address: addressSchema,
});

const educationSchema = new Schema({
    degree: { type: String },
    details: { type: String },
    grade: { type: String },
    subjects: { type: String },
    remarks: { type: String },
});

const academicExperienceSchema = new Schema({
    post: {type: String},
    organization: {type: String},
    begin_date: {type: String},
    end_date: {type: String},
    duty: {type: String},
    special_duty: {type: String},
    experience: {type: String},
    remarks: {type: String},
});

const industryExperienceSchema = new Schema({
    post: {type: String},
    organization: {type: String},
    begin_date: {type: String},
    end_date: {type: String},
    experience: {type: String},
    remarks: {type: String},
});

const ugteachingExperienceSchema = new Schema({
    year: {type: Number},
    course: {type: String},
    subjects: {type: String},
    remarks: {type: String},
});

const pgteachingExperienceSchema = new Schema({
    year: {type: Number},
    course: {type: String},
    subjects: {type: String},
    degree: {type: String},
    remarks: {type: String},
});

const supervisionExperienceSchema = new Schema({
    year: {type: Number},
    number_DS: {type: Number},
    number_MTC: {type: Number},
    remarks: {type: String},
});

const researchPaperSchema = new Schema({
    title: {type: String},
    details: {type: String},
    remarks: {type: String},
});

const photosSchema = new Schema({
    photo_path: {type: String},
    signature_path: {type: String},
});


const applicationSchema = new Schema({

    applicant: {type: Schema.Types.ObjectId, ref: 'applicant'},
    position: {type: String, required: true},
    photos: photosSchema,
    general_information: generalInformationSchema,
    educational_qualification: [educationSchema],
    academic_experience: [academicExperienceSchema],
    total_academic_experience: {type: String},
    industry_experience: [industryExperienceSchema],
    total_industry_experience: {type: String},
    ug_teaching_experience: [ugteachingExperienceSchema],
    pg_teaching_experience: [pgteachingExperienceSchema],
    supervision_experience: [supervisionExperienceSchema],
    research_papers: [researchPaperSchema],
    status: {type: String, default: "unsaved"},
    uploaded: {type: Date, default: Date.now()},
});

const Application = mongoose.model('application', applicationSchema);

module.exports = Application;