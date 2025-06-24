const MoodEntry = require("../models/MoodEntry");

const addMood = async (req, res, next) => {
    try {
        const { userId, moodValue, moodLabel, note } = req.body;

        const newEntry = new MoodEntry({
            userId,
            moodValue,
            moodLabel,
            note
        })

        await newEntry.save()
        res.status(201).json({ statusCode: "201", message: "Data Entry Created" })
    } catch (error) {
        res.status(500).json({ statusCode: "500", message: "Error saving mood", error })
    }
}

const getMood = async (req, res, next) => {
    try {
        const { userId } = req.params;

        const entries = await MoodEntry.find({ userId }).sort({ timestamp: -1 })
        res.status(200).json(entries);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching mood data', error });
    }
}

module.exports = { addMood, getMood }