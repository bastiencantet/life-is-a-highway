import {ContentTitle} from "@/components/generic/content/title";
import {AboutMeChoiceButtons} from "@/components/home/about-me-choice-buttons";
import {AboutMeText} from "@/components/home/about-me-text";

export function Aboutme() {
    return (
        <div className="h-splitterscreen w-full items-start">
            <ContentTitle title={"About Me"}/>
            <AboutMeChoiceButtons />
            <AboutMeText category={"Me"} />
        </div>
    );
}
