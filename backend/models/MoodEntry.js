const mongoose = require("mongoose")

const moodEntrySchema = mongoose.Schema({
    userId: { type: String, required: true },
    moodValue: { type: Number, required: true },
    moodLabel: { type: String },
    note: { type: String },
    timestamp: { type: Date },
})

module.exports = mongoose.model('MoodEntry', moodEntrySchema)