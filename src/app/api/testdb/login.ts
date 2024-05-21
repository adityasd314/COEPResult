import supabase
const { data, error } = await supabase.auth.signInWithOtp({
    email: 'example@email.com',
    options: {
      // set this to false if you do not want the user to be automatically signed up
      shouldCreateUser: false,
    },
  })