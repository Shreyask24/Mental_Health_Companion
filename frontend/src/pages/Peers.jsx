import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircleMore, Plus } from 'lucide-react';
import Button from '../components/ui/button';

const Peers = () => {
    const [posts, setPosts] = useState([]);
    const [form, setForm] = useState({ title: '', summary: '', steps: '' });

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = () => {
        setPosts((prev) => [...prev, form]);
        setForm({ title: '', summary: '', steps: '' });
    };

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-4xl font-bold text-amber-800">Anonymous Peer Support</h1>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button className='cursor-pointer border border-amber-500 text-amber-700 px-4 py-2 rounded-md hover:bg-amber-100 transition' variant="outline">
                            <Plus className="h-4 w-4" />
                            Share
                        </Button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-amber-800">Post Anonymously</DialogTitle>
                        </DialogHeader>

                        <div className="grid gap-4 py-4">
                            <Input
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                                placeholder="Brief title"
                            />
                            <Textarea
                                name="summary"
                                value={form.summary}
                                onChange={handleChange}
                                placeholder="Summary of your experience"
                                className="resize-none"
                            />
                            <Textarea
                                name="steps"
                                value={form.steps}
                                onChange={handleChange}
                                placeholder="Steps you've already taken"
                                className="resize-none"
                            />
                            <Button className='bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md transition cursor-pointer' onClick={handleSubmit}>Post</Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="grid gap-4">
                {posts.map((post, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{post.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-800 mb-2">{post.summary}</p>
                            <p className="text-sm text-gray-500">
                                <strong>Steps Tried:</strong> {post.steps}
                            </p>

                            <div className='flex justify-end cursor-pointer'>
                                <MessageCircleMore />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Peers;
