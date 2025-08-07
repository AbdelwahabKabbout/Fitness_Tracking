const passwordServices = {
  async changePassword(username, email, newPassword, confirmPassword) {
    try {
      const response = await fetch(
        "http://localhost:5000/api/password/change-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            newPassword,
            confirmPassword,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to change password");
      }

      return data;
    } catch (error) {
      console.error("Error changing password:", error);
      throw error;
    }
  },
};

export default passwordServices;
