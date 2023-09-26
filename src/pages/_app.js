import "@/styles/globals.css";
import { SharedLayout } from "@/exports";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div className="" key={router.pathname}>
        <SharedLayout>
          <Component {...pageProps} />
        </SharedLayout>
      </motion.div>
      <motion.div
        className="absolute top-0 left-0 w-full h-[100dvh] bg-scheme-purple z-20 transform-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1.5, type: "tween", ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute top-0 left-0 w-full h-[100dvh] bg-scheme-purple z-20 transform-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1.5, type: "tween", ease: "easeInOut" }}
      ></motion.div>
    </AnimatePresence>
  );
}
