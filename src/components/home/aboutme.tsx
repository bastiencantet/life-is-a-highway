import {ContentTitle} from "@/components/generic/content/title";

export function Aboutme() {
    return (
        <div className="flex-col h-splitterscreen w-full min-w-full">
            <ContentTitle title={"About Me"} />
            <div className="text-sm">This is the about me section</div>
        </div>
    );
}
