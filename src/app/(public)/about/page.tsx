import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Clock,
  Globe,
  Heart,
  Lightbulb,
  Users,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                About Our Company
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're a team of passionate individuals dedicated to creating
                exceptional digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Story
                </h2>
                <p className="text-gray-500 md:text-xl">
                  Founded in 2015, our company began with a simple mission: to
                  help businesses succeed in the digital world.
                </p>
              </div>
              <div className="space-y-4 text-gray-500">
                <p>
                  What started as a small team of three has grown into a diverse
                  group of experts across various disciplines. We've worked with
                  clients ranging from startups to Fortune 500 companies,
                  helping them achieve their goals through innovative digital
                  solutions.
                </p>
                <p>
                  Our approach combines technical expertise with creative
                  thinking, allowing us to deliver results that not only meet
                  but exceed our clients' expectations. We believe in building
                  long-term relationships based on trust, transparency, and
                  mutual success.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://dummyjson.com/image/550x550"
                width={550}
                height={550}
                alt="Our team working together"
                className="aspect-square overflow-hidden rounded-xl object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Our Values
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The principles that guide everything we do.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            {[
              {
                icon: <Lightbulb className="h-10 w-10 text-primary" />,
                title: "Innovation",
                description:
                  "We constantly explore new ideas and technologies to deliver cutting-edge solutions.",
              },
              {
                icon: <Heart className="h-10 w-10 text-primary" />,
                title: "Passion",
                description:
                  "We love what we do and bring enthusiasm to every project we undertake.",
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Collaboration",
                description:
                  "We believe in the power of teamwork and partnership with our clients.",
              },
              {
                icon: <Globe className="h-10 w-10 text-primary" />,
                title: "Integrity",
                description:
                  "We maintain the highest ethical standards in all our business practices.",
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, from code to customer service.",
              },
              {
                icon: <Clock className="h-10 w-10 text-primary" />,
                title: "Reliability",
                description:
                  "We deliver on our promises and meet deadlines consistently.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm"
              >
                <div className="p-2">{item.icon}</div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-center text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Meet Our Team
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The talented individuals who make our company great.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {[
              {
                name: "Alex Johnson",
                role: "CEO & Founder",
                bio: "With over 15 years of experience in the tech industry, Alex leads our company with vision and passion.",
              },
              {
                name: "Samantha Lee",
                role: "Creative Director",
                bio: "Samantha brings creativity and innovation to every project, ensuring our designs stand out from the crowd.",
              },
              {
                name: "David Chen",
                role: "Lead Developer",
                bio: "David's technical expertise and problem-solving skills help us deliver robust and scalable solutions.",
              },
              {
                name: "Maria Rodriguez",
                role: "Project Manager",
                bio: "Maria ensures our projects run smoothly and are delivered on time and within budget.",
              },
              {
                name: "James Wilson",
                role: "Marketing Specialist",
                bio: "James helps our clients reach their target audience and achieve their marketing goals.",
              },
              {
                name: "Emily Taylor",
                role: "UX Designer",
                bio: "Emily creates intuitive and user-friendly interfaces that enhance the overall user experience.",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm"
              >
                <div className="h-24 w-24 rounded-full bg-gray-200" />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                  <p className="text-sm text-gray-500">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join Our Journey
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                We're always looking for talented individuals to join our team.
                Check out our current openings or get in touch.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button
                  variant="secondary"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-white text-primary px-8 text-sm font-medium shadow transition-colors hover:bg-gray-100"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-900 text-gray-200">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Company Name</h3>
              <p className="max-w-[300px] text-gray-400">
                Creating innovative digital solutions for businesses worldwide.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Contact</h3>
              <div className="flex flex-col space-y-2 text-gray-400">
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>123 Business Ave, City, Country</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  <span>info@company.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
