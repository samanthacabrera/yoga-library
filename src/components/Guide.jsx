import React from "react";

const Guide = () => {
    return (
        <div className="flex flex-col p-8 space-y-8 text-gray-800">
            <div className="w-full max-w-5xl space-y-4">
                <h1 className="text-4xl tracking-tight mb-1">Beginner's Guide to Yoga</h1>
                <p>
                    Welcome to your yoga journey. This guide introduces you to essential concepts, terms, types of yoga, and practical advice on beginning your practice confidently and mindfully.
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


            <div className="w-full max-w-5xl space-y-4">
                <h2 className="text-xl mb-1 font-medium">Common Yoga Terms</h2>
                <ul className="space-y-4 py-4">
                    <li><strong>Asana:</strong> The physical postures or poses in yoga, like Mountain Pose (Tadasana) and Downward-Facing Dog (Adho Mukha Svanasana). Asanas help build strength, flexibility, and stability.</li>
                    <li><strong>Pranayama:</strong> Breath control exercises that enhance mental focus, relaxation, and energy flow. Examples include Ujjayi (victorious breath) and Nadi Shodhana (alternate nostril breathing).</li>
                    <li><strong>Vinyasa:</strong> A style of yoga that links movement with breath in a smooth, flowing sequence. In a Vinyasa class, each movement is coordinated with inhalation or exhalation.</li>
                    <li><strong>Meditation:</strong> A practice of focused awareness, often part of yoga to calm the mind and cultivate mindfulness. Regular meditation supports stress reduction and improves mental clarity.</li>
                </ul>
            </div>

            <div className="w-full max-w-5xl space-y-4">
                <h2 className="text-xl mb-1 font-medium">Types of Yoga</h2>
                <p>
                    There are several styles of yoga, each with a different approach to physical postures and meditation. Some are more dynamic and physically demanding, while others focus on relaxation and mindfulness. Each type of yoga offers unique benefits that can help improve flexibility, strength, and mental clarity.
                </p>
                <p>
                    <strong>Hatha Yoga</strong> is a gentle and foundational style of yoga focused on basic postures, alignment, and breath control. Hatha classes are generally slower-paced and provide an excellent introduction to yoga, helping beginners develop a strong foundation.
                </p>
                <p>
                    <strong>Vinyasa Yoga</strong> is a dynamic, flowing style that connects breath with movement, creating a rhythmic practice. Vinyasa yoga tends to be more physically challenging and provides a cardiovascular workout while improving strength and flexibility.
                </p>
                <p>
                    <strong>Yin Yoga</strong> is a slow, meditative practice that involves holding poses for extended periods, typically targeting deep connective tissues like ligaments and fascia. Yin Yoga promotes deep relaxation, enhances flexibility, and encourages mindfulness.
                </p>
                <p>
                    <strong>Restorative Yoga</strong> is a gentle, calming practice that uses props like bolsters, blocks, and blankets to support the body in passive poses. Restorative yoga is excellent for relaxation, stress relief, and recovery after physical exertion.
                </p>
                <p>
                    <strong>Ashtanga Yoga</strong> is a rigorous practice that follows a specific sequence of poses, emphasizing strength, flexibility, and endurance. It is suitable for those looking for a more structured and physically demanding practice, and it is often taught in a series of classes to build progressively.
                </p>
            </div>

            <div className="w-full max-w-5xl space-y-4">
                <h2 className="text-xl mb-1 font-medium">Yoga Basics for Beginners</h2>
                <p>
                    Start with foundational poses such as Mountain Pose, Downward-Facing Dog, and Child’s Pose. These simple postures help build awareness of alignment, balance, and breath. Consistency is essential in yoga; even practicing for 5-10 minutes a day can lead to significant improvements.
                </p>
                <p>
                    Focus on synchronizing movement with breath. Breathing deeply and mindfully through each pose helps cultivate inner calm and brings more awareness to your body. Approach each pose with patience, as yoga is about personal growth and adapting the practice to suit your needs.
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
