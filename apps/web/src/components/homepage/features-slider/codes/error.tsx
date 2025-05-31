import { CodeBlockWithoutTypes } from "@/components/shiki/codeBlockWithoutTypes";

const code = `
type User = { name: string; email?: string };

function sendEmail(user: User) {
  // ❌ Error if email is undefined
  console.log("Sending email to:", user.email.toUpperCase()); // [!code error]
}

const newUser: User = { name: "Alice" };
sendEmail(newUser); // ❌ TypeError: Cannot read properties of undefined // [!code error]
`;

export const ErrorCodeExample = () => {
  return (
    <CodeBlockWithoutTypes lang="tsx" className="text-[14px]">
      {code}
    </CodeBlockWithoutTypes>
  );
};
