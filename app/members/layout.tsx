import Sheet from "@/app/_components/sheet";
import Helo from "@/app/_components/Hero";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Helo title="Members" sub="メンバー" />
      <Sheet>{children}</Sheet>;
    </>
  );
}
