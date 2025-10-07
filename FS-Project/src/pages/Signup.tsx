import { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const isValidEmail = (email: string) => /^[\w.+-]+@gmail\.com$/.test(email);
  const isValidPhone = (phone: string) => /^\d{10}$/.test(phone);

  const getPasswordStrength = (password: string) => {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d\W]).{8,}$/;
    if (!strongRegex.test(password)) return "Weak";
    return "Strong";
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pwd = e.target.value;
    setPassword(pwd);
    setPasswordStrength(getPasswordStrength(pwd));
  };

  const handleSignup = async () => {
    setError("");

    if (!firstName || !lastName) {
      setError("Please enter your full name.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid Gmail address.");
      return;
    }

    if (!isValidPhone(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    if (passwordStrength === "Weak") {
      setError("Please enter a stronger password.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", userCredential.user.uid), {
        firstName,
        lastName,
        email,
        phone,
        createdAt: new Date(),
      });
      setSuccess(true); // Show success message
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('https://tse1.mm.bing.net/th/id/OIP.QJ-rmxPOewi-LIKHLH5mSgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3')] bg-cover bg-center">
      <div className="bg-background/80 backdrop-blur-md p-8 rounded-lg max-w-md w-full shadow-elegant">
        {!success ? (
          <>
            <h2 className="text-3xl font-bold text-primary mb-6">Sign Up</h2>

            <Input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mb-4"
            />
            <Input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mb-4"
            />
            <Input
              type="email"
              placeholder="Your Gmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4"
            />
            <Input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mb-4"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="mb-2"
            />

            {password && (
              <p
                className={`mb-4 font-medium ${
                  passwordStrength === "Weak" ? "text-red-500" : "text-green-500"
                }`}
              >
                {passwordStrength} password
              </p>
            )}

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <Button
              onClick={handleSignup}
              disabled={
                !firstName ||
                !lastName ||
                !isValidEmail(email) ||
                !isValidPhone(phone) ||
                passwordStrength === "Weak"
              }
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold"
            >
              Sign Up
            </Button>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-500 mb-4">🎉 Successfully Signed Up!</h2>
            <p className="mb-6 text-muted-foreground">
              Your account has been created. Please go back to the login page to access your account.
            </p>
            <Button
              onClick={() => (window.location.href = "/login")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold"
            >
              Go to Login
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
