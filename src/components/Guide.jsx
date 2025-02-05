import React from "react";

const Guide = () => {
    return (
        <div className="max-w-3xl px-8 py-4 space-y-12 mx-auto">
        <h1 className="heading my-12 lg:mb-20 text-4xl lg:text-6xl">
            Beginner's Guide to Yoga
        </h1>
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 lg:space-y-0 space-y-12 pb-20">
        {/* Introduction */}
        <p className="lg:col-span-2">This guide is designed to give you a solid foundation as you begin practicing yoga. As you progress through this guide, use the website to explore and learn each pose in detail.</p>
      
        
        {/* Terminology */}
        <h3 className="text-2xl font-medium text-charcoal tracking-wide lg:text-6xl lg:col-span-1 lg:max-w-[250px]">Yoga Foundations</h3>
        <p className="lg:col-span-2">Yoga is more than just physical movement—it's a holistic practice that includes breathwork, meditation, and philosophy. Understanding key yoga terms and concepts will help you feel more confident as you step onto the mat.</p>
        <div className="bg-moss bg-opacity-20 border border-moss rounded-2xl shadow p-4 sm:p-8 space-y-4 lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl text-center mb-2">Common Terms in Yoga</h2>
            <ul className="list-inside space-y-4 text-sm sm:text-base">
                <li>
                    <strong>Asana: </strong> 
                    Asana refers to the physical postures or poses in yoga. Each asana is designed to stretch, strengthen, or relax different parts of the body. Asanas are fundamental in yoga practice, creating a balance between strength, flexibility, and body awareness. They can vary from basic seated poses to more complex inversions and balances. Performing asanas also helps to cultivate mindfulness and presence in the body.
                </li>
                <li>
                    <strong>Pranayama: </strong> 
                    Pranayama is the practice of breath control. It involves techniques that regulate the breath to increase energy (prana) in the body and calm the nervous system. Through controlled inhalation, exhalation, and retention of breath, pranayama is believed to improve mental clarity, focus, and emotional balance. Common forms include Ujjayi (victorious breath), Kapalbhati (skull shining breath), and Anulom Vilom (alternate nostril breathing).
                </li>
                <li>
                    <strong>Chakra: </strong> 
                    Chakras are energy centers within the body that are believed to influence various physical, emotional, and spiritual aspects of life. There are seven main chakras, each located along the spine and associated with different colors, elements, and functions. The first chakra (Muladhara) is located at the base of the spine, and the seventh chakra (Sahasrara) is at the top of the head. Balancing and unblocking chakras can help promote overall well-being.
                </li>
                <li>
                    <strong>Drishti: </strong> 
                    Drishti is a focused gaze or point of concentration that helps practitioners achieve better balance and awareness in their poses. It is an important tool for improving concentration and cultivating a meditative state during practice. Each asana has a recommended drishti point, which may be toward a physical object, a spot on the floor, or even internally toward a part of the body.
                </li>
                <li>
                    <strong>Mantra: </strong> 
                    A mantra is a word, sound, or phrase that is repeated during meditation to help focus the mind and evoke a specific state of consciousness. It can be a sacred syllable like "Om" or a more complex affirmation. The repetition of a mantra helps reduce mental distractions, creating a deeper connection with the self and promoting mindfulness.
                </li>
                <li>
                    <strong>Om: </strong> 
                    Om is one of the most sacred and powerful sounds in yoga, believed to represent the vibration of the universe itself. It is often chanted at the beginning and end of a yoga practice to create a sense of unity and harmony. The sound Om is said to embody the essence of life, creation, preservation, and destruction, symbolizing the interconnectedness of all beings.
                </li>
            </ul>
        </div>

        <h3 className="text-2xl font-medium text-charcoal tracking-wide lg:text-6xl lg:col-span-1 lg:max-w-[350px]">Before Starting Your Flow</h3>
        {/* Preparing the Mind */}
        <p className="lg:col-span-2">
            Before you begin your practice, it’s essential to prepare your mind. These mental preparations allow you to step onto the mat with purpose, leaving behind distractions and focusing on the present moment. The following tips can help calm your mind and open up space for a peaceful and mindful practice: 
        </p>
        <div className="bg-moss bg-opacity-20 border border-moss rounded-2xl shadow p-4 sm:p-8 space-y-4 lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl text-center mb-2">Mental Preparation</h2>
            <ul className="list-inside space-y-4 text-sm sm:text-base">
                <li><strong>Breathing Exercises:</strong> Start with deep, diaphragmatic breathing to calm your mind and focus your attention on the present moment.</li>
                <li><strong>Set an Intention:</strong> Decide what you want to achieve in your practice. Whether it’s to increase flexibility, calm your mind, or build strength, setting an intention can keep you focused.</li>
                <li><strong>Clear Your Mind:</strong> Let go of any distractions or stresses of the day. Focus on your breath and be present.</li>
            </ul>
        </div>

        {/* Preparing the Body */}
        <p className="lg:col-span-2">
            Preparing your body physically is just as important as preparing your mind. The more you tune into your body’s needs, the more effective and enjoyable your practice will be. These tips can help ensure your body is physically ready for your practice:
        </p>
        <div className="bg-moss bg-opacity-20 border border-moss rounded-2xl shadow p-4 sm:p-8 space-y-4 lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl text-center mb-2">Physical Preparation</h2>
            <ul className="list-inside space-y-4 text-sm sm:text-base">
                <li><strong>Wear Comfortable Clothing:</strong> Choose clothes that allow for freedom of movement. Avoid anything too tight or restrictive.</li>
                <li><strong>Gather Props:</strong> A yoga mat is essential, but you may also want to have a block, strap, or cushion available for extra support.</li>
                <li><strong>Hydrate:</strong> Drink water before and after your practice, but avoid drinking too much immediately before starting.</li>
                <li><strong>Clear Your Schedule:</strong> Set aside a dedicated time for your yoga practice and remove any distractions so you can focus fully.</li>
                <li><strong>Check in With Your Body:</strong> Assess how you feel before starting. Are there areas of tension or discomfort? Understanding your body’s state will help you practice more safely.</li>
            </ul>
        </div>
        
        {/* Routine */}
        <p className="lg:col-span-2">
            Creating a consistent yoga routine is essential for making steady progress. It helps build strength, flexibility, and mindfulness over time. As a beginner, it’s important to start with a simple, manageable routine and gradually increase the intensity. 
        </p>
        <div className="bg-moss bg-opacity-20 border border-moss rounded-2xl shadow p-4 sm:p-8 space-y-4 lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl text-center mb-2">Building Your Yoga Routine</h2>
            <ul className="list-inside space-y-4 text-sm sm:text-base">
                <li><strong>Start Slow:</strong> Begin with short sessions (10-15 minutes) and gradually increase the time as you feel more comfortable.</li>
                <li><strong>Include a Warm-Up:</strong> Start each session with gentle stretches or a few rounds of Sun Salutations to prepare your body.</li>
                <li><strong>Incorporate Breathing Exercises:</strong> Add pranayama to your practice to help with focus and relaxation.</li>
                <li><strong>End with Relaxation:</strong> Finish each practice with Savasana (Corpse Pose) to allow your body to integrate the benefits of the practice.</li>
            </ul>
        </div>
    
        {/* Tips */}
         <p className="lg:col-span-2">
                Here are a few safe practice tips to help ensure that your yoga practice is enjoyable and injury-free:
        </p>
        <div className="bg-moss bg-opacity-20 border border-moss rounded-2xl shadow p-4 sm:p-8 space-y-4 lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl text-center mb-2">Safe Practice Tips</h2>
            <div className="list-inside space-y-4 text-sm sm:text-base">
                <p><strong>Listen to your body:</strong> Avoid pain or strain, and adjust your posture if needed.</p>
                <p><strong>Use props:</strong> Blocks, straps, and blankets can help improve alignment.</p>
                <p><strong>Warm up properly:</strong> Prepare your muscles with gentle stretches before deeper poses.</p>
                <p><strong>Stay mindful:</strong> Avoid rushing through poses. Take your time, stay present, and explore how each posture feels in your body.</p>
            </div>
        </div>
    </div>
    </div>
    );
};

export default Guide;
