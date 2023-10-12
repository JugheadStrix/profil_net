import Test from "@/components/Test";
export default function TestProvider({ children, message }) {
  return <Test message={message}>{children}</Test>;
}
