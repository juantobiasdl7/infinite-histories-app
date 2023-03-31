'use client'

import './globals.css';


export default function RootLayout({ children }) {

  const signUp = () => {
    supabase.auth.signUp({
      email: '',
      password: '',
    });
  };

  const signIn = () => {
    supabase.auth.signInWithPassword({
      email: '',
      password: '',
    });
  };

  const signOut = () => {
    supabase.auth.signOut();
  };


  return (
    <html lang="en">
      <body>
        <button onClick={signUp}>Sign Up</button>
        <button onClick={signIn}>Sign In</button>
        <button onClick={signOut}>Sign Out</button>
        {children}
      </body>
    </html>
  )
}
