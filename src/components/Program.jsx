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

      {/* Preview Sessions - Day 1 */}
        <div className="">
        <div className="my-24  space-y-12">
          <div className="flex items-center mb-8">
            <span className="inline-flex items-center justify-center w-12 h-12 bg-moss/10 text-moss mr-4 rounded-full">
              1
            </span>
            <h3 className="text-2xl font-light tracking-wide">Day 1: Grounding & Breath Flow</h3>
          </div>
          
          <div className="font-light leading-relaxed space-y-12">
            <p className="text-gray-700 italic">
              A gentle introduction to yoga fundamentals, focusing on breath awareness and simple movements to connect mind and body.
                <ul className="py-4">
                    <li>Duration: 20 minutes</li>
                    <li>Level: Beginner</li>
                    <li>Props: Yoga mat, Yoga blocks (optional)</li>
                </ul>
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-medium text-moss mb-4">Practice Overview</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <li className="flex items-start">
                  <span className="text-moss mr-2">•</span>
                  <span>Breath awareness and meditation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-moss mr-2">•</span>
                  <span>Gentle seated movements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-moss mr-2">•</span>
                  <span>Foundational yoga poses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-moss mr-2">•</span>
                  <span>Spinal mobility exercises</span>
                </li>
                <li className="flex items-start">
                  <span className="text-moss mr-2">•</span>
                  <span>Hip and shoulder openers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-moss mr-2">•</span>
                  <span>Deep relaxation</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-12">
              <div className="border-l-2 border-moss/30 pl-4">
                <h4 className="font-medium text-moss mb-2">Breath & Meditation (10 min)</h4>
                <ol className="space-y-3">
                  <li className="flex">
                    <span className="font-medium text-gray-700 mr-2">1.</span>
                    <div>
                      <span className="font-medium">Seated Meditation (2 min):</span>
                      <p className="text-gray-600">Find a comfortable seat, close your eyes, set an intention for your practice.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-700 mr-2">2.</span>
                    <div>
                      <span className="font-medium">Seated Breathing (3 min):</span>
                      <p className="text-gray-600">Sit tall with a neutral spine, palms on knees. Practice 3-part breath: fill belly, ribcage, then chest. Exhale slowly from chest, ribcage, then belly.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-700 mr-2">3.</span>
                    <div>
                      <span className="font-medium">Ujjayi Breath (2 min):</span>
                      <p className="text-gray-600">Slightly constrict the back of your throat, create an ocean-like sound with each breath.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-700 mr-2">4.</span>
                    <div>
                      <span className="font-medium">Alternate Nostril Breathing (2 min):</span>
                      <p className="text-gray-600">Use right thumb to close right nostril, inhale left. Close left nostril with ring finger, exhale right. Continue alternating for 8 cycles.</p>
                    </div>
                  </li>
                </ol>
              </div>
              
              <div className="border-l-2 border-moss/30 pl-4">
                <h4 className="font-medium text-moss mb-2">Seated Warm-Up (12 min)</h4>
                <ol className="space-y-3 list-decimal">
                  <li className="flex">
                    <span className="font-medium text-gray-700 mr-2">5.</span>
                    <div>
                      <span className="font-medium">Seated Side Bends (2 min):</span>
                      <p className="text-gray-600">Extend right arm overhead, lean left for 3 breaths, then switch sides. Create space between ribs as you lengthen.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-700 mr-2">6.</span>
                    <div>
                      <span className="font-medium">Neck Releases (2 min):</span>
                      <p className="text-gray-600">Drop right ear to right shoulder for 4 breaths, chin to chest for 4 breaths, left ear to left shoulder for 4 breaths.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-700 mr-2">7.</span>
                    <div>
                      <span className="font-medium">Shoulder Rolls (1 min):</span>
                      <p className="text-gray-600">Circle shoulders forward 8 times, backward 8 times to release upper body tension.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-700 mr-2">8.</span>
                    <div>
                      <span className="font-medium">Seated Cat-Cow (3 min):</span>
                      <p className="text-gray-600">Hands on knees, inhale arch spine (cow), exhale round spine (cat). Move with breath for 12 cycles.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-700 mr-2">9.</span>
                    <div>
                      <span className="font-medium">Seated Spinal Twist (2 min):</span>
                      <p className="text-gray-600">Right hand on left knee, left hand behind. Inhale lengthen, exhale twist deeper. Hold 5 breaths each side.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-700 mr-2">10.</span>
                    <div>
                      <span className="font-medium">Seated Forward Fold (2 min):</span>
                      <p className="text-gray-600">Extend legs forward, inhale arms up, exhale fold from hips. Lead with heart, not head. Hold for 5 breaths.</p>
                    </div>
                  </li>
                </ol>
              </div>
              
              <div className="border-l-2 border-moss/30 pl-4">
                <h4 className="font-medium text-moss mb-2">Tabletop & Gentle Flows (15 min)</h4>
                <ol className="space-y-3">
                  <li className="flex">
                    <span className="font-medium text-gray-700 mr-2">11.</span>
                    <div>
                      <span className="font-medium">Tabletop Position (1 min):</span>
                      <p className="text-gray-600">Come to hands and knees, wrists under shoulders, knees under hips, neutral spine.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-700 mr-2">12.</span>
                    <div>
                      <span className="font-medium">Cat-Cow Flow (3 min):</span>
                      <p className="text-gray-600">Inhale drop belly, lift gaze (cow), exhale round spine, tuck chin (cat). 12 cycles with breath.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-700 mr-2">13.</span>
                    <div>
                      <span className="font-medium">Downward Facing Dog (2 min):</span>
                      <p className="text-gray-600">Tuck toes, lift hips high, press chest toward thighs. Pedal feet to warm up hamstrings.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-700 mr-2">14.</span>
                    <div>
                      <span className="font-medium">Child's Pose (1 min):</span>
                      <p className="text-gray-600">Knees wide, big toes touching, sink hips back, arms extended. Breathe into back body.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-700 mr-2">15.</span>
                    <div>
                      <span className="font-medium">Sphinx Pose (1 min):</span>
                      <p className="text-gray-600">Lie on belly, prop on forearms parallel, lift chest. Breathe into upper back.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-700 mr-2">16.</span>
                    <div>
                      <span className="font-medium">Cobra Pose (1 min):</span>
                      <p className="text-gray-600">Press through hands, lift chest higher, keep slight bend in elbows. Expand collarbones.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-700 mr-2">17.</span>
                    <div>
                      <span className="font-medium">Child's Pose to Cobra Flow (3 min):</span>
                      <p className="text-gray-600">Flow between Child's Pose and Cobra, moving with breath, 6 rounds.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-700 mr-2">18.</span>
                    <div>
                      <span className="font-medium">Thread the Needle (2 min):</span>
                      <p className="text-gray-600">From tabletop, slide right arm under left for shoulder release. Hold 5 breaths each side.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-700 mr-2">19.</span>
                    <div>
                      <span className="font-medium">Puppy Pose (1 min):</span>
                      <p className="text-gray-600">Extend arms forward, melt chest toward floor, hips over knees. Open shoulders and chest.</p>
                    </div>
                  </li>
                </ol>
              </div>
              
              <div className="border-l-2 border-moss/30 pl-4">
                <h4 className="font-medium text-moss mb-2">Cool Down & Relaxation (13 min)</h4>
                <ol className="space-y-3">
                  <li className="flex">
                    <span className="font-medium text-gray-700 mr-2">20.</span>
                    <div>
                      <span className="font-medium">Easy Twist (2 min):</span>
                      <p className="text-gray-600">Lie on back, knees to chest, drop knees to right, look left. 5 breaths each side.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-700 mr-2">21.</span>
                    <div>
                      <span className="font-medium">Knees-to-Chest (1 min):</span>
                      <p className="text-gray-600">Hug knees to chest, rock gently side to side for spinal massage.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-700 mr-2">22.</span>
                    <div>
                      <span className="font-medium">Happy Baby (1 min):</span>
                      <p className="text-gray-600">Grab outer feet, open knees wide, gently pull down. Release lower back and hips.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-700 mr-2">23.</span>
                    <div>
                      <span className="font-medium">Reclined Bound Angle (2 min):</span>
                      <p className="text-gray-600">Soles of feet together, knees wide. Support with blocks if needed. Open hips.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-700 mr-2">24.</span>
                    <div>
                      <span className="font-medium">Legs-Up-The-Wall variation (2 min):</span>
                      <p className="text-gray-600">Extend legs up, support with hands if needed. Restore circulation.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-700 mr-2">25.</span>
                    <div>
                      <span className="font-medium">Savasana (5 min):</span>
                      <p className="text-gray-600">Lie flat, arms by sides, palms up. Completely relax body and observe breath.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            
            <div className="bg-moss/5 p-6 rounded-lg mt-8">
              <h4 className="font-medium text-moss mb-3">Notes</h4>
              <p className="text-gray-700 text-sm">

                If you experience any discomfort, use modifications and props as needed.
              </p>
            </div>
          </div>
        </div>
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
        <p className="text-sm"> 4 weeks • 28 guided sessions • Instant Digital Access</p>
      </div>
    </div>
  );
};

export default Program;