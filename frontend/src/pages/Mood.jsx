import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import Button from '../components/ui/button';
import { addMood } from '../constants';

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const moods = [
    { label: 'Sad', emoji: '😢', value: 1 },
    { label: 'Neutral', emoji: '😐', value: 2 },
    { label: 'Happy', emoji: '😊', value: 3 },
    { label: 'Excited', emoji: '🤩', value: 4 },
];

const MoodEntryForm = () => {
    const [selectedMood, setSelectedMood] = useState(null);
    const [note, setNote] = useState('');
    const [submitted, setSubmitted] = useState(false);


    const handleSubmit = () => {
        if (!selectedMood) return;

        const data = {
            userId: '1',
            moodValue: selectedMood.value,
            moodLabel: selectedMood.label,
            note,
        };

        addMood(data)

        setSubmitted(true);
        setNote('');
        setSelectedMood(null);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className='flex justify-center items-center h-[90vh]'>
            <Card className="w-xl mx-auto p-6 shadow-md bg-white">
                <CardHeader>
                    <CardTitle className="text-center text-3xl font-bold text-amber-800">How Are You Feeling Today?</CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="flex justify-center gap-4 mb-6">
                        {moods.map((mood) => (
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button
                                        key={mood.label}
                                        onClick={() => setSelectedMood(mood)}
                                        className={cn(
                                            'text-3xl transition-transform transform hover:scale-110 cursor-pointer',
                                            selectedMood?.label === mood.label && 'scale-125 bg-amber-200 shadow-md rounded-full'
                                        )}
                                        aria-label={mood.label}
                                    >
                                        {mood.emoji}
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    {mood.label}
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </div>

                    <Textarea
                        placeholder="Write a short note (optional)..."
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        className="mb-4 resize-none"
                    />

                    <Button
                        onClick={handleSubmit}
                        className="w-full bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md transition cursor-pointer"
                        disabled={!selectedMood}
                    >
                        Submit Mood
                    </Button>

                    {submitted && (
                        <p className="text-green-600 text-center mt-2">
                            Mood submitted successfully!
                        </p>
                    )}
                </CardContent>
            </Card>
        </div>

    );
};

export default MoodEntryForm;
