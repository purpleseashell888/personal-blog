import UserProfile from "@/components/profile/user-profile";
import { getSession } from "next-auth/react";

export default function ProfilePage() {
  return <UserProfile />;
}

export async function getServerSideProps(content) {
  const session = await getSession({ req: content.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
