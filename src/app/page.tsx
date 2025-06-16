import Footer from '@/app/components/subFooter'
import SubHeader from '@/app/components/subHeader'
import { LoginForm } from '@/components/login-form'

export default function Page() {
  return (
    <section>
      <SubHeader/>
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
    
        <LoginForm />
      
      </div>
      
    </div>
    <Footer/> 
    </section> 
  )
}
