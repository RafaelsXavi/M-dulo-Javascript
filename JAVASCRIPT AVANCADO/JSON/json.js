const user = {
    name: "John Doe",
    age: 30,
    email: "jon.com",
    isActive: true,
    hobbies: ["reading", "gaming", "hiking"],
    empresas: {
        empresa1: {
            name: "Tech Solutions",
            position: "Software Engineer",
            years: 3
        },
        empresa2: {
            name: "Web Innovations",
            position: "Frontend Developer",
            years: 2
        }
    },

};

console.log(user);

const userJson = JSON.stringify(user)

console.log(userJson);

const userParsed = JSON.parse(userJson);

console.log(userParsed);