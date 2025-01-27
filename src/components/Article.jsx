import React, { useEffect }  from "react";
import { Link, useParams } from "react-router-dom";


const articleData = [
    {
        slug: "setting-intentions",
        title: "Setting Intentions for Your Yoga Practice",
        content: (
            <section className="space-y-2">
                <p>Hi friends,</p>
                <p>
                    Have you ever taken a moment before starting your yoga practice—or even your day—to set an intention? Lately, I’ve been reflecting on how powerful this small act can be. It’s not about achieving something specific or checking a box; it’s about creating a meaningful connection between your mind, body, and spirit. Setting an intention has been one of the most grounding practices in my life, both on and off the mat.
                </p>
                <p>
                    To me, an intention is like a soft whisper reminding you of what truly matters. It’s a gentle guide rather than a rigid rule. Whether my intention is “stay present,” “cultivate patience,” or “embrace joy,” it gives me something to focus on when my mind inevitably wanders. And yes, my mind does wander—a lot! But that’s okay. Having that intention feels like a little lighthouse pulling me back when I drift too far.
                </p>
                <p>
                    Over time, I’ve realized that setting intentions isn’t just for yoga; it’s for life. For example, when I begin my day with an intention like “be kind to myself,” it helps me approach challenges with a softer mindset. If I make a mistake or feel overwhelmed, I remember that intention and give myself grace. On other days, my intention might be “bring calm to others,” which nudges me to approach conversations and relationships with patience and understanding.
                </p>
                <p>
                    The beautiful thing about intentions is that they’re deeply personal. Some days, your intention might be as simple as “breathe.” Other days, it might reflect a bigger aspiration, like “stay open to change” or “release what no longer serves me.” Whatever it is, it’s your anchor—a way to remind yourself of the energy you want to cultivate, not just in your yoga flow but in every aspect of your life.
                </p>
                <p>
                    If you’re new to setting intentions, here are a few tips to get started:
                </p>
                <ul className="pl-10 space-y-2">
                    <li>
                        <strong>Pause and Reflect:</strong> Before stepping onto your mat or starting your day, take a moment to check in with yourself. How are you feeling? What do you need most right now?
                    </li>
                    <li>
                        <strong>Keep It Positive:</strong> Frame your intention as something you’re inviting into your life, not something you’re avoiding. For instance, instead of “I don’t want to feel stressed,” try “I welcome peace and clarity.”
                    </li>
                    <li>
                        <strong>Make It Simple:</strong> Your intention doesn’t need to be complicated. A single word, like “balance” or “gratitude,” can be incredibly powerful.
                    </li>
                    <li>
                        <strong>Revisit It Often:</strong> Throughout your practice or your day, remind yourself of your intention. If you notice your mind wandering or tension creeping in, take a deep breath and return to your anchor.
                    </li>
                </ul>
                <p>
                    I’ve also found that journaling about my intentions at the end of the day helps me reflect on how they influenced my mindset and actions. Did I show myself kindness today? Did I bring calm to a stressful moment? These reflections deepen the practice and help me grow.
                </p>
                <p>
                    What about you? Do you have a favorite way to set intentions or a specific intention that’s resonated with you lately? I’d love to hear your thoughts and experiences. Feel free to reply to this email or share in our community space. Let’s inspire and support each other as we navigate this journey.
                </p>
                <p>Namaste,</p>
                <p>Sam </p>
            </section>
        ),
        },
        {
        slug: "breathing-techniques",
        title: "Breathing Techniques for Beginners",
        content: (
        <section className="space-y-2">
            <p>Hi friends,</p>
            <p>
                Have you ever noticed how your breath changes depending on your mood or activity? Breathing is something we often overlook, but in yoga, it’s everything. Breathwork bridges the gap between body and mind, helping you stay present and grounded. By mastering simple techniques, known as pranayama, you can transform your practice and navigate life’s stresses with ease. Let’s dive into what pranayama is and explore three beginner-friendly techniques: Ujjayi, Nadi Shodhana, and Dirga Pranayama.
            </p>
            <p>
                Pranayama, which means “extension of breath” in Sanskrit, is a core part of yoga. It involves consciously controlling your breath to enhance energy flow and bring awareness to the present moment. Beyond the mat, pranayama helps calm your mind, improve focus, and reduce stress—it’s like unlocking a superpower you already possess. When you connect your breath to your movements, your yoga practice becomes more intentional and transformative.
            </p>
            <p>
                Let’s start with Ujjayi Pranayama, often called “victorious breath.” This technique involves gently constricting the back of your throat to create a soft, ocean-like sound as you inhale and exhale. Begin by sitting comfortably or standing tall. Close your eyes, and on your next inhale, softly constrict the back of your throat as if whispering “ha.” Exhale with the same constriction, creating a rhythmic wave-like sound. Focus on the sensation and sound of your breath as you continue for several minutes. Ujjayi calms the nervous system, improves focus, and enhances your connection to movement—perfect for flowing through your asanas.
            </p>
            <p>
                Next up is Nadi Shodhana, or alternate nostril breathing. This technique balances energy and brings harmony to your mind and body. To practice, sit comfortably with your spine tall. Rest your left hand on your knee and use your right thumb to close your right nostril. Inhale deeply through your left nostril, then close it with your right ring finger. Release your right nostril and exhale slowly. Inhale through your right nostril, close it, and exhale through your left. Repeat for several cycles, focusing on maintaining a steady rhythm. This practice is excellent for reducing anxiety, clearing your mind, and preparing for meditation.
            </p>
            <p>
                Finally, let’s explore Dirga Pranayama, or three-part breath. This foundational technique promotes relaxation by fully expanding your lungs. Start by sitting tall, with one hand on your belly and the other on your chest. Inhale deeply, filling your belly first, then your rib cage, and finally your chest. Exhale in reverse, releasing the chest, ribs, and then the belly. Repeat this process for several rounds, focusing on the sensation of your breath filling and emptying each part of your lungs. Dirga Pranayama reduces tension, increases lung capacity, and helps you feel grounded—perfect for starting or ending your day.
            </p>
            <p>
                Incorporating these pranayama techniques into your yoga practice can elevate your experience. Ujjayi pairs beautifully with movement, while Nadi Shodhana and Dirga Pranayama are excellent for centering yourself before or after your session. Experiment and discover which techniques resonate with you most. Remember, breathwork is a lifelong journey—be patient and enjoy the process. I’d love to hear your experiences: What breathing techniques have you tried, and how do they make you feel? Let’s keep the conversation going!
            </p>
            <p>Namaste,</p>
            <p>Sam</p>
        </section>
        ),
    },
    {
    slug: "building-routine",
    title: "How to Build a Daily Yoga Routine",
    content: (
        <section className="space-y-2">
            <p>Hi friends,</p>
            <p>
                Building a daily yoga routine can seem daunting at first, but with a little planning and dedication, it can become a rewarding part of your day. Yoga is a practice that helps improve flexibility, strength, and mindfulness, and the more consistently you practice, the more you'll feel its benefits. In this article, we’ll walk you through the steps to create a personalized yoga routine that fits your goals and lifestyle.
            </p>

            <p>
                <strong>Why Create a Daily Yoga Routine?</strong>
            </p>
            <p>
                Yoga is a powerful tool for personal growth, but it requires consistency to unlock its full potential. A daily practice, even if it’s just 10–15 minutes a day, can significantly improve your physical and mental well-being. Whether you’re seeking better flexibility, stress relief, or a sense of inner calm, building a daily yoga routine will help you progress toward your goals. Here are some key steps to help you get started.
            </p>

            <p>
                <strong>Steps to Build Your Routine</strong>
            </p>

            <p>
                <strong>1. Set a Time</strong>
            </p>
            <p>
                One of the most important aspects of building a consistent yoga routine is setting aside a specific time each day. Treat your practice like any other important appointment. Whether it’s in the morning to start your day with clarity or in the evening to wind down, find a time that fits your schedule. If mornings are tough, don’t stress—it’s about finding what works for you.
            </p>
            <p>
                <strong>2. Create a Space</strong>
            </p>
            <p className="text-lg leading-relaxed text-gray-500 mt-2">
                Setting up a dedicated yoga space can make a huge difference in creating a routine that sticks. It doesn’t need to be a large space—just a quiet, clutter-free area where you feel relaxed. This space should feel comfortable and inviting, with enough room for your yoga mat and any props you may use (like blocks, straps, or blankets). If you can, try to keep your yoga area free from distractions, so you can truly focus on your practice. Lighting a candle or playing soft music can also help set the mood.
            </p>
            <p>
                <strong>3. Define Your Goals</strong>
            </p>
            <p className="text-lg leading-relaxed text-gray-500 mt-2">
                Every yoga practice should be aligned with your personal goals. Are you looking to increase flexibility, build strength, or reduce stress? Maybe you want to practice mindfulness or focus on specific areas of your body, such as your hips or lower back. By defining your goals, you can create a routine that’s tailored to your needs. Keep your goals flexible too—sometimes you may want to explore new areas, like meditation or breathing exercises, as part of your practice.
            </p>
            <p>
                <strong>4. Start Small</strong>
            </p>
            <p>
                It’s easy to get overwhelmed by the idea of committing to a long yoga session every day, but remember that starting small is key. Begin with short sessions—10 to 15 minutes are perfect for beginners or those with busy schedules. Over time, as your body adjusts and your motivation grows, you can gradually increase the duration and intensity of your practice. Consistency is more important than length, especially in the beginning.
            </p>
            <p>
                <strong>5. Reflect and Adjust</strong>
            </p>
            <p>
                As you build your routine, it’s important to check in with yourself and reflect on how things are going. Are you meeting your goals? Do you feel energized or stressed? Sometimes our routines need a little tweaking to stay aligned with our needs. For example, you might find that morning practices work better for you than evening sessions, or you may decide to add more stretching after a busy day. Be flexible and adjust your practice as needed to keep it enjoyable and beneficial.
            </p>
            <p>
                Building a daily yoga routine doesn’t have to be overwhelming. By starting small, staying consistent, and adjusting as needed, you can create a practice that enhances your physical health and mental clarity. Remember that yoga is a personal journey—there’s no “right” way to practice, and your routine should reflect what makes you feel best. Start with small steps, trust the process, and enjoy the journey!
            </p>
            <p>Namaste,</p>
            <p>Sam </p>
        </section>
    ),
    }


];

const Article = () => {
    
    useEffect(() => {
            window.scrollTo(0, 0);
    }, []);
    
    const { slug } = useParams(); 

    const article = articleData.find((article) => article.slug === slug);

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <div className="flex flex-col min-h-screen w-full max-w-3xl space-y-8 p-8 mx-auto">
            <nav>
                <Link to="/articles">
                <span className="text-2xl opacity-70">&laquo;</span> Back to Newsletter
                </Link>
            </nav>
            
            <h1 className="text-4xl">{article.title}</h1>
            {article.content}
        </div>
    );
};

export default Article;
