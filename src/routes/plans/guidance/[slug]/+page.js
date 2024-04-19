
export function load({ params }) {
    if (params.slug === 'pre_run') {
      return {
        header: 'Pre-Run',
        blurb: "Before you start running, especially if you're a beginner, it's important to ensure that you're well versed in the art of running. This section will cover all the basics you need to know before you get out on the road!",
        title1: 'Medical Clearance',
        content1: "Before starting any new exercise routine, it's wise to consult with a healthcare professional, especially if you have any pre-existing medical conditions or concerns.",
        title2: 'Proper Footwear',
        content2: "Invest in a good pair of running shoes that provide adequate support and cushioning for your feet. Visit a specialty running store for a fitting to ensure you get the right shoes for your feet and running style.",
        title3: "Appropriate Clothing",
        content3: "Wear moisture-wicking clothing that allows for breathability and movement. Dress according to the weather conditions, layering up if it's cold outside.",
        title4: "Warm-Up",
        content4: "Always start with a dynamic warm-up to prepare your muscles and joints for the activity ahead. This could include exercises like leg swings, high knees, or arm circles.",
        title5: "Hydration",
        content5: "Drink water before your run to ensure you're adequately hydrated. It's essential to maintain hydration throughout your run, especially in hot weather.",
        title6: "Nutrition",
        content6: "Avoid running on a full stomach, but make sure you've eaten something light and nutritious within a couple of hours before your run to provide energy.",
        title7: "Rest",
        content7: "Ensure you're well-rested before your run to avoid fatigue and reduce the risk of injury.",
        title8: "Safety Precautions",
        content8: "Plan your route ahead of time, preferably choosing well-lit and populated areas, especially if you're running alone. If running in low-light conditions, wear reflective gear and consider carrying a phone for emergencies.",
        title9: "Stretching",
        content9: "While dynamic warm-up is crucial before running, static stretching should be done after your run to help prevent muscle tightness and improve flexibility.",
        title10: "Mindset",
        content10: "Approach your run with a positive mindset and realistic expectations. Remember that progress takes time, and it's okay to start slow and gradually increase your pace and distance.",
      };
    }

    if (params.slug === 'during_runs') {
      return {
        header: 'During Runs',
        blurb: "This section covers what to do in order to make sure your runs are enjoyable and enriching!",
        title1: 'Warm-Up',
        content1: "Just like before, start your run with a dynamic warm-up to prepare your muscles and joints for the activity ahead. This helps to improve blood flow, and flexibility, and reduces the risk of injury.",
        title2: 'Proper Form',
        content2: "Focus on maintaining good running form throughout your run. This includes keeping your head up, shoulders relaxed, arms bent at 90 degrees, and landing mid-foot with a slight forward lean from the ankles.",
        title3: "Hydration",
        content3: "Stay hydrated during your run by carrying water or using hydration stations along your route, especially on longer runs or in hot weather.",
        title4: "Pacing",
        content4: "Pace yourself according to your fitness level and goals. Start at a comfortable pace and gradually increase your speed as you warm up.",
        title5: "Breathing",
        content5: "Pay attention to your breathing rhythm. Aim for deep belly breaths to efficiently oxygenate your muscles. Inhale through your nose and exhale through your mouth in a controlled manner.",
        title6: "Listening to Your Body",
        content6: "Be mindful of any signs of fatigue, pain, or discomfort during your run. If you experience any unusual pain, consider stopping and assessing the situation before continuing.",
        title7: "Safety Precautions",
        content7: "Stay aware of your surroundings and watch out for hazards such as uneven terrain, traffic, or other runners/cyclists. If running in low-light conditions, wear reflective gear and consider using a headlamp or carrying a light.",
        title8: "Cool Down",
        content8: "After your run, take the time to cool down with a few minutes of easy jogging or walking. This helps to gradually lower your heart rate and prevent blood from pooling in your legs, reducing the risk of dizziness or fainting.",
        title9: "Stretching",
        content9: "Perform static stretches for major muscle groups, focusing on areas that feel tight or tense. Hold each stretch for 15-30 seconds without bouncing to improve flexibility and reduce muscle soreness.",
        title10: "Recovery",
        content10: "Proper post-run recovery is essential for muscle repair and growth. Stay hydrated, refuel with a balanced meal or snack containing carbohydrates and protein, and consider activities like foam rolling or gentle yoga to aid recovery.",
      };
    }

    if (params.slug === 'after_runs') {
      return {
        header: 'After Runs',
        blurb: "After your runs are over, follow this guide to slow down, ground yourself, and make sure that you heal up.",
        title1: 'Cool Down',
        content1: "Gradually decrease your pace to a slow jog or walk for about 5-10 minutes. This helps your heart rate and breathing return to normal gradually, preventing dizziness or fainting.",
        title2: 'Hydration',
        content2: "Replenish fluids lost during your run by drinking water or a sports drink. Aim to hydrate adequately to replace fluids lost through sweat.",
        title3: "Nutrition",
        content3: "Refuel your body with a balanced post-run meal or snack containing carbohydrates and protein. Carbohydrates replenish glycogen stores, while protein aids in muscle repair and growth. Examples include a banana with peanut butter, a turkey sandwich on whole-grain bread, or a protein smoothie.",
        title4: "Stretching",
        content4: "Perform static stretches for major muscle groups, focusing on areas that feel tight or tense. Hold each stretch for 15-30 seconds without bouncing to improve flexibility and reduce muscle soreness.",
        title5: "Foam Rolling",
        content5: "Use a foam roller to massage and release tension in your muscles. Focus on areas that feel particularly tight or sore, rolling slowly and pausing on any tender spots.",
        title6: "Recovery Tools",
        content6: "Consider using recovery tools such as compression socks, massage sticks, or percussion massagers to aid in muscle recovery and reduce soreness.",
        title7: "Rest and Recovery",
        content7: "Allow your body time to rest and recover between runs. Listen to your body and take rest days as needed to prevent overtraining and reduce the risk of injury.",
        title8: "Reflect and Learn",
        content8: "Take a moment to reflect on your run. Note any areas of improvement or things that went well. Learning from each run can help you progress and become a better runner over time.",
        title9: "Set Goals",
        content9: "Use your post-run reflection to set goals for your next run or training cycle. Whether it's increasing distance, improving pace, or working on form, having clear goals can help keep you motivated and focused.",
        title10: "Enjoy the Moment",
        content10: "Finally, take a moment to appreciate the accomplishment of completing your run. Celebrate your progress and the effort you put in, no matter how small it may seem.",
      };
    }

    if (params.slug === 'general_care_motivation') {
      return {
        header: 'General Care',
        blurb: "This section contains general advice for running, mindset, and motivation!",
        title1: 'Regular Excercise Routine',
        content1: "In addition to running, incorporate cross-training activities such as strength training, yoga, or swimming into your routine. This helps to build overall strength, flexibility, and balance, reducing the risk of injury.",
        title2: 'Healthy Nutrition',
        content2: "Maintain a balanced diet rich in fruits, vegetables, lean proteins, and whole grains. Fuel your body with the nutrients it needs to support your running and recovery.",
        title3: "Adequate Sleep",
        content3: "Aim for 7-9 hours of quality sleep each night to support recovery and overall health. Sleep is essential for muscle repair, hormone regulation, and cognitive function.",
        title4: "Stress Management",
        content4: "Practice stress-reducing techniques such as mindfulness, meditation, or deep breathing exercises. Chronic stress can impact performance and increase the risk of injury.",
        title5: "Listen to Your Body",
        content5: "Pay attention to any signs of pain, discomfort, or fatigue. Don't ignore warning signs of injury, and seek professional help if needed.",
        title6: "Proper Footwear",
        content6: "Invest in quality running shoes and replace them regularly to ensure adequate support and cushioning. Consider getting fitted at a specialty running store to find the right shoes for your foot type and running style.",
        title7: "Cross-Training",
        content7: "Incorporate cross-training activities into your routine to prevent overuse injuries and improve overall fitness. This could include activities such as cycling, swimming, or yoga.",
        title8: "Injury Prevention",
        content8: "Take steps to prevent common running injuries by incorporating strength training exercises, stretching, and foam rolling into your routine. Gradually increase mileage and intensity to avoid overtraining.",
        title9: "Stay Hydrated",
        content9: "Drink plenty of water throughout the day to stay hydrated, especially during hot weather or intense training sessions. Monitor your urine color to ensure adequate hydration.",
        title10: "Enjoy the Journey",
        content10: "Remember to enjoy the process of running and celebrate your progress along the way. Set realistic goals, celebrate achievements, and embrace the journey, whether it's completing your first 5K or training for a marathon.",
      };
    }
  
    throw error(404, 'Not found');
  }