
export function load({ params }) {
    if (params.slug === 'pre_run') {
      return {
        header: 'Pre-Run',
        blurb: "Before you start running, especially if you're a beginner, it's important to ensure that you're well versed in the art of running. This section will cover all the basics you need to know before you get out on the road!",
        title1: 'Get Stretching!',
        content1: "Before you hit the pavement, it's crucial to prepare your body with the right stretches. Start with dynamic movements like leg swings and arm circles to get your blood flowing. Then, transition into static stretches targeting key muscle groups – hamstrings, quads, calves, and hips. Remember, the goal is to gently warm up your body, so take your time and listen to what your muscles need.",
        title2: 'Fuel Up!',
        content2: "To fuel your body for peak performance, opt for a balanced pre-run meal rich in complex carbohydrates, lean proteins, and healthy fats. Consider options like whole grain toast with peanut butter, a banana, or a bowl of oatmeal topped with fruits and nuts. Hydration is equally important, so be sure to drink water throughout the day leading up to your run. Consider hydrating with a sports drink or coconut water for added electrolytes to keep you going strong.",
        title3: "Get in the Mindset!",
        content3: "Preparation isn’t just physical – it’s mental too. As you gear up for your run, take a moment to check in with your mindset. Visualize yourself crushing your goals, imagine the feeling of accomplishment as you cross the finish line. Embrace the challenge ahead with a positive attitude, knowing that every step you take brings you closer to your best self. With the right stretches, nutrition, and mindset, you’re primed to make every run your best run yet. So go ahead, take that first step – your journey starts now.",
      };
    }

    if (params.slug === 'during_runs') {
      return {
        header: 'During Runs',
        blurb: "This section covers what to do in order to make sure your runs are enjoyable and enriching!",
        title1: 'Practice Your Technique!',
        content1: "During your run, focus on maintaining proper form and rhythm. Start with a steady pace that allows you to find your stride without overexerting yourself. Keep your posture upright, shoulders relaxed, and arms swinging naturally at your sides. As you settle into your run, pay attention to your breathing – aim for deep, rhythmic inhales and exhales to fuel your muscles with oxygen.",
        title2: "Don't Stop Hydrating!",
        content2: "As you log those miles, don't forget to stay hydrated. Carry a water bottle or hydration pack to sip on throughout your run, especially if you're going for longer distances. If you're tackling a particularly hot or humid day, consider hydrating with a sports drink to replenish electrolytes lost through sweat. Listen to your body and drink when you feel thirsty, but avoid overdoing it to prevent discomfort.",
        title3: "Maintain Focus!",
        content3: "As the kilometers tick by, keep your mind engaged and focused on the present moment. Embrace the rhythm of your footsteps, the sights and sounds of your surroundings. If you hit a mental roadblock, try shifting your focus to positive affirmations or a mantra to keep you motivated. And remember, it's okay to take walking breaks if you need them – listen to your body and honor its needs. With each step, you're getting closer to your goals and embracing the journey.",
      };
    }

    if (params.slug === 'after_runs') {
      return {
        header: 'After Runs',
        blurb: "After your runs are over, follow this guide to slow down, ground yourself, and make sure that you heal up.",
        title1: "Stretch When You Stop!",
        content1: "After crossing the finish line, it's time to prioritize your body's recovery. Start by cooling down with a few minutes of gentle walking or light jogging to gradually lower your heart rate and ease your muscles out of the intense activity. Then, transition into static stretches to help prevent stiffness and aid in muscle recovery. Focus on stretching major muscle groups such as your hamstrings, quads, calves, and hips, holding each stretch for 15-30 seconds.",
        title2: "Post-Run Fuel!",
        content2: "Replenish your body with a post-run snack or meal rich in carbohydrates and protein to support muscle repair and replenish glycogen stores. Consider options like a smoothie with fruit and Greek yogurt, a turkey and avocado wrap, or a bowl of quinoa with grilled chicken and veggies. Hydration is also key – continue to drink water to replace fluids lost during your run, and consider refueling with a sports drink or coconut water to restore electrolyte balance.",
        title3: "Give Yourself a Pat on the Back!",
        content3: "Take a moment to reflect on your run and celebrate your accomplishments, no matter how big or small. Acknowledge the effort you put in and the progress you've made towards your goals. If you encountered any challenges during your run, use them as learning opportunities to improve and grow stronger. Finally, give yourself permission to rest and recover both physically and mentally. Whether it's with a relaxing stretch session, a warm shower, or some quiet time to unwind, prioritize self-care to ensure you're ready to tackle your next run with renewed energy and enthusiasm.",
      };
    }

    if (params.slug === 'general_care_motivation') {
      return {
        header: 'General Care',
        blurb: "This section contains general advice for running, mindset, and motivation!",
        title1: "Intentions",
        content1: "Every run is an opportunity to connect with your body, mind, and surroundings. Start by setting a clear intention for your run – whether it's to challenge yourself, relieve stress, or simply enjoy the moment. As you hit the pavement, focus on maintaining proper form and breathing rhythm, staying present in each step and embracing the journey.",
        title2: "Injury or Pain",
        content2: "Pay attention to any signs of discomfort or pain during your runs, as they could indicate potential injuries. Incorporate cross-training and rest days into your routine to give your body time to recover and prevent overuse injuries. If you do experience pain, don't ignore it – seek professional guidance from a physiotherapist or sports medicine specialist to address any issues and develop a tailored recovery plan.",
        title3: "Safety",
        content3: "Prioritize safety during your runs by choosing well-lit routes, wearing reflective gear, and staying aware of your surroundings. Consider running with a buddy or letting someone know your route and estimated return time, especially when exploring new areas. And don't forget to take care of yourself mentally and emotionally – incorporate rest days, relaxation techniques, and positive self-talk to maintain a healthy balance and protect your passion for running.",
      };
    }
  
    throw error(404, 'Not found');
  }