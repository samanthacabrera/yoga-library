import React from "react";
import { Helmet } from "react-helmet";
import PageNav from '../components/PageNav';

const Guide = () => {
    return (
        <>
        <Helmet>
            <title>Beginner's Guide to Yoga</title>
            <meta name="description" content="Start your yoga journey with our comprehensive guide designed for beginners. Learn key yoga terminology, props, benefits, and safe practice tips." />
            <meta name="keywords" content="yoga, yoga for beginners, yoga guide, yoga props, yoga benefits, yoga practice" />
            <meta property="og:title" content="Beginner's Guide to Yoga" />
            <meta property="og:description" content="Start your yoga journey with our comprehensive guide designed for beginners. Learn key yoga terminology, props, benefits, and safe practice tips." />
            <meta name="twitter:title" content="Beginner's Guide to Yoga" />
            <meta name="twitter:description" content="Start your yoga journey with our comprehensive guide designed for beginners. Learn key yoga terminology, props, benefits, and safe practice tips." />
        </Helmet>
        <PageNav />
        
        <div className="max-w-2xl md:mx-auto mx-12 my-24 space-y-24">
            <header>
                <h1 className="text-center my-12 text-4xl">
                    Beginner's Guide to Yoga
                </h1>
                
                <div className="bg-moss/5 rounded-xl shadow-sm p-8 space-y-6">
                    <p className="text-sm tracking-wide leading-loose">
                        Objective: This guide is designed to provide beginners with a comprehensive introduction to yoga. This guide will help you understand key yoga concepts, essential terminology, and safe practice techniques. By the end, you'll feel more confident stepping onto the mat and building a sustainable yoga routine.
                    </p>
                </div>
            </header>
            
            <div className="flex flex-col space-y-16 pb-16">
                {/* Terminology */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-light tracking-wide">Essential Yoga Terminology</h2>
                    <p className=" ">
                        Yoga is more than just physical movement—it’s a holistic practice that integrates breathwork, meditation, and philosophy. Familiarizing yourself with these key terms will boost your confidence and enrich your experience on the mat.
                    </p>
                    
                    <div className="space-y-6">
                        <ul className="space-y-6 ">
                            <li className="flex flex-col gap-2">
                                <span className="font-medium text-moss">Asana</span>
                                <p className="">
                                    Physical postures or poses designed to strengthen, stretch, or relax different parts of the body. Asanas create balance between strength, flexibility, and body awareness, ranging from simple seated poses to complex inversions.
                                </p>
                            </li>
                            <li className="flex flex-col gap-2">
                                <span className="font-medium text-moss">Pranayama</span>
                                <p className="">
                                    The practice of breath control that regulates breathing to increase energy (prana) and calm the nervous system. Through controlled inhalation, exhalation, and retention, pranayama improves mental clarity, focus, and emotional balance.
                                </p>
                            </li>
                            <li className="flex flex-col gap-2">
                                <span className="font-medium text-moss">Chakra</span>
                                <p className="">
                                    Energy centers within the body believed to influence physical, emotional, and spiritual well-being. Seven main chakras located along the spine each associate with different colors, elements, and functions. Balancing these centers promotes overall wellness.
                                </p>
                            </li>
                            <li className="flex flex-col gap-2">
                                <span className="font-medium text-moss">Drishti</span>
                                <p className="">
                                    A focused gaze or point of concentration that enhances balance and awareness in poses. This crucial tool improves concentration and fosters a meditative state during practice. Each asana has a recommended drishti point—toward an object, spot, or part of the body.
                                </p>
                            </li>
                            <li className="flex flex-col gap-2">
                                <span className="font-medium text-moss">Mantra</span>
                                <p className="">
                                    A word, sound, or phrase repeated during meditation to focus the mind and evoke specific consciousness states. Whether a sacred syllable like "Om" or a complex affirmation, mantras reduce mental distractions and deepen self-connection.
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>
                
                {/* Yoga Props */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-light  tracking-wide">Yoga Props</h2>
                    <p className=" ">
                        Props are essential elements of yoga practice, especially for beginners. They enhance alignment, provide support, and make postures more accessible. Using props demonstrates wisdom and commitment to safety—not a lack of skill.
                    </p>
                    
                        <div className="space-y-6">
                            <div className="flex flex-col space-y-4 ">
                            <div className="flex flex-col gap-2">
                                <span className="font-medium text-moss">Yoga Blocks</span>
                                <p className="">
                                    Provide support in standing and seated poses by bringing the floor closer to you, helping with balance, alignment, and deeper stretches.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-medium text-moss">Yoga Straps</span>
                                <p className="">
                                    Extend your reach in poses like seated forward folds and shoulder stretches, improving flexibility and proper alignment.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-medium text-moss">Bolsters</span>
                                <p className="">
                                    Offer cushioning and support for deep relaxation and breathwork, especially valuable in restorative practices.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-medium text-moss">Blankets</span>
                                <p className="">
                                    Provide extra padding under knees or hips while offering warmth during meditation and Savasana.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-medium text-moss">Yoga Wheel</span>
                                <p className="">
                                    Assists with deep backbends, improves flexibility, and provides gentle spinal support.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-medium text-moss">Wall & Chair</span>
                                <p className="">
                                    Offer stability for balance in standing poses or seated postures when floor transitions are challenging.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <p className="">
                        While specialized props can enhance your practice, everyday household items make great alternatives. A sturdy book can replace a yoga block, and a towel can double as a strap—ensuring yoga remains accessible to everyone, no matter the equipment.
                    </p>
                </section>

                {/* Preparation Section */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-light  tracking-wide">Preparing for Practice</h2>
                    <p className=" ">
                        Thoughtful preparation creates space for a meaningful yoga experience. Taking time to ready both mind and body allows you to approach your practice with presence and intention.
                    </p>
                    
                    <div className="flex flex-col space-y-8">
                        <div className="space-y-2">
                            <h3 className="text-2xl  mb-4">Mental Preparation</h3>
                            <ul className="space-y-4 ">
                                <li className="flex flex-col gap-2">
                                    <span className="font-medium text-moss">Breathing Exercises</span>
                                    <p className="">
                                        Begin with deep, diaphragmatic breathing to center attention and cultivate present-moment awareness.
                                    </p>
                                </li>
                                <li className="flex flex-col gap-2">
                                    <span className="font-medium text-moss">Set an Intention</span>
                                    <p className="">
                                        Define your practice purpose—whether flexibility, mental calm, or strength—to maintain focus throughout.
                                    </p>
                                </li>
                                <li className="flex flex-col gap-2">
                                    <span className="font-medium text-moss">Clear Your Mind</span>
                                    <p className="">
                                        Release distractions and daily stressors, redirecting attention to breath and presence.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="space-y-6">
                            <h3 className="text-2xl  mb-4">Physical Preparation</h3>
                            <ul className="space-y-4 ">
                                <li className="flex flex-col gap-2">
                                    <span className="font-medium text-moss">Comfortable Attire</span>
                                    <p className="">
                                        Choose clothing that permits free movement without restriction.
                                    </p>
                                </li>
                                <li className="flex flex-col gap-2">
                                    <span className="font-medium text-moss">Gather Props</span>
                                    <p className="">
                                        Prepare a yoga mat and supportive props like blocks, straps, or cushions.
                                    </p>
                                </li>
                                <li className="flex flex-col gap-2">
                                    <span className="font-medium text-moss">Hydrate</span>
                                    <p className="">
                                        Drink water before and after practice, avoiding excessive consumption immediately before beginning.
                                    </p>
                                </li>
                                <li className="flex flex-col gap-2">
                                    <span className="font-medium text-moss">Create Space</span>
                                    <p className="">
                                        Dedicate uninterrupted time for practice, removing distractions to enable full presence.
                                    </p>
                                </li>
                                <li className="flex flex-col gap-2">
                                    <span className="font-medium text-moss">Body Awareness</span>
                                    <p className="">
                                        Assess your physical state, noting areas of tension to inform a safer practice.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                
                {/* Safe Practice Tips */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-light  tracking-wide">Practicing Safely</h2>
                    <p className=" ">
                        A mindful approach to yoga practice helps prevent injury and enhances enjoyment. These guidelines will help you develop a sustainable practice that honors your body's unique needs.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex flex-col space-y-2">
                            <div className="flex flex-col gap-2">
                                <span className="font-medium text-moss">Listen to Your Body</span>
                                <p className="">
                                    Honor your body's signals. Distinguish between productive discomfort and potential injury, modifying poses as needed.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-medium text-moss">Utilize Props</span>
                                <p className="">
                                    Enhance alignment and support with blocks, straps, and blankets to make poses accessible and effective.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-medium text-moss">Proper Warm-Up</span>
                                <p className="">
                                    Prepare your body with gentle movements before advancing to deeper poses, respecting your natural progression.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-medium text-moss">Maintain Mindfulness</span>
                                <p className="">
                                    Move deliberately through each pose, exploring sensations with curiosity rather than rushing toward an ideal form.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-24 border-t border-charcoal/30">
                    <div className="bg-moss/5 rounded-xl shadow-sm p-6">
                        <p className="text-sm tracking-wide ">
                        Next Up: Learn about the philosophy and origins of yoga
                        </p>
                    </div>
                </section>
            </div>
        </div>
        </>
    );
};

export default Guide;