
export const registerHandler = async (req, res) => {
    // Assuming you have a function to handle user registration
    const { username, email, password } = req.body;
    try {
        const newUser = await registerFunction(username, email, password);
        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        res.status(400).json({ message: "User registration failed", error: error.message });
        console.log("Error during user registration:", error);
        
    }
}

export const loginHandler = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await loginFunction(email, password);
        res.status(200).json({ message: "User logged in successfully", user });
    } catch (error) {
        res.status(400).json({ message: "User login failed", error: error.message });
        console.log("Error during user login:", error);
    }
}
