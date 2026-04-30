"use client";
import { UpdateProfileModal } from "@/Components/UpdateProfileModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import React from "react";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  
  return (
    <div>
      <Card className="max-w-96  mx-auto flex flex-col items-center mt-5 border">
        <Avatar className="h-20 w-20">
          <Avatar.Image
            alt="John Doe"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name.charAt[0]}</Avatar.Fallback>
        </Avatar>
        <h2 className="font-bold text-xl">{user?.name}</h2>
        <p className="text-muted">{user?.email}</p>
        <UpdateProfileModal />
      </Card>
    </div>
  );
};

export default ProfilePage;
