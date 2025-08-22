import { Input } from "../ui/input";

const ChatForm = () => {


    return (
        <div className="w-full h-full p-4 flex flex-col">
            <div className="flex-1">

            </div>
            <Input className="font-semibold text-xl h-[45px]" style={{ fontSize: '18px' }} placeholder="Send a message" />
        </div>
    )
}

export default ChatForm;