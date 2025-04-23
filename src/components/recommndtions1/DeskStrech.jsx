import React from 'react';
import { Link } from 'react-router-dom';

const stretches = [
  {
    name: "Triceps Stretch",
    description: [
      "Raise your arm and bend it so your hand reaches toward the opposite side.",
      "Use your other hand to pull the elbow gently toward your head.",
      "Hold for 10 to 30 seconds. Repeat on the other side."
    ],
    image: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Triceps_Stretch.gif?w=1155&h=840"
  },
  {
    name: "Overhead Reach (Lat Stretch)",
    description: [
      "Extend each arm overhead.",
      "Reach to the opposite side and hold.",
      "Hold for 10 to 30 seconds. Repeat on the other side."
    ],
    image: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Overhead_Reach.gif"
  },
  {
    name: "Upper Body and Arm Stretch",
    description: [
      "Clasp hands together above the head with palms facing outward.",
      "Push your arms up, stretching upward.",
      "Hold the pose for 10 to 30 seconds."
    ],
    image: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Upper_Body_Stretch.gif"
  },
  {
    name: "Shoulder (Pectoralis) Stretch",
    description: [
      "Clasp hands behind your back.",
      "Push the chest outward, and raise the chin.",
      "Hold for 10 to 30 seconds."
    ],
    image: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Shoulder_Pec_Stretch.gif"
  },
  {
    name: "Forward Stretch (Upper Back)",
    description: [
      "Clasp your hands in front of you and lower your head in line with your arms.",
      "Press forward and hold.",
      "Hold for 10 to 30 seconds."
    ],
    image: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Forward_Stretch.gif"
  },
  {
    name: "Torso Stretch (Trunk Rotation)",
    description: [
      "Keep your feet on the ground facing forward.",
      "Twist your upper body toward the arm resting on the back of your chair.",
      "Hold for 10 to 30 seconds. Repeat on other side."
    ],
    image: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Torso_Stretch.gif"
  },
  {
    name: "Hip and Knee Flexion Stretch",
    description: [
      "Hug one knee at a time, pulling it toward your chest.",
      "Hold the pose for 10 to 30 seconds.",
      "Alternate between legs."
    ],
    image: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Hip_and_Knee_Flexion.gif"
  },
  {
    name: "Hamstring Stretch",
    description: [
      "Remain seated, extend one leg outward on a second chair.",
      "Bend forward from your waist.",
      "Hold for 10 to 30 seconds. Switch legs."
    ],
    image: "https://media.post.rvohealth.io/wp-content/uploads/2023/09/400x400_How_To_Treat_and_Prevent_Tight_Hamstrings_Seated_Hamstring_Stretch_2.gif"
  },
  {
    name: "Shoulder Shrug",
    description: [
      "Raise both shoulders up toward the ears.",
      "Drop them and repeat 10 times in each direction."
    ],
    image: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Shoulder_Shrug.gif"
  },
  {
    name: "Neck Stretch",
    description: [
      "Relax and lean your head forward.",
      "Roll slowly to one side and hold for 10 seconds.",
      "Repeat on the other side. Do 3 times per direction."
    ],
    image: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Neck_Stretch.gif"
  },
  {
    name: "Upper Trap Stretch",
    description: [
      "Gently pull your head toward each shoulder until a light stretch is felt.",
      "Hold for 10 to 15 seconds. Alternate sides."
    ],
    image: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Upper_Trap_Stretch.gif"
  }
];

export default function DeskBasedStretches() {
  return (
    <div className="bg-yellow-50 min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <Link to="/recommendations" className="text-blue-600 hover:underline text-sm mb-4 block">
          ← Back to Recommendations
        </Link>

        <h1 className="text-4xl font-bold text-center mb-2">Desk-Based Stretches</h1>
        <p className="text-center text-gray-600 mb-8">
          Simple stretches you can do at your desk during work breaks. These help ease tension and improve focus.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stretches.map((stretch, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-4">
              <img
                src={stretch.image}
                alt={stretch.name}
                className="w-full h-auto object-contain rounded-t-xl mb-4"
              />
              <h3 className="text-lg font-semibold text-orange-700 mb-2">{stretch.name}</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {stretch.description.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}