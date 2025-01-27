import React from "react";
import { useLocation } from "react-router-dom";
import Path from "./Path";

const Limb = () => {
    const limbs = [
        {
            path: "yama", title: "Yama", description: "Ethical disciplines and moral restraints.",
            content: 
                <>
                    <p>The first limb of yoga, Yama, focuses on ethical disciplines or practices related to how we interact with the world around us. While yoga can enhance physical strength, flexibility, and mental calm, its true value extends beyond the physical practice, influencing how we live and behave in everyday life.</p>
                    <p>There are five Yamas:</p>
                    <ul>
                        <li>Ahimsa (non-violence)</li>
                        <li>Satya (truthfulness)</li>
                        <li>Asteya (non-stealing)</li>
                        <li>Brahmacharya (moderation)</li>
                        <li>Aparigraha (non-hoarding)</li>
                    </ul>
                    <p>Yoga aims to transform all aspects of life, not just the time spent on the mat. By practicing kindness, truthfulness, and responsible energy use, individuals can positively impact both themselves and those around them.</p>
                </>
         },
        {
            path: "niyama", title: "Niyama", description: "Personal observances for self-discipline.",
                        content: 
                <>
                    <p>The second limb of yoga, Niyama, refers to personal observances or disciplines that guide our relationship with ourselves. While Yamas focus on our interactions with others, Niyamas emphasize the internal practices that help foster a healthy, balanced, and mindful life.</p>
                    <p>There are five Niyamas:</p>
                    <ul>
                        <li>Shaucha (cleanliness)</li>
                        <li>Santosha (contentment)</li>
                        <li>Tapas (austerity)</li>
                        <li>Svadhyaya (self-study)</li>
                        <li>Ishvara Pranidhana (devotion to a higher power)</li>
                    </ul>
                    <p>Niyamas, like Yamas, are universal practices. They provide a foundation for internal harmony and personal growth that extend beyond the yoga mat and influence all aspects of life. By incorporating the Niyamas, we can develop a deeper sense of mindfulness, contentment, and spiritual alignment.</p>
                </>
         },
        {
            path: "asana", title: "Asana", description: "Physical postures for health and meditation.", 
            content: 
                <>
                    <p>The third limb of yoga, Asana, refers to the physical postures or poses practiced in yoga. Asana is perhaps the most well-known limb, as it is the foundation of what many people think of as "yoga." However, the practice of Asana goes far beyond simply moving through physical poses—it is a tool for cultivating strength, flexibility, and stability, both in the body and the mind.</p>
                    <p>While modern yoga often includes a wide range of physical postures, the primary goal of Asana is to create a harmonious connection between body and mind. When practiced mindfully, Asana can lead to greater body awareness, improved posture, and the release of tension. The key to Asana practice is not perfecting each pose, but rather focusing on the breath and maintaining an open, non-judgmental attitude toward the practice.</p>
                    <p>Ultimately, Asana serves as a foundation for the deeper practices of yoga, allowing practitioners to develop physical and mental resilience that supports the rest of the yoga journey.</p>
                </>
         },
        {
            path: "pranayama", title: "Pranayama", description: "Control of breath to regulate energy.", 
            content: 
                <>
                    <p>The fourth limb of yoga, Pranayama, refers to the regulation of breath, often translated as “extension of breath” or “control of life force.” Prana is the vital energy or life force that flows through all living beings, and the practice of Pranayama focuses on harnessing and directing this energy through controlled breathing techniques.</p>
                    <p>Pranayama is the active regulation of breath and not simply passive observation. Every complete breathing cycle in Pranayama has four parts:</p>
                        <ul>
                            <li>Rechaka: Exhalation, the act of releasing breath from the body.</li>
                            <li>Bahya Kumbhaka: Suspension of breath after exhalation, where the breath is held outside the body, creating a moment of stillness.</li>
                            <li>Puraka: Inhalation, the act of drawing breath into the body.</li>
                            <li>Antara Kumbhaka: Retention of breath after inhalation, where the breath is held inside the body, allowing energy to circulate and deepen the connection to the breath</li>
                        </ul>
                    <p>Through the regular practice of Pranayama, we learn to synchronize the breath with movement, which enhances our overall yoga experience. It also allows practitioners to connect more deeply with their inner self, promoting mental clarity and emotional stability.</p>
                </>
        },
        {
            path: "pratyahara", title: "Pratyahara", description: "Withdrawal of senses to focus inward.",
            content: 
                <>
                    <p>The fifth limb of yoga, Pratyahara, refers to the practice of withdrawing the senses from external distractions in order to turn inward and cultivate a deeper sense of awareness.In daily life, we are constantly bombarded with stimuli from our environment—sounds, sights, smells, tastes, and touch. These sensory inputs often distract the mind, making it difficult to focus, meditate, or experience inner peace. Pratyahara teaches us how to detach from these external influences and shift our focus inward, allowing us to become more present and aware of our own thoughts, feelings, and sensations.</p>
                    <p>Pratyahara is often practiced through meditation or mindful exercises that encourage the practitioner to disengage from sensory distractions. For example:</p>
                    <ul>
                        <li>Focus on the breath: By concentrating solely on the rhythm of the breath, the practitioner reduces their awareness of external stimuli and fosters a state of inner calm.</li>
                        <li>Body scanning: A practice of mentally scanning the body from head to toe, becoming aware of any tension or sensations without being distracted by outside influences.</li>
                        <li>Silent meditation: Sitting in stillness, focusing on the mind and body, while allowing external distractions to fade into the background.</li>
                    </ul>
                    <p>Ultimately, Pratyahara acts as a bridge between the external world and the internal world. It prepares the practitioner for the deeper practices of Dharana (concentration), Dhyana (meditation), and Samadhi (union or bliss), by calming the mind and allowing the practitioner to focus without interference from sensory distractions.</p>
                </>
         },
        {
            path: "dharana", title: "Dharana", description: "Concentration on a single point or object.",
            content: 
                <>
                    <p>The sixth limb of yoga, Dharana, refers to the practice of concentration, specifically focusing the mind on a single point or object. Dharana is the foundation of meditation. Before one can dive into deep meditation (Dhyana), concentration must first be cultivated. The mind, naturally inclined to wander, must be trained to stay focused, and this is where Dharana comes in. It is the process of training the mind to maintain a single-pointed focus, whether it’s on the breath, a mantra, a tangile object, or a mental image.</p>
                    <p>Dharana the groundwork needed for entering the deeper states of meditation and experiencing the profound inner peace that yoga promises. Through sustained concentration, the practitioner can create a clear, focused mind that is no longer at the mercy of distractions, but instead firmly grounded in the present moment.</p>
                </>
         },
        {
            path: "dhyana", title: "Dhyana", description: "Meditation for clarity and mindfulness.", 
            content: 
                <>
                    <p>The seventh limb of yoga, Dhyana, refers to meditation—the practice of sustained, uninterrupted concentration. It is a deeper state of mental focus that follows Dharana (concentration). While Dharana is about holding the mind’s attention on a single point, Dhyana is the experience of complete absorption in that focus. When concentration is unbroken and effortless, it transforms into Dhyana, where the mind becomes fully immersed in the object of focus.</p>
                    <p></p>
                    <ul>
                        <li>Effortless Flow: In Dhyana, concentration becomes fluid and natural. Unlike in Dharana, where effort is needed to maintain focus, meditation (Dhyana) feels effortless and expansive. There’s a sense of ease as the mind becomes absorbed in its object.</li>
                        <li>Awareness: The key element in Dhyana is awareness without distraction. The mind remains steady and alert, but without the usual fluctuations that occur in everyday thinking. It is a heightened state of awareness where the practitioner is fully present in the experience.</li>
                        <li>Absence of Mental Chatter: In true Dhyana, mental chatter, distraction, and self-talk gradually fade away. The mind becomes clear, still, and one-pointed, creating a sense of inner peace and calm.</li>
                    </ul>
                    <p>Dhyana serves as the key to accessing a higher state of consciousness. It allows practitioners to connect with their inner selves, creating a profound sense of peace and clarity. Through regular meditation, the mind is purified, distractions fall away, and deeper wisdom begins to emerge.</p>
                </>
         },
        {
            path: "samadhi", title: "Samadhi", description: "Union with the self, ultimate absorption.",
            content: 
                <>
                    <p>The final limb of yoga, Samadhi, represents the culmination of the yogic journey. It is the state of ultimate absorption, union, and bliss.</p>
                    <p>Samadhi is not something that can be forced or attained through sheer willpower. It arises naturally through the deep practice of the previous limbs of yoga—Yama (moral restraint), Niyama (personal observances), Asana (postures), Pranayama (breath control), Pratyahara (sense withdrawal), Dharana (concentration), and Dhyana (meditation). By cultivating these practices, the mind gradually becomes purer, calmer, and more focused, allowing for the experience of Samadhi to unfold.</p>
                    <p>Samadhi is not simply a state to be attained; it is a profound shift in perception that can transform the way one experiences life. It is the ultimate union of body, mind, and spirit, and the realization of the interconnectedness of all things.</p>
                </>
         },
    ];

    const location = useLocation();
    const currentPath = location.pathname.replace("/pathofyoga/", ""); 

    const currentLimb = limbs.find((limb) => limb.path === currentPath);

    return (
        <div className="flex flex-col min-h-screen w-full max-w-3xl p-8 mx-auto">
        <Path/>
        <div className="flex flex-col">
            {currentLimb ? (
                <>
                    <div className="py-12 text-center">
                        <h1 className="font-semibold text-2xl">{currentLimb.title}</h1>
                        <p className="text-lg">{currentLimb.description}</p>     
                    </div>
                    <div className="space-y-2 pb-20">
                        {currentLimb.content}
                    </div>
                </>
            ) : (
                <></>
            )}
        </div>
        </div>
    );
};

export default Limb;
