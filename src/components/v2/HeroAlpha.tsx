"use client";
import { motion } from "framer-motion";

export default function HeroAlpha() {
    // Define animation variants to keep the JSX clean
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] as [number, number, number, number] }
    };

    return (
        <section className="flex flex-col items-center justify-center min-h-[40vh] py-20">
            <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
                <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="px-3 py-1 text-xs font-medium tracking-widest uppercase border rounded-full border-primary/20 text-primary"
                >
                    Available for 2026 Roles
                </motion.span>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-2 px-3 py-1 text-xs font-medium border rounded-full border-white/10 bg-white/5 text-slate-300 backdrop-blur-sm"
                >
                    <span className="relative flex w-2 h-2">
                        <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-[#00f0ff]"></span>
                        <span className="relative inline-flex w-2 h-2 rounded-full bg-[#00f0ff]"></span>
                    </span>
                    System Online | Training Llama 3.1
                </motion.div>
            </div>

            <motion.h1
                {...fadeInUp}
                className="text-5xl font-bold tracking-tighter text-center md:text-7xl"
            >
                Data Analyst & <br />
                <span className="text-blue-600">AI Architect</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="max-w-2xl mt-6 text-lg text-center text-slate-500"
            >
                Building high-performance LLM systems and reduction engines for the next generation of business intelligence.
            </motion.p>
        </section>
    );
}