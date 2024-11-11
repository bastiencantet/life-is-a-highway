import {Hero} from "@/components/home/hero";
import {ContentContainer} from "@/components/generic/content/container";
import {ContentSplitter} from "@/components/generic/content/splitter";
import {Aboutme} from "@/components/home/aboutme";

export default function Home() {
  return (
      <div>
        <ContentSplitter>
            <ContentContainer>
                <Hero />
            </ContentContainer>
        </ContentSplitter>
          <ContentSplitter alternance>
                <ContentContainer>
                    <Aboutme />
                </ContentContainer>
          </ContentSplitter>
      </div>
  );
}
