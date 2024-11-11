import {ContentContainer} from "@/components/generic/content/container";

export function Footer() {
    return (
        <footer className="bg-gray-800 dark:bg-gray-900 text-white border-t border-gray-500">
            <ContentContainer>
                <div className="flex md:flex-row justify-between mt-4">
                    <div className="flex flex-col">
                        <div className="font-bold text-xl">Footer</div>
                        <div className="text-sm">This is the footer</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="font-bold text-xl">Links</div>
                        <div className="text-sm">Link 1</div>
                        <div className="text-sm">Link 2</div>
                        <div className="text-sm">Link 3</div>
                    </div>
                </div>
            </ContentContainer>
        </footer>
    );
}
