// app.js


var challengesData = 
{
    "challenges":[
	  {
		"title": "Career Advancement",
		"description": "Set quarterly career goals: Identify 3 new skills to learn and create a plan to master them."
	  },
	  {
		"title": "Networking Enhancement",
		"description": "Connect with 3 new professionals on LinkedIn this week. Schedule a virtual coffee chat with at least one of them."
	  },
	  {
		"title": "Self-Development",
		"description": "Read 'Atomic Habits' by James Clear. Implement one new habit from the book in the next 7 days."
	  },
	  {
		"title": "Health Improvement",
		"description": "Try a new form of exercise this month (e.g., yoga, cycling, or swimming) and commit to it twice a week."
	  },
	  {
		"title": "Family Bonding",
		"description": "Plan a family cooking night this weekend. Assign tasks to each family member to prepare a meal together."
	  },
	  {
		"title": "Financial Planning",
		"description": "Create a spreadsheet to track monthly expenses. Review and categorize all expenses for the last month."
	  },
	  {
		"title": "Career Skill Building",
		"description": "Enroll in an online course related to your field. Complete the first module within the next 5 days."
	  },
	  {
		"title": "Networking Follow-Up",
		"description": "Send personalized follow-up emails to the last 3 people you met at the conference. Share an article or resource relevant to your conversation."
	  },
	  {
		"title": "Self-Reflection",
		"description": "Practice mindfulness for 10 minutes every morning for the next week. Use a meditation app or guide."
	  },
	  {
		"title": "Health Monitoring",
		"description": "Use a fitness tracking app to monitor daily steps and food intake for the next 7 days. Set specific targets for improvement."
	  },
	  {
		"title": "Family Communication",
		"description": "Schedule a family brainstorming session. Discuss upcoming vacation ideas and plan one step toward making it happen."
	  },
	  {
		"title": "Financial Review",
		"description": "Review your current investments and savings. Research one new investment opportunity in the next 3 days."
	  },
	  {
		"title": "Career Networking Event",
		"description": "Organize a virtual networking event. Invite 10 colleagues or industry contacts for a 30-minute Zoom meetup."
	  },
	  {
		"title": "Self-Improvement Podcasts",
		"description": "Listen to a self-improvement podcast during your commute. Take notes and apply one actionable tip within 24 hours."
	  },
	  {
		"title": "Physical Health Challenge",
		"description": "Sign up for a local charity run. Create a training schedule for the next 3 months, aiming for incremental improvement."
	  },
	  {
		"title": "Family Time-Out",
		"description": "Plan a screen-free day this weekend. Schedule outdoor activities or board games for family bonding."
	  },
	  {
		"title": "Financial Education",
		"description": "Attend a financial planning webinar. Implement one new financial habit within the next 7 days."
	  },
	  {
		"title": "Skill Sharing",
		"description": "Teach a skill you excel at to a colleague or family member. Schedule a 1-hour session this weekend."
	  },
	  {
		"title": "Networking Mentorship",
		"description": "Become a mentor to a new colleague. Schedule a bi-weekly check-in to provide guidance and support."
	  },
	  {
		"title": "Self-Development Retreat",
		"description": "Plan a weekend retreat for personal development. Set specific goals to achieve during this time and schedule follow-up actions."
	  },
	  {
		"title": "Career Advancement - Presentation Skills",
		"description": "Practice a 5-minute presentation on a recent project. Record yourself and identify areas for improvement."
	  },
	  {
		"title": "Networking - Engage on Social Media",
		"description": "Interact with 5 industry-related posts on Twitter or LinkedIn today. Comment thoughtfully or share valuable insights."
	  },
	  {
		"title": "Self-Development - Time Management",
		"description": "Use the Pomodoro Technique for the next 3 days. Work for 25 minutes, then take a 5-minute break, and repeat."
	  },
	  {
		"title": "Health Improvement - Meal Planning",
		"description": "Plan and prep meals for the week. Set aside time this Sunday to create a meal plan and shop accordingly."
	  },
	  {
		"title": "Family Bonding - Creative Project",
		"description": "Start a family art project. Collect materials and brainstorm ideas for a joint creation to work on over the month."
	  },
	  {
		"title": "Financial Planning - Expense Review",
		"description": "Analyze last month's expenses. Identify 3 areas where you can reduce spending and take action this week."
	  },
	  {
		"title": "Career Skill Building - Coding Practice",
		"description": "Spend 30 minutes daily on a coding platform (e.g., Codecademy) for the next 10 days. Complete one module."
	  },
	  {
		"title": "Networking Follow-Up - Article Sharing",
		"description": "Share a recent industry-related article with 2 contacts via email or LinkedIn and start a conversation about it."
	  },
	  {
		"title": "Self-Reflection - Gratitude Journal",
		"description": "Start a gratitude journal. Write down 3 things you're grateful for every evening for the next week."
	  },
	  {
		"title": "Health Monitoring - Water Intake",
		"description": "Track your water intake for the next 7 days. Aim to drink at least 8 glasses of water daily."
	  },
	  {
		"title": "Family Communication - Goal Setting",
		"description": "Hold a family meeting to set collective goals for the next month. Assign tasks to each family member."
	  },
	  {
		"title": "Financial Review - Investment Research",
		"description": "Research a new investment opportunity. Compare and contrast it with your current investments within the week."
	  },
	  {
		"title": "Career Networking Event - Virtual Coffee Chats",
		"description": "Organize 3 virtual coffee chats with different industry professionals this week. Share insights and learn from each other."
	  },
	  {
		"title": "Self-Improvement Podcasts - Implementation Challenge",
		"description": "Select one actionable tip from a podcast episode and implement it within 24 hours. Track the results."
	  },
	  {
		"title": "Physical Health Challenge - Strength Training",
		"description": "Start a beginner's strength training routine. Perform exercises at least 3 times a week for the next month."
	  },
	  {
		"title": "Family Time-Out - Outdoor Adventure",
		"description": "Plan a day trip to a nearby nature reserve or park. Pack a picnic and spend the day exploring with the family."
	  },
	  {
		"title": "Financial Education - Book Reading",
		"description": "Read 'Rich Dad Poor Dad' by Robert Kiyosaki. Apply one financial lesson within the next 7 days."
	  },
	  {
		"title": "Skill Sharing - Workshop Creation",
		"description": "Prepare a short workshop on a skill you excel at. Present it to a small group of colleagues or friends this month."
	  },
	  {
		"title": "Networking Mentorship - Support Session",
		"description": "Schedule a call with your mentee to provide support and guidance on a recent work challenge."
	  },
	  {
		"title": "Self-Development Retreat - Goal Setting",
		"description": "Plan a weekend retreat solely for setting personal and professional goals for the upcoming months."
	  },
	  {
		"title": "Career Advancement - Public Speaking Practice",
		"description": "Practice a 3-minute impromptu speech. Record and review it to enhance spontaneity and coherence."
	  },
	  {
		"title": "Networking - Join a Professional Group",
		"description": "Join an industry-related group on LinkedIn or Facebook. Introduce yourself and engage in at least 2 discussions this week."
	  },
	  {
		"title": "Self-Development - Skill Acquisition",
		"description": "Learn a new language for 15 minutes daily using language learning apps. Set a goal to hold a basic conversation in a month."
	  },
	  {
		"title": "Health Improvement - Sleep Routine",
		"description": "Set a consistent sleep schedule for the next 7 days. Aim for 7-8 hours of quality sleep each night."
	  },
	  {
		"title": "Family Bonding - DIY Project",
		"description": "Start a DIY project together, like building a birdhouse or creating a mini-garden. Allocate tasks and work on it every weekend."
	  },
	  {
		"title": "Financial Planning - Savings Challenge",
		"description": "Challenge yourself to save 10% more than usual this month. Identify expenses to cut or reduce."
	  },
	  {
		"title": "Career Skill Building - Data Analysis Practice",
		"description": "Work on a data analysis project using tools like Excel or Python. Analyze a small dataset over the next 2 weeks."
	  },
	  {
		"title": "Networking Follow-Up - Recommendation Sharing",
		"description": "Share a relevant professional recommendation with 2 contacts on LinkedIn. Encourage reciprocation and feedback."
	  },
	  {
		"title": "Self-Reflection - Mindfulness Walk",
		"description": "Take a mindful walk in nature for 30 minutes. Observe surroundings and focus on the present moment."
	  },
	  {
		"title": "Health Monitoring - Physical Activity Log",
		"description": "Create a log for physical activities done daily. Set goals for steps or exercise duration and track progress for the next 10 days."
	  },
	  {
		"title": "Family Communication - Weekly Appreciation",
		"description": "Start a tradition of sharing one thing you appreciate about each family member every Sunday."
	  },
	  {
		"title": "Financial Review - Budget Adjustment",
		"description": "Review your budget for last month. Identify 3 areas to adjust or optimize for the upcoming month."
	  },
	  {
		"title": "Career Networking Event - Virtual Roundtable",
		"description": "Host a virtual roundtable discussion on a trending industry topic. Invite professionals and facilitate the conversation."
	  },
	  {
		"title": "Self-Improvement Podcasts - Actionable Insights",
		"description": "Choose a podcast episode and implement 3 actionable insights within the next 7 days. Reflect on their impact."
	  },
	  {
		"title": "Physical Health Challenge - Cardio Exercise",
		"description": "Start a daily cardio routine for 15 minutes. Gradually increase the duration by 5 minutes each week for a month."
	  },
	  {
		"title": "Family Time-Out - DIY Spa Day",
		"description": "Organize a family spa day at home. Create DIY face masks or give each other massages for relaxation."
	  },
	  {
		"title": "Financial Education - Webinar Participation",
		"description": "Attend a financial planning webinar. Implement one piece of advice within the next 5 days."
	  },
	  {
		"title": "Skill Sharing - Practical Demo",
		"description": "Present a practical demonstration of your skill to a small group. Encourage questions and hands-on practice."
	  },
	  {
		"title": "Networking Mentorship - Progress Review",
		"description": "Schedule a progress review session with your mentee. Discuss achievements and address any challenges."
	  },
	  {
		"title": "Self-Development Retreat - Action Plan Creation",
		"description": "Plan a weekend retreat to create a detailed action plan for the next quarter. Break down goals into actionable steps."
	  },
	  {
		"title": "Career Advancement - Case Study Analysis",
		"description": "Select a case study in your field. Analyze and prepare a brief presentation within the next 5 days."
	  },
	  {
		"title": "Networking - Attend Webinars",
		"description": "Participate in 3 webinars this month. Engage in Q&A sessions and connect with at least 2 participants afterward."
	  },
	  {
		"title": "Self-Development - Journaling Habit",
		"description": "Start journaling daily for 10 minutes. Reflect on achievements, challenges, and aspirations."
	  },
	  {
		"title": "Health Improvement - Daily Stretching",
		"description": "Incorporate 10 minutes of stretching into your daily routine. Focus on different muscle groups each day."
	  },
	  {
		"title": "Family Bonding - Recipe Challenge",
		"description": "Cook a new family recipe together each week. Rotate who selects the recipe and leads the cooking."
	  },
	  {
		"title": "Financial Planning - Investment Research",
		"description": "Research a new investment opportunity this week. Analyze risks and potential returns before considering."
	  },
	  {
		"title": "Career Skill Building - Presentation Practice",
		"description": "Prepare and deliver a practice presentation. Record and review to improve speaking skills and clarity."
	  },
	  {
		"title": "Networking Follow-Up - Collaborative Project",
		"description": "Propose a joint project or collaboration idea to 2 contacts. Discuss the benefits and potential next steps."
	  },
	  {
		"title": "Self-Reflection - Gratitude Practice",
		"description": "Express gratitude to someone new each day for the next week. Write a note or have a conversation about it."
	  },
	  {
		"title": "Health Monitoring - Meal Journaling",
		"description": "Keep a detailed food journal for the next 10 days. Review and adjust eating habits for better nutrition."
	  },
	  {
		"title": "Family Communication - Weekly Goal Review",
		"description": "Set aside time each Sunday to review family goals. Celebrate achievements and make plans for the upcoming week."
	  },
	  {
		"title": "Financial Review - Saving Challenge",
		"description": "Challenge yourself to save 15% more this month. Identify expenses to cut or reduce immediately."
	  },
	  {
		"title": "Career Networking Event - Mentorship Session",
		"description": "Host a virtual mentorship session. Pair industry newcomers with experienced professionals for discussions."
	  },
	  {
		"title": "Self-Improvement Podcasts - Implementation Sprint",
		"description": "Implement 5 actionable tips from a podcast episode within the next 7 days. Assess their impact on your routine."
	  },
	  {
		"title": "Physical Health Challenge - Active Breaks",
		"description": "Incorporate short, active breaks during work hours. Set a timer every hour to stretch or take a short walk."
	  },
	  {
		"title": "Family Time-Out - Nature Exploration",
		"description": "Plan a family nature exploration day. Discover local parks or trails and engage in outdoor activities together."
	  },
	  {
		"title": "Financial Education - DIY Investment Simulation",
		"description": "Simulate an investment strategy on paper for the next 2 weeks. Track its performance and reassess."
	  },
	  {
		"title": "Skill Sharing - Workshop Presentation",
		"description": "Present a mini workshop on your skill. Create interactive sessions and provide resources for further learning."
	  },
	  {
		"title": "Networking Mentorship - Challenge Discussion",
		"description": "Discuss a specific professional challenge with your mentee. Brainstorm solutions and set actionable steps."
	  },
	  {
		"title": "Self-Development Retreat - Goal Review",
		"description": "Review your short-term and long-term goals during a personal retreat. Refine action plans based on progress."
	  },
	  {
		"title": "Career Advancement - Networking Event Preparation",
		"description": "Prepare a brief introduction for the next networking event. Practice it and seek feedback for improvement."
	  },
	  {
		"title": "Networking - Professional Groups Contribution",
		"description": "Engage actively in discussions in 2 professional groups. Share insights or articles and foster meaningful conversations."
	  },
	  {
		"title": "Self-Development - Mindfulness Challenge",
		"description": "Practice 5 minutes of mindfulness meditation daily for the next 14 days. Observe changes in focus and calmness."
	  },
	  {
		"title": "Health Improvement - Fitness Class Trial",
		"description": "Attend a trial class of a new fitness program. Commit to attending at least 3 sessions in the next week."
	  },
	  {
		"title": "Family Bonding - Memory Lane Night",
		"description": "Create a digital or physical memory board with old photos. Share stories and memories during a family night."
	  },
	  {
		"title": "Financial Planning - Expense Evaluation",
		"description": "Evaluate last month's expenses. Identify 3 areas for cost reduction and take immediate action."
	  },
	  {
		"title": "Career Skill Building - Technical Skill Refinement",
		"description": "Dedicate 30 minutes daily to refine a technical skill (e.g., coding, design) for the next 10 days."
	  },
	  {
		"title": "Networking Follow-Up - Article Exchange",
		"description": "Exchange insightful articles with 3 contacts. Discuss their impact and potential application in your work."
	  },
	  {
		"title": "Self-Reflection - Positive Affirmations",
		"description": "Write down 3 positive affirmations daily for the next week. Reflect on their influence on your mindset."
	  },
	  {
		"title": "Health Monitoring - Calorie Tracking",
		"description": "Track calorie intake for the next 7 days. Adjust eating habits based on the observed patterns."
	  },
	  {
		"title": "Family Communication - Collaborative Task",
		"description": "Assign a collaborative task for the family to accomplish by the end of the month. Plan and execute it together."
	  },
	  {
		"title": "Financial Review - Investment Diversification",
		"description": "Research and diversify investments within the next week. Allocate funds to new areas of potential growth."
	  },
	  {
		"title": "Career Networking Event - Peer Discussion Panel",
		"description": "Organize a panel discussion with industry peers. Share insights and experiences to foster learning and collaboration."
	  },
	  {
		"title": "Self-Improvement Podcasts - Weekly Recap",
		"description": "Summarize the key takeaways from podcast episodes each week. Implement one lesson immediately."
	  },
	  {
		"title": "Physical Health Challenge - Daily Hydration Goal",
		"description": "Set a goal to drink a specific amount of water daily. Track and meet the target for the next 10 days."
	  },
	  {
		"title": "Family Time-Out - Volunteer Activity",
		"description": "Engage in a family volunteering activity. Plan and participate in a local community service event."
	  },
	  {
		"title": "Financial Education - Expert Interview",
		"description": "Interview a financial expert or advisor. Implement one of their recommendations within the next week."
	  },
	  {
		"title": "Skill Sharing - Skill Swap Session",
		"description": "Exchange skills with a colleague or family member. Teach them your skill, and learn from theirs in return."
	  },
	  {
		"title": "Networking Mentorship - Progress Check-In",
		"description": "Conduct a progress check-in with your mentee. Identify achievements and set new short-term goals."
	  },
	  {
		"title": "Self-Development Retreat - Action Plan Implementation",
		"description": "Implement the action plan created during the retreat. Monitor progress and adjust strategies as needed."
	  }
	]

}


		// Function for the table 
        document.getElementById('addRowBtn').addEventListener('click', function() {
            var table = document.getElementById('retrospectiveTable');
            var newRow = table.insertRow(table.rows.length);

            for (var i = 0; i < 6; i++) {
                var cell = newRow.insertCell(i);
                var textarea = document.createElement('textarea');
                textarea.className = 'form-control';
                cell.appendChild(textarea);
            }
        });
		
     // Function to get a random challenge
        function getRandomChallenge() {
            var randomIndex = Math.floor(Math.random() * challengesData.challenges.length);
            return challengesData.challenges[randomIndex];
        }

        var currentChallengeIndex = 0;

        // Function to display the current challenge
        function displayCurrentChallenge() {
            var currentChallenge = challengesData.challenges[currentChallengeIndex];
            document.getElementById('slideChallengeText').textContent = currentChallenge.title + '\n'  + currentChallenge.description;
        }

        // Event listeners for buttons
		document.getElementById('randomChallengeBtn').addEventListener('click', function () {
			var randomChallenge = getRandomChallenge();
			document.getElementById('randomChallengeText').innerHTML = '<b>' + randomChallenge.title + '</b><br><br>' + randomChallenge.description;
		});

        document.getElementById('prevChallengeBtn').addEventListener('click', function () {
            if (currentChallengeIndex > 0) {
                currentChallengeIndex--;
                displayCurrentChallenge();
            }
        });

        document.getElementById('nextChallengeBtn').addEventListener('click', function () {
            if (currentChallengeIndex < challengesData.challenges.length - 1) {
                currentChallengeIndex++;
                displayCurrentChallenge();
            }
        });

        // Initial display
        displayCurrentChallenge();
		
		// Implementing feedback form
