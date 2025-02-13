import React from "react";

const WhatIsYoga = () => {
  return (
    <div className="max-w-3xl px-8 py-4 mx-auto">
      <h1 className="heading text-center my-12 lg:mb-20 text-4xl lg:text-8xl">
        What is Yoga?
      </h1>

      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 lg:space-y-0 space-y-12 pb-20">
        
        <p className="lg:col-span-2">
          Yoga is an ancient discipline that combines physical postures, breath control, meditation, and ethical principles to promote overall health and well-being. It’s a holistic system that aims to balance the body, mind, and spirit.
        </p>
        
        <h3 className="text-2xl font-medium text-charcoal tracking-wide lg:text-6xl lg:col-span-1 lg:max-w-[250px]">The Origins of Yoga</h3>
        <p className="lg:col-span-2">
          The origins of yoga can be traced back over 5,000 years to ancient India, where it was first developed as a spiritual practice by the Indus-Sarasvati civilization. The earliest references to yoga are found in the Vedas, ancient Indian texts that date back to around 1500 BCE. These texts describe various rituals and practices designed to connect individuals with the divine.
        </p>
        <p className="lg:col-span-2">
          The word "yoga" comes from the Sanskrit root "yuj," meaning "to unite" or "to join." This reflects the central idea of yoga: the union of the body, mind, and spirit, or the connection between the individual self and the universal consciousness. Early yogic practices were predominantly focused on meditation, breath control, and self-discipline to transcend the physical body and achieve spiritual enlightenment.
        </p>

        <div className="bg-moss bg-opacity-20 border border-moss rounded-2xl shadow p-4 sm:p-8 space-y-4 lg:col-span-2">
          <p>
            The development of yoga can be divided into several key periods:
          </p>
          <ul className="list-inside">
            <li><strong>Pre-Classical Yoga (c. 3000 BCE - 200 BCE):</strong> During this period, yoga was primarily focused on meditation and the philosophical teachings found in texts like the Upanishads. Practices were centered around seeking enlightenment and liberation from the cycle of rebirth (moksha).</li>
            <li><strong>Classical Yoga (c. 200 BCE - 400 CE):</strong> This period saw the formalization of yoga in the Yoga Sutras of Patanjali, which outlined the eight-fold path (Ashtanga Yoga) of self-discipline, meditation, and wisdom. This text became a cornerstone of yogic philosophy and practice.</li>
            <li><strong>Post-Classical Yoga (c. 400 CE - 1200 CE):</strong> During this period, yoga became more systematized and accessible to people from various walks of life. Hatha Yoga emerged, focusing on physical postures (asanas) and breath control (pranayama) to prepare the body for meditation.</li>
            <li><strong>Modern Yoga (19th century - present):</strong> Yoga began to spread beyond India, particularly in the West, through the influence of teachers like Swami Vivekananda, who introduced yoga philosophy to the West in the late 19th century, and later, figures like Krishnamacharya, B.K.S. Iyengar, and Pattabhi Jois, who popularized physical yoga practices in the 20th century.</li>
          </ul>
        </div>

        <h3 className="text-2xl font-medium text-charcoal tracking-wide lg:text-6xl lg:col-span-1 lg:max-w-[350px]">The Evolution of Yoga Styles</h3>
  
        <p className="lg:col-span-2">Over the millennia, yoga has evolved into many different styles and schools of thought, each focusing on unique aspects of the practice. These styles can be traced back to ancient teachings but have been adapted and modernized to meet the needs of contemporary practitioners. Some of the major styles of yoga include:</p>
        
        <div className="bg-moss bg-opacity-20 border border-moss rounded-2xl shadow p-4 sm:p-8 space-y-4 lg:col-span-2">
          <ul className="list-inside">
            <li><strong>Hatha Yoga:</strong> Hatha Yoga, meaning "forceful" or "sun and moon," is the foundation for many modern yoga practices. It emphasizes physical postures (asanas) and breath control (pranayama) to prepare the body for meditation. The practice is often slower-paced and focuses on alignment, balance, and flexibility.</li>
            <li><strong>Vinyasa Yoga:</strong> Vinyasa, which means "breath-synchronized movement," involves flowing from one pose to the next in coordination with breath. This style is dynamic and often practiced in a faster-paced sequence. It incorporates elements of both Hatha Yoga and modern movement, emphasizing fluidity and creative transitions between postures.</li>
            <li><strong>Ashtanga Yoga:</strong> Ashtanga Yoga is a rigorous, structured style developed by Pattabhi Jois. It follows a specific series of postures performed in a set order, focusing on breath, movement, and internal heat generation. Ashtanga is known for its physical intensity and is often considered a spiritual discipline as well as a fitness routine.</li>
            <li><strong>Iyengar Yoga:</strong> Created by B.K.S. Iyengar, this style emphasizes precision and alignment in each pose. Iyengar Yoga often uses props such as blocks, straps, and blankets to help practitioners achieve proper alignment and enhance their practice. It is often seen as a therapeutic style of yoga, making it accessible to people with injuries or physical limitations.</li>
            <li><strong>Bikram Yoga:</strong> Bikram Yoga consists of a set sequence of 26 poses and is practiced in a room heated to around 105°F (40°C). The heat is intended to help increase flexibility and detoxify the body through sweating. Bikram’s method has gained popularity for its physical intensity and focus on purification.</li>
            <li><strong>Kundalini Yoga:</strong> Kundalini Yoga focuses on awakening the dormant spiritual energy (Kundalini) that lies at the base of the spine. Through a combination of movement, chanting, breath work, and meditation, practitioners aim to activate the flow of energy and experience higher states of consciousness.</li>
            <li><strong>Restorative Yoga:</strong> Restorative Yoga is a gentle, calming style that uses props to fully support the body in each pose, allowing deep relaxation and restoration. It is designed to relieve stress and promote relaxation, making it ideal for people who are recovering from illness or need relief from tension and anxiety.</li>
            <li><strong>Yin Yoga:</strong> Yin Yoga focuses on holding poses for longer periods of time, typically 3-5 minutes, to target the deep connective tissues of the body. It is a slower-paced practice that encourages mindfulness and stillness, allowing practitioners to explore flexibility, relaxation, and mental focus.</li>
          </ul>
        </div>

        <p className="lg:col-span-2">
          Each style of yoga offers its unique benefits, and practitioners may find that different styles resonate with them depending on their personal goals, physical condition, and spiritual path. While the core principles of yoga remain the same, the diversity of styles provides something for everyone, from high-intensity practices to gentle, restorative options.
        </p>

        <p className="lg:col-span-2">
          Regardless of the style, yoga remains an ancient and powerful practice that continues to evolve and adapt to the needs of modern practitioners. It offers a pathway to physical health, mental clarity, emotional balance, and spiritual awakening, making it a timeless discipline for people of all ages and backgrounds.
        </p>
        
      </div>
    </div>
  );
};

export default WhatIsYoga;
