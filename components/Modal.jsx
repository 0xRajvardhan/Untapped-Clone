import Image from "next/image";
import SkillTag from "./SkillTag";

const Modal = (props) => {
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-70 z-20 flex justify-center items-center">
            </div>
            <div className="fixed inset-0 z-30 overflow-y-auto">
                <div className="flex min-h-full justify-center items-center">
                    <div className="w-[63rem] h-max bg-[#f2f2f2] relative rounded-xl">

                        {/* Header  */}
                        <div className="bg-white rounded-t-xl flex flex-col justify-between sticky top-0">
                            <div className="flex w-full mt-4 border-b-2 pb-4 ">
                                <Image src="/images/livenation.jpg" alt="card" width={100} height={100} object-fit="cover" className="mx-4" />
                                <div className="mr-auto">
                                    <h3 className="text-base font-inter font-medium mb-1">Lifecycle Marketing Manager</h3>
                                    <p className="text-sm font-inter mb-2">Live Nation Entertainment</p>
                                    <p className="text-xs font-inter mb-3">Full time • Beverly Hills, CA, Remote</p>
                                    <p className="text-xs font-inter text-[#666666] mb-2">Posted 5 months ago</p>
                                </div>
                                <button className="h-[32.16px] w-[32.16px] rounded-full bg-[#c9c5c5] z-30 m-2" onClick={props.onClose}><Image src="/images/cross.svg" alt="card" width={12.71} height={12.71} object-fit="cover" className="m-auto" /> </button>
                            </div>

                            <div className="border-b flex justify-between w-full">
                                <div className="flex mt-3.5 mb-3.5 ml-4">
                                    <div className='border border-black ml-4 h-[2.5rem] flex rounded items-center hover:-translate-y-1'>
                                        <Image src="/images/save.svg" alt="save" width={10.5} height={14} className='ml-4 mr-2' />
                                        <p className='text-sm font-inter font-semibold mr-4'>Save</p>
                                    </div>
                                    <div className='border border-black ml-4 h-[2.5rem] flex rounded items-center hover:-translate-y-1'>
                                        <Image src="/images/share.svg" alt="save" width={14} height={12.25} className='ml-4 mr-2' />
                                        <p className='text-sm font-inter font-semibold mr-4'>Save</p>
                                    </div>
                                </div>
                                <div className="h-10 w-40 py-1 px-2 mt-3.5 mb-3.5 mx-4 rounded bg-[#c9f270] hover:bg-[#daf996] items-center hover:-translate-y-1">
                                    <p className='text-sm font-inter font-semibold py-2'>🎉 One-click apply</p>
                                </div>
                            </div>
                        </div>


                        {/* Body */}
                        <div className="w-[62.5rem] flex mt-5">
                            <div className="flex flex-col">
                                <div className="flex-auto flex flex-col flex-basis-66% h-max bg-white px-4 w-[40rem] mx-4 rounded border border-[#dadada]">

                                    <h3 className="text-[13px] font-inter font-medium py-4 text-[#666666]">RECOMMENDED EXPERIENCE LEVEL</h3>
                                    <SkillTag word="Management" />

                                    <h3 className="text-[13px] font-inter font-medium pt-6 text-[#666666]">RECOMMENDED SKILLS AND EXPERTISE</h3>
                                    <div className="flex flex-wrap gap-2 pt-3 pb-4">
                                        <SkillTag word="Email Marketing" />
                                        <SkillTag word="Google Analytics" />
                                        <SkillTag word="HTML/CSS" />
                                        <SkillTag word="Lifycycle Marketing" />
                                        <SkillTag word="MySQL" />
                                        <SkillTag word="Salesforce" />
                                        <SkillTag word="Tableau" />
                                    </div>
                                </div>

                                <div className="flex-auto flex flex-col flex-basis-66% h-max bg-white px-4 w-[40rem] mx-4 mt-4 pb-4 rounded-sm border border-[#dadada]">
                                    <h3 className="text-[13px] font-inter font-medium py-4 text-[#666666]">JOB DESCRIBTION</h3>
                                    <div className="text-sm font-inter mx-1">
                                        <p className="mt-4"><strong>WHO ARE WE?</strong></p>
                                        <p>Live Nation Entertainment is the world’s leading live entertainment company, comprised of global market leaders: Ticketmaster, Live Nation Concerts, and Live Nation Media &amp; Sponsorship. Ticketmaster is the global leader in event ticketing with over 500 million tickets sold annually and more than 12,000 clients worldwide.&nbsp; Live Nation Concerts is the largest provider of live entertainment in the world promoting more than 40,000 shows and 100+ festivals annually for nearly 4,000 artists in over 40 countries. These businesses allow Live Nation Media &amp; Sponsorship to create strategic music marketing programs that connect over 1,000 brands with the 98 million fans that attend Live Nation Entertainment events each year. For additional information, visit&nbsp;</p>

                                        <p className="mt-4"><strong>WHO ARE YOU?</strong></p>
                                        <p>Passionate and motivated.&nbsp; Driven, with an entrepreneurial spirit.&nbsp; Resourceful, innovative, forward thinking and committed. At Live Nation Entertainment, our people embrace these qualities, so if this sounds like you then please read on!&nbsp;</p>

                                        <p className="mt-4"><strong>THE TEAM</strong></p>
                                        <p>The Live Nation Entertainment Marketing and Data Strategy division is a critical part of the business. Our teams support Digital Marketing operations, Measurement, Analytics, Products, Engineering, Data Services, and Technology. With a specific focus on Lifecycle marketing this role is part of the Digital Marketing, CRM group.</p>

                                        <p className="mt-4"><strong>THE ROLE</strong></p>
                                        <p>This role will focus on improving engagement and retention throughout a customer’s experience, partnering closely with product, operations, engagement, analytics, and marketing teams to help develop, test, and optimize our lifecycle journeys and automations. The ideal candidate will be highly organized and have a skill set that includes expertise in cross-channel marketing, analytics, and process design. Key responsibilities include managing the customer lifecycle roadmap and deliverables, drawing key insights, and presenting to stakeholders. This person must have strong communication skills, be proactive, and thrive in a fast-paced environment.</p>

                                        <p className="mt-4"><strong>WHAT THE ROLE WILL DO:</strong></p>
                                        <ul className="list-disc ml-7">
                                            <li>Oversee the end-to-end campaign management and execution of key CRM programs, including A/B test plans, building audience segmentation, campaign deployment, and analysis.</li>
                                            <li>Maintain and optimize the customer lifecycle roadmap and documentation</li>
                                            <li>Perform fan and campaign analyses, draw actionable insights from KPIs, and present results to key stakeholders</li>
                                            <li>Develop roadmaps, working closely with tech and product teams to complete testing and campaign optimizations</li>
                                            <li>Work closely with other marketing channel leads and cross functional teams to gain alignment and implement omnichannel campaigns and journeys</li>
                                            <li>Write briefs and work closely with creative and content teams to manage delivery of assets for email and push campaigns</li>
                                            <li>Update and distribute marketing documentation decks to cross-functional business partners</li>
                                            <li>Become the subject matter expert on our CRM execution and reporting platforms (Salesforce, SFMC, DOMO, Google Analytics)</li>
                                        </ul>

                                        <p className="mt-4"><strong>WHAT THIS PERSON WILL BRING:</strong></p>
                                        <ul className="list-disc ml-7">
                                            <li>Bachelor’s Degree</li>
                                            <li>4+ years in permission-based marketing experience, with a proven track record of managing a high volume of email and push campaigns</li>
                                            <li>Detail oriented with strong organizational, project management and analytical skills</li>
                                            <li>Experience in pulling, analyzing, and presenting data to make informed recommendations based off KPIs</li>
                                            <li>Ability to work in a fast-paced environment, multi-task and take direction from multiple sources, and adapt to shifting priorities and timelines</li>
                                            <li>Strong communication skills and ability to work collaboratively with cross functional partners on tech, product, creative and client teams</li>
                                            <li>Comfortable working with an enterprise level Email Service Provider (ESP), preferably Salesforce Marketing Cloud (SFMC)</li>
                                            <li>Working knowledge of Microsoft Office programs, particularly MS Excel (e.g. pivot tables, vlookups)</li>
                                            <li>Technical aptitude as well as an ability to think creatively</li>
                                        </ul>

                                        <p className="mt-4"><strong>BONUS EXPERIENCE:</strong></p>
                                        <ul className="list-disc ml-7">
                                            <li>Working knowledge of HTML programming and HTML editors</li>
                                            <li>Basic knowledge of MySQL</li>
                                            <li>Experience with Google Analytics, DOMO, Tableau, Asana</li>
                                            <li>Knowledge and experience with SMS campaigns</li>
                                            <li>Passion for live events</li>
                                        </ul>

                                        <p className="mt-4"><strong>BENFITS & PERKS</strong>Our motto is ‘Taking Care of Our Own’ through 6 pillars of benefits:</p>
                                        <ul className="list-disc ml-7">
                                            <li><strong>HEALTH:</strong>Medical, Dental and Vision benefits for you and your family, including Flexible Spending Accounts (FSA) and Health Savings Accounts (HSAs)</li>
                                            <li><strong>YOURSELF:</strong>Paid time off policy including holidays, sick time and day off for your birthday, free concert tickets</li>
                                            <li><strong>WEALTH:</strong>401(k) program with company match, Stock Program Reimbursement</li>
                                            <li><strong>FAMILY:</strong>New parent programs & support including caregiver leave and baby bonus, infertility support</li>
                                            <li><strong>CAREER:</strong>Tuition reimbursement, student loan repayment internal growth and development programs & trainings</li>
                                            <li><strong>OTHERS:</strong>Volunteer time off, crowdfunding network</li>
                                        </ul>

                                        <p className="mt-4"><strong>EQUAL EMPLOYMENT OPPORTUNITY</strong></p>
                                        <p>We are passionate and committed to our people and go beyond the rhetoric of diversity and inclusion.  You will be working in an inclusive environment and be encouraged to bring your whole self to work.  We will do all that we can to help you successfully balance your work and homelife.  As a growing business we will encourage you to develop your professional and personal aspirations, enjoy new experiences, and learn from the talented people you will be working with.  It’s talent that matters to us and we encourage applications from people irrespective of their gender, race, sexual orientation, religion, age, disability status or caring responsibilities.</p>
                                        <p className="mt-4">Live Nation strongly supports equal employment opportunity for all applicants regardless of age (40 and over), ancestry, color, religious creed (including religious dress and grooming practices), family and medical care leave or the denial of family and medical care leave, mental or physical disability (including HIV and AIDS), marital status, domestic partner status, medical condition (including cancer and genetic characteristics), genetic information, military and veteran status, political affiliation, national origin (including language use restrictions), citizenship, race, sex (including pregnancy, childbirth, breastfeeding and medical conditions related to pregnancy, childbirth or breastfeeding), gender, gender identity, and gender expression, sexual orientation, or any other basis protected by applicable federal, state or local law, rule, ordinance or regulation. </p>
                                        <p className="mt-4">We will consider qualified applicants with criminal histories in a manner consistent with the requirements of the Los Angeles Fair Chance Ordinance, San Francisco Fair Chance Ordinance and the California Fair Chance Act and consistent with other similar and / or applicable laws in other areas.</p>
                                        <p className="mt-4">We also afford equal employment opportunities to qualified individuals with a disability. For this reason, Live Nation will make reasonable accommodations for the known physical or mental limitations of an otherwise qualified individual with a disability who is an applicant consistent with its legal obligations to do so, including reasonable accommodations related to pregnancy in accordance with applicable local, state and / or federal law. As part of its commitment to make reasonable accommodations, Live Nation also wishes to participate in a timely, good faith, interactive process with a disabled applicant to determine effective reasonable accommodations, if any, which can be made in response to a request for accommodations. Applicants are invited to identify reasonable accommodations that can be made to assist them to perform the essential functions of the position they seek. Any applicant who requires an accommodation in order to perform the essential functions of the job should contact a Human Resources Representative to request the opportunity to participate in a timely interactive process.  Live Nation will also provide reasonable religious accommodations on a case-by-case basis.</p>

                                        <p className="mt-4"><strong>HIRING PRACTICES</strong></p>
                                        <p>The preceding job description has been designed to indicate the general nature and level of work performed by employees within this classification. It is not designed to contain or be interpreted as a comprehensive inventory of all duties, responsibilities, and qualifications required of employees assigned to this job.</p>
                                        <p className="mt-4">Live Nation recruitment policies are designed to place the most highly qualified persons available in a timely and efficient manner. Live Nation may pursue all avenues available, including promotion from within, employee referrals, outside advertising, employment agencies, internet recruiting, job fairs, college recruiting and search firms.</p>
                                    </div>

                                </div>

                                <div className="flex-auto flex flex-col flex-basis-66% h-max bg-white px-4 w-[40rem] mx-4 mt-4 rounded-sm border border-[#dadada]">
                                    <h3 className="text-[13px] font-inter font-medium mt-4 text-[#666666]">ABOUT LIVE NATION ENTERTAINMENT</h3>
                                    <p className="text-sm font-inter my-3 text-[#666666]">Industry: <span className="font-inter text-sm text-black">Marketplace, Entertainment</span></p>
                                    <hr />
                                    <p className="text-sm font-inter my-3 text-[#666666]">Stage: <span className="font-inter text-sm text-black">Publicly Traded</span></p>
                                    <p className="text-sm font-inter text-[#666666]">Employees: <span className="font-inter text-sm text-black">10000+</span></p>
                                    <p className="text-sm font-inter my-3 text-[#666666]">Founded: <span className="font-inter text-sm text-black">2005</span></p>
                                    <hr />
                                    <div className="mt-2 mb-7">
                                        <p className="font-inter text-sm my-2"><strong>No bigger stag for your career</strong></p>
                                        <p className="font-inter text-sm">Live Nation Entertainment is the global leader in live events and ticketing. With business operations and corporate functions across divisions including Ticketmaster, Concerts, Media & Sponsorship and Artist Nation. As the global leader in the live entertainment and ticketing industry, we have a variety of opportunities across many fields, including technology, sales, finance, operations, marketing, and more! Embracing diversity, promoting inclusion and striving for belonging are integral to Live Nation. We work with purpose to create an environment where our employees can be their authentic, creative and most powerful selves. We hire people who have great ideas and aren’t afraid to share them. You dont have to know everything about music history or the music industry to succeed here; as long as you bring passion to your work, you will fit right in!</p>
                                    </div>
                                </div>

                                <div className="flex-auto flex flex-col justify-center items-center flex-basis-66% h-max bg-black px-4 w-[40rem] mx-4 my-4 rounded-sm border border-[#dadada]">
                                    <h3 className="font-inter font-semibold text-lg text-white px-5 ml-0 mr-auto mt-8 mb-3">Not sure if you should apply?</h3>
                                    <p className="font-inter text-base text-white my-3 px-5">Many people, especially those from underserved groups, don’t apply because they’re not 100% qualified. If you match at least 50% of the requirements, we encourage you to apply.</p>
                                    <div className="h-10 w-[36.25rem] py-1 px-2 mt-3 mb-8 flex justify-center mx-8 bg-[#c9f270] hover:bg-[#daf996] items-center hover:-translate-y-1">
                                        <p className='text-sm font-inter font-semibold py-2'>🎉 One-click apply</p>
                                    </div>
                                </div>

                            </div>
                            {/* Side Div  */}
                            <div className="flex-auto flex flex-col flex-basis-32% h-max">
                                <div className="rounded border border-[#dadada] px-[14px] bg-white w-[19.5rem]">
                                    <div className="border-b">
                                        <h3 className="text-[13px] font-inter font-medium py-4 text-[#666666]">UPCOMMING EVENTS</h3>
                                        <div className="flex">
                                            <div className="mx-2 mb-4">
                                                <p className="font-inter text-xs text-[#E75F55]">May</p>
                                                <p className="font-inter text-[17px] text-[#666666]">11</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-normal text-[#666666]">Ansys Internship Opportunities & Acing the Technical Interview</p>
                                                <p className="text-sm text-[#A6A6A6] mt-1">Ansys • Webinar</p>
                                            </div>
                                        </div>
                                        <div className="flex my-3">
                                            <div className="mx-2 mb-4">
                                                <p className="font-inter text-xs text-[#E75F55]">May</p>
                                                <p className="font-inter text-[17px] text-[#666666]">11</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-normal text-[#666666]">Talk Tech With Us: Employee Culture @ JPMC</p>
                                                <p className="text-sm text-[#A6A6A6] mt-1">JPMorgan Chase & Co. • Webinar</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm font-inter font-normal text-[#666666] flex justify-center my-4">See all</p>
                                </div>

                                <div className="rounded border border-[#dadada] px-[14px] mt-[15px] bg-white w-[19.5rem]">
                                    <div className="border-b">
                                        <h3 className="text-[13px] font-inter font-medium py-4">UPCOMMING WEBINARS</h3>
                                        <div className="flex">

                                            <Image src="/images/Ansys.png" alt="card" width={40} height={40} object-fit="cover" className="mx-2 mb-4" />

                                            <div>
                                                <p className="text-sm font-normal text-[#666666]">Ansys Internship Opportunities & Acing the Technical Interview</p>
                                                <p className="text-sm text-[#A6A6A6] mt-1">Ansys • May 11</p>
                                            </div>
                                        </div>
                                        <div className="flex my-3">

                                            <Image src="/images/vercel.png" alt="card" width={40} height={40} object-fit="cover" className="mx-2 mb-4" />

                                            <div>
                                                <p className="text-sm font-normal text-[#666666]">Talk Tech With Us: Employee Culture @ JPMC</p>
                                                <p className="text-sm text-[#A6A6A6] mt-1">JPMorgan Chase & Co. • May 17</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm font-inter font-normal text-[#666666] flex justify-center my-4">See all</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;