import Link from "next/link";
import {MainLayout} from "../../layouts/MainLayout";

export default function Pricing() {
  return (
     <>
         <h1>Pricing Page</h1>
         <h1 className="title">
             Ir a <Link href="/">Home</Link>
         </h1>

         <p className="description">
             Get started by editing{' '}
             <code className="code">pages/pricing.jsx</code>
         </p>
     </>
  )
}

Pricing.getLayout = function getLayout( page: JSX.Element ) {
    return (
        <MainLayout >
            {page}
        </MainLayout>
    )
}