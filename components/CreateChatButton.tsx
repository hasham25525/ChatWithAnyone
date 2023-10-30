import React from "react";
import { Button } from "./ui/button";
import { MessageSquarePlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";

function CreateChatButton() {
    const router = useRouter()

    const createNewChat =async() => {
        //logic....
    
    router.push(`/chat/abc`) //chatId
    }

  return (
    <Button onClick={createNewChat} variant={'link'}>
      <MessageSquarePlusIcon />
    </Button>
  );
}

export default CreateChatButton;
