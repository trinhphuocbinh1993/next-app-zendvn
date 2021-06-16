import { useState } from "react";

function Test() {
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/test", {
        method: "POST",
        body: JSON.stringify(contactDetail),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      } else {
        console.log(data);
      }
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={(event) => event.target.value}
          name="email"
          type="email"
        />
        <button type="button">Submit</button>
      </form>
    </div>
  );
}

export default Test;
