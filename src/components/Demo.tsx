'use client';
import { useRouter } from "next/navigation";

const Demo = () => {

    const router = useRouter();

    return (
        <div className="flex justify-between p-4">
            <div className="text-white font-semibold text-xl" onClick={() => router.push("/about-us")}>/about-us</div>
            <div className="text-white font-semibold text-xl" onClick={() => router.push("/contact-us")}>/contact-us</div>
        </div>
    )
}

export default Demo