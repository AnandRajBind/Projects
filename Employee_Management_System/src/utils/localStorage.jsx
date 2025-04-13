const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Prepare Monthly Report",
          "description": "Compile the performance report for March.",
          "date": "2025-04-10",
          "category": "Reporting",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Update Client Database",
          "description": "Ensure all client information is up to date.",
          "date": "2025-04-11",
          "category": "Database",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Team Meeting",
          "description": "Discuss Q2 goals with the team.",
          "date": "2025-04-12",
          "category": "Meeting",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Fix Login Bug",
          "description": "Resolve user login issue on mobile devices.",
          "date": "2025-04-09",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Code Review",
          "description": "Review pull requests from junior devs.",
          "date": "2025-04-10",
          "category": "Code",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Optimize Database",
          "description": "Improve query performance in user DB.",
          "date": "2025-04-11",
          "category": "Database",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Write API Docs",
          "description": "Document all endpoints of the payment API.",
          "date": "2025-04-12",
          "category": "Documentation",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Design Landing Page",
          "description": "Create mockup for new marketing landing page.",
          "date": "2025-04-08",
          "category": "Design",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Team Standup",
          "description": "Daily sync with frontend team.",
          "date": "2025-04-09",
          "category": "Meeting",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Fix Responsive Issues",
          "description": "Ensure mobile compatibility across devices.",
          "date": "2025-04-11",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Create Training Module",
          "description": "Develop onboarding content for new hires.",
          "date": "2025-04-07",
          "category": "HR",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Security Audit",
          "description": "Check application for common vulnerabilities.",
          "date": "2025-04-08",
          "category": "Security",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Deploy App to Staging",
          "description": "Push latest version to staging environment.",
          "date": "2025-04-10",
          "category": "DevOps",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Fix Email Notification Bug",
          "description": "Resolve issue where users don't receive emails.",
          "date": "2025-04-11",
          "category": "Bug Fix",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5",
      "password": "123",
      "tasks": [
        {
          "title": "Social Media Campaign",
          "description": "Launch Instagram ad for new product.",
          "date": "2025-04-06",
          "category": "Marketing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Client Feedback",
          "description": "Collect feedback from recent clients.",
          "date": "2025-04-07",
          "category": "Client Relations",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Newsletter Draft",
          "description": "Write draft for April newsletter.",
          "date": "2025-04-08",
          "category": "Content",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    }
  ];
  

    const admin=[{
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
      }
    ]

export const setLocalStorage=()=>{
localStorage.setItem('employees', JSON.stringify(employees));
localStorage.setItem('admin', JSON.stringify(admin));
// return (employees, admin);
}
export const getLocalStorage=()=>{
const employees= JSON.parse(localStorage.getItem('employees'));
const admin= JSON.parse(localStorage.getItem('admin'));
// console.log(employees, admin);

return {employees, admin};
}