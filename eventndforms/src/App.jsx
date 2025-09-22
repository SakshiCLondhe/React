import React, {useState} from "react";
function LoginPage(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  const [isLoggedIn, setisLoggedIn]=useState("");
  
   const handleSubmit=(e)=>{
    e.preventDefault();
    if(!email ||!password){
      setError("Please enter both email and password");
       return;
    }
     if(email==="abc@example.com"&& password==="12345")
     {
    setError("");
    alert("login successfully");
     }
      else{
        setError("Invalid Credential");
      }
    };

  return (
    <div
      style={{
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh",
        width:"100vw",
        backgroundColor:"rgba(216, 135, 94, 1)"
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          padding:"30px",
          border:"1px solid #ccc",
          borderRadius:"10px",
          backgroundColor:"#fff",
          width:"300px",
          boxShadow:"0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign:"center"}}>Login</h2>
        {/*Email Input*/}
        <div style={{ marginBottom :"15px"}}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) =>setEmail(e.target.value)}
            style={{width:"100%",padding:"8px",marginTop:"5px"}}
            required
          />
        </div>
        {/*Password Input*/}
        <div style={{ marginBottom:"15px"}}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            style={{width:"100%",padding:"8px",marginTop:"5px"}}
            required
          />
        </div>
        {/*Error Message*/}
        {error && (
          <p style={{color:"red",marginBottom:"10px",fontSize:"14px"}}>
            {error}
          </p>
        )}
        {/*Submit Button*/}
        <button
          type="submit"
          style={{
            width:"100%",
            padding:"10px",
            backgroundColor:"#0077ff",
            color:"#fff",
            border:"none",
            borderRadius:"5px",
            cursor:"pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
export default LoginPage;