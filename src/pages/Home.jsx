import React from 'react';

const Home = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<section data-component-name="HERO 1" class="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 flex items-center min-h-[70vh]" data-sidebar-id="Hero-0" style="position: relative;">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-12">
    <div class="flex-1 text-center lg:text-left animate-slide-in-left">
      <div class="inline-block px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold mb-6">
        🚀 Ready to build your next big idea
      </div>
      <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white tracking-tight mb-8 leading-tight">
        Creative Designer <span class="block text-blue-600 dark:text-blue-400">&amp; Developer</span>
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0">
        Hi, I'm Dheeraj. I build modern, scalable web applications and intuitive user interfaces that help businesses grow. 
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <a href="#contact" class="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          Get in Touch
        </a>
        <a href="#projects" class="px-8 py-4 bg-transparent border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-bold rounded-lg hover:border-gray-900 dark:hover:border-white hover:-translate-y-1 transition-all duration-300">
          View Projects
        </a>
      </div>
    </div>
    <div class="flex-1 relative animate-slide-in-right">
      <div class="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl transform rotate-3 scale-105 transition-transform duration-500 hover:rotate-6"></div>
      <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="Profile showcase" class="relative rounded-3xl shadow-2xl object-cover h-[400px] sm:h-[500px] w-full">
    </div>
  </div>
</section>
<style>
@keyframes slide-in-left {
  0% { opacity: 0; transform: translateX(-50px); }
  100% { opacity: 1; transform: translateX(0); }
}
@keyframes slide-in-right {
  0% { opacity: 0; transform: translateX(50px); }
  100% { opacity: 1; transform: translateX(0); }
}
.animate-slide-in-left {
  animation: slide-in-left 1s ease-out forwards;
}
.animate-slide-in-right {
  animation: slide-in-right 1s ease-out forwards;
}
</style>
<section data-component-name="SERVICES 2" class="bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8" data-sidebar-id="Services-1" style="position: relative;">
  <div class="max-w-7xl mx-auto">
    <div class="border-t border-zinc-800 pt-16 mb-16">
      <span class="text-xs font-bold text-zinc-500 uppercase tracking-[0.3em]">// Services</span>
      <h2 class="text-5xl sm:text-6xl font-black text-white tracking-tighter mt-3">WHAT I<br><span class="text-zinc-500">DELIVER</span></h2>
    </div>
    <div class="space-y-0">
      <div class="group flex flex-col md:flex-row md:items-center gap-6 py-8 border-b border-zinc-800 hover:border-zinc-600 transition-colors cursor-pointer">
        <div class="md:w-16 text-4xl font-black text-zinc-700 group-hover:text-white transition-colors">01</div>
        <div class="flex-1">
          <h3 class="text-2xl font-black text-white mb-2">Full-Stack Web Development</h3>
          <p class="text-zinc-500 max-w-2xl">End-to-end development of web apps — from database design and API architecture to stunning frontend experiences.</p>
        </div>
        <div class="flex-shrink-0 flex flex-wrap gap-2">
          <span class="text-xs border border-zinc-700 text-zinc-400 px-3 py-1 rounded">React</span>
          <span class="text-xs border border-zinc-700 text-zinc-400 px-3 py-1 rounded">Node</span>
          <span class="text-xs border border-zinc-700 text-zinc-400 px-3 py-1 rounded">AWS</span>
        </div>
        <div class="text-zinc-600 group-hover:text-white group-hover:translate-x-2 transition-all">→</div>
      </div>
      <div class="group flex flex-col md:flex-row md:items-center gap-6 py-8 border-b border-zinc-800 hover:border-zinc-600 transition-colors cursor-pointer">
        <div class="md:w-16 text-4xl font-black text-zinc-700 group-hover:text-white transition-colors">02</div>
        <div class="flex-1">
          <h3 class="text-2xl font-black text-white mb-2">UI/UX Design Systems</h3>
          <p class="text-zinc-500 max-w-2xl">Comprehensive design systems that scale. Component libraries, brand guidelines, and consistent design language.</p>
        </div>
        <div class="flex-shrink-0 flex flex-wrap gap-2">
          <span class="text-xs border border-zinc-700 text-zinc-400 px-3 py-1 rounded">Figma</span>
          <span class="text-xs border border-zinc-700 text-zinc-400 px-3 py-1 rounded">Storybook</span>
        </div>
        <div class="text-zinc-600 group-hover:text-white group-hover:translate-x-2 transition-all">→</div>
      </div>
      <div class="group flex flex-col md:flex-row md:items-center gap-6 py-8 border-b border-zinc-800 hover:border-zinc-600 transition-colors cursor-pointer">
        <div class="md:w-16 text-4xl font-black text-zinc-700 group-hover:text-white transition-colors">03</div>
        <div class="flex-1">
          <h3 class="text-2xl font-black text-white mb-2">Performance Engineering</h3>
          <p class="text-zinc-500 max-w-2xl">Audit and optimize for Core Web Vitals. Sub-second load times, efficient bundles, and scalable architectures.</p>
        </div>
        <div class="flex-shrink-0 flex flex-wrap gap-2">
          <span class="text-xs border border-zinc-700 text-zinc-400 px-3 py-1 rounded">Lighthouse</span>
          <span class="text-xs border border-zinc-700 text-zinc-400 px-3 py-1 rounded">CDN</span>
        </div>
        <div class="text-zinc-600 group-hover:text-white group-hover:translate-x-2 transition-all">→</div>
      </div>
      <div class="group flex flex-col md:flex-row md:items-center gap-6 py-8 hover:border-zinc-600 transition-colors cursor-pointer">
        <div class="md:w-16 text-4xl font-black text-zinc-700 group-hover:text-white transition-colors">04</div>
        <div class="flex-1">
          <h3 class="text-2xl font-black text-white mb-2">AI Product Development</h3>
          <p class="text-zinc-500 max-w-2xl">Build AI-native features using OpenAI, Anthropic, and custom models. From chatbots to intelligent automation.</p>
        </div>
        <div class="flex-shrink-0 flex flex-wrap gap-2">
          <span class="text-xs border border-zinc-700 text-zinc-400 px-3 py-1 rounded">OpenAI</span>
          <span class="text-xs border border-zinc-700 text-zinc-400 px-3 py-1 rounded">LangChain</span>
        </div>
        <div class="text-zinc-600 group-hover:text-white group-hover:translate-x-2 transition-all">→</div>
      </div>
    </div>
  </div>
</section>
` }} />
  );
};

export default Home;