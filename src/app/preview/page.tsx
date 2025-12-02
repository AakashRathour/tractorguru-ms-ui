"use client";
import { useState } from "react";
import CarouselComponent from "@/src/components/carousel";
import SectionWrapper from "@/src/components/SectionWrapper";
import Heading from "@/src/components/ui/Heading";
import ViewAllLink from "@/src/components/ui/ViewAllLink";
import Button from "@/src/components/ui/Button";
import { getImageUrl } from "@/src/components/imagePath";

const PreviewComponent = () => {
  // const [activeTab, setActiveTab] = useState("news");
  const [active, setActive] = useState("1");
  const [tab, setTab] = useState("news");
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="my-5 border border-[#e5e5e5] rounded-lg  p-4">
          <h1 className="mb-4">Heading Component</h1>

          <Heading tag="h1" size="h1" className="mb-3">
            This is an H1 Heading
          </Heading>

          <Heading tag="h2" className="mb-3" uppercase={false}>
            This is an H2 Heading
          </Heading>

          <Heading tag="h3" className="mb-3">
            This is an H3 Heading
          </Heading>

          <Heading tag="h4" className="mb-3">
            This is an H4 Heading
          </Heading>

          <Heading tag="h5" className="mb-3">
            This is an H5 Heading
          </Heading>

          <Heading tag="h6" className="mb-3">
            This is an H6 Heading
          </Heading>
        </div>
      </div>

      <div className="my-5">
        <div className="container mx-auto px-4">
          <div className="my-5 border border-[#e5e5e5] rounded-lg  p-4">
            <h1 className="mb-4">Button Component</h1>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <h3 className="mb-2 text-sm font-semibold">Fill Button</h3>
                <Button variant="fill">Click Me</Button>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-semibold">Border Button</h3>
                <Button variant="border">Click Me</Button>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-semibold">Button with Left Image</h3>
                <Button
                  variant="fill"
                  leftImage={getImageUrl("brand-icons/view-arrow.svg")}
                >
                  View Details
                </Button>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-semibold">Button with Right Image</h3>
                <Button
                  variant="border"
                  rightImage={getImageUrl("brand-icons/view-arrow.svg")}
                >
                  Learn More
                </Button>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-semibold">Button without Image</h3>
                <Button variant="fill">Submit</Button>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-semibold">Button as Link</h3>
                <Button variant="fill" href="/tractors">
                  Go to Tractors
                </Button>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-semibold">Disabled Button</h3>
                <Button variant="fill" disabled>
                  Disabled
                </Button>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-semibold">Loading Button</h3>
                <Button variant="fill" loading>
                  Loading...
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5">
        <div className="container mx-auto px-4">
          <div className="my-5 border border-[#e5e5e5] rounded-lg  p-4">
            <ViewAllLink href="/tractors" label="View all" title="tractor" />
            <ViewAllLink href="/tractors" icon={false} />
              <ViewAllLink href="/news" label="Explore More" icon={false} />
            <ViewAllLink
              href="/brands"
              label="See All Brands"
            />
          </div>
        </div>
      </div>

      <div className="my-5">
        <div className="container mx-auto px-4">
          <div className="my-5 border border-[#e5e5e5] rounded-lg  p-4">
            <CarouselComponent
              showArrows={false}
              showDots={false}
              slides={[
                {
                  img: "https://tractorguru.in/upload/tractor/Banners/Website/New%20TractorGuru.webp",
                  link: "/new-tractors",
                },
                {
                  img: getImageUrl("jk-tyres/JkTyres_Desktop_1920X600_march24.webp"),
                  link: "/jk-tyres",
                },
                {
                  img: "https://tractorguru.in/upload/tractor/Banners/Website/New%20TractorGuru.webp",
                  link: "/offers",
                },
              ]}
            />
          </div>
        </div>
      </div>


      <div className="my-5">
        <div className="container mx-auto px-4">
          <div className="my-5 border border-[#e5e5e5] rounded-lg  p-4">
            <SectionWrapper title="Latest Tractors">
              <p>Your content here…</p>
            </SectionWrapper>
          </div>
        </div>
      </div>

      <div className="my-5">
        <div className="container mx-auto px-4">
          <div className="my-5 border border-[#e5e5e5] rounded-lg  p-4">
            <SectionWrapper
              title="Popular Brands"
              headingTag="h3"
              headingSize="h2"
              className="bg-red-600"
              viewAll={{
                label: "View All Brands",
                href: "/brands",
              }}
            >
              <p>this is dummy datat</p>
            </SectionWrapper>
          </div>
        </div>
      </div>

      <div className="my-5">
        <div className="container mx-auto px-4">
          <div className="my-5 border border-[#e5e5e5] rounded-lg  p-4">
            <SectionWrapper
              title="News & Updates"
              tabs={[
                { id: "1", label: "News", content: <p>News List</p> },
                { id: "2", label: "Blogs", content: <p>blog List</p> },
                { id: "3", label: "Video", content: <p>Video List</p> },
              ]}
              activeTab={active}
              onTabChange={setActive}
            />
          </div>
        </div>
      </div>

      <div className="my-5">
        <div className="container mx-auto px-4">
          <div className="my-5 border border-[#e5e5e5] rounded-lg  p-4">
            <SectionWrapper
              title="Tractor Updates"
              activeTab={tab}
              onTabChange={setTab}
              viewAll={{
                label: tab === "news" ? "View All News" : tab === "blog" ? "View All Blog" : "View All Video",
                href: `/${tab}`,
              }}
              tabs={[
                {
                  id: "news",
                  label: "News",
                  content: <p>News</p>,
                },
                {
                  id: "blog",
                  label: "Blogs",
                  content: <p>Blog</p>,
                },
                {
                  id: "video",
                  label: "Video",
                  content: <p>Video</p>,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewComponent;
