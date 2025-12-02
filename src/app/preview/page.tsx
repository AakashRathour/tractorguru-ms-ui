"use client";
import { useState } from "react";
import CarouselComponent from "@/src/components/carousel";
import SectionWrapper from "@/src/components/SectionWrapper";
import Heading from "@/src/components/ui/Heading";
import ViewAllLink from "@/src/components/ui/ViewAllLink";
import Button from "@/src/components/ui/Button";
import Select from "@/src/components/ui/Select";
import Input from "@/src/components/ui/Input";
import SecondaryNav from "@/src/components/ui/SecondaryNav";
import TwoSection from "@/src/components/ui/TwoSection";
import { getImageUrl } from "@/src/components/imagePath";
import Head from "next/head";

const PreviewComponent = () => {
  const [active, setActive] = useState("1");
  const [tab, setTab] = useState("news");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [number, setNumber] = useState("");
  return (
    <>
      <div className="mb-5">        
        <SecondaryNav
          items={[
            { id: "1", label: "New Tractors", href: "/new-tractors", active: true },
            { id: "2", label: "Rating & Reviews", href: "/reviews" },
            { id: "3", label: "Find Best Tractors", href: "/find-best" },
            { id: "4", label: "Tractor News & Updates", href: "/news" },
            { id: "5", label: "About Tractors", href: "/about" },
            { id: "6", label: "FAQ", href: "/faq" },
            { id: "7", label: "Similar Brands", href: "/brands" },
            { id: "8", label: "Compare Tractors", href: "/compare" },
            { id: "9", label: "Tractor Loan", href: "/loan" },
            { id: "10", label: "Tractor Insurance", href: "/insurance" },
          ]}
          visibleItemsDesktop={4}
          visibleItemsMobile={3}
        />
      </div>

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
                <Heading tag="h3" className="mb-3" uppercase={false}> Fill Button</Heading>
                <Button variant="fill">Click Me</Button>
              </div>

              <div>
                <Heading tag="h3" className="mb-3" uppercase={false} > Border Button</Heading>

                <Button variant="border">Click Me</Button>
              </div>

              <div>
                <Heading tag="h3" className="mb-3" uppercase={false}>Button with Left Image</Heading>
                <Button
                  variant="fill"
                  leftImage={getImageUrl("brand-icons/view-arrow.svg")}
                >
                  View Details
                </Button>
              </div>

              <div>
                <Heading tag="h3" className="mb-3" uppercase={false}>Button with Right Image</Heading>
                <Button
                  variant="border"
                  rightImage={getImageUrl("brand-icons/view-arrow.svg")}
                >
                  Learn More
                </Button>
              </div>

              <div>
                <Heading tag="h3" className="mb-3" uppercase={false}>Button without Image</Heading>
                <Button variant="fill">Submit</Button>
              </div>

              <div>
                <Heading tag="h3" className="mb-3" uppercase={false}>Button as Link</Heading>
                <Button variant="border" href="/tractors">
                  Go to Tractors
                </Button>
              </div>

              <div>
                <Heading tag="h3" className="mb-3" uppercase={false}>Button as Link</Heading>
                <Button variant="fill" href="/tractors">
                  Go to Tractors
                </Button>
              </div>

              <div>
                <Heading tag="h3" className="mb-3" uppercase={false}>Disabled Button</Heading>
                <Button variant="fill" disabled>
                  Disabled
                </Button>
              </div>

              <div>
                <Heading tag="h3" className="mb-3" uppercase={false}>Loading Button</Heading>
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
            <Heading tag="h2" className="mb-3">Select Component</Heading>

            <div className="space-y-4">
              <Heading tag="h2">Border Variant</Heading>
              <div className="grid grid-cols-1 gap-4">
                <Select
                  variant="border"
                  options={[
                    { value: "mahindra", label: "Mahindra" },
                    { value: "swaraj", label: "Swaraj" },
                    { value: "sonalika", label: "Sonalika" },
                    { value: "john-deere", label: "John Deere" },
                    { value: "new-holland", label: "New Holland" },
                  ]}
                  value={selectedBrand}
                  onChange={setSelectedBrand}
                  placeholder="Select Brands"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Select
                  variant="border"
                  options={[
                    { value: "20-30", label: "20-30 HP" },
                    { value: "30-40", label: "30-40 HP" },
                    { value: "40-50", label: "40-50 HP" },
                    { value: "50-60", label: "50-60 HP" },
                  ]}
                  placeholder="Select HP"
                  className=""
                />
                <Select
                  variant="border"
                  options={[
                    { value: "2-5", label: "2-5 Lakh" },
                    { value: "5-8", label: "5-8 Lakh" },
                    { value: "8-12", label: "8-12 Lakh" },
                    { value: "12+", label: "12+ Lakh" },
                  ]}
                  placeholder="Select Price"
                />
              </div>

              <Heading tag="h2">Border Bottom Variant</Heading>
              <div className="grid grid-cols-1 gap-4">
                <Select
                  variant="border-bottom"
                  options={[
                    { value: "Select Test", label: "Select Test" },
                    { value: "Alwar", label: "Alwar" },
                  ]}
                  value={selectedCity}
                  onChange={setSelectedCity}
                  placeholder="Select Test"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Select
                  variant="border-bottom"
                  options={[
                    { value: "Select Test", label: "Select Test" },
                    { value: "Noida", label: "Noida" },
                    { value: "Alwar", label: "Alwar" },
                  ]}
                  value={selectedModel}
                  onChange={setSelectedModel}
                  placeholder="Noida"
                />
                <Select
                  variant="border-bottom"
                  options={[
                    { value: "Select Test", label: "Select Test" },
                    { value: "Alwar", label: "Alwar" },
                  ]}
                  placeholder="Select Test"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5">
        <div className="container mx-auto px-4">
          <div className="my-5 border border-[#e5e5e5] rounded-lg  p-4">
            <Heading tag="h2" className="mb-3">Input Component</Heading>

            <div className="space-y-4">
              <Heading tag="h2">Border Variant</Heading>
              <div className="grid grid-cols-1 gap-4">
                <Input
                  variant="border"
                  type="text"
                  value={name}
                  onChange={setName}
                  placeholder="test"
                  leftIcon={getImageUrl("profile.svg")}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input
                  variant="border"
                  type="email"
                  value={email}
                  onChange={setEmail}
                  leftIcon={getImageUrl("profile.svg")}
                  placeholder="Enter email"
                />
                <Input
                  variant="border"
                  type="tel"
                  value={phone}
                  onChange={setPhone}
                  placeholder="Enter phone"
                  className="bg-[#f8faff]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input
                  variant="border"
                  type="number"
                  value={number}
                  onChange={setNumber}
                  leftIcon={getImageUrl("mobile.svg")}
                  placeholder="Enter number"
                />
                <Input
                  variant="border"
                  type="text"
                  placeholder="Without icon"
                />
              </div>
              <Heading tag="h2">Custom Background Colors</Heading>
              <div className="grid grid-cols-3 gap-4">
                <Input
                  variant="border"
                  type="text"
                  placeholder="Light Blue"
                  className="bg-[#f8faff]"
                />
                <Input
                  variant="border"
                  type="text"
                  placeholder="Light Green"
                  className="bg-[#f0fdf4]"
                />
                <Input
                  variant="border"
                  type="text"
                  placeholder="Light Yellow"
                  className="bg-[#fefce8]"
                />
              </div>
              <Heading tag="h2">Border Bottom Variant</Heading>
              <div className="grid grid-cols-1 gap-4">
                <Input
                  variant="border-bottom"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input
                  variant="border-bottom"
                  type="text"
                  placeholder="First Name"
                />
                <Input
                  variant="border-bottom"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="my-5">
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
      </div> */}

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
      <div className="my-5">
        <div className="container mx-auto px-4">
          <div className="my-5 border border-[#e5e5e5] rounded-lg p-4">
            <h1 className="mb-4">Two Section Component</h1>

            <TwoSection
              leftContent={
                <div className="bg-blue-50 p-6 rounded-lg">
                  <Heading tag="h3" className="mb-3" uppercase={false}>
                    Left Section (9 columns)
                  </Heading>
                  <p className="text-gray-600">
                    This is the main content area. It takes 9/12 (75%) width on desktop
                    and full width on mobile/tablet.
                  </p>
                  <div className="mt-4 space-y-2">
                    <p>• Main content goes here</p>
                    <p>• Articles, products, listings</p>
                    <p>• Primary information</p>
                  </div>
                </div>
              }
              rightContent={
                <div className="bg-green-50 p-6 rounded-lg">
                  <Heading tag="h3" className="mb-3" uppercase={false}>
                    Right Section (3 columns)
                  </Heading>
                  <p className="text-gray-600">
                    This is the sidebar area. It takes 3/12 (25%) width on desktop
                    and full width on mobile/tablet.
                  </p>
                  <div className="mt-4 space-y-2">
                    <p>• Sidebar widgets</p>
                    <p>• Ads</p>
                    <p>• Related content</p>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewComponent;
