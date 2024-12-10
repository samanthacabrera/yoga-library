import React from "react";

const Guide = () => {
    return (
        <div className="flex flex-col p-8 mb-40 space-y-8 text-gray-800">
            <div className="w-full max-w-5xl space-y-4">
                <h1 className="text-4xl tracking-tight mb-1">Beginner's Guide to Yoga</h1>
                <p>
                    Welcome to your yoga journey. The purpose of this website is to help you learn the foundations of yoga, focusing on the top 50 common Vinyasa yoga poses. Whether you are just starting or looking to deepen your understanding, this guide offers a structured approach to building strength, flexibility, and mindfulness through yoga.
                </p>
            </div>

            <div className="w-full max-w-5xl space-y-4">
                <h2 className="text-xl mb-1 font-medium">What is Yoga?</h2>
                <p>
                    Yoga is an ancient practice originating in India, aimed at creating a sense of unity within the mind, body, and spirit. It includes various techniques such as physical postures (asanas), breath control exercises (pranayama), and meditation. Yoga not only supports physical health by improving flexibility, strength, and balance but also promotes mental clarity and emotional resilience.
                </p>
                <p>
                    Yoga philosophy emphasizes mindfulness and living in harmony with ourselves and our surroundings. This approach cultivates awareness of the body and mind, helping us manage stress, release tension, and develop a healthier relationship with ourselves. The practice of yoga encourages us to go beyond physical exercise, fostering a deeper understanding of self and promoting overall well-being.
                </p>
            </div>

            
            <div className="w-full max-w-5xl space-y-4 bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                <h2 className="text-2xl mb-4">Road Map to Master the Top 50 Yoga Poses</h2>
                <p className="">
                    This road map is designed to guide you through the top 50 common Vinyasa yoga poses, step by step, helping you build a strong foundation and confidence in your practice. Each pose is explained in detail, with modifications, alignment cues, and benefits highlighted to ensure a safe and effective practice.
                </p>
                <ol className="list-decimal list-inside space-y-4 mt-4">
                    <li>
                        <strong>Week 1-2:</strong> Start with foundational poses such as Mountain Pose (Tadasana), Downward-Facing Dog (Adho Mukha Svanasana), and Child’s Pose (Balasana). Focus on breath awareness and alignment.
                    </li>
                    <li>
                        <strong>Week 3-4:</strong> Progress to standing poses like Warrior I (Virabhadrasana I), Warrior II (Virabhadrasana II), and Crescent Lunge (Ashta Chandrasana). Work on balance and building strength.
                    </li>
                    <li>
                        <strong>Week 5-6:</strong> Explore hip openers and forward folds, such as Low Lunge (Anjaneyasana), Half Splits (Ardha Hanumanasana), and Seated Forward Bend (Paschimottanasana).
                    </li>
                    <li>
                        <strong>Week 7-8:</strong> Incorporate more challenging poses like Tree Pose (Vrikshasana), Triangle Pose (Trikonasana), and High Lunge (Alanasana) to enhance stability and flexibility.
                    </li>
                    <li>
                        <strong>Week 9-10:</strong> Begin practicing backbends like Cobra Pose (Bhujangasana), Upward Dog (Urdhva Mukha Svanasana), and Bridge Pose (Setu Bandhasana). Pay attention to protecting your lower back.
                    </li>
                    <li>
                        <strong>Ongoing:</strong> Gradually incorporate inversions, arm balances, and restorative poses to diversify your practice and deepen your experience.
                    </li>
                </ol>
                <p className="mt-4">
                    This structured approach allows you to progress at your own pace, mastering each pose before moving to the next. Remember, yoga is a journey, not a race. Take your time, listen to your body, and enjoy the process.
                </p>
            </div>

            <div className="w-full max-w-5xl space-y-4">
                <h2 className="text-xl mb-1 font-medium">Safe Practice Tips</h2>
                <p>
                    Listening to your body is one of the most important aspects of practicing yoga. It’s essential to remember that yoga is not about achieving perfect poses, but about fostering mindfulness and self-awareness. If you feel any pain or discomfort during a pose, ease out of it and adjust your alignment.
                </p>
                <p>
                    Using props such as blocks, straps, and blankets can make your practice more accessible and help maintain proper alignment. These props provide support and allow you to deepen your stretches safely. They can also make poses more comfortable, especially for beginners.
                </p>
                <p>
                    Warming up properly is crucial to prevent injury. Start with gentle stretches and foundational poses to prepare your muscles and joints for deeper movement. Never rush through a practice; allow your body to open up gradually as you move.
                </p>
                <p>
                    If possible, seek guidance from a certified instructor, especially when you’re just starting. A teacher can offer adjustments, modifications, and insights that will help you progress safely and confidently in your practice.
                </p>
            </div>

            <div className="w-full max-w-5xl space-y-4">
                <h2 className="text-xl mb-1 font-medium">Building a Consistent Practice</h2>
                <p>
                    Consistency is key in yoga. Start with short, daily practices, focusing on poses or sequences that feel manageable. Gradually build the duration and variety of your practice as you grow more comfortable. Setting aside a regular time, like morning or evening, can help make yoga a natural part of your routine.
                </p>
                <p>
                    Consider keeping a yoga journal to track your progress, noting any new poses you’ve learned or challenges you’ve encountered. Yoga is a personal journey, and maintaining a record of your experiences can deepen your practice over time.
                </p>
                <p>
                    Yoga is a journey of self-discovery and inner peace. Embrace the process, trust your body, and remember that every step forward, no matter how small, contributes to your growth. Your practice is unique to you, so enjoy each moment and honor your journey. <span className="italic">You’re exactly where you need to be.</span>
                </p>
            </div>
        </div>
    );
};

export default Guide;
