// for the education 

export type  Education = {
    name: string,
    institute:   string, 
    courseTitle: string, 
    year: '2022' | '2023' | "2024" | "2025" 
}

// for the technologies  

export type  Technology = { 
    name: string;
    children: React.ReactNode;
    description: string;
    techType: String;
    yearsOfExperience?: number;
}



// for the projects 
export type  Project  = { 

}

// for certification 
export type  Certificate = { 

}