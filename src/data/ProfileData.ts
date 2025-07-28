import type { ProfileData } from "../interfaces/index";
import src from "@/public/assets/images/profile.jpg";


export const profileData: ProfileData = {
    name: "Fadhillah Ramadhan",
    description: "Web Developer",
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