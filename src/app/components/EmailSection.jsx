import React from 'react'

const EmailSection = () => {
  return (
    <section className ="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 ">
        <div>
            <h5 className="text-xl font-bold text-white my-2"> Connect With Me!</h5>
            <p className="text-slate-500 mb-4 max-w-md"> 
                I'm always open to new opportunities, connect with me by sending an email! 
                I'll try my best to get back to you
            </p>
            <div className="socials flex flex-row gap-2"></div>
        </div>
    </section>
  )
}

export default EmailSection