import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // Invoked in successful sign-in
    async signin({ profile }) {
      // 1. Connect to db
      // 2. Check if user exists
      // 3. If not, create a new user
      // 4. Return true to allow sign-in
    },
    // Sessions callbacl then modifies the session object
    async sessino({ session, token }) {
      // 1. Get the user from  db
      // 2. Assign the user id fromt he session
      // 3. Return the session object
    },
  },
};
