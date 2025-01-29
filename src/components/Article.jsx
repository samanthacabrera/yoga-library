import React, { useEffect }  from "react";
import { Link, useParams } from "react-router-dom";

const articleData = [
    {
        slug: "setting-intentions",
        title: "Setting Intentions for Your Yoga Practice",
        content: (
 <section className="space-y-8 max-w-3xl mx-auto">
                {/* Email */}
                <div className="space-y-4">
                    <p>Hi friends,</p>
                    <p>Have you ever taken a moment before stepping onto your mat—or even before starting your day—to set an intention? This small act has the potential to create a powerful shift in your awareness, transforming how you move through both your practice and your daily life. Unlike a goal, which is often tied to achievement, an intention is more like a guiding principle—something that helps center your focus, align your actions with your values, and bring a deeper sense of purpose to each moment.</p>
                    <p>
                       Setting an intention isn’t about forcing yourself to feel a certain way or striving for perfection. Instead, it is an opportunity to check in with yourself and ask: What do I need today? What energy do I want to cultivate? Some days, you might set an intention to stay present, allowing yourself to fully experience each breath and movement. Other times, your intention may be to embrace patience, cultivate self-compassion, or simply move with gratitude. Whatever it is, your intention serves as a quiet reminder, gently bringing you back to what matters when distractions arise.
                    </p>
                    <p>
                        When we move without intention, it’s easy to let our practice—or even our day—become a routine, something we simply go through. But when we take the time to set an intention, we create an opportunity to be more engaged, more connected, and more in tune with ourselves. An intention can help us navigate challenges, ground us when we feel unsteady, and provide clarity when our minds feel scattered.
                    </p>
                    <p>
                        If you’re new to this practice or want to deepen your approach, here are a few simple ways to cultivate meaningful intentions:
                    </p>
                    <ul className="space-y-2">
                        <li><strong>Pause and Reflect:</strong> Before stepping onto your mat or starting your day, take a deep breath and check in with yourself. What are you feeling? What do you need? Instead of thinking about what you 'should' focus on, allow your intention to arise naturally.</li>
                        <li><strong>Keep It Positive:</strong> The language we use matters. Instead of framing your intention as something to avoid (e.g., 'don't be distracted'), phrase it as something you are inviting in (e.g., 'focus fully'). This small shift makes your intention feel more expansive and empowering.</li>
                        <li><strong>Make It Simple:</strong> Your intention doesn’t have to be long or complex. A single word—such as 'balance', 'trust', or 'gratitude'—can serve as a powerful guide.</li>
                        <li><strong>Revisit It Often:</strong> Throughout your yoga session or day, gently remind yourself of your intention. You might bring it to mind when you take a deep breath, move into a particular posture, or notice your thoughts drifting.</li>
                        <li><strong>Observe Without Judgment:</strong> Your intention is not about perfection or control. Some days, it will feel effortless to embody your intention, while other days, your mind may resist it. That’s okay. Simply noticing where your awareness is—without judgment—is part of the process.</li>
                    </ul>
                    <p>
                        This month, I invite you to set an intention before every yoga practice. As an extra challenge, write your intention down in a journal each time. At the end of the month, reflect on any patterns, shifts, or insights that emerged.
                    </p>
                    <p>Namaste,<span className="block">Sam</span></p>
                </div>

                <p className="tracking-wide">To help guide your movement this month, enjoy this flow I've been loving:</p>

                {/* Yoga Flow  */}
                <div className="border space-y-8 rounded-lg p-8 text-sm md:text-base">
                    <h2 className="text-lg md:text-2xl tracking-wide my-6">15-minute Grounding Vinyasa Flow</h2>
                    
                    <div className="group flex flex-col space-y-3">
                        <h3 className="text-base md:text-lg font-medium">Connect with Breath</h3>
                        <Link to="/pose/34" className="group-hover:text-moss transition duration-200"><span className="hover:underline">Standing Forward Fold</span></Link>
                        <Link>Ragdoll Pose</Link>
                        <Link>Forward Fold Twist <span className="text-gray-500">(R arm up, L knee bent)</span></Link>
                        <Link>Forward Fold Twist <span className="text-gray-500">(L arm up, R knee bent)</span></Link>
                        <Link>Halfway Lift</Link>
                        <Link to="/pose/1" className="group-hover:text-moss transition duration-300"><span className="hover:underline">High Mountain Pose</span> <span className="text-gray-500">(arms up)</span></Link>
                        <Link to="/pose/34" className="group-hover:text-moss transition duration-300"><span className="hover:underline">Standing Forward Fold</span> </Link>
                        <Link>Halfway Lift</Link>
                    </div>
                    
                    <div className="group flex flex-col space-y-3">
                        <h3 className="text-base md:text-lg font-medium">Move with Breath</h3>
                        {/* Right Side */}
                        <Link to="/pose/28" className="group-hover:text-moss transition duration-200"><span className="hover:underline">Lizard Pose</span> <span className="text-gray-500">(R side, L knee down)</span></Link>
                        <Link>Half Splits <span className="text-gray-500">(R leg straight)</span></Link>
                        <Link>Easy Twist <span className="text-gray-500">(R arm up)</span></Link>
                        <Link to="/pose/20" className="group-hover:text-moss transition duration-200"><span className="hover:underline">Side Plank Pose</span> <span className="text-gray-500">(R foot stacked on L, hold for 3)</span></Link>
                        <Link to="/pose/3" className="group-hover:text-moss transition duration-200"><span className="hover:underline">Plank Pose</span> </Link>
                        <Link to="/pose/4" className="group-hover:text-moss transition duration-200"><span className="hover:underline">Chaturanga</span> </Link>
                        <Link to="/pose/5" className="group-hover:text-moss transition duration-200"><span className="hover:underline">Upward-Facing Dog</span> </Link>
                        <Link to="/pose/2" className="group-hover:text-moss transition duration-200"><span className="hover:underline">Downward-Facing Dog</span> <span className="text-gray-500">(ground for 2)</span></Link>
                        {/* Left Side */}
                        <Link to="/pose/28" className="group-hover:text-moss transition duration-200"><span className="hover:underline">Lizard Pose</span> <span className="text-gray-500">(L side, R knee down)</span></Link>
                        <Link>Half Splits <span className="text-gray-500">(L leg straight)</span></Link>
                        <Link>Easy Twist <span className="text-gray-500">(L arm up)</span></Link>
                        <Link to="/pose/20" className="group-hover:text-moss transition duration-200"><span className="hover:underline">Side Plank Pose</span> <span className="text-gray-500">(L foot stacked on R, hold for 3)</span></Link>
                        <Link to="/pose/3" className="group-hover:text-moss transition duration-200"><span className="hover:underline">Plank Pose</span> </Link>
                        <Link to="/pose/4" className="group-hover:text-moss transition duration-200"><span className="hover:underline">Chaturanga</span> </Link>
                        <Link to="/pose/5" className="group-hover:text-moss transition duration-200"><span className="hover:underline">Upward-Facing Dog</span> </Link>
                        <Link to="/pose/2" className="group-hover:text-moss transition duration-200"><span className="hover:underline">Downward-Facing Dog</span> <span className="text-gray-500">(ground for 2)</span></Link>
                    </div>
                </div>

                {/* What's New */}
                <div className="border rounded p-8">
                    <h2 className="text-lg md:text-2xl tracking-wide my-6">What's New at Learn Yoga Online</h2>
                    <ul>
                        <li><strong>Beginner’s Guide Expanded:</strong> We’ve refreshed our section with up-to-date tips and resources for safe and effective practice.</li>
                        <li><strong>Resources Page Added:</strong>  We’ve launched a brand-new Resources page with curated links to video tutorials and expert advice.</li>
                    </ul>
                </div>
            </section>
        )
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
        <div className="flex flex-col min-h-screen w-full max-w-3xl space-y-12 p-8 mx-auto">
            <nav>
                <Link
                    to="/articles"
                >
                <span className="text-2xl opacity-70">&laquo;</span> Back to Newsletter
                </Link>
            </nav>
            
            <h1 className="text-4xl">{article.title}</h1>
            {article.content}
            <hr/>

            <div className="py-10 p-6 bg-gray-100 rounded-lg">
                <h2 className="text-2xl text-center mb-2">About the Author</h2>
                <div className="flex items-center space-x-4 px-2">
                    <img src="/me.png" className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"/>
                    <p className="px-4">
                        Sam is a passionate yogi and web developer based in Denver. 
                        With a focus on mindful living and personal growth, Sam shares tips and insights to inspire others 
                        on their yoga journey.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Article;
