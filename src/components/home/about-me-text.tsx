export function AboutMeText({ category }: { category: string }) {
    return (
        <div className={"flex justify-center items-center"}>
            {category === "Me" && <div className="text-xl">This is the about me section</div>}
            {category === "Frontend" && <div className="text-xl">This is the frontend section</div>}
            {category === "Backend" && <div className="text-xl">This is the backend section</div>}
            {category === "DevOps" && <div className="text-xl">This is the devops section</div>}
        </div>
    );
}
