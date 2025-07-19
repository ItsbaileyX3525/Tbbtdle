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
        firstEpisode: "S2E12"
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
        relationship: "Married",
        firstEpisode: "S4E6"
    },
    {
        name: "Emily Sweeney",
        gender: "Female",
        field: "Dermatology",
        relationship: "Single",
        firstEpisode: "S7E17"
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
        firstEpisode: "S3E23"
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
        firstEpisode: "S9E14"
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
        firstEpisode: "S11E21"
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
        relationship: "Divorced",
        firstEpisode: "S1E8"
    },
    {
        name: "Mrs. Koothrappali",
        gender: "Female",
        field: "Homemaker",
        relationship: "Divorced",
        firstEpisode: "S1E8"
    },
    {
        name: "Wyatt",
        gender: "Male",
        field: "Farmer",
        relationship: "Married",
        firstEpisode: "S4E9"
    },
    {
        name: "Susan",
        gender: "Female",
        field: "Unknown",
        relationship: "Married",
        firstEpisode: "S10E1"
    },
    {
        name: "Randall",
        gender: "Male",
        field: "Unknown",
        relationship: "Single",
        firstEpisode: "S10E1"
    },
    // University Colleagues
    {
        name: "President Siebert",
        gender: "Male",
        field: "University President",
        relationship: "Unknown",
        firstEpisode: "S3E9"
    },
    {
        name: "Dr. Gablehauser",
        gender: "Male",
        field: "Physics Department Head",
        relationship: "Unknown",
        firstEpisode: "S1E4"
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
        firstEpisode: "S2E8"
    },
    {
        name: "Dr. Elizabeth Plimpton",
        gender: "Female",
        field: "Cosmological Physics",
        relationship: "Single",
        firstEpisode: "S3E20"
    },
    {
        name: "Bert Kibbler",
        gender: "Male",
        field: "Geology",
        relationship: "Single",
        firstEpisode: "S6E18"
    },
    {
        name: "Dr. Lorvis",
        gender: "Male",
        field: "Psychiatry",
        relationship: "Unknown",
        firstEpisode: "S8E7"
    },
    {
        name: "Janine Davis",
        gender: "Female",
        field: "Human Resources",
        relationship: "Divorced",
        firstEpisode: "S6E12"
    },
    {
        name: "David Underhill",
        gender: "Male",
        field: "Physics",
        relationship: "Divorced",
        firstEpisode: "S2E11"
    },
    {
        name: "Christy",
        gender: "Female",
        field: "Unknown",
        relationship: "Single",
        firstEpisode: "S1E7"
    },
    {
        name: "Kurt",
        gender: "Male",
        field: "Unknown",
        relationship: "Single",
        firstEpisode: "S1E1"
    },
    {
        name: "Mike",
        gender: "Male",
        field: "Unknown",
        relationship: "Single",
        firstEpisode: "S1E14"
    },
    {
        name: "Lalita Gupta",
        gender: "Female",
        field: "Unknown",
        relationship: "Single",
        firstEpisode: "S1E8"
    },
    {
        name: "Alicia",
        gender: "Female",
        field: "Unknown",
        relationship: "Single",
        firstEpisode: "S1E9"
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
        firstEpisode: "S11E21"
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
        firstEpisode: "S7E7"
    },
    {
        name: "Stephen Hawking",
        gender: "Male",
        field: "Theoretical Physics",
        relationship: "Divorced",
        firstEpisode: "S5E21"
    },
    {
        name: "Captain Sweatpants",
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
        firstEpisode: "S8E20"
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
        firstEpisode: "S11E16"
    },
    {
        name: "Mike Rostenkowski",
        gender: "Male",
        field: "Retired Police",
        relationship: "Married",
        firstEpisode: "S5E23"
    },
    {
        name: "Mrs. Rostenkowski",
        gender: "Female",
        field: "Homemaker",
        relationship: "Married",
        firstEpisode: "S5E24"
    },
    {
        name: "Tam Nguyen",
        gender: "Male",
        field: "Student",
        relationship: "Single",
        firstEpisode: "S12E4"
    },
    {
        name: "Jimmy Speckerman",
        gender: "Male",
        field: "Unknown",
        relationship: "Married",
        firstEpisode: "S5E11"
    },
    {
        name: "Ruchi",
        gender: "Female",
        field: "Pharmaceutical",
        relationship: "Single",
        firstEpisode: "S11E3"
    },
    {
        name: "Colonel Williams",
        gender: "Male",
        field: "Military",
        relationship: "Married",
        firstEpisode: "S10E1"
    },
    {
        name: "Dr. Kevin Campbell",
        gender: "Male",
        field: "Physics",
        relationship: "Unknown",
        firstEpisode: "S12E13"
    },
    {
        name: "Dr. Greg Pemberton",
        gender: "Male",
        field: "Physics",
        relationship: "Unknown",
        firstEpisode: "S12E13"
    },
    {
        name: "Marissa Johnson",
        gender: "Female",
        field: "Unknown",
        relationship: "Married",
        firstEpisode: "S12E12"
    },
    {
        name: "Martha",
        gender: "Female",
        field: "Unknown",
        relationship: "Single",
        firstEpisode: "S3E12"
    },
    {
        name: "Cinnamon",
        gender: "Female",
        field: "Unknown",
        relationship: "Single",
        firstEpisode: "S5E20"
    },
    {
        name: "Mrs. Gunderson",
        gender: "Female",
        field: "Neighbor",
        relationship: "Unknown",
        firstEpisode: "S3E23"
    },
    {
        name: "Carrie Fisher",
        gender: "Female",
        field: "Acting",
        relationship: "Single",
        firstEpisode: "S7E14"
    },
    {
        name: "LeVar Burton",
        gender: "Male",
        field: "Acting",
        relationship: "Married",
        firstEpisode: "S4E17"
    },
    {
        name: "Joyce Kim",
        gender: "Female",
        field: "Unknown",
        relationship: "Single",
        firstEpisode: "S3E22"
    },
    {
        name: "Adoot Koothrappali",
        gender: "Male",
        field: "Unknown",
        relationship: "Single",
        firstEpisode: "S11E23"
    },
    {
        name: "Venkatesh Koothrappali",
        gender: "Male",
        field: "Laywer",
        relationship: "Unknown",
        firstEpisode: "S3E17"
    },
    {
        name: "Katie",
        gender: "Female",
        field: "Saleswoman",
        relationship: "Single",
        firstEpisode: "???"
    },
    {
        name: "Alfred Hofstadter",
        gender: "Male",
        field: "Anthropology",
        relationship: "Divorced",
        firstEpisode: "S9E24"
    },
    {
        name: "Mrs. Latham",
        gender: "Female",
        field: "University Donor",
        relationship: "Unknown",
        firstEpisode: "S4E15"
    },
    {
        name: "Dimitri Rezinov",
        gender: "Male",
        field: "Cosmonaut",
        relationship: "Unknown",
        firstEpisode: "S5E24"
    },
    {
        name: "Abby",
        gender: "Female",
        field: "Forensic Scientist",
        relationship: "Single",
        firstEpisode: "S3E12"
    },
    {
        name: "Dr. Tyson",
        gender: "Male",
        field: "Astrophysics",
        relationship: "Married",
        firstEpisode: "S4E7"
    },
    {
        name: "Mr. D'Onofrio",
        gender: "Male",
        field: "Barber",
        relationship: "Unknown",
        firstEpisode: "S5E18"
    },
    {
        name: "Mrs. Vartabedian",
        gender: "Female",
        field: "Neighbor",
        relationship: "Unknown",
        firstEpisode: "S2E10"
    },
    {
        name: "Dr. Crawley",
        gender: "Male",
        field: "Physics",
        relationship: "Unknown",
        firstEpisode: "S3E2"
    },
    {
        name: "Delivery Guy",
        gender: "Male",
        field: "Delivery",
        relationship: "Unknown",
        firstEpisode: "S1E2"
    },
    {
        name: "Toby Loobenfeld",
        gender: "Male",
        field: "Unknown",
        relationship: "Single",
        firstEpisode: "S1E10"
    },
    {
        name: "Sanjay Koothrappali",
        gender: "Male",
        field: "Unknown",
        relationship: "Single",
        firstEpisode: "S3E4"
    },
    {
        name: "Mrs. Petrescu",
        gender: "Female",
        field: "Neighbor",
        relationship: "Unknown",
        firstEpisode: "S10E6"
    },
];