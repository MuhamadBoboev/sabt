// pages/_app.tsx
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AppLayout } from '@shared/layout';
import '@styles/index.scss';
import { ModalForm } from '@widgets/application/ui/ModalForm';
import type { AppProps } from "next/app";
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Loader } from "@shared/ui/Loader";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      {loading && <Loader />} 
      <QueryClientProvider client={queryClient}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
        <ModalForm />
        <Toaster />
      </QueryClientProvider>
    </>
  );
}
