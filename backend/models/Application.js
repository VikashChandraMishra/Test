const mongoose = require('mongoose');
const { Schema } = mongoose;


const generalInformationSchema = new Schema({
    correspondence_address: { type: String },
    permanent_address: { type: String },

});

const educationSchema = new Schema({
    yop: { type: Number },
    grade: { type: Number },
    subjects: { type: String },
    remarks: { type: Number },
});

const academicExperienceSchema = new Schema({
    posts: {type: String},
    organisations: {type: String},
    duties: {type: String},
    special_duties: {type: String},
    duration: {type: String},
    remarks: {type: String},
});

const industryExperienceSchema = new Schema({
    posts: {type: String},
    organisations: {type: String},
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

const applicationSchema = new Schema({

    general_information: generalInformationSchema,
    educational_qualification: [educationSchema],
    academic_experience: [academicExperienceSchema],
    industry_experience: [industryExperienceSchema],
    ug_teaching_experience: [ugteachingExperienceSchema],
    pg_teaching_experience: [pgteachingExperienceSchema],
    supervision_experience: [supervisionExperienceSchema],
    research_papers: [researchPaperSchema],

});

const Application = mongoose.model('application', applicationSchema);

module.exports = Application;