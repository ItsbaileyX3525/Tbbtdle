const characters = [
    // Main Characters
    {
        name: "Sheldon Cooper",
        gender: "Male",
        field: "Theoretical Physics",
        relationship: "Married",
        firstEpisode: "S1E1"
    },
    {
        name: "Leonard Hofstadter",
        gender: "Male",
        field: "Experimental Physics",
        relationship: "Married",
        firstEpisode: "S1E1"
    },
    {
        name: "Penny",
        gender: "Female",
        field: "Acting/Sales",
        relationship: "Married",
        firstEpisode: "S1E1"
    },
    {
        name: "Howard Wolowitz",
        gender: "Male",
        field: "Aerospace Engineering",
        relationship: "Married",
        firstEpisode: "S1E1"
    },
    {
        name: "Raj Koothrappali",
        gender: "Male",
        field: "Astrophysics",
        relationship: "Single",
        firstEpisode: "S1E1"
    },
    {
        name: "Amy Farrah Fowler",
        gender: "Female",
        field: "Neurobiology",
        relationship: "Married",
        firstEpisode: "S3E23"
    },
    {
        name: "Bernadette Rostenkowski",
        gender: "Female",
        field: "Microbiology",
        relationship: "Married",
        firstEpisode: "S3E5"
    },
    // Recurring Characters
    {
        name: "Stuart Bloom",
        gender: "Male",
        field: "Comic Book Store",
        relationship: "Single",
        firstEpisode: "S2E20"
    },
    {
        name: "Barry Kripke",
        gender: "Male",
        field: "Plasma Physics",
        relationship: "Single",
        firstEpisode: "S2E6"
    },
    {
        name: "Leslie Winkle",
        gender: "Female",
        field: "Experimental Physics",
        relationship: "Single",
        firstEpisode: "S1E3"
    },
    {
        name: "Wil Wheaton",
        gender: "Male",
        field: "Acting",
        relationship: "Married",
        firstEpisode: "S3E5"
    },
    {
        name: "Priya Koothrappali",
        gender: "Female",
        field: "Law",
        relationship: "Single",
        firstEpisode: "S4E21"
    },
    {
        name: "Emily Sweeney",
        gender: "Female",
        field: "Dermatology",
        relationship: "Single",
        firstEpisode: "S7E15"
    },
    {
        name: "Alex Jensen",
        gender: "Female",
        field: "Physics Graduate",
        relationship: "Single",
        firstEpisode: "S6E3"
    },
    {
        name: "Zack Johnson",
        gender: "Male",
        field: "Unknown",
        relationship: "Married",
        firstEpisode: "S2E22"
    },
    {
        name: "Lucy",
        gender: "Female",
        field: "Unknown",
        relationship: "Single",
        firstEpisode: "S6E16"
    },
    {
        name: "Claire",
        gender: "Female",
        field: "Screenwriting",
        relationship: "Single",
        firstEpisode: "S8E6"
    },
    {
        name: "Ramona Nowitzki",
        gender: "Female",
        field: "Physics Graduate",
        relationship: "Single",
        firstEpisode: "S2E6"
    },
    {
        name: "Anu",
        gender: "Female",
        field: "Hotel Concierge",
        relationship: "Single",
        firstEpisode: "S12E13"
    },
    {
        name: "Denise",
        gender: "Female",
        field: "Comic Book Store",
        relationship: "In Relationship",
        firstEpisode: "S11E2"
    },
    // Family Members
    {
        name: "Mary Cooper",
        gender: "Female",
        field: "Homemaker",
        relationship: "Widowed",
        firstEpisode: "S1E4"
    },
    {
        name: "Beverly Hofstadter",
        gender: "Female",
        field: "Psychiatry",
        relationship: "Divorced",
        firstEpisode: "S2E15"
    },
    {
        name: "Mrs. Wolowitz",
        gender: "Female",
        field: "Homemaker",
        relationship: "Widowed",
        firstEpisode: "S1E1"
    },
    {
        name: "George Cooper Sr.",
        gender: "Male",
        field: "High School Coach",
        relationship: "Deceased",
        firstEpisode: "S1E4"
    },
    {
        name: "Missy Cooper",
        gender: "Female",
        field: "Unknown",
        relationship: "Divorced",
        firstEpisode: "S1E15"
    },
    {
        name: "George Cooper Jr.",
        gender: "Male",
        field: "Tire Store",
        relationship: "Married",
        firstEpisode: "S11E24"
    },
    {
        name: "V.M. Koothrappali",
        gender: "Male",
        field: "Gynecology",
        relationship: "Married",
        firstEpisode: "S1E7"
    },
    {
        name: "Mrs. Koothrappali",
        gender: "Female",
        field: "Homemaker",
        relationship: "Married",
        firstEpisode: "S1E7"
    },
    {
        name: "Wyatt",
        gender: "Male",
        field: "Pharmaceutical Sales",
        relationship: "Divorced",
        firstEpisode: "S2E22"
    },
    {
        name: "Susan",
        gender: "Female",
        field: "Unknown",
        relationship: "Divorced",
        firstEpisode: "S2E22"
    },
    {
        name: "Randall",
        gender: "Male",
        field: "Unknown",
        relationship: "Married",
        firstEpisode: "S2E22"
    },
    // University Colleagues
    {
        name: "President Siebert",
        gender: "Male",
        field: "University President",
        relationship: "Unknown",
        firstEpisode: "S3E21"
    },
    {
        name: "Dr. Gablehauser",
        gender: "Male",
        field: "Physics Department Head",
        relationship: "Unknown",
        firstEpisode: "S1E3"
    },
    {
        name: "Janitor",
        gender: "Male",
        field: "Janitor",
        relationship: "Unknown",
        firstEpisode: "S1E2"
    },
    {
        name: "Professor Proton",
        gender: "Male",
        field: "Science Education",
        relationship: "Single",
        firstEpisode: "S6E22"
    },
    {
        name: "Dr. Stephanie Barnett",
        gender: "Female",
        field: "Surgery",
        relationship: "Single",
        firstEpisode: "S2E7"
    },
    {
        name: "Dr. Elizabeth Plimpton",
        gender: "Female",
        field: "Cosmological Physics",
        relationship: "Single",
        firstEpisode: "S3E15"
    },
    {
        name: "Bert Kibbler",
        gender: "Male",
        field: "Geology",
        relationship: "Single",
        firstEpisode: "S6E24"
    },
    {
        name: "Dr. Lorvis",
        gender: "Male",
        field: "Psychiatry",
        relationship: "Unknown",
        firstEpisode: "S3E8"
    },
    {
        name: "Mrs. Davis",
        gender: "Female",
        field: "HR Department",
        relationship: "Unknown",
        firstEpisode: "S2E6"
    },
    // Other Characters
    {
        name: "Christy",
        gender: "Female",
        field: "Unknown",
        relationship: "Single",
        firstEpisode: "S1E3"
    },
    {
        name: "Kurt",
        gender: "Male",
        field: "Unknown",
        relationship: "Single",
        firstEpisode: "S1E17"
    },
    {
        name: "Mike",
        gender: "Male",
        field: "Unknown",
        relationship: "Single",
        firstEpisode: "S1E3"
    },
    {
        name: "Lalita Gupta",
        gender: "Female",
        field: "Unknown",
        relationship: "Single",
        firstEpisode: "S1E7"
    },
    {
        name: "Alicia",
        gender: "Female",
        field: "Unknown",
        relationship: "Single",
        firstEpisode: "S1E8"
    },
    {
        name: "Connie Tucker",
        gender: "Female",
        field: "Retired",
        relationship: "Widowed",
        firstEpisode: "S9E14"
    },
    {
        name: "Neil Gaiman",
        gender: "Male",
        field: "Author",
        relationship: "Married",
        firstEpisode: "S5E21"
    },
    {
        name: "Stan Lee",
        gender: "Male",
        field: "Comic Writer",
        relationship: "Married",
        firstEpisode: "S3E16"
    },
    {
        name: "Mark Hamill",
        gender: "Male",
        field: "Actor",
        relationship: "Married",
        firstEpisode: "S11E24"
    },
    {
        name: "Bill Nye",
        gender: "Male",
        field: "Science Education",
        relationship: "Single",
        firstEpisode: "S12E22"
    },
    {
        name: "Neil deGrasse Tyson",
        gender: "Male",
        field: "Astrophysics",
        relationship: "Married",
        firstEpisode: "S4E7"
    },
    {
        name: "Stephen Hawking",
        gender: "Male",
        field: "Theoretical Physics",
        relationship: "Divorced",
        firstEpisode: "S5E21"
    },
    {
        name: "Lewis",
        gender: "Male",
        field: "Comic Book Store",
        relationship: "Unknown",
        firstEpisode: "S2E20"
    },
    {
        name: "Captain Sweatpants",
        gender: "Male",
        field: "Comic Book Store",
        relationship: "Unknown",
        firstEpisode: "S2E20"
    },
    {
        name: "Comic Book Guy",
        gender: "Male",
        field: "Comic Book Store",
        relationship: "Unknown",
        firstEpisode: "S2E20"
    },
    // Additional Family Members & Characters
    {
        name: "Larry Fowler",
        gender: "Male",
        field: "Unknown",
        relationship: "Married",
        firstEpisode: "S11E24"
    },
    {
        name: "Mrs. Fowler",
        gender: "Female",
        field: "Homemaker",
        relationship: "Married",
        firstEpisode: "S5E24"
    },
    {
        name: "Josh Wolowitz",
        gender: "Male",
        field: "Unknown",
        relationship: "Unknown",
        firstEpisode: "S8E15"
    },
    {
        name: "Halley Wolowitz",
        gender: "Female",
        field: "Baby",
        relationship: "Single",
        firstEpisode: "S10E11"
    },
    {
        name: "Neil Michael Wolowitz",
        gender: "Male",
        field: "Baby",
        relationship: "Single",
        firstEpisode: "S11E17"
    },
    {
        name: "Mike Rostenkowski",
        gender: "Male",
        field: "Retired Police",
        relationship: "Married",
        firstEpisode: "S5E9"
    },
    {
        name: "Mrs. Rostenkowski",
        gender: "Female",
        field: "Homemaker",
        relationship: "Married",
        firstEpisode: "S5E9"
    },
    {
        name: "Tam Nguyen",
        gender: "Male",
        field: "Student",
        relationship: "Single",
        firstEpisode: "S12E4"
    },
    {
        name: "Paige Swanson",
        gender: "Female",
        field: "Child Prodigy",
        relationship: "Single",
        firstEpisode: "YS S2E2"
    },
    {
        name: "Dr. John Sturgis",
        gender: "Male",
        field: "Physics Professor",
        relationship: "Single",
        firstEpisode: "YS S1E5"
    },
    {
        name: "Pastor Jeff",
        gender: "Male",
        field: "Religious Leader",
        relationship: "Married",
        firstEpisode: "YS S1E1"
    },
    {
        name: "Billy Sparks",
        gender: "Male",
        field: "Student",
        relationship: "Single",
        firstEpisode: "YS S1E1"
    },
    {
        name: "Brenda Sparks",
        gender: "Female",
        field: "Bowling Alley Worker",
        relationship: "Divorced",
        firstEpisode: "YS S1E4"
    },
    {
        name: "Herschel Sparks",
        gender: "Male",
        field: "Garage Owner",
        relationship: "Divorced",
        firstEpisode: "YS S1E4"
    },
    {
        name: "Dale Ballard",
        gender: "Male",
        field: "Sporting Goods Store",
        relationship: "Dating",
        firstEpisode: "YS S2E6"
    },
    {
        name: "Veronica Duncan",
        gender: "Female",
        field: "Student",
        relationship: "Single",
        firstEpisode: "YS S2E6"
    },
    {
        name: "Mandy McAllister",
        gender: "Female",
        field: "Unknown",
        relationship: "Married",
        firstEpisode: "YS S5E17"
    },
    {
        name: "Jim McAllister",
        gender: "Male",
        field: "Tire Store Owner",
        relationship: "Married",
        firstEpisode: "YS S6E1"
    },
    {
        name: "Audrey McAllister",
        gender: "Female",
        field: "Homemaker",
        relationship: "Married",
        firstEpisode: "YS S6E1"
    },
    {
        name: "Connor McAllister",
        gender: "Male",
        field: "Musician",
        relationship: "Single",
        firstEpisode: "YS S6E1"
    },
    {
        name: "Jimmy Speckerman",
        gender: "Male",
        field: "Unknown",
        relationship: "Married",
        firstEpisode: "S5E11"
    },
    {
        name: "Janine Davis",
        gender: "Female",
        field: "Human Resources",
        relationship: "Unknown",
        firstEpisode: "S6E3"
    },
    {
        name: "Ruchi",
        gender: "Female",
        field: "Pharmaceutical",
        relationship: "Single",
        firstEpisode: "S11E4"
    },
    {
        name: "Colonel Williams",
        gender: "Male",
        field: "Military",
        relationship: "Married",
        firstEpisode: "S9E7"
    },
    {
        name: "Dr. Kevin Campbell",
        gender: "Male",
        field: "Physics",
        relationship: "Unknown",
        firstEpisode: "S12E15"
    },
    {
        name: "Dr. Greg Pemberton",
        gender: "Male",
        field: "Physics",
        relationship: "Unknown",
        firstEpisode: "S12E15"
    },
    {
        name: "Marissa Johnson",
        gender: "Female",
        field: "Unknown",
        relationship: "Married",
        firstEpisode: "S12E10"
    }
];