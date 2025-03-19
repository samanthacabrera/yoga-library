import { Link } from "react-router-dom";

const Program = () => {

  return (
    <div className="max-w-2xl md:mx-auto mx-12 my-24 space-y-24">
    
        <h1 className="text-center text-4xl my-12">Yoga Programs for Beginners</h1>
        
        {/* Banner */}
        <div className="bg-moss/5 p-12 mb-24 text-center rounded-2xl">
            <h3 className="text-xl mb-4">Transform Your Practice in Just 20 Minutes a Day</h3>
            <p className="max-w-xl mx-auto">
            Join other yogis who have discovered how these carefully crafted, time-efficient flows can reduce stress, 
            increase flexibility, and build strength—even with the busiest of schedules.
            </p>
        </div>

        {/* Week 1  */}
        <div className="mb-24 text-center">
            <h2 className="text-3xl font-extralight tracking-wide mb-6">Week 1: Building a Strong Foundation</h2>
            <p className="text-lg font-light leading-relaxed max-w-2xl mx-auto">
            This week introduces gentle, beginner-friendly yoga flows, each lasting 15 to 20 minutes.  
            You'll focus on breath, movement, and body awareness, ensuring a strong foundation for your yoga journey.
            </p>
        </div>

      {/* Preview Sessions */}
      <div className="mb-24">        
        {[
            {
            day: "Day 1",
            title: "Grounding & Breath Flow",
            description: (
            <>
            <span>1. Seated Meditation (2 min):</span> Find a comfortable seat, close your eyes, set an intention for your practice.
            <br />
            <span>2. Seated Breathing (3 min):</span> Sit tall with a neutral spine, palms on knees. Practice 3-part breath: fill belly, ribcage, then chest. Exhale slowly from chest, ribcage, then belly.
            <br />
            <span>3. Ujjayi Breath (2 min):</span> Slightly constrict the back of your throat, create an ocean-like sound with each breath.
            <br />
            <span>4. Alternate Nostril Breathing (2 min):</span> Use right thumb to close right nostril, inhale left. Close left nostril with ring finger, exhale right. Continue alternating for 8 cycles.
            <br />
            <span>5. Seated Side Bends (2 min):</span> Extend right arm overhead, lean left for 3 breaths, then switch sides. Create space between ribs as you lengthen.
            <br />
            <span>6. Neck Releases (2 min):</span> Drop right ear to right shoulder for 4 breaths, chin to chest for 4 breaths, left ear to left shoulder for 4 breaths.
            <br />
            <span>7. Shoulder Rolls (1 min):</span> Circle shoulders forward 8 times, backward 8 times to release upper body tension.
            <br />
            <span>8. Seated Cat-Cow (3 min):</span> Hands on knees, inhale arch spine (cow), exhale round spine (cat). Move with breath for 12 cycles.
            <br />
            <span>9. Seated Spinal Twist (2 min):</span> Right hand on left knee, left hand behind. Inhale lengthen, exhale twist deeper. Hold 5 breaths each side.
            <br />
            <span>10. Seated Forward Fold (2 min):</span> Extend legs forward, inhale arms up, exhale fold from hips. Lead with heart, not head. Hold for 5 breaths.
            <br />
            <span>11. Tabletop Position (1 min):</span> Come to hands and knees, wrists under shoulders, knees under hips, neutral spine.
            <br />
            <span>12. Cat-Cow Flow (3 min):</span> Inhale drop belly, lift gaze (cow), exhale round spine, tuck chin (cat). 12 cycles with breath.
            <br />
            <span>13. Downward Facing Dog (2 min):</span> Tuck toes, lift hips high, press chest toward thighs. Pedal feet to warm up hamstrings.
            <br />
            <span>14. Child's Pose (1 min):</span> Knees wide, big toes touching, sink hips back, arms extended. Breathe into back body.
            <br />
            <span>15. Sphinx Pose (1 min):</span> Lie on belly, prop on forearms parallel, lift chest. Breathe into upper back.
            <br />
            <span>16. Cobra Pose (1 min):</span> Press through hands, lift chest higher, keep slight bend in elbows. Expand collarbones.
            <br />
            <span>17. Child's Pose to Cobra Flow (3 min):</span> Flow between Child's Pose and Cobra, moving with breath, 6 rounds.
            <br />
            <span>18. Thread the Needle (2 min):</span> From tabletop, slide right arm under left for shoulder release. Hold 5 breaths each side.
            <br />
            <span>19. Puppy Pose (1 min):</span> Extend arms forward, melt chest toward floor, hips over knees. Open shoulders and chest.
            <br />
            <span>20. Easy Twist (2 min):</span> Lie on back, knees to chest, drop knees to right, look left. 5 breaths each side.
            <br />
            <span>21. Knees-to-Chest (1 min):</span> Hug knees to chest, rock gently side to side for spinal massage.
            <br />
            <span>22. Happy Baby (1 min):</span> Grab outer feet, open knees wide, gently pull down. Release lower back and hips.
            <br />
            <span>23. Reclined Bound Angle (2 min):</span> Soles of feet together, knees wide. Support with blocks if needed. Open hips.
            <br />
            <span>24. Legs-Up-The-Wall variation (2 min):</span> Extend legs up, support with hands if needed. Restore circulation.
            <br />
            <span>25. Savasana (5 min):</span> Lie flat, arms by sides, palms up. Completely relax body and observe breath.
            </>
            ),
            }
        ].map((session, index) => (
          <div key={index} className="mb-16 border-b border-gray-100 pb-16 last:border-b-0 last:pb-0">
            <div className="mb-4">
              <div className="flex items-center mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-moss/10 text-moss mr-4">
                  {index + 1}
                </span>
                <h3 className="text-xl font-light">{session.day}: {session.title}</h3>
              </div>
              <div className="pl-14 font-light leading-relaxed">
                <p>{session.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Locked Days */}
      <div className="mb-24">
        <h3 className="text-2xl font-extralight text-center mb-16">Complete Your Journey</h3>
        
        <div className="grid gap-8 md:grid-cols-2">
        {[
            { day: "Day 2", title: "Dancing Fluid Flow" },
            { day: "Day 3", title: "Energetic Fire Flow" },
            { day: "Day 4", title: "Core & Strength Flow" },
            { day: "Day 5", title: "Hip & Lower Body Release" },
            { day: "Day 6", title: "Twist & Detox Flow" },
            { day: "Day 7", title: "Full Body Integration Flow" }
          ].map((session, index) => (
            <div key={index} className="bg-moss/50 p-8 relative overflow-hidden">
              <div className="filter blur-xs pointer-events-none">
                <h3 className="text-lg font-light mb-2">{session.day}: {session.title}</h3>
                <p className="font-light">Unlock to access the full guided session.</p>
              </div>
              <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-block mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-moss" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Locked Weeks  */}
      <div className="mb-24 space-y-8">
        {[
          { week: "Week 2", title: "Strength & Stability" },
          { week: "Week 3", title: "Flexibility & Mobility" },
          { week: "Week 4", title: "Mindfulness & Mastery" }
        ].map((week, index) => (
          <div key={index} className="bg-moss/50 p-8 relative overflow-hidden">
            <div className="filter blur-xs pointer-events-none px-8">
              <h3 className="text-xl font-light mb-2">{week.week}: {week.title}</h3>
              <p className="font-light">
                Unlock this week to build strength, refine technique, and take your yoga journey to the next level.
              </p>
            </div>
            <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-moss" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section  */}
      <div className="mb-24 text-center">
        <p className="max-w-lg mx-auto mb-12 font-light">
          Gain access to all four weeks of guided sessions and a supportive community.
        </p>
        <div className="flex justify-center mb-6">
          <Link
            to="/purchase"
            className={`group px-10 py-3 bg-moss/80 text-white flex items-center hover:bg-moss/90 transition-all duration-300`}
          >
            <span className="mr-2">Unlock Full Program • $49.99</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
        <p className="text-sm"> 4 weeks • 30 guided sessions • Instant Digital Access</p>
      </div>
    </div>
  );
};

export default Program;