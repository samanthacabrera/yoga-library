import React, {useState} from "react";

const Path = () => {
    const [openIndexes, setOpenIndexes] = useState([]);

    const limbs = [
        { name: "Yama", description: "Ethical disciplines and moral restraints.", content: (
            <div className="space-y-12">
                <p>The first limb of yoga, Yama, focuses on ethical disciplines or practices related to how we interact with the world around us. While yoga can enhance physical strength, flexibility, and mental calm, its true value extends beyond the physical practice, influencing how we live and behave in everyday life.</p>
                <div className="bg-moss bg-opacity-20 border border-moss rounded-2xl shadow p-4 sm:p-8 space-y-4">
                    <p>There are five Yamas:</p>
                    <ul>
                        <li>Ahimsa <span className="italic opacity-70">(non-violence)</span></li>
                        <li>Satya <span className="italic opacity-70">(truthfulness)</span></li>
                        <li>Asteya <span className="italic opacity-70">(non-stealing)</span></li>
                        <li>Brahmacharya <span className="italic opacity-70">(moderation)</span></li>
                        <li>Aparigraha <span className="italic opacity-70">(non-hoarding)</span></li>
                    </ul>
                </div>
                <p>Yoga aims to transform all aspects of life, not just the time spent on the mat. By practicing kindness, truthfulness, and responsible energy use, individuals can positively impact both themselves and those around them.</p>
            </div>
        ) },
        { name: "Niyama", description: "Personal observances for self-discipline.", content: (
            <div className="space-y-12">
               <p>The second limb of yoga, Niyama, refers to personal observances or disciplines that guide our relationship with ourselves. While Yamas focus on our interactions with others, Niyamas emphasize the internal practices that help foster a healthy, balanced, and mindful life.</p>
                <div className="bg-moss bg-opacity-20 border border-moss rounded-2xl shadow p-4 sm:p-8 space-y-4">
                <p>There are five Niyamas:</p>
                <ul>
                    <li>Shaucha <span className="italic opacity-70">(cleanliness)</span></li>
                    <li>Santosha <span className="italic opacity-70">(contentment)</span></li>
                    <li>Tapas <span className="italic opacity-70">(austerity)</span></li>
                    <li>Svadhyaya <span className="italic opacity-70">(self-study)</span></li>
                    <li>Ishvara Pranidhana <span className="italic opacity-70">(devotion to a higher power)</span></li>
                </ul>
                </div>
                <p>Niyamas, like Yamas, are universal practices. They provide a foundation for internal harmony and personal growth that extend beyond the yoga mat and influence all aspects of life. By incorporating the Niyamas, we can develop a deeper sense of mindfulness, contentment, and spiritual alignment.</p>
            </div>
        ) },
        { name: "Asana", description: "Physical postures for health and meditation.", content: (
            <div className="space-y-12">
                <p>The third limb of yoga, Asana, refers to the physical postures or poses practiced in yoga. Asana is perhaps the most well-known limb, as it is the foundation of what many people think of as "yoga." However, the practice of Asana goes far beyond simply moving through physical poses—it is a tool for cultivating strength, flexibility, and stability, both in the body and the mind.</p>
                <p>While modern yoga often includes a wide range of physical postures, the primary goal of Asana is to create a harmonious connection between body and mind. When practiced mindfully, Asana can lead to greater body awareness, improved posture, and the release of tension. The key to Asana practice is not perfecting each pose, but rather focusing on the breath and maintaining an open, non-judgmental attitude toward the practice.</p>
                <p>Ultimately, Asana serves as a foundation for the deeper practices of yoga, allowing practitioners to develop physical and mental resilience that supports the rest of the yoga journey.</p>
            </div>
        ) },
        { name: "Pranayama", description: "Control of breath to regulate energy.", content: (
            <div className="space-y-12">
                <p>The fourth limb of yoga, Pranayama, refers to the regulation of breath, often translated as “extension of breath” or “control of life force.” Prana is the vital energy or life force that flows through all living beings, and the practice of Pranayama focuses on harnessing and directing this energy through controlled breathing techniques.</p>
                <div className="bg-moss bg-opacity-20 border border-moss rounded-2xl shadow p-4 sm:p-8 space-y-4">
                <p>Pranayama is the active regulation of breath and not simply passive observation. Every complete breathing cycle in Pranayama has four parts:</p>
                <ul>
                    <li>Rechaka: Exhalation, the act of releasing breath from the body.</li>
                    <li>Bahya Kumbhaka: Suspension of breath after exhalation, where the breath is held outside the body, creating a moment of stillness.</li>
                    <li>Puraka: Inhalation, the act of drawing breath into the body.</li>
                    <li>Antara Kumbhaka: Retention of breath after inhalation, where the breath is held inside the body, allowing energy to circulate and deepen the connection to the breath</li>
                </ul>
                </div>
                <p>Through the regular practice of Pranayama, we learn to synchronize the breath with movement, which enhances our overall yoga experience. It also allows practitioners to connect more deeply with their inner self, promoting mental clarity and emotional stability.</p>
            </div>
        ) },
        { name: "Pratyahara", description: "Withdrawal of senses to focus inward.", content: (
            <div className="space-y-12">
                <p>The fifth limb of yoga, Pratyahara, refers to the practice of withdrawing the senses from external distractions in order to turn inward and cultivate a deeper sense of awareness.In daily life, we are constantly bombarded with stimuli from our environment—sounds, sights, smells, tastes, and touch. These sensory inputs often distract the mind, making it difficult to focus, meditate, or experience inner peace. Pratyahara teaches us how to detach from these external influences and shift our focus inward, allowing us to become more present and aware of our own thoughts, feelings, and sensations.</p>
                <div className="bg-moss bg-opacity-20 border border-moss rounded-2xl shadow p-4 sm:p-8 space-y-4">
                    <p>Pratyahara is often practiced through meditation or mindful exercises that encourage the practitioner to disengage from sensory distractions. For example:</p>
                    <ul>
                        <li>Focus on the breath: By concentrating solely on the rhythm of the breath, the practitioner reduces their awareness of external stimuli and fosters a state of inner calm.</li>
                        <li>Body scanning: A practice of mentally scanning the body from head to toe, becoming aware of any tension or sensations without being distracted by outside influences.</li>
                        <li>Silent meditation: Sitting in stillness, focusing on the mind and body, while allowing external distractions to fade into the background.</li>
                    </ul>
                </div>
                <p>Ultimately, Pratyahara acts as a bridge between the external world and the internal world. It prepares the practitioner for the deeper practices of Dharana (concentration), Dhyana (meditation), and Samadhi (union or bliss), by calming the mind and allowing the practitioner to focus without interference from sensory distractions.</p>
            </div>
        ) },
        { name: "Dharana", description: "Concentration on a single point or object.", content: (
            <div className="space-y-12">
                <p>The sixth limb of yoga, Dharana, refers to the practice of concentration, specifically focusing the mind on a single point or object. Dharana is the foundation of meditation. Before one can dive into deep meditation (Dhyana), concentration must first be cultivated. The mind, naturally inclined to wander, must be trained to stay focused, and this is where Dharana comes in. It is the process of training the mind to maintain a single-pointed focus, whether it’s on the breath, a mantra, a tangile object, or a mental image.</p>
                <p>Dharana the groundwork needed for entering the deeper states of meditation and experiencing the profound inner peace that yoga promises. Through sustained concentration, the practitioner can create a clear, focused mind that is no longer at the mercy of distractions, but instead firmly grounded in the present moment.</p>
            </div>
        ) },
        { name: "Dhyana", description: "Meditation for clarity and mindfulness.", content: (
            <div className="space-y-12">
                <p>The seventh limb of yoga, Dhyana, refers to meditation—the practice of sustained, uninterrupted concentration. It is a deeper state of mental focus that follows Dharana (concentration). While Dharana is about holding the mind’s attention on a single point, Dhyana is the experience of complete absorption in that focus. When concentration is unbroken and effortless, it transforms into Dhyana, where the mind becomes fully immersed in the object of focus.</p>
                <ul className="bg-moss bg-opacity-20 border border-moss rounded-2xl shadow p-4 sm:p-8 space-y-4">
                    <li>Effortless Flow: In Dhyana, concentration becomes fluid and natural. Unlike in Dharana, where effort is needed to maintain focus, meditation (Dhyana) feels effortless and expansive. There’s a sense of ease as the mind becomes absorbed in its object.</li>
                    <li>Awareness: The key element in Dhyana is awareness without distraction. The mind remains steady and alert, but without the usual fluctuations that occur in everyday thinking. It is a heightened state of awareness where the practitioner is fully present in the experience.</li>
                    <li>Absence of Mental Chatter: In true Dhyana, mental chatter, distraction, and self-talk gradually fade away. The mind becomes clear, still, and one-pointed, creating a sense of inner peace and calm.</li>
                </ul>
                <p>Dhyana serves as the key to accessing a higher state of consciousness. It allows practitioners to connect with their inner selves, creating a profound sense of peace and clarity. Through regular meditation, the mind is purified, distractions fall away, and deeper wisdom begins to emerge.</p>
            </div>
        ) },
        { name: "Samadhi", description: "Union with the self, ultimate absorption.", content: (
            <div className="space-y-12">
                <p>The final limb of yoga, Samadhi, represents the culmination of the yogic journey. It is the state of ultimate absorption, union, and bliss.</p>
                <p>Samadhi is not something that can be forced or attained through sheer willpower. It arises naturally through the deep practice of the previous limbs of yoga—Yama (moral restraint), Niyama (personal observances), Asana (postures), Pranayama (breath control), Pratyahara (sense withdrawal), Dharana (concentration), and Dhyana (meditation). By cultivating these practices, the mind gradually becomes purer, calmer, and more focused, allowing for the experience of Samadhi to unfold.</p>
                <p>Samadhi is not simply a state to be attained; it is a profound shift in perception that can transform the way one experiences life. It is the ultimate union of body, mind, and spirit, and the realization of the interconnectedness of all things.</p>
            </div>
        ) },
    ];

    const toggleAccordion = (index) => {
        setOpenIndexes(prev => {
        if (prev.includes(index)) {
            return prev.filter(i => i !== index);
        } else {
            return [...prev, index];
        }
        });
    };

   return (
       <div className="max-w-2xl mx-auto my-40 space-y-12">
           <h1 className="text-center my-12 text-4xl lg:text-8xl">The Eight-Limbed Path of Yoga</h1>
    
                <p>
                    The <strong>8-Limbed Path of Yoga</strong>, as outlined in the ancient text <em>The Yoga Sutras of Patanjali</em>, is a timeless and holistic framework for living a life of purpose, self-discipline, and spiritual awakening. It is not merely a series of physical postures but a deeply transformative journey that integrates ethical conduct, self-mastery, breath control, mental focus, and meditative awareness—ultimately leading to profound inner peace and enlightenment.
                </p>
                <p>
                    Each of the eight limbs—<em>Yama</em> (ethical principles), <em>Niyama</em> (self-discipline), <em>Asana</em> (physical practice), <em>Pranayama</em> (breath control), <em>Pratyahara</em> (withdrawal of the senses), <em>Dharana</em> (concentration), <em>Dhyana</em> (meditation), and <em>Samadhi</em> (self-realization)—serves as a stepping stone toward a balanced, mindful, and spiritually enriched life. These teachings encourage us to cultivate integrity, develop inner strength, and deepen our awareness, ultimately guiding us toward self-discovery and higher consciousness.
                </p>
                <p>
                    The beauty of this path lies in its adaptability; it is not confined to a particular belief system, nor does it require mastery overnight. Instead, it offers a structured yet fluid approach that meets practitioners wherever they are on their journey. Whether you seek physical well-being, mental clarity, emotional resilience, or spiritual awakening, the 8-limbed path provides the tools to align body, mind, and soul.
                </p>
           
                {limbs.map((limb, index) => (
                <div key={index} className="border-b border-gray-300 mb-4">
                    <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left py-4 px-2 flex justify-between items-center"
                    >
                    <h2 className={`text-2xl font-medium text-charcoal tracking-wide ${openIndexes.includes(index) ? 'opacity-0' : 'opacity-100'}`}>
                        {limb.name}
                    </h2>
                    <span className="text-xl">{openIndexes.includes(index) ? "−" : "+"}</span>
                    </button>
                    {openIndexes.includes(index) && (
                    <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16 lg:space-y-0 space-y-12 pb-20">
                        <div>
                        <h2 className="text-2xl text-left font-medium text-charcoal tracking-wide lg:text-6xl lg:col-span-1 lg:max-w-[350px]">
                            {limb.name}
                        </h2>
                        <p className="mt-2 text-lg sm:text-xl text-charcoal">{limb.description}</p>
                        </div>
                        <div className="my-8 col-span-2">{limb.content}</div>
                    </div>
                    )}
                </div>
                ))}

            <div className="my-12 space-y-12">
                <p>The <strong>8-Limbed Path of Yoga</strong> is far more than a set of guidelines—it is a profound journey of transformation, leading practitioners toward a life of integrity, self-discipline, and spiritual awareness. Rooted in the teachings of <em>The Yoga Sutras of Patanjali</em>, this path provides a structured framework for cultivating inner peace, ethical living, and deep self-realization.</p>
                <p>Each limb serves as a stepping stone, guiding the practitioner through ethical disciplines (<em>Yama</em>), self-reflection (<em>Niyama</em>), physical practice (<em>Asana</em>), breath control (<em>Pranayama</em>), sensory withdrawal (<em>Pratyahara</em>), focused concentration (<em>Dharana</em>), meditative absorption (<em>Dhyana</em>), and ultimately, transcendence (<em>Samadhi</em>). When woven together, these practices create a holistic approach to life—one that nurtures the body, refines the mind, and awakens the soul.</p>
                <p>Yoga is not confined to a mat or a meditation cushion; it is a way of living that permeates every moment, every action, and every interaction. By practicing non-violence (<em>Ahimsa</em>), truthfulness (<em>Satya</em>), and self-discipline (<em>Tapas</em>), we create harmony within ourselves and our surroundings. By cultivating contentment (<em>Santosha</em>), self-inquiry (<em>Svadhyaya</em>), and devotion (<em>Ishvara Pranidhana</em>), we deepen our understanding of life’s greater purpose.</p>
                <p>In a world filled with distractions and constant stimulation, the practices of <em>Pratyahara</em> and <em>Dharana</em> teach us how to turn inward, reclaim our attention, and focus on what truly matters. Meditation (<em>Dhyana</em>) then becomes the gateway to a still and centered mind, allowing us to connect with our highest self. And when all eight limbs align in harmony, the practitioner experiences <em>Samadhi</em>—a state of profound peace, where the boundaries of the self dissolve, and one merges with the infinite.</p>
                <p>Walking the 8-limbed path is not about perfection; it is about progress, patience, and practice. There will be challenges, moments of doubt, and times when we fall short of our ideals—but yoga teaches us resilience, self-compassion, and the ability to begin again.</p>
                <p>Whether you are taking your first steps or have been practicing for years, the teachings of yoga remain a constant source of wisdom and guidance. By integrating these principles into daily life—not just in movement, but in thoughts, words, and actions—we cultivate a life of balance, clarity, and fulfillment.</p>
            </div>
        </div>
    );
};

export default Path;