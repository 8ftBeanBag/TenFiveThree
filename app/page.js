import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen pt-12 bg-floral-white">
      <h1 className='text-center text-4xl font-serif text-cerulean'>The 10-5-3 Strategy</h1>
      <div className='w-full flex flex-col items-center my-4'>
        <div className='w-48 bg-sea-green text-white p-4 rounded-lg'>
          <div><strong>10</strong> Companies</div>
          <div><strong>5</strong> Positions</div>
          <div><strong>3</strong> Applications</div>
        </div>
      </div>
      <div className='px-12 py-6 bg-white m-auto lg:w-panel rounded-lg'>
        <div>
          <p className='lg:text-xl text-gray font-serif text-center text-cerulean'>Losing your mind on the job hunt?</p>
        </div>
        <div className='mt-4'>
          This is Abi&apos;s recommended job hunt strategy. It consists of three simple steps, two of which are research based.
          The strategy is meant as a guideline to help candidates get started with job hunting and begin to understand
          the market. It is not a guarantee. Instead, it is the way to approach the job hunt without losing your mind.
        </div>
        
        <div>
          <p className='lg:text-xl text-gray font-serif text-center mt-12 text-cerulean'>1. Research 10 companies</p>
        </div>
        <div className='mt-4'>
          The first step is to research 10 companies. Ask yourself the following questions.
          <div className='ms-4 mt-2'>~ What size of company do I want to work for?</div>
          <div className='ms-4'>~ What type of industries interest me?</div>
          <div className='ms-4 mb-2'>~ What sort of company aligns with my values?</div>
          There are many more questions to consider but these should get you started.
          From there, begin your research! Find at least 10 companies that fit with the answers to your questions.
        </div>

        <div>
          <p className='lg:text-xl text-gray font-serif text-center mt-12 text-cerulean'>2. Find 5 positions</p>
          <div className='mt-4'>
            This is the easy step! Look at the job postings for your companies and pick out 5 that you
            might be interested in applying for. Keep these in a list since you may use them later.
          </div>
        </div>
        
        <div>
          <p className='lg:text-xl text-gray font-serif text-center mt-12 text-cerulean'>3. Apply 3 times</p>
          <div className='mt-4'>
            This is the hard step. First, pick 3 of the job postings off your list. For each of those, do the following.
            <div className='ms-4 mt-2'>~ Tailor <strong>every part</strong> of your resume to match the job posting.</div>
            <div className='ms-4'>~ Create a custom cover letter for the job posting</div>
            <div className='ms-4 mb-2'>~ Research the company on LinkedIn and message 2-3 people who work at the company.</div>
          </div>
        </div>
        
        <div>
          <p className='lg:text-xl text-gray font-serif text-center mt-12 text-cerulean'>Why this strategy?</p>
          <div className='mt-4'>
            The reasoning for this strategy is hidden in each of the steps. The first step makes you figure out
            what you want. The second step is the traditional job hunting part. The third step is the special sauce 
            of this strategy. Folks looking at your resume have probably seen 100s of generic resumes. By tailoring
            yours, you stand out as a beacon of hope to them that their candidate hunt is finally over. Then they see
            your cover letter that is also customized for them and to them. This seals the deal. However, that does 
            not always work. So now you need visibility in the company. That is why you want to reach out to the 
            people working there. 

            <p className='text-gray font-serif text-center mt-12 mb-4 text-cerulean'>LinkedIn contact template</p>

            I know this is the scariest part so here is some bonus advice. This is
            Abi&apos;s template for reaching out to people on LinkedIn in 300 characters or less!
            <div className='lg:flex justify-between items-center'>
              <div className='flex flex-col gap-4'>
                <div className='ms-4 mt-2'>1. Intro and soft ask</div>
                <div className='ms-4'>2. Background and connection point</div>
                <div className='ms-4 mb-2'>3. Thanks and removal of obligation</div>
              </div>
              <div className='border-start border-gray-600 border-s-2 ps-4 m-4 lg:w-96 bg-sea-green text-white p-4 rounded-lg'>
                I&apos;m a front-end engineer and I saw that you do a lot of front-end work, would you be interested in telling me more about your career? I noticed you contributed to an open source project and that sounds really interesting to me! Thanks for reading this and obviously no pressure!
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className='lg:w-panel text-center m-auto pb-12'>
        <p className='text-center font-serif text-xl mt-12 mb-4 text-cerulean'>Thanks!</p>
        <p className=''>Thanks for reading and best of luck to you! The job hunt can be exhausting but we can all get through this together.</p>
      </div>
    </main>
  )
}
