'use client';
import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown } from 'lucide-react';
import { Phone } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from "@/lib/utils";


const ChatBotButton = () => {

    const [openchatbot, setOpenchatbot] = useState(false);

    return (
        <section className="fixed bottom-8 right-8">
            <ChatBotUI openchatbot={openchatbot} />
            <ChatButton openchatbot={openchatbot} handleOnClick={() => setOpenchatbot((prev) => (!prev))} />
        </section>
    )
}

export default ChatBotButton

const ChatButton = ({ handleOnClick, openchatbot }: { handleOnClick: () => void, openchatbot: boolean }) => {


    return (
        <div className="flex justify-end">
            <AnimatePresence mode="wait">
                {!openchatbot ? (
                    <motion.div
                        key="ask-now"
                        className="rounded-2xl bg-black w-[300px] p-6 flex flex-col gap-4 cursor-pointer"
                        initial={{ scale: 0.8, opacity: 0, transformOrigin: "100% 100%" }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        onClick={handleOnClick}
                    >
                        <p className="font-semibold text-xl">Need Help?</p>
                        <Button className="bg-white text-xl h-[45px] rounded-md text-black w-full hover:bg-white cursor-pointer">
                            <Phone className="mr-2" /> Ask anything
                        </Button>
                    </motion.div>
                ) : (
                    <motion.div
                        key="chat-toggle"
                        className="w-[80px] h-[80px] rounded-2xl bg-black flex justify-center items-center cursor-pointer"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <Button
                            onClick={handleOnClick}
                            className="w-[50px] h-[50px] rounded-xl bg-white cursor-pointer hover:bg-white"
                        >
                            <ChevronDown className="text-black" style={{ width: "24px", height: "24px" }} />
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const ChatBotUI = ({ openchatbot }: { openchatbot: boolean }) => {
    return (
        <AnimatePresence>
            {openchatbot && (
                <motion.div
                    className={cn("w-[450px] h-[600px] bg-black text-white rounded-2xl mb-8")}
                    initial={{ scale: 0, opacity: 0, transformOrigin: "100% 100%" }}
                    animate={{ scale: 1, opacity: 1, transformOrigin: "100% 100%" }}
                    exit={{ scale: 0, opacity: 0, transformOrigin: "100% 100%" }}
                    transition={{ type: 'tween', duration: 0.4, ease: "easeInOut" }}
                >
                </motion.div>
            )}
        </AnimatePresence>
    )
}