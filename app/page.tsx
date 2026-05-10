import Link from "next/link";
import { 
  Code2, 
  Palette, 
  Database, 
  LineChart, 
  GraduationCap, 
  Clock, 
  Briefcase, 
  Award,
  Search,
  MonitorPlay,
  Wrench,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Section 1: Hero */}
      <section className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Unlock Your Potential with <span className="text-[#F59E0B]">Edxflow Academy</span>.
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Master in-demand skills with expert-led digital courses in tech, design, marketing, and business. Learn at your own pace and accelerate your career today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/courses" className="px-8 py-4 bg-[#F59E0B] text-slate-900 font-bold rounded-full hover:bg-[#d97706] transition w-full sm:w-auto text-lg flex items-center justify-center gap-2">
              Explore All Courses
              <ArrowRight size={20} />
            </Link>
            <Link href="/register" className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition w-full sm:w-auto text-lg border border-white/20">
              Start Learning for Free
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: About */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Education Designed for the Digital Age.</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            At Edxflow Academy, we believe that world-class education should be accessible, practical, and directly aligned with the demands of the modern workforce. We partner with industry experts to bring you high-quality, project-based video courses that bridge the gap between theory and real-world application. Whether you are upskilling, changing careers, or starting a business, your journey begins here.
          </p>
        </div>
      </section>

      {/* Section 3: Course Categories */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What Do You Want to Learn Today?</h2>
            <p className="text-lg text-slate-600">Browse our curated tracks and find the perfect course to elevate your skills:</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <Code2 className="w-12 h-12 text-[#1E3A8A] mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Programming & Tech</h3>
              <p className="text-slate-600">Coding bootcamps, app development, and software engineering.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <Palette className="w-12 h-12 text-[#1E3A8A] mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Design & Creativity</h3>
              <p className="text-slate-600">UI/UX, graphic design, and video editing.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <Database className="w-12 h-12 text-[#1E3A8A] mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Data Science</h3>
              <p className="text-slate-600">Python, machine learning, and business intelligence.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <LineChart className="w-12 h-12 text-[#1E3A8A] mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Business & Marketing</h3>
              <p className="text-slate-600">Digital marketing strategies, project management, and startup finance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">The Edxflow Advantage.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-6 p-6 rounded-2xl bg-slate-50">
              <div className="shrink-0">
                <GraduationCap className="w-8 h-8 text-[#1E3A8A]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Learn from the Best</h3>
                <p className="text-slate-600">Our instructors are active industry professionals, not just theorists.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 rounded-2xl bg-slate-50">
              <div className="shrink-0">
                <Clock className="w-8 h-8 text-[#1E3A8A]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Lifetime Access</h3>
                <p className="text-slate-600">Pay once and get unlimited access to course materials and future updates.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 rounded-2xl bg-slate-50">
              <div className="shrink-0">
                <Briefcase className="w-8 h-8 text-[#1E3A8A]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Project-Based Learning</h3>
                <p className="text-slate-600">Build a professional portfolio while you learn with hands-on assignments.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 rounded-2xl bg-slate-50">
              <div className="shrink-0">
                <Award className="w-8 h-8 text-[#1E3A8A]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Certificate of Completion</h3>
                <p className="text-slate-600">Prove your new skills to employers with verifiable digital certificates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Our Process */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Your Path to Mastery in 4 Simple Steps.</h2>
          </div>
          <div className="grid md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#1E3A8A]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#1E3A8A]">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-bold">1. Browse & Enroll</h3>
              <p className="text-slate-400">Find the course that fits your career goals and sign up instantly.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#1E3A8A]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#1E3A8A]">
                <MonitorPlay size={32} />
              </div>
              <h3 className="text-xl font-bold">2. Learn at Your Pace</h3>
              <p className="text-slate-400">Watch high-definition video lessons anytime, anywhere, on any device.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#1E3A8A]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#1E3A8A]">
                <Wrench size={32} />
              </div>
              <h3 className="text-xl font-bold">3. Build Projects</h3>
              <p className="text-slate-400">Apply what you learn through interactive quizzes and real-world projects.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#1E3A8A]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#1E3A8A]">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold">4. Earn Your Certificate</h3>
              <p className="text-slate-400">Graduate, download your certificate, and update your resume!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Testimonials */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Join Over 50,000 Successful Students.</h2>
          <div className="bg-white p-10 md:p-14 rounded-3xl shadow-sm border border-slate-100 italic">
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8">
              &quot;Edxflow Academy completely changed my career trajectory. The Full-Stack Bootcamp gave me the portfolio I needed to land my first junior developer role within 3 months!&quot;
            </p>
            <div className="font-bold text-slate-900 not-italic">
              – Sarah J.
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Call to Action */}
      <section className="py-24 px-6 bg-[#1E3A8A]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to Transform Your Career?</h2>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Don&apos;t wait for the perfect moment. Take control of your future by investing in your skills today. Join our global community of learners.
          </p>
          <div className="pt-4">
            <Link href="/courses" className="inline-block px-10 py-5 bg-[#F59E0B] text-slate-900 font-bold rounded-full hover:bg-[#d97706] transition text-lg shadow-lg">
              Browse Courses & Enroll Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}