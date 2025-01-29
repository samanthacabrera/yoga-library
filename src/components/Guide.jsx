import React from "react";

const Guide = () => {
    return (
        <div className="flex flex-col min-h-screen w-full max-w-3xl space-y-8 px-8 py-4 mx-auto">
            <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-center my-12">Beginner's Guide to Yoga</h1>
                <p>
                    Welcome to your yoga journey. The purpose of this website is to help you learn the foundations of yoga, focusing on the top 50 common Vinyasa yoga poses.
                </p>
            </div>


            <div className="w-full max-w-5xl space-y-4 bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                <h2 className="text-2xl mb-4">Common Terms in Yoga</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>Asana:</strong> A physical yoga posture or pose. The word "asana" translates to "seat" in Sanskrit and represents the physical aspect of yoga practice.
                    </li>
                    <li>
                        <strong>Pranayama:</strong> Breath control exercises aimed at regulating energy flow and enhancing mindfulness.
                    </li>
                    <li>
                        <strong>Chakra:</strong> Energy centers in the body that align with different physical and emotional functions.
                    </li>
                    <li>
                        <strong>Drishti:</strong> A focused gaze or point of concentration used during yoga practice to enhance focus and balance.
                    </li>
                    <li>
                        <strong>Mantra:</strong> A word, sound, or phrase repeated during meditation to aid focus and mindfulness.
                    </li>
                    <li>
                        <strong>Om:</strong> A sacred sound and spiritual symbol often chanted at the beginning and end of a yoga session to signify universal connection.
                    </li>
                </ul>
            </div>
        

            <div className="w-full max-w-5xl space-y-4">
                <h2 className="text-xl mb-1 font-medium">Safe Practice Tips</h2>
                <p>
                    Yoga is a practice that promotes not only physical health but also mental and emotional well-being. One of the most important principles to remember as you begin or continue your yoga journey is to listen to your body. Yoga is not about achieving a perfect pose; it is about cultivating mindfulness, self-awareness, and harmony between the body and mind. It is essential to honor where you are in your practice and allow it to evolve naturally, rather than pushing yourself to meet external expectations.
                </p>
                <p>
                    <strong>Pay attention to your body’s signals:</strong> If you experience pain, discomfort, or strain during a pose, it is important to back off and adjust your posture. Remember, a slight stretch or discomfort is normal, but sharp or intense pain is a warning sign. If you feel pain, ease out of the pose and make sure your alignment is correct. Over time, as your body becomes stronger and more flexible, your capacity to safely hold certain poses will increase.
                </p>
                <p>
                    <strong>Use props to support your practice:</strong> Props such as yoga blocks, straps, blankets, and bolsters are excellent tools to enhance your practice, especially if you are just starting or if you have specific needs such as limited flexibility or injury concerns. Blocks can help bring the floor closer to you in standing or seated poses, while straps allow you to extend your reach in stretches. Blankets can be used for cushioning during seated poses or to support your knees in restorative poses. These props help maintain proper alignment and make yoga poses more accessible and comfortable, allowing you to safely deepen your stretches over time.
                </p>
                <p>
                    <strong>Warm up properly:</strong> Warming up your body is essential to prevent injuries and ensure your muscles and joints are prepared for more challenging movements. Begin your practice with gentle, foundational stretches and simple poses like Cat-Cow, Downward Dog, and Child’s Pose to increase blood flow and loosen your muscles. A proper warm-up also promotes mental focus, allowing you to transition more easily into the rhythm of your practice.
                </p>
                <p>
                    <strong>Don’t rush through your practice:</strong> Yoga is a slow, intentional practice. It’s important not to rush or force your body into a pose. Instead, move mindfully and take your time. Breath is an integral part of yoga, so synchronize your movements with your inhalations and exhalations. Allow yourself to gradually move deeper into each pose, respecting the natural limitations of your body. Each practice should feel like a gentle unfolding rather than an intense race to a final destination.
                </p>
                <p>
                    <strong>Seek guidance when possible:</strong> If you're just starting, consider taking classes with a certified yoga instructor. A teacher can offer valuable insights into your alignment and posture, provide helpful adjustments, and suggest modifications to make certain poses more accessible. As you progress, working with an instructor can help you refine your technique and deepen your practice safely. Many instructors also emphasize mindfulness, helping you stay present and focused during your practice.
                </p>
                <p>
                    <strong>Practice self-compassion:</strong> Remember that yoga is a personal practice. Be kind to yourself and avoid comparing your progress to others. Every body is different, and everyone’s yoga journey is unique. Celebrate the small victories and take pride in your progress, no matter how slow it may seem. Yoga is not about perfection—it’s about embracing the process, staying present, and enjoying each moment on the mat.
                </p>
            </div>
        

        </div>
    );
};

export default Guide;
