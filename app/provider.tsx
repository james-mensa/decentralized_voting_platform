// app/providers.tsx
'use client'

import Layout from '@/ui/layout'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider><Layout> {children}</Layout></ChakraProvider>
}








// type LayoutProps = {
//   children: React.ReactNode;
// };

// const Layout = ({ children }: LayoutProps) => {
//   return (
//     <div className="duration-500 ease-out">
//       <div className="mx-auto my-0 flex min-h-screen w-full max-w-full flex-wrap p-8">
    
//      <Layout>
//      <main className="my-[22px] w-full">{children}</main>
//      </Layout>

   
//       </div>
//     </div>
//   );
// };

// export default Layout;
