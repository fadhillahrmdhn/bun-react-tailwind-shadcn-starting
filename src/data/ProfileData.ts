import type { ProfileData } from "../interfaces/index";
import src from "@/public/assets/images/profile.jpg";


export const profileData: ProfileData = {
    name: "Fadhillah Ramadhan",
    description: "Hello, I am passionate about software development, especially web development.",
    image: src,
    socialMedia: [
        {
            name: "GitHub",
            url: "https://github.com/fadhillahrmdhn"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/fadhillah-ramadhan-aa208521a/"
        }
    ]
};